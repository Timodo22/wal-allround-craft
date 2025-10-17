import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // ✅ Web3Forms integratie
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = {
      access_key: "c5ab6c58-f319-42fc-8ff9-5d9feae8bc83", // ← jouw Web3Forms key
      subject: `Nieuwe offerte aanvraag van ${formData.name}`,
      from_name: "Contactformulier Website",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      projectType: formData.projectType,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formDataToSend),
      });

      const result = await response.json();

      if (result.success) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
        });
      } else {
        alert("Er ging iets mis bij het verzenden. Probeer het opnieuw.");
      }
    } catch (error) {
      alert("Er trad een netwerkfout op. Controleer uw verbinding.");
    } finally {
      setLoading(false);
      setTimeout(() => setIsSubmitted(false), 6000);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefoon",
      value: "+31 6 15383300",
      link: "tel:+31615383300",
      description: "Bel direct voor spoedklussen",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@vandewalallroundservice.com",
      link: "mailto:info@vandewalallroundservice.com",
      description: "Voor offerte aanvragen",
    },
    {
      icon: MapPin,
      title: "Werkgebied",
      value: "Nederland",
      description: "Landelijk actief",
    },
    {
      icon: Clock,
      title: "Openingstijden",
      value: "Ma-Vr: 7:00-18:00",
      description: "Weekend op afspraak",
    },
  ];

  const projectTypes = [
    "Badkamer verbouwing",
    "Tuinhuis/Schuur",
    "Terras/Pergola",
    "Vloeren",
    "Reparaties",
    "Anders",
  ];

  // ✅ Bedankpagina na verzenden
  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <Card className="max-w-2xl mx-auto p-8 text-center shadow-elegant">
            <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
            <h3 className="text-2xl font-bold text-primary mb-4">
              Bedankt voor uw aanvraag!
            </h3>
            <p className="text-muted-foreground mb-6">
              Wij hebben uw bericht ontvangen en nemen binnen 24 uur contact met
              u op voor een vrijblijvende offerte.
            </p>
            <Button variant="outline" onClick={() => setIsSubmitted(false)}>
              Nieuwe Aanvraag
            </Button>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Contact & Offerte
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Klaar om uw project te starten? Neem contact op voor een
            <strong className="text-primary"> gratis offerte binnen 24 uur.</strong>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8 animate-scale-in">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">
                Neem Direct Contact Op
              </h3>
              <p className="text-muted-foreground mb-8">
                Heeft u vragen of wilt u direct een afspraak maken? Bel ons of
                stuur een bericht - wij staan altijd klaar om u te helpen.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-elegant hover:shadow-hover transition-all duration-300 group"
                >
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <info.icon className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">
                        {info.value}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">
                      {info.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-primary p-6 rounded-xl text-center">
              <h4 className="text-xl font-bold text-primary-foreground mb-2">
                Spoedklus? Bel Direct!
              </h4>
              <p className="text-primary-foreground/80 mb-4">
                Voor urgente reparaties zijn wij 24/7 bereikbaar
              </p>
              <a href="tel:+31615383300">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-background hover:bg-secondary"
                >
                  <Phone className="mr-2" size={20} />
                  +31 6 15383300
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-fade-in">
            <Card className="p-8 shadow-elegant">
              <h2 className="text-2xl font-bold text-primary mb-6">
                Vraag Een Offerte Aan
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot tegen spam */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: "none" }}
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Naam *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Uw volledige naam"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Email *
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="uw@email.nl"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Telefoon
                    </label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+31 6 12345678"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Type Project
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full h-10 px-3 py-2 text-sm bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Selecteer type project</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Beschrijving Project *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Beschrijf uw project zo gedetailleerd mogelijk..."
                    rows={5}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="hero"
                  className="w-full group"
                  disabled={loading}
                >
                  {loading ? (
                    "Versturen..."
                  ) : (
                    <>
                      <Send className="mr-2" size={20} />
                      Verstuur Aanvraag
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">
                        →
                      </span>
                    </>
                  )}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  * Verplichte velden. Wij nemen binnen 24 uur contact met u op.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
