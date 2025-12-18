interface TransportCardProps {
  type: "ubahn" | "sbahn" | "tram" | "bus";
  title: string;
  description: string;
  areas: string[];
  tips: string[];
  image: string;
}

const colorMap = {
  ubahn: {
    bg: "bg-ubahn-light",
    badge: "badge-ubahn",
    border: "border-l-ubahn",
  },
  sbahn: {
    bg: "bg-sbahn-light",
    badge: "badge-sbahn",
    border: "border-l-sbahn",
  },
  tram: {
    bg: "bg-tram-light",
    badge: "badge-tram",
    border: "border-l-tram",
  },
  bus: {
    bg: "bg-bus-light",
    badge: "badge-bus",
    border: "border-l-bus",
  },
};

const TransportCard = ({ type, title, description, areas, tips, image }: TransportCardProps) => {
  const colors = colorMap[type];

  return (
    <article className={`transport-card border-l-4 ${colors.border}`}>
      <div className="flex flex-col lg:flex-row gap-6">
        <div className={`${colors.bg} rounded-lg p-4 flex items-center justify-center lg:w-64 flex-shrink-0`}>
          <img
            src={image}
            alt={`${title} illustration`}
            className="w-full max-w-[200px] h-auto object-contain"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className={colors.badge}>{type.toUpperCase()}</span>
            <h3 className="font-display text-2xl font-bold text-foreground">{title}</h3>
          </div>
          
          <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">Where it goes:</h4>
              <ul className="space-y-1">
                {areas.map((area, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    {area}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-display font-semibold text-foreground mb-2">Good to know:</h4>
              <ul className="space-y-1">
                {tips.map((tip, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">✓</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TransportCard;
