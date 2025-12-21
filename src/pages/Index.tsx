import Hero from "@/components/Hero";
import TransportCard from "@/components/TransportCard";
import GoogleMapsGuide from "@/components/GoogleMapsGuide";
import TicketInfo from "@/components/TicketInfo";
import { NavLink } from "@/components/NavLink";

import ubahnImage from "@/assets/ubahn.png";
import sbahnImage from "@/assets/sbahn.png";
import tramImage from "@/assets/tram.png";
import busImage from "@/assets/bus.png";

// --- TRANSPORT DATA ARRAY ---
const transportData = [
  { type: "ubahn" as const, title: "Underground Metro", description: "The U-Bahn is Berlin's underground train system. Fastest way to center center.", areas: ["Mitte", "Kreuzberg"], tips: ["Runs 4AM-1AM", "24/7 Weekends"], image: ubahnImage },
  { type: "sbahn" as const, title: "City Railway", description: "Above-ground trains for longer distances. Connects to the Airport.", areas: ["BER Airport", "Potsdam"], tips: ["Ringbahn circles city", "Green S sign"], image: sbahnImage },
  { type: "tram" as const, title: "Streetcar / Tram", description: "Mostly in East Berlin. Charming street-level travel.", areas: ["Prenzlauer Berg", "Friedrichshain"], tips: ["M lines frequent", "Same ticket"], image: tramImage },
  { type: "bus" as const, title: "City Bus", description: "Goes everywhere trains don't. Great double-decker views.", areas: ["Everywhere", "Tourist Route 100"], tips: ["Enter at front", "Night service"], image: busImage },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* GLOBAL HEADER */}
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

      {/* HERO SECTION (Includes the Carbon Calculator inside its own logic) */}
      <Hero />
      
      <main>
        {/* TRANSPORT SECTIONS */}
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
                 <div id={transport.type} key={transport.type}>
                  <TransportCard
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={transport.image}
                  />
                 </div>
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