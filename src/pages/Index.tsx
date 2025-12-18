import Hero from "@/components/Hero";
import TransportCard from "@/components/TransportCard";
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
    title: "Underground Metro",
    description: "The U-Bahn is Berlin's underground train system. It runs frequently and is the fastest way to get around the city center. Look for the blue U sign at stations.",
    areas: [
      "City center (Mitte, Alexanderplatz)",
      "Shopping areas (Kurfürstendamm)",
      "Museums (Museum Island)",
      "Neighborhoods (Kreuzberg, Neukölln)",
    ],
    tips: [
      "Runs from 4 AM to about 1 AM",
      "24/7 service on weekends",
      "Trains come every 3-10 minutes",
      "9 lines cover most of the city",
    ],
  },
  {
    type: "sbahn" as const,
    title: "City Railway",
    description: "The S-Bahn is an above-ground train that covers larger distances. It connects the city center with outer areas and runs partly above ground, giving you nice city views.",
    areas: [
      "Airports (BER via S9 or S45)",
      "Outer districts (Spandau, Köpenick)",
      "Ring around the city (Ringbahn)",
      "Potsdam and Brandenburg",
    ],
    tips: [
      "Great for longer distances",
      "Ringbahn circles the whole city",
      "Connects to Regional trains",
      "Look for the green S sign",
    ],
  },
  {
    type: "tram" as const,
    title: "Streetcar / Tram",
    description: "Trams run on tracks on the street. They're mostly found in the eastern parts of Berlin and are a charming way to explore neighborhoods at street level.",
    areas: [
      "East Berlin (Prenzlauer Berg)",
      "Friedrichshain & Lichtenberg",
      "Wedding & Pankow",
      "Alexanderplatz connections",
    ],
    tips: [
      "Same ticket as U-Bahn & S-Bahn",
      "Stops are often close together",
      "Great for exploring East Berlin",
      "M lines run most frequently",
    ],
  },
  {
    type: "bus" as const,
    title: "City Bus",
    description: "Buses go everywhere in Berlin, including places without train stations. They're especially useful for short trips and areas not covered by rail.",
    areas: [
      "Every neighborhood in Berlin",
      "Night service (N lines)",
      "Tourist route (Bus 100)",
      "Express routes (X lines)",
    ],
    tips: [
      "Enter at front, show ticket",
      "Night buses run when trains stop",
      "Bus 100 passes major sights",
      "Double-deckers have great views",
    ],
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

      <Hero />
      
      <main>
        <section id="transport" className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="section-title text-foreground">How to Get Around Berlin</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Berlin has four main types of public transport. They all use the same ticket system, 
                so one ticket works on all of them!
              </p>
            </div>

            <div id="ubahn" className="space-y-6 max-w-5xl mx-auto">
              {transportData.map((transport) => (
                transport.type === "ubahn" && (
                  <TransportCard
                    key={transport.type}
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={ubahnImage}
                  />
                )
              ))}
            </div>

            <div id="sbahn" className="space-y-6 max-w-5xl mx-auto">
              {transportData.map((transport) => (
                transport.type === "sbahn" && (
                  <TransportCard
                    key={transport.type}
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={sbahnImage}
                  />
                )
              ))}
            </div>

            <div id="tram" className="space-y-6 max-w-5xl mx-auto">
              {transportData.map((transport) => (
                transport.type === "tram" && (
                  <TransportCard
                    key={transport.type}
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={tramImage}
                  />
                )
              ))}
            </div>

            <div id="bus" className="space-y-6 max-w-5xl mx-auto">
              {transportData.map((transport) => (
                transport.type === "bus" && (
                  <TransportCard
                    key={transport.type}
                    type={transport.type}
                    title={transport.title}
                    description={transport.description}
                    areas={transport.areas}
                    tips={transport.tips}
                    image={busImage}
                  />
                )
              ))}
            </div>
          </div>
        </section>

        <TicketInfo />
        <GoogleMapsGuide />

        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <p className="text-muted-foreground text-sm">
              Welcome to Berlin! This guide is for newcomers to help you understand public transportation.
            </p>
            <p className="text-muted-foreground text-sm mt-2">
              For official information, visit{" "}
              <a 
                href="https://www.bvg.de" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                BVG.de
              </a>
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
