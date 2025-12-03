import { useState } from "react";
import { ExternalLink, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/enhanced-button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import projectBinnen1 from "@/assets/project-binnen-1-color.jpg";
import projectBinnen2 from "@/assets/project-binnen-2-color.jpg";
import projectBuiten1 from "@/assets/project-buiten-1-color.jpg";
import projectBuiten2 from "@/assets/project-buiten-2-color.jpg";
import project1 from "@/assets/Project1.jpg"
import project2 from "@/assets/Project2.jpg"
import project3 from "@/assets/Project3.jpg"
import project4 from "@/assets/Project4.jpg"
import project5 from "@/assets/Project5.jpg"
import project6 from "@/assets/Project6.jpg"
import project7 from "@/assets/Project7.jpg"
import project8 from "@/assets/Project8.jpg"
import project9 from "@/assets/Project9.jpg"
import vloer1 from "@/assets/vloer.jpg"
import vloer2 from "@/assets/Vloer2.jpg"
import Dakje1 from "@/assets/Dakje.jpg"
import Dakje2 from "@/assets/Dakje2.jpg"
import plafond1 from "@/assets/plafond1.jpeg"
import plafond2 from "@/assets/plafond2.jpeg"
import plafond3 from "@/assets/plafond3.jpeg"
import vloer3 from "@/assets/vloer3.jpeg"
import vloer4 from "@/assets/vloer4.jpeg"
import vloer5 from "@/assets/vloer5.jpeg"
import { Link } from "react-router-dom";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Vloer gerealiseerd",
      category: "binnen",
      images: [vloer5, vloer3, vloer4],
      description:
        "Een mooie & zeer nette vloer gerealiseerd! Klaar voor gebruik.",
      location: "Moergestel",
      duration: "1 week",
      details:
        "Een prachtige transformatie van een verouderde keuken naar een moderne, functionele ruimte.",
    },
    {
      id: 2,
      title: "Bestrating leggen!",
      category: "buiten",
      images: [project2, project1,],
      description:
        "Complete bestrating voor de klant, vanaf 0 opgebouwd ",
      location: "Moergestel",
      duration: "2 weken",
      details:
        "Een prachtige transformatie van een verouderde keuken naar een moderne, functionele ruimte.",
    },
    {
      id: 3,
      title: "Luxe slaapkamer makeover",
      category: "binnen",
      images: [project4, project3],
      description: "Mooie akoestische panelen, voor een slaapkamer makeover!",
      location: "Tilburg",
      duration: "2 weken",
      details:
        "Complete transformatie met focus op natuurlijke materialen en moderne functionaliteit.",
    },
    {
      id: 4,
      title: "Montage openslaande deuren",
      category: "binnen",
      images:  [ project6, project5,  project7],
      description: "Keurig maatwerk geleverd voor de klant. Een luxe en ruime doorgang",
      location: "Tilburg",
      duration: "1 dag",
      details:
        "Een volledig op maat gemaakt tuinhuis met geïntegreerd terras.",
    },
    {
      id: 5,
      title: "Wegwerking leidingen",
      category: "buiten",
      images: [project8, project9],
      description:
        "Leidingen keurig weg gewerkt, klaar om gestuct te worden!",
      location: "Tilburg",
      duration: "1 dag",
      details:
        "De perfecte schaduwplek met een functionele buitenkeuken voor ultiem buitenleven.",
    },
        {
      id: 6,
      title: "Dak renovatie",
      category: "buiten",
      images: [Dakje2, Dakje1],
      description:
        "Dak renovatie, opnieuw gelegd en gemonteerd.",
      location: "Moergestel",
      duration: "1 dag",
      details:
        "De perfecte schaduwplek met een functionele buitenkeuken voor ultiem buitenleven.",
    },
            {
      id: 7,
      title: "Tegelvloer gelegd",
      category: "binnen",
      images: [vloer1, vloer2],
      description:
        "Binnen tegelvloer gelegd, strak en mooi afgewerkt.",
      location: "Moergestel",
      duration: "1 dag",
      details:
        "De perfecte schaduwplek met een functionele buitenkeuken voor ultiem buitenleven.",
    },
            {
      id: 8,
      title: "Plafond renovatie",
      category: "binnen",
      images: [plafond2, plafond3, plafond2, plafond1],
      description:
        "Een before & after van ons werk. Wij hebben de balk laag verstevigd, geïsoleerd, het plafond dicht gegipst & netjes de naden dicht gezet. Dit plafond is nu behangklaar!",
      location: "Moergestel",
      duration: "1 week",
      details:
        "De perfecte schaduwplek met een functionele buitenkeuken voor ultiem buitenleven.",
    },
  ];

  const categories = [
    { id: "all", name: "Alle Projecten" },
    { id: "binnen", name: "Binnen" },
    { id: "buiten", name: "Buiten" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-subtle">
          <div className="container mx-auto px-6">

            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-4xl font-bold text-primary mb-4">
                Onze Projecten
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Bekijk een selectie van onze recent uitgevoerde projecten en
                laat u inspireren door de kwaliteit van ons vakmanschap.
              </p>
            </div>

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

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="bg-card rounded-xl overflow-hidden shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
<div className="relative w-full h-64 md:h-96 lg:h-[500px]">
                    <Carousel>
                      <CarouselContent>
                        {project.images.map((img, i) => (
                          <CarouselItem key={i}>
                            <img
                              src={img}
                              className="w-full h-64 md:h-96 lg:h-[500px] object-cover"
                              alt={`${project.title} foto ${i + 1}`}
                            />
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow" />
                      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-2 shadow" />
                    </Carousel>
                  </div>

                  <div className="p-6 space-y-4">
                    <h2 className="text-xl font-bold text-primary mb-2">
                      {project.title}
                    </h2>
                    <p className="text-muted-foreground">{project.description}</p>

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
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center bg-card p-8 rounded-xl shadow-elegant">
              <h2 className="text-2xl font-bold text-primary mb-4">
                Uw Project Staat Hier
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Heeft u een project in gedachten? Van kleine reparaties tot
                complete verbouwingen - wij helpen u graag bij het realiseren van
                uw dromen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button variant="hero" size="hero" className="group">
                    Plan Een Gratis Consult
                    <span className="ml-2 group-hover:translate-x-1 transition-transform">
                      →
                    </span>
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
