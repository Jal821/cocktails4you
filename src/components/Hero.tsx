import { Button } from "@/components/ui/button";
import barmanPouring from "@/assets/barman-pouring.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background with image fallback */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={barmanPouring}
          className="w-full h-full object-cover"
        >
          <source src="/videos/event-video-1.webm" type="video/webm" />
          <source src="/videos/event-video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 animate-fade-in">
          Prémiový Nápojový Catering
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-slide-up">
          Perfektné nápoje pre vaše nezabudnuteľné eventy. Pivo, víno, cocktaily a nealko – profesionálne a so štýlom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
          >
            Nezáväzná Ponuka
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={scrollToContact}
            className="text-lg px-8 py-6 bg-primary-foreground/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
          >
            Kontaktujte Nás
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
