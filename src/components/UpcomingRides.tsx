
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const UpcomingRides = () => {
  const rides = [
    {
      id: 1,
      title: 'Zondagse Groepsrit',
      date: '28 mei 2025',
      time: '09:00',
      distance: '60 km',
      level: 'Gemiddeld',
      participants: 15,
      maxParticipants: 20,
      description: 'Een ontspannen groepsrit door de landelijke omgeving van Tilburg. Tempo ongeveer 26-28 km/u.'
    },
    {
      id: 2,
      title: 'Avond Klimtraining',
      date: '30 mei 2025',
      time: '18:30',
      distance: '40 km',
      level: 'Uitdagend',
      participants: 8,
      maxParticipants: 12,
      description: 'Klimtraining met herhalingen op de heuvels rondom Tilburg. Focus op techniek en kracht.'
    },
    {
      id: 3,
      title: 'Koffiestop Rit',
      date: '1 juni 2025',
      time: '10:00',
      distance: '80 km',
      level: 'Gemiddeld',
      participants: 12,
      maxParticipants: 25,
      description: 'Een langere rit met een gezellige koffiestop halverwege. Tempo ongeveer 25-27 km/u.'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Aankomende Ritten</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bekijk en schrijf je in voor onze geplande ritten. Voor elk niveau en elke afstand hebben we een geschikte tocht.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rides.map((ride) => (
            <div key={ride.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-heading font-bold text-gray-900">{ride.title}</h3>
                  <span className="bg-blue-100 text-cycling-blue px-3 py-1 rounded-full text-sm font-medium">
                    {ride.level}
                  </span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-3">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>{ride.date} - {ride.time}</span>
                </div>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                  <span>{ride.distance}</span>
                </div>
                
                <p className="text-gray-700 mb-6">{ride.description}</p>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{ride.participants}/{ride.maxParticipants}</span> deelnemers
                  </div>
                  <Button className="bg-cycling-blue hover:bg-blue-600">Inschrijven</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button asChild variant="outline" className="border-cycling-blue text-cycling-blue hover:bg-cycling-blue hover:text-white">
            <Link to="/agenda">Bekijk Alle Ritten</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRides;
