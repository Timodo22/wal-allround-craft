import { CheckCircle, Wrench, Home, TreePine } from "lucide-react";

const About = () => {
  const achievements = [
    "Afgestudeerd timmerman met certificering",
    "5+ jaar ervaring in de bouw",
    "Gespecialiseerd in maatwerk projecten",
    "Binnen én buiten werkzaamheden",
    "100% tevreden klanten"
  ];

  const expertise = [
    {
      icon: Home,
      title: "Binnen Projecten",
      description: "Keukens, badkamers, inbouwkasten, vloeren en meer"
    },
    {
      icon: TreePine,
      title: "Buiten Projecten", 
      description: "Tuinhuizen, pergola's, schuttingen en terrassen"
    },
    {
      icon: Wrench,
      title: "Renovaties",
      description: "Complete verbouwingen en onderhoudswerkzaamheden"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-primary">
                Over Dean van de Wal
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Als gedreven vakman met een grote passie voor bouw en tuinwerk, 
                lever ik al meer dan 5 jaar hoogwaardige diensten. Mijn focus ligt op 
                <strong className="text-primary"> perfecte afwerking, betrouwbaarheid en klanttevredenheid.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Of het nu gaat om een complete keukenrenovatie, het bouwen van een tuinhuis, 
                of het aanleggen van een prachtig terras - elk project wordt met dezelfde 
                zorgvuldigheid en professionaliteit uitgevoerd.
              </p>
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Waarom kiezen voor Dean?</h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="text-primary flex-shrink-0 group-hover:scale-110 transition-transform" size={20} />
                    <span className="text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Expertise Cards */}
          <div className="space-y-6 animate-scale-in">
            <h3 className="text-2xl font-semibold text-primary text-center mb-8">
              Mijn Expertise
            </h3>
            
            <div className="space-y-6">
              {expertise.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <item.icon className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center pt-6">
              <p className="text-muted-foreground mb-4">
                Klaar om jouw project te realiseren?
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-semibold hover:underline group"
              >
                Neem direct contact op 
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;