import { Ticket, Clock, Euro, Info } from "lucide-react";

const TicketInfo = () => {
  return (
    <section id="tickets" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground">Tickets & Zones</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berlin is divided into zones. Most visitors only need a ticket for zones A and B.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="transport-card text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Ticket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Single Ticket (AB)</h3>
            <p className="text-2xl font-bold text-primary mb-2">€3.50</p>
            <p className="text-muted-foreground text-sm">Valid for 2 hours in one direction</p>
          </div>

          <div className="transport-card text-center">
            <div className="w-12 h-12 rounded-full bg-tram/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-tram" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Day Ticket (AB)</h3>
            <p className="text-2xl font-bold text-tram mb-2">€9.50</p>
            <p className="text-muted-foreground text-sm">Unlimited rides until 3 AM next day</p>
          </div>

          <div className="transport-card text-center">
            <div className="w-12 h-12 rounded-full bg-sbahn/10 flex items-center justify-center mx-auto mb-4">
              <Euro className="w-6 h-6 text-sbahn" />
            </div>
            <h3 className="font-display font-bold text-foreground mb-2">Weekly Ticket (AB)</h3>
            <p className="text-2xl font-bold text-sbahn mb-2">€39.00</p>
            <p className="text-muted-foreground text-sm">Best value for longer stays</p>
          </div>
        </div>

        <div className="mt-8 transport-card max-w-2xl mx-auto flex items-start gap-4">
          <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-display font-semibold text-foreground mb-1">Important!</h4>
            <p className="text-muted-foreground text-sm">
              Always validate your ticket before boarding! Look for the yellow or red stamping machines at station entrances. 
              Ticket inspectors check regularly, and fines are €60 for riding without a valid ticket.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketInfo;
