import { CheckCircle2 } from "lucide-react";
import mixingDrink from "@/assets/mixing-drink.jpg";

const features = [
  {
    title: "Skúsený Barmanský Tím",
    description: "Stovky úspešne zrealizovaných eventov po celom Slovensku.",
  },
  {
    title: "Kompletný Servis od A po Z",
    description: "Bar, nápoje, poháre, ľad, doprava aj upratanie — všetko v jednej cene.",
  },
  {
    title: "Personalizovaný Drink Menu",
    description: "Signature koktail s vašim menom alebo témou eventu — váš event, váš drink.",
  },
  {
    title: "Rýchla Ponuka do 24 Hodín",
    description: "Kontaktujte nás dnes a do 24 hodín máte cenovú ponuku šitú presne na váš event.",
  },
];

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Prečo si vybrať Sip & Sparkle Events?
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
                  className="flex flex-col gap-2 p-4 rounded-lg bg-background/60 backdrop-blur-sm hover:bg-background transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm pl-9">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl animate-fade-in">
              <img
                src={mixingDrink}
                alt="Barman miešajúci drink na mobilnom bare"
                className="w-full h-[400px] object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Indoor aj Outdoor Mobilný Bar
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Náš mobilný bar funguje kdekoľvek — v elegantnej sále, záhrade, vinici aj na strechách. Pôsobíme po celom Slovensku vrátane Bratislavy, Trnavy, Nitry, Žiliny a Košíc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
