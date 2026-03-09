import { Wine, Beer, Droplets, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Koktailový Bar & Barmanská Show",
    description: "Profesionálni barmani, craft koktaily, služba na mieruiamo na vašom evente.",
  },
  {
    icon: Wine,
    title: "Wine Bar — Víno na Eventy",
    description: "Starostlivo vybrané slovenské aj zahraničné vína podávané s eleganciou.",
  },
  {
    icon: Beer,
    title: "Beer Tap — Výčap Piva na Akcie",
    description: "To�Čapova pivo priamo na mieste — ideálne pre záhradné párty, teambuildingyt aj firemné eventy.",
  },
  {
    icon: Droplets,
    title: "Nealkoholický Mocktail Bar",
    description: "Sofistikované nealkoholické drinky pre každého hosťa — bez kompromisov na chuti.",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Naše Služby Nápojového Cateringu
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komplexný barový servis pre každý typ eventu — od intímnych osláv po veľké firemné akcie
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-secondary mb-6">
                  <service.icon className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
