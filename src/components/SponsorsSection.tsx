
const SponsorsSection = () => {
  // Placeholders for sponsor logos
  const sponsors = [
    {
      id: 1,
      name: 'Fietsspecialist Tilburg',
      logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Fietsspecialist+Tilburg&font=open-sans'
    },
    {
      id: 2,
      name: 'Sportvoeding XL',
      logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Sportvoeding+XL&font=open-sans'
    },
    {
      id: 3,
      name: 'Tilburgse Fietsverhuur',
      logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Tilburgse+Fietsverhuur&font=open-sans'
    },
    {
      id: 4,
      name: 'Café De Trappers',
      logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Café+De+Trappers&font=open-sans'
    },
    {
      id: 5,
      name: 'Sportkleding Online',
      logo: 'https://placehold.co/200x100/e2e8f0/64748b?text=Sportkleding+Online&font=open-sans'
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">Onze Sponsoren</h2>
          <p className="text-gray-600">Deze partners maken onze activiteiten mogelijk. Ondersteun hen!</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {sponsors.map((sponsor) => (
            <div key={sponsor.id} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name} 
                className="h-12 md:h-16 w-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
