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
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://cocktails4you-contact-api.vercel.app/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: `${formData.message}\n\nTelefón: ${
              formData.phone || "neuvedený"
            }`,
          }),
        }
      );

      if (!res.ok) {
        throw new Error("Request failed");
      }

      toast.success("Správa odoslaná! Ozveme sa vám čoskoro.");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Nastala chyba pri odosielaní, skúste to prosím znova.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Pripravíme pre vás nezáväznú ponuku do 24 hodín
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Mobilný bar na svadbu, firemný event alebo oslavu — napíšte nám a
            my sa postaráme o zvyšok.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    name="name"
                    placeholder="Vaše meno *"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Email *"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Telefón"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Váš odkaz / popis eventu *"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-32"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  variant="default"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Odosielam..." : "Kontaktovať nás"}
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  Pôsobíme po celom Slovensku | Indoor & Outdoor
                </p>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold text-primary mb-6">
                Kde Nás Nájdete
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Telefón
                    </h4>
                    <a
                      href="tel:+421911962153"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +421 911 962 153
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@cocktails4you.sk"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      info@cocktails4you.sk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Adresa
                    </h4>
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
    </section>
  );
};

export default Contact;
