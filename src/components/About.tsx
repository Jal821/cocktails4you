import { CheckCircle2 } from "lucide-react";
import mixingDrink from "@/assets/mixing-drink.jpg";

const features = [
  "Profesionálny a skúsený tím",
  "Kvalitné nápoje od overených dodávateľov",
  "Flexibilita a prispôsobenie vašim potrebám",
  "Moderné vybavenie a mobilné bary",
  "Spolehlivosť a presná koordinácia",
  "Konkurenčné ceny a transparentnosť",
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Prečo Si Vybrať Nás?
            </h2>
            <p className="text-lg text-muted-foreground">
              Robíme z každého eventu nezabudnuteľný zážitok
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-background/60 backdrop-blur-sm hover:bg-background transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img
                src={mixingDrink}
                alt="Barman miešajúci drink"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center animate-slide-up">
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              S viac ako 10-ročnými skúsenosťami v oblasti eventového cateringu 
              vieme presne, čo váš event potrebuje. Od malých súkromných osláv 
              po veľké firemné podujatia – zabezpečíme perfektný nápojový servis 
              s individuálnym prístupom ku každému klientovi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
