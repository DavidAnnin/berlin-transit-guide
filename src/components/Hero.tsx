import heroImage from "@/assets/berlin-hero.png";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import React, { useState } from 'react';

const CarbonSavingsCalculator = () => {
  const [kilometers, setKilometers] = useState('');
  const [totalCO2Saved, setTotalCO2Saved] = useState(null);

  const handleCalculate = async () => {
    try {
      const response = await fetch('https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ kilometers: parseFloat(kilometers) }),
      });

      if (response.ok) {
        const data = await response.json();
        setTotalCO2Saved(data.totalCO2Saved);
      } else {
        console.error('Failed to calculate CO2 savings');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="bg-white shadow-lg rounded-lg p-4">
      <CardHeader>
        <CardTitle>Carbon Savings Calculator</CardTitle>
      </CardHeader>
      <CardContent>
        <label htmlFor="kilometers" className="block text-sm font-medium text-gray-700">
          Kilometers traveled via BVG today
        </label>
        <input
          id="kilometers"
          type="number"
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Enter kilometers"
        />
      </CardContent>
      <CardFooter>
        <button
          onClick={handleCalculate}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Calculate Impact
        </button>
      </CardFooter>
      {totalCO2Saved !== null && (
        <div className="mt-4 text-center text-gray-700">
          Total CO2 saved by all visitors: {totalCO2Saved} grams
        </div>
      )}
    </Card>
  );
};

const Hero = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Berlin cityscape with TV Tower and Brandenburg Gate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
      </div>
      
      <div className="relative container mx-auto px-4 py-24 md:py-32 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Welcome to Berlin!
          </h1>
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl font-body">
            New to the city? This guide will help you understand how to get around Berlin using public transportation. 
            It's easy, affordable, and connects you to every corner of this amazing city.
          </p>
          <nav className="flex flex-wrap gap-3">
            <a href="#ubahn" className="badge-ubahn">U-Bahn</a>
            <a href="#sbahn" className="badge-sbahn">S-Bahn</a>
            <a href="#tram" className="badge-tram">Tram</a>
            <a href="#bus" className="badge-bus">Bus</a>
          </nav>
        </div>
        <div className="mt-8 md:mt-0 md:ml-8">
          <CarbonSavingsCalculator />
        </div>
      </div>
    </header>
  );
};

export default Hero;
