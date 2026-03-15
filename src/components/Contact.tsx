import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Správa odoslaná! Ozveme sa vám čoskoro.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pripravíme pre vás nezáväznú ponuku do 24 hodín
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mobilný bar na svadbu, firemný event alebo oslavu — napíšte nám a my sa postaráme o zvyšok.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    placeholder="Vaše meno *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12" />
                  
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="h-12" />
                  
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Telefón"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12" />
                  
                </div>
                <div>
                  <Textarea
                    placeholder="Váš odkaz / popis eventu *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="min-h-32" />
                  
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  variant="default">
                  
                  Kontaktovať nás
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Pôsobíme po celom Slovensku | Indoor & Outdoor
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6">Kde Nás Nájdete</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefón</h4>
                    <a href="tel:+421900000000" className="text-muted-foreground hover:text-accent transition-colors">
                      +421 911 962 153  
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <a href="mailto:info@catering.sk" className="text-muted-foreground hover:text-accent transition-colors">
                      info@cocktails4you.sk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Adresa</h4>
                    <p className="text-muted-foreground">
                      Bratislava, Slovensko
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>);

};

export default Contact;