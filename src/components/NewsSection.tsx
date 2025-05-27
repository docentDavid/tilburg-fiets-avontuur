import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "Zomer Fietsweek in de Ardennen",
      date: "15 mei 2025",
      excerpt:
        "Dit jaar organiseren we weer een geweldige fietsweek in de Ardennen. Inclusief bagagevervoer, begeleiding en verblijf.",
      image: "/images/cycling-ardennes.jpg",
    },
    {
      id: 2,
      title: "Nieuwe Clubkleding Nu Beschikbaar",
      date: "10 mei 2025",
      excerpt:
        "Onze nieuwe clubkleding is binnen! Leden kunnen nu hun bestelling plaatsen via het ledenportaal.",
      image: "/images/cycling-clothing.jpg",
    },
    {
      id: 3,
      title: "Workshop Fietsonderhoud",
      date: "5 mei 2025",
      excerpt:
        "Leer hoe je zelf kleine reparaties en onderhoud aan je fiets kunt doen tijdens onze workshop op 20 mei.",
      image: "/images/bike-repair.jpg",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Laatste Nieuws
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Blijf op de hoogte van de laatste clubactiviteiten, evenementen en
            belangrijk nieuws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{item.date}</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700 mb-4">{item.excerpt}</p>

                <Link
                  to={`/nieuws/${item.id}`}
                  className="text-cycling-blue font-medium hover:text-blue-700 inline-flex items-center"
                >
                  Lees meer
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-cycling-blue text-cycling-blue hover:bg-cycling-blue hover:text-white"
          >
            <Link to="/nieuws">Alle Nieuwsberichten</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
