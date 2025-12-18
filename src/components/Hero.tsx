import heroImage from "@/assets/berlin-hero.png";

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
      
      <div className="relative container mx-auto px-4 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Welcome to Berlin!
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl font-body">
            New to the city? This guide will help you understand how to get around Berlin using public transportation. 
            It's easy, affordable, and connects you to every corner of this amazing city.
          </p>
          <nav className="flex flex-wrap gap-3">
            <a href="#transport" className="badge-ubahn">U-Bahn</a>
            <a href="#transport" className="badge-sbahn">S-Bahn</a>
            <a href="#transport" className="badge-tram">Tram</a>
            <a href="#transport" className="badge-bus">Bus</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Hero;
