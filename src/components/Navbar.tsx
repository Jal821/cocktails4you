import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Wine, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    if (isHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <Wine className="w-7 h-7 text-accent" />
          <span className="text-lg font-bold text-primary-foreground">
            Sip & Sparkle
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => scrollToSection("services")} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
            Služby
          </button>
          <button onClick={() => scrollToSection("about")} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
            O Nás
          </button>
          <Link to="/blog" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
            Blog
          </Link>
          <Button size="sm" variant="secondary" onClick={() => scrollToSection("contact")}>
            Kontakt
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-foreground/10 px-4 pb-4 space-y-3">
          <button onClick={() => scrollToSection("services")} className="block w-full text-left text-primary-foreground/80 py-2">
            Služby
          </button>
          <button onClick={() => scrollToSection("about")} className="block w-full text-left text-primary-foreground/80 py-2">
            O Nás
          </button>
          <Link to="/blog" onClick={() => setMobileOpen(false)} className="block text-primary-foreground/80 py-2">
            Blog
          </Link>
          <Button size="sm" variant="secondary" className="w-full" onClick={() => scrollToSection("contact")}>
            Kontakt
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
