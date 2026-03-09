import { Wine, Beer, Droplets, Sparkles, GraduationCap } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Koktailový Bar",
    description: "Profesionálni barmani, craft koktaily, služba na mieru priamo na vašom evente.",
  },
  {
    icon: Wine,
    title: "Wine Bar — Víno na Eventy",
    description: "Starostlivo vybrané slovenské aj zahraničné vína podávané s eleganciou.",
  },
  {
    icon: Beer,
    title: "Beer Tap — Výčap Piva na Akcie",
    description: "Čapované a craftové pivo priamo na mieste — ideálne pre záhradné párty, teambuildingyt aj firemné eventy.",
  },
  {
    icon: Droplets,
    title: "Nealkoholický Mocktail Bar",
    description: "Sofistikované nealkoholické drinky pre každého hosťa — bez kompromisov na chuti.",
  },
  {
    icon: GraduationCap,
    title: "Prednášky a Degustácie",
    description: "Interaktívne prednášky o koktailoch, vínach či pive spojené s degustáciou — zážitok pre všetky zmysly.",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-accent mb-3">
            Čo ponúkame
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Naše Služby Nápojového Cateringu
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Komplexný barový servis pre každý typ eventu — od intímnych osláv po veľké firemné akcie
          </p>
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-6 lg:mb-8 max-w-5xl mx-auto">
          {services.slice(0, 3).map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-3xl mx-auto">
          {services.slice(3).map((service, index) => (
            <ServiceCard key={index + 3} service={service} index={index + 3} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }: { service: typeof services[number]; index: number }) => {
  const Icon = service.icon;
  return (
    <div
      className="group relative bg-card rounded-2xl p-8 text-center transition-all duration-500 hover:-translate-y-2 animate-fade-in border border-border/50 hover:border-accent/30 hover:shadow-[0_20px_60px_-15px_hsl(var(--primary)/0.15)]"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Accent line on top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-accent transition-all duration-500 rounded-full" />

      <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/5 group-hover:bg-accent/10 transition-colors duration-500 mb-5">
        <Icon className="w-7 h-7 text-accent transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-card-foreground">
        {service.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
};

export default Services;
