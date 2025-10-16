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
      description: "Tuinhuizen, pergola's, bestrating, schuttingen en terrassen"
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
                Over Van de Wal Allround Service
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                
Welkom bij Van de Wal Allround Service – uw betrouwbare partner voor uiteenlopende klus- en onderhoudswerkzaamheden. Mijn naam is Dean van de Wal en ik ben de eigenaar van het bedrijf. Ik sta persoonlijk 

                <strong className="text-primary"> garant voor kwaliteit, vakmanschap en een nuchtere, eerlijke aanpak.</strong>
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
Met 5 jaar lang ervaring in het vak ben ik gespecialiseerd in allround klussen, zowel in als rondom het huis. Denk hierbij aan kleine renovaties, timmerwerk, tuinrenovaties, bestrating, tuinaanleg en nog veel meer. Geen project is te klein of te groot – ik denk graag met u mee en bied altijd een passende oplossing op maat.

              </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                <strong className="text-primary"> Wat mij onderscheidt? </strong> 
                  <br />
                Ik werk nauwkeurig, houd van duidelijkheid en kom mijn afspraken na. U kunt rekenen op een persoonlijke benadering, waarbij goed overleg en tevredenheid voorop staan. Bij Van de Wal Allround Service krijgt u geen grote organisatie, maar één aanspreekpunt met hart voor het werk én oog voor detail.

              </p>

                                          <p className="text-lg text-muted-foreground leading-relaxed">
          

Bent u op zoek naar een vakman die met u meedenkt en het werk netjes en vakkundig uitvoert? Neem gerust contact met mij op voor een vrijblijvende kennismaking of offerte.
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