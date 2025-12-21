import heroImage from "@/assets/berlin-hero.png";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';

const CarbonSavingsCalculator = () => {
  const [kilometers, setKilometers] = useState('');
  const [totalCO2Saved, setTotalCO2Saved] = useState<number | null>(null);
  const [tripSavings, setTripSavings] = useState<number | null>(null); // New state
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const CO2_PER_KM = 150; // Grams saved per KM vs driving a car

  useEffect(() => {
    const fetchInitial = async () => {
      try {
        const response = await fetch('https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ kilometers: 0 }),
        });
        const data = await response.json();
        setTotalCO2Saved(data.newTotal);
      } catch (e) { console.error(e); }
    };
    fetchInitial();
  }, []);

  const handleCalculate = async () => {
    const kmValue = parseFloat(kilometers);
    if (!kilometers || isNaN(kmValue)) return;
    
    setIsLoading(true);
    setIsSuccess(false);
    
    // Calculate personal trip savings locally
    const savedThisTrip = kmValue * CO2_PER_KM;
    
    try {
      const response = await fetch('https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ kilometers: kmValue }),
      });
      const data = await response.json();
      
      setTotalCO2Saved(data.newTotal);
      setTripSavings(savedThisTrip); // Store the personal amount
      setIsSuccess(true);
      setKilometers(''); 
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className={`transition-all duration-500 bg-white shadow-xl rounded-2xl p-2 w-full max-w-sm border-2 ${isSuccess ? 'border-green-500' : 'border-slate-100'}`}>
      <CardHeader className="pb-2 text-center">
        <CardTitle className="text-lg font-bold text-slate-800">
          Berlin Carbon Impact
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* PERSONAL IMPACT DISPLAY (Appears after calculation) */}
        {isSuccess && tripSavings !== null && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center animate-in fade-in zoom-in duration-500">
            <p className="text-green-600 text-[10px] font-black uppercase tracking-widest mb-1">Your Trip Impact</p>
            <p className="text-3xl font-black text-green-700">
              +{tripSavings.toLocaleString()}g
            </p>
            <p className="text-[11px] text-green-600 font-medium">CO₂ saved by not driving!</p>
          </div>
        )}

        <div className="space-y-1 text-left">
          <label className="text-[10px] uppercase font-bold text-slate-400 ml-1">Distance via BVG</label>
          <div className="relative">
            <input
              type="number"
              value={kilometers}
              onChange={(e) => setKilometers(e.target.value)}
              className="w-full rounded-lg border-slate-200 bg-slate-50 p-3 pr-12 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="How many KM?"
            />
            <span className="absolute right-3 top-3 text-slate-400 text-sm font-bold">KM</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-4 pt-0">
        <button
          onClick={handleCalculate}
          disabled={isLoading}
          className="w-full py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 active:scale-95 transition-all shadow-lg"
        >
          {isLoading ? "Updating AWS..." : "Calculate Impact"}
        </button>
        
        {/* GLOBAL TOTAL */}
        {totalCO2Saved !== null && (
          <div className="w-full pt-4 border-t border-slate-100 text-center">
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Berlin Community Total</p>
            <p className="text-xl font-bold text-slate-700">
              {totalCO2Saved.toLocaleString()}g <span className="text-xs font-normal text-slate-400 underline decoration-blue-200">total saved</span>
            </p>
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