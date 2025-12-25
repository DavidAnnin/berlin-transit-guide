import { useState } from "react";
import Hero from "@/components/Hero";
import GoogleMapsGuide from "@/components/GoogleMapsGuide";
import TicketInfo from "@/components/TicketInfo";
import { NavLink } from "@/components/NavLink";

import ubahnImage from "@/assets/ubahn.png";
import sbahnImage from "@/assets/sbahn.png";
import tramImage from "@/assets/tram.png";
import busImage from "@/assets/bus.png";

const transportData = [
  {
    type: "ubahn" as const,
    title: "U-Bahn (Subway)",
    shortDescription: "Fast travel across central Berlin.",
    fullDescription: "Berlin’s U-Bahn is the underground metro system, perfect for fast travel across the city, especially in central areas. It has 10 lines (U1–U9, plus U55), each running every 5–10 minutes during peak hours. U-Bahn lines intersect at major hubs, making transfers simple. It’s ideal for short, city-center trips and avoiding traffic. The trains run roughly from 4 AM to 1 AM, with 24-hour service on weekends (night buses replace routes overnight).",
    tips: [
      "Buy a valid ticket before boarding; ticket machines are at every station.",
      "Watch for line colors and numbers—they’re easy to follow.",
      "Avoid rush hours (7–9 AM, 4–6 PM) if possible for a more comfortable ride."
    ],
    image: ubahnImage
  },
  {
    type: "sbahn" as const,
    title: "S-Bahn (City Train)",
    shortDescription: "Connects city center with outer districts.",
    fullDescription: "The S-Bahn is Berlin’s suburban train network that connects the city center with outer districts and nearby towns. It has 15 lines (S1–S9, S25, S26, S41–S47), running mostly above ground. S-Bahn trains are slightly faster than buses and U-Bahn for long distances and key landmarks. Circular lines (S41 & S42) loop around the city, which is convenient for sightseeing.",
    tips: [
      "Use the S-Bahn to reach airports (S9 to BER) or Berlin outskirts.",
      "Trains run every 10–20 minutes; night service exists on weekends.",
      "Lines share some tracks, so check the destination carefully."
    ],
    image: sbahnImage
  },
  {
    type: "tram" as const,
    title: "Tram (Streetcar)",
    shortDescription: "Reliable transport in East Berlin.",
    fullDescription: "Trams operate mainly in East Berlin, offering a reliable way to reach areas not served by U-Bahn or S-Bahn. Lines are numbered (M1–M17 for MetroTrams, plus others), and stops are frequent, usually every 5–15 minutes during the day. Trams are great for short trips and scenic city views.",
    tips: [
      "Check the final stop to ensure you’re heading in the right direction.",
      "Tickets are the same as for buses and trains.",
      "Trams are slower than U-Bahn but cover areas the subway doesn’t."
    ],
    image: tramImage
  },
  {
    type: "bus" as const,
    title: "Bus",
    shortDescription: "Reaches every neighborhood.",
    fullDescription: "Buses complement Berlin’s rail networks, reaching every neighborhood, including places U-Bahn and S-Bahn can’t. Standard buses run numbered routes, while express buses (X lines) and night buses (N lines) offer faster and late-night service.",
    tips: [
      "Buses stop at every marked stop, so plan extra time for travel.",
      "Night buses replace trains overnight, so they’re essential for late travel.",
      "Check digital timetables or apps, as some routes change at night or weekends."
    ],
    image: busImage
  }
];

const TransportCard = ({ transport }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="border rounded-lg p-4 shadow-md cursor-pointer"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="flex items-center space-x-4">
        <img src={transport.image} alt={transport.title} className="w-16 h-16" />
        <div>
          <h3 className="text-xl font-bold">{transport.title}</h3>
          <p className="text-muted-foreground">{transport.shortDescription}</p>
        </div>
      </div>
      {isExpanded && (
        <div className="mt-4">
          <p>{transport.fullDescription}</p>
          <ul className="list-disc pl-5 mt-2">
            {transport.tips.map((tip, index) => (
              <li key={index}>{tip}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
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

      <Hero />

      <main>
        <section id="transport" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title">How to Get Around Berlin</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Berlin uses a unified ticket system across all four transport types.
              </p>
            </div>

            <div className="max-w-5xl mx-auto space-y-12">
              {transportData.map((transport) => (
                <TransportCard key={transport.type} transport={transport} />
              ))}
            </div>
          </div>
        </section>

        <TicketInfo />
        <GoogleMapsGuide />

        <footer className="py-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">Official info at BVG.de</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;