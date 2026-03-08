import { Wine } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Wine className="w-8 h-8 text-accent" />
            <span className="text-xl font-bold">Mobilný Bar & Nápojový Catering | Svadby, Firemné Eventy, Oslavy | Slovensko</span>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-primary-foreground/80">
              © 2025 Sip & Sparkle Events | Nápojový Catering Slovensko
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
