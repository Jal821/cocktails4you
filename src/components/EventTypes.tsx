import { Building2, Trees } from "lucide-react";
import indoorDemanovka from "@/assets/indoor-demanovka.webp";
import outdoorBorecGin from "@/assets/outdoor-borec-gin.webp";
import { Card, CardContent } from "@/components/ui/card";

const EventTypes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Typy Eventov
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Zabezpečíme nápoje na akýkoľvek event – indoor aj outdoor
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={indoorDemanovka} 
                alt="Indoor Event - Demänovka Cinema City" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">Indoor</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Firemné akcie a konferencie
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Svadby a oslavy v sálach
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Súkromné párty
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Kultúrne podujatia
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
            <div className="relative h-64 overflow-hidden">
              <img 
                src={outdoorBorecGin} 
                alt="Outdoor Event - Borec Gin Bar" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
              <div className="absolute bottom-6 left-6 text-primary-foreground">
                <div className="flex items-center gap-3 mb-2">
                  <Trees className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">Outdoor</h3>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Záhradné párty a festivaly
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Letné terasy a beach bary
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Športové eventy
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  Open-air koncerty
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
