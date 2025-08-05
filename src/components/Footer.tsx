import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    "Keuken renovaties",
    "Badkamer verbouwingen", 
    "Tuinhuizen & Pergola's",
    "Vloeren & Plafonds",
    "Inbouwkasten",
    "Onderhoud & Reparaties"
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Over Dean", href: "#about" },
    { name: "Diensten", href: "#services" },
    { name: "Projecten", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Van de Wal
              </h3>
              <p className="text-primary-foreground/80">
                Allround Service
              </p>
            </div>
            
            <p className="text-primary-foreground/80 leading-relaxed">
              Professionele timmerman met meer dan 15 jaar ervaring. 
              Van maatwerk binnen tot tuinprojecten buiten - 
              vakmanschap en kwaliteit gegarandeerd.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} />
                <a href="tel:+31615383300" className="hover:text-primary-foreground transition-colors">
                  +31 6 15383300
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} />
                <a href="mailto:info@vandewalservice.nl" className="hover:text-primary-foreground transition-colors">
                  info@vandewalservice.nl
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} />
                <span>Nederland (landelijk)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={16} />
                <span>Ma-Vr: 7:00-18:00</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              Onze Diensten
            </h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              Snelle Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <h5 className="font-semibold mb-3">Volg Ons</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">
              Klaar voor uw project?
            </h4>
            <p className="text-primary-foreground/80">
              Neem vandaag nog contact op voor een gratis offerte binnen 24 uur.
            </p>
            
            <div className="space-y-4">
              <a 
                href="tel:+31615383300"
                className="block w-full text-center bg-primary-foreground text-primary py-3 px-4 rounded-lg font-semibold hover:bg-primary-foreground/90 transition-all duration-300 hover:scale-105"
              >
                Bel Nu: +31 6 15383300
              </a>
              <a 
                href="#contact"
                className="block w-full text-center border border-primary-foreground/30 text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Online Offerte
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Van de Wal Allround Service. Alle rechten voorbehouden.
            </p>
            <div className="flex space-x-6 text-sm text-primary-foreground/60">
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Algemene Voorwaarden
              </a>
              <a href="#" className="hover:text-primary-foreground transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;