import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

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
    { name: "Home", href: "/" },
    { name: "Over Dean", href: "/about" },
    { name: "Diensten", href: "/services" },
    { name: "Projecten", href: "/projects" },
    { name: "Contact", href: "/contact" }
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
              Professionele timmerman met meer dan 5 jaar ervaring. 
              Van maatwerk binnen tot tuinprojecten buiten - 
              vakmanschap en kwaliteit gegarandeerd.
            </p>

{/* Company Info */}
<div className="space-y-6">

  <div className="space-y-3">
    <div className="flex items-center space-x-3">
      <Phone size={16} />
      <a href="tel:+31615383300" className="hover:text-primary-foreground transition-colors">
        +31 6 15383300
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <Mail size={16} />
      <a href="mailto:info@vandewalallroundservice.com" className="hover:text-primary-foreground transition-colors">
        info@vandewalallroundservice.com
      </a>
    </div>
    <div className="flex items-center space-x-3">
      <MapPin size={16} />
      <span>Heuveldwarsstraat 9, Moergestel 5066PA</span>
    </div>
    <div className="flex items-center space-x-3">
      <Clock size={16} />
      <span>Ma-Vr: 7:00-18:00</span>
    </div>
    <div className="flex items-center space-x-3">
      <span className="font-semibold">KvK:</span>
      <span>98555766</span>
    </div>
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
                  <Link to="/services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {service}
                  </Link>
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
                  <Link 
                    to={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="pt-4">
              <h5 className="font-semibold mb-3">Volg Ons</h5>
              <div className="flex space-x-4">

                <a href="https://www.instagram.com/vandewal_allroundservice?igsh=NDR4N2llcm5ta3l1" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  <Instagram size={20} />
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
              <Link 
                to="/contact"
                className="block w-full text-center border border-primary-foreground/30 text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Online Offerte
              </Link>
            </div>
          </div>
        </div>

{/* Bottom Bar */}
<div className="border-t border-primary-foreground/20 mt-12 pt-8">
  <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
    <p className="text-primary-foreground/60 text-sm">
      © {currentYear} Van de Wal Allround Service. Alle rechten voorbehouden.
    </p>


  </div>

  {/* Credits */}
  <p className="text-center text-primary-foreground/40 text-xs mt-4">
    Powered by <a href="https://spectux.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">Spectux.com</a>
  </p>
</div>

      </div>
    </footer>
  );
};

export default Footer;