import { MapPin, Search, Navigation, Clock } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Open Google Maps",
    description: "Download the Google Maps app or open maps.google.com in your browser.",
  },
  {
    icon: MapPin,
    title: "Enter Your Destination",
    description: "Type where you want to go in the search bar. You can use addresses, landmarks, or place names.",
  },
  {
    icon: Navigation,
    title: "Select Directions",
    description: "Tap the 'Directions' button, then choose the public transport icon (train/bus symbol).",
  },
  {
    icon: Clock,
    title: "Choose Your Route",
    description: "Google Maps shows different route options with U-Bahn, S-Bahn, bus, and tram. Pick the one that suits you best.",
  },
];

const GoogleMapsGuide = () => {
  return (
    <section id="maps-guide" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Using Google Maps in Berlin</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Google Maps works great with Berlin's public transport. Here's how to use it to find your way around the city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="transport-card text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-sm font-semibold text-primary mb-2">Step {index + 1}</div>
              <h3 className="font-display font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="transport-card max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-bold text-foreground mb-4">Pro Tips for Using Google Maps</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm font-bold">1</span>
              </span>
              <span>Set your departure time to see accurate schedules. Tap "Depart at" to plan ahead.</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm font-bold">2</span>
              </span>
              <span>Look for the AB or ABC zone info in your route. Most places in central Berlin are in zone AB.</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm font-bold">3</span>
              </span>
              <span>Save your home and work addresses for quick navigation.</span>
            </li>
            <li className="flex items-start gap-3 text-muted-foreground">
              <span className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-accent text-sm font-bold">4</span>
              </span>
              <span>Download offline maps for Berlin in case you lose internet connection underground.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapsGuide;
