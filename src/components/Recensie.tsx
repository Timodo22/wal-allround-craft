import { Star } from "lucide-react";

const Recensie = () => {
  const reviews = [
    {
      name: "Maartje Overbeeke",
      text: "Heel erg tevreden over Van de Wal Allround service. Hebben onze voortuin een prachtige make over gegeven. Komt afspraken na, werkt snel en is vakkundig! Zeker een aanrader.",
      rating: 5,
      image: "/src/assets/recensie1.jpeg" // <-- Voeg hier je afbeelding toe
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary text-center mb-12 animate-fade-in">
          Wat Klanten Zeggen
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 animate-scale-in">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-elegant hover:shadow-hover transition-all duration-300 hover:scale-105 group"
            >
              {/* Afbeelding bovenaan */}
              {review.image && (
                <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Stars */}
              <div className="flex mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-primary fill-primary"
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground leading-relaxed mb-4">
                “{review.text}”
              </p>

              {/* Name */}
              <h4 className="text-lg font-semibold text-primary">
                – {review.name}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center pt-10">
          <p className="text-muted-foreground mb-4">
            Wilt u uw ervaring delen?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center text-primary font-semibold hover:underline group"
          >
            Neem contact op
            <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recensie;
