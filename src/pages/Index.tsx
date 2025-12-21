import React, { useState } from "react";
import Hero from "@/components/Hero";
import TransportCard from "@/components/TransportCard";
import GoogleMapsGuide from "@/components/GoogleMapsGuide";
import TicketInfo from "@/components/TicketInfo";
import { NavLink } from "@/components/NavLink";

import ubahnImage from "@/assets/ubahn.png";
import sbahnImage from "@/assets/sbahn.png";
import tramImage from "@/assets/tram.png";
import busImage from "@/assets/bus.png";

// --- CARBON CALCULATOR COMPONENT ---
interface ApiResponse {
  newTotal: number;
}

const CarbonCalculator: React.FC = () => {
  const [kilometers, setKilometers] = useState<string>("");
  const [totalSavings, setTotalSavings] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleCalculate = async () => {
    const kmValue = Number(kilometers);
    if (!kilometers || isNaN(kmValue) || kmValue <= 0) {
      alert("Please enter a valid number of kilometers.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch("https://16vbdbcidg.execute-api.us-east-2.amazonaws.com/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kilometers: kmValue }),
      });
      if (!response.ok) throw new Error("Failed to calculate impact.");
      const data: ApiResponse = await response.json();
      setTotalSavings(data.newTotal);
    } catch (error) {
      console.error(error);
      alert("Error connecting to the Berlin Transport API.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 max-w-md mx-auto -mt-12 relative z-10 mb-12">
      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white text-center">Berlin Carbon Impact</h3>
      <p className="text-xs text-slate-500 text-center mb-6 uppercase tracking-widest font-semibold">Real-time AWS Lambda Integration</p>
      
      <div className="flex flex-col gap-3">
        <input
          type="number"
          placeholder="KM traveled today via BVG"
          className="p-3 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary outline-none"
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
        />
        <button
          onClick={handleCalculate}
          disabled={isLoading}
          className={`p-3 rounded-lg font-bold text-white transition-all transform active:scale-95 ${
            isLoading ? 'bg-slate-400 cursor-not-allowed' : 'bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg'
          }`}
        >
          {isLoading ? "Syncing with AWS..." : "Calculate My Impact"}
        </button>
      </div>

      {totalSavings !== null && (
        <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-900/30 rounded-xl">
          <p className="text-green-800 dark:text-green-400 text-center font-medium">
            <span className="block text-[10px] uppercase font-bold opacity-70">Total Savings (All Users)</span>
            <span className="text-3xl font-black">{totalSavings.toLocaleString()}g</span> of CO₂
          </p>
        </div>
      )}
    </div>
  );
};

// --- TRANSPORT DATA ---
const transportData = [
  {
    type: "ubahn" as const,
    title: "Underground Metro",
    description: "The U-Bahn is Berlin's underground train system. It runs frequently and is the fastest way to get around the city center. Look for the blue U sign at stations.",
    areas: ["City center", "Shopping areas", "Museums", "Neighborhoods"],
    tips: ["Runs 4AM to 1AM", "24/7 on weekends", "Every 3-10 minutes", "9 lines"],
  },
  {
    type: "sbahn" as const,
    title: "City Railway",
    description: "The S-Bahn is an above-ground train that covers larger distances. It connects the city center with outer areas and the Ring around the city.",
    areas: ["Airports (BER)", "Outer districts", "Ringbahn", "Potsdam"],
    tips: ["Long distances", "Ringbahn circles city", "Connects to Regional", "Green S sign"],
  },
  {
    type: "tram" as const,
    title: "Streetcar / Tram",
    description: "Trams run on tracks on the street. They're mostly found in the eastern parts of Berlin and are a charming way to explore.",
    areas: ["East Berlin", "Friedrichshain", "Wedding & Pankow", "Alexanderplatz"],
    tips: ["Same ticket as U-Bahn", "Stops close together", "Explore East Berlin", "M lines are frequent"],
  },
  {
    type: "bus" as const,
    title: "City Bus",
    description: "Buses go everywhere in Berlin, including places without train stations. Useful for short trips and areas not covered by rail.",
    areas: ["Every neighborhood", "Night service", "Tourist route 100", "Express routes"],
    tips: ["Enter at front", "Night buses (N lines)", "Bus 100 for sights", "Double-deckers"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Berlin Transit Guide</h1>
          <nav>
            <NavLink to="/about" className="text-white hover:underline text-lg md:text-xl">
              About
            </NavLink>
          </nav>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <Hero />
      
      {/* --- ADDED CALCULATOR HERE --- */}
      <div className="container mx-auto px-4">
        <CarbonCalculator />
      </div>

      <main>
        <section id="transport" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground">How to Get Around Berlin</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Berlin has four main types of public transport. They all use the same ticket system!
              </p>
            </div>

            {/* TRANSPORT CARDS */}
            <div className="max-w-5xl mx-auto space-y-12">
               {transportData.map((transport) => (
                 <div id={transport.type} key={transport.type}>
                  <TransportCard
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={
                      transport.type === "ubahn" ? ubahnImage :
                      transport.type === "sbahn" ? sbahnImage :
                      transport.type === "tram" ? tramImage : busImage
                    }
                  />
                 </div>
               ))}
            </div>
          </div>
        </section>

        <TicketInfo />
        <GoogleMapsGuide />

        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              Welcome to Berlin! Official info at <a href="https://www.bvg.de" className="text-primary hover:underline">BVG.de</a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;