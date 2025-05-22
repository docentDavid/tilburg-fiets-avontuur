
import { Calendar, Users, MapPin } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      title: 'Georganiseerde Ritten',
      description: 'Wekelijkse groepsritten voor alle niveaus, van recreatieve fietsers tot fanatieke wielrenners.',
      icon: Calendar,
      color: 'bg-cycling-blue'
    },
    {
      title: 'Actieve Gemeenschap',
      description: 'Word deel van een hechte fietsgemeenschap met regelmatige sociale activiteiten en events.',
      icon: Users,
      color: 'bg-cycling-orange'
    },
    {
      title: 'Gevarieerde Routes',
      description: 'Ontdek de mooiste fietsroutes in en rondom Tilburg, van vlakke wegen tot uitdagende klimmetjes.',
      icon: MapPin,
      color: 'bg-cycling-green'
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Waarom lid worden van Wielrenclub Tilburg?
          </h2>
          <p className="text-lg text-gray-600">
            Wij bieden jou alles wat je nodig hebt om jouw wielrenervaring naar een hoger niveau te tillen,
            in een gezellige en ondersteunende omgeving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow border border-gray-100"
            >
              <div className={`${feature.color} rounded-full w-14 h-14 flex items-center justify-center mb-6`}>
                <feature.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
