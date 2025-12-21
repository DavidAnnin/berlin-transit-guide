import heroImage from "@/assets/berlin-hero.png";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';

const CarbonSavingsCalculator = () => {
  const [kilometers, setKilometers] = useState('');
  const [totalCO2Saved, setTotalCO2Saved] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-fetch total on load
  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const response = await fetch('https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ kilometers: 0 }),
        });
        const data = await response.json();
        setTotalCO2Saved(data.newTotal); // Using newTotal from your AWS response
      } catch (e) { console.error(e); }
    };
    fetchInitial();
  }, []);

  const handleCalculate = async () => {
    if (!kilometers || isNaN(parseFloat(kilometers))) return;
    setIsLoading(true);
    try {
      const response = await fetch('https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kilometers: parseFloat(kilometers) }),
      });
      const data = await response.json();
      setTotalCO2Saved(data.newTotal);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="bg-white/95 backdrop-blur shadow-xl rounded-xl p-2 w-full max-w-sm border-none">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg font-bold text-slate-800 text-center">Berlin Impact Tracker</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-1">
          <label htmlFor="kilometers" className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
            KM via BVG today
          </label>
          <input
            id="kilometers"
            type="number"
            value={kilometers}
            onChange={(e) => setKilometers(e.target.value)}
            className="w-full rounded-lg border-slate-200 bg-slate-50 p-2 text-sm focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 5"
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 pt-0">
        <button
          onClick={handleCalculate}
          disabled={isLoading}
          className="w-full py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors disabled:bg-slate-400"
        >
          {isLoading ? "Syncing..." : "Calculate Impact"}
        </button>
        
        {totalCO2Saved !== null && (
          <div className="w-full p-3 bg-blue-50 rounded-lg text-center">
            <p className="text-[10px] font-bold text-blue-600 uppercase">Community Savings</p>
            <p className="text-2xl font-black text-blue-900">{totalCO2Saved.toLocaleString()}g</p>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Berlin" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-12">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Welcome to Berlin!</h1>
          <p className="text-lg text-white/90 mb-8 max-w-xl">
            This guide helps you navigate public transport. It's fast, affordable, and sustainable.
          </p>
          <nav className="flex flex-wrap gap-3">
            <a href="#ubahn" className="badge-ubahn">U-Bahn</a>
            <a href="#sbahn" className="badge-sbahn">S-Bahn</a>
            <a href="#tram" className="badge-tram">Tram</a>
            <a href="#bus" className="badge-bus">Bus</a>
          </nav>
        </div>
        <div className="flex justify-center">
          <CarbonSavingsCalculator />
        </div>
      </div>
    </header>
  );
};

export default Hero;