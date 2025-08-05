import { useState } from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import projectBinnen1 from "@/assets/project-binnen-1-color.jpg";
import projectBinnen2 from "@/assets/project-binnen-2-color.jpg";
import projectBuiten1 from "@/assets/project-buiten-1-color.jpg";
import projectBuiten2 from "@/assets/project-buiten-2-color.jpg";
import { Link } from "react-router-dom";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Moderne Keuken Renovatie",
      category: "binnen",
      image: projectBinnen1,
      description: "Complete keukenrenovatie met maatwerk kasten en hoogwaardige afwerking",
      location: "Amsterdam",
      duration: "3 weken",
      details: "Een prachtige transformatie van een verouderde keuken naar een moderne, functionele ruimte. Inclusief maatwerk kastenwand, kookeiland en premium werkbladen."
    },
    {
      id: 2,
      title: "Luxe Badkamer Verbouwing",
      category: "binnen", 
      image: projectBinnen2,
      description: "Volledige badkamer renovatie met custom houten meubels",
      location: "Utrecht",
      duration: "2 weken",
      details: "Een complete badkamer transformatie met focus op natuurlijke materialen en moderne functionaliteit. Custom houten wastafelmeubel en strakke tegelwerkzaamheden."
    },
    {
      id: 3,
      title: "Tuinhuis & Terras Project",
      category: "buiten",
      image: projectBuiten1,
      description: "Maatwerk tuinhuis met bijpassend houten terras",
      location: "Den Haag",
      duration: "4 weken", 
      details: "Een volledig op maat gemaakt tuinhuis met geïntegreerd terras. Gebruik van duurzame houtsoorten en weerbestendige afwerking voor jarenlang plezier."
    },
    {
      id: 4,
      title: "Pergola & Buitenkeuken",
      category: "buiten",
      image: projectBuiten2,
      description: "Elegante pergola constructie met geïntegreerde buitenkeuken",
      location: "Rotterdam",
      duration: "3 weken",
      details: "Een prachtige pergola die de perfecte schaduwplek creëert, gecombineerd met een functionele buitenkeuken voor het ultieme buitenleven."
    }
  ];

  const categories = [
    { id: "all", name: "Alle Projecten" },
    { id: "binnen", name: "Binnen" },
    { id: "buiten", name: "Buiten" }
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Onze Projecten
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bekijk een selectie van onze recent uitgevoerde projecten en 
                laat u inspireren door de kwaliteit van ons vakmanschap.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex justify-center mb-12">
              <div className="bg-card p-2 rounded-lg shadow-elegant">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground shadow-elegant"
                        : "text-muted-foreground hover:text-primary hover:bg-secondary"
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.category === 'binnen' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-green-100 text-green-800'
                      }`}>
                        {project.category === 'binnen' ? 'Binnen' : 'Buiten'}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div>
                      <h2 className="text-xl font-bold text-primary mb-2">
                        {project.title}
                      </h2>
                      <p className="text-muted-foreground">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{project.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                      <Button variant="outline" className="w-full group">
                        Bekijk Project Details
                        <ExternalLink className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="text-center bg-card p-8 rounded-xl shadow-elegant">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Uw Project Staat Hier
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Heeft u een project in gedachten? Van kleine reparaties tot complete verbouwingen - 
                wij helpen u graag bij het realiseren van uw dromen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="hero" className="group">
                    Plan Een Gratis Consult
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                  </Button>
                </Link>
                <Button variant="outline" size="hero">
                  Bekijk Meer Projecten
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;