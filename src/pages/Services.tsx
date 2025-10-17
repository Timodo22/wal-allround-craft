import { Home, TreePine, Wrench, Ruler, Palette, Shield } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      icon: Home,
      category: "Binnen Projecten",
      title: "Timmerwerk & Renovatie",
      description: "Complete binnenverbouwingen met oog voor detail",
      items: ["Vloeren", "Plafonds", "Wandbekleding"]
    },
    {
      icon: TreePine,
      category: "Buiten Projecten", 
      title: "Tuinaanleg & tuin renovatie",
      description: "Van tuinhuizen tot terrassen - alles voor buiten",
      items: ["Schuttingen", "Terrassen", "Carports","Bestrating"]
    },
    {
      icon: Wrench,
      category: "Onderhoud",
      title: "Reparatie & Onderhoud",
      description: "Snel en vakkundig onderhoud van uw eigendommen",
      items: ["Reparaties", "Kleine verbouwingen", "Noodservice"]
    }
  ];

  const benefits = [
    {
      icon: Ruler,
      title: "Maatwerk",
      description: "Elk project wordt speciaal voor u ontworpen en uitgevoerd"
    },
    {
      icon: Palette,
      title: "Design & Advies",
      description: "Persoonlijk advies voor het beste eindresultaat"
    },
    {
      icon: Shield,
      title: "Garantie",
      description: "Volledige garantie op al onze werkzaamheden"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Onze Diensten
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Van kleine reparaties tot complete verbouwingen - wij zorgen voor vakmanschap 
                en kwaliteit in elk project, binnen én buiten.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-primary/10 p-4 rounded-lg w-fit mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="text-primary" size={32} />
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm font-medium text-primary uppercase tracking-wider">
                        {service.category}
                      </span>
                      <h2 className="text-xl font-bold text-primary mt-1">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mt-2">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-2">
                      {service.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-gradient-subtle p-8 rounded-2xl">
              <h2 className="text-2xl font-bold text-primary text-center mb-8">
                Waarom Van de Wal Allround Service?
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className="text-center group"
                  >
                    <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <benefit.icon className="text-primary" size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link to="/contact">
                <Button variant="hero" size="hero" className="group">
                  Vraag Nu Een Offerte Aan
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Button>
              </Link>
              <p className="text-muted-foreground mt-4">
                Gratis advies en offerte binnen 24 uur
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;