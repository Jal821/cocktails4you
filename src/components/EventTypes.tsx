import { Building2, Trees, PartyPopper, GraduationCap } from "lucide-react";
import indoorBarSetup from "@/assets/indoor-bar-setup.jpg";
import outdoorBorecGin from "@/assets/outdoor-borec-gin.webp";
import { Card, CardContent } from "@/components/ui/card";

const EventTypes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Mobilný Bar na Každý Event
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Od svadobného cocktail baru až po firemný večierok — barový catering šitý na mieru
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={indoorBarSetup}
                alt="Mobilný bar na svadbu - indoor event"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy" />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">Mobilný Bar na Svadbu</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground">
                Svadobný barový catering vrátane signature koktailu pre novomanželský pár. Indoor aj outdoor.
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={outdoorBorecGin}
                alt="Firemné eventy a teambuilding - outdoor mobilný bar"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                style={{ transform: 'rotate(90deg) scale(1.5)' }} />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <Trees className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">Firemné Eventy & Teambuilding</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <p className="text-muted-foreground">
                Barový catering pre konferencie, večierky a teambuildingové cocktail workshopy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default EventTypes;