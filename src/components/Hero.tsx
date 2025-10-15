import { Button } from "@/components/ui/enhanced-button";
import { Hammer, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/HeroPhoto.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Dean van de Wal
                <span className="block text-3xl lg:text-4xl text-muted-foreground font-normal mt-2">
                  Allround Service
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Professionele timmerman met passie voor vakmanschap. 
                Van maatwerk binnen tot tuinprojecten buiten - 
                <strong className="text-primary"> snel, betrouwbaar en perfect afgewerkt.</strong>
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant">
                <Hammer className="text-primary animate-float" size={24} />
                <span className="font-medium">Vakmanschap</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant">
                <Award className="text-primary animate-float" size={24} />
                <span className="font-medium">Kwaliteit</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-card rounded-lg shadow-elegant">
                <Clock className="text-primary animate-float" size={24} />
                <span className="font-medium">Snelheid</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="hero" className="group">
                  Gratis Offerte Aanvragen
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" size="hero">
                  Bekijk Projecten
                </Button>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="pt-6 border-t border-border">
              <p className="text-muted-foreground">
                Direct contact: 
                <a href="tel:+31615383300" className="text-primary font-semibold ml-2 hover:underline">
                  +31 6 15383300
                </a>
              </p>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative animate-scale-in">
            <div className="relative overflow-hidden rounded-2xl shadow-hover">
              <img 
                src={heroImage} 
                alt="Dean van de Wal aan het werk" 
                className="w-full h-[600px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-hover animate-float">
              <div className="text-center">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Jaar ervaring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;