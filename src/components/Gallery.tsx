import coupeCocktails from "@/assets/coupe-cocktails.jpg";
import purpleCocktails from "@/assets/purple-cocktails.webp";
import momGinBar from "@/assets/mom-gin-bar.webp";
import outdoorBorecGin from "@/assets/outdoor-borec-gin.webp";
import outdoorProfessorado from "@/assets/outdoor-professorado.webp";
import momGinBottles from "@/assets/mom-gin-bottles.webp";

const galleryItems = [
  { src: coupeCocktails, title: "Signature Cocktaily", desc: "Ručne miešané podľa vášho priania", rotation: undefined },
  { src: purpleCocktails, title: "Cocktail Bar", desc: "Profesionálne miešané nápoje", rotation: undefined },
  { src: momGinBar, title: "MOM Gin Bar", desc: "Prémiový ginový bar na mieru", rotation: undefined },
  { src: outdoorBorecGin, title: "Outdoor Setup", desc: "Mobilný bar v prírode", rotation: 'rotate(90deg) scale(1.5)' },
  { src: outdoorProfessorado, title: "Festival Bar", desc: "Profesionálny servis na festivaloch", rotation: 'rotate(90deg) scale(1.5)' },
  { src: momGinBottles, title: "Prémiové Značky", desc: "Široký výber kvalitných nápojov", rotation: 'rotate(90deg) scale(1.5)' },
];

const Gallery = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Naša Práca
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pohľad na niektoré z našich realizácií
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                style={item.rotation ? { transform: item.rotation } : undefined}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-primary-foreground/90 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Video section */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">
              Naše Eventy v Akcii
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl aspect-video">
            <video
              controls
              muted
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/videos/event-video-2.webm" type="video/webm" />
              <source src="/videos/event-video-2.mp4" type="video/mp4" />
              Váš prehliadač nepodporuje prehrávanie videa.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
