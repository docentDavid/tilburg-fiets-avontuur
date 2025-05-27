import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        <div className="bg-cycling-blue text-white py-16">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Over Wielrenclub Tilburg
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Een sportieve en toegankelijke fietsclub voor iedereen die houdt
              van wielrennen.
            </p>
          </div>
        </div>

        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                  Onze Geschiedenis
                </h2>
                <p className="text-lg text-gray-700 mb-4">
                  Wielrenclub Tilburg werd opgericht in 2010 door een groep
                  enthousiaste wielrenners die een toegankelijke fietsclub
                  wilden creëren voor alle niveaus. Wat begon als een kleine
                  groep vrienden is uitgegroeid tot een levendige gemeenschap
                  van meer dan 150 fietsliefhebbers.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Door de jaren heen hebben we ons gericht op het stimuleren van
                  de wielersport in de regio Tilburg, het organiseren van
                  diverse evenementen en het bieden van een sociaal platform
                  voor fietsers.
                </p>
                <p className="text-lg text-gray-700">
                  Vandaag de dag blijven we trouw aan onze oorspronkelijke
                  missie: een inclusieve omgeving bieden waar iedereen, van
                  beginner tot ervaren renner, kan genieten van de wielersport.
                </p>
              </div>

              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                  alt="Wielrenners in actie"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                Onze Missie en Visie
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Bij Wielrenclub Tilburg streven we ernaar om meer mensen
                enthousiast te maken voor de wielersport en een gemeenschap te
                creëren waar passie voor fietsen centraal staat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Missie</h3>
                <p className="text-gray-700">
                  Onze missie is om een inclusieve en ondersteunende omgeving te
                  bieden waar wielrenners van alle niveaus hun passie voor
                  fietsen kunnen delen, vaardigheden kunnen verbeteren en nieuwe
                  vriendschappen kunnen opbouwen. We willen de wielersport
                  toegankelijk maken voor iedereen in Tilburg en omgeving.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Visie</h3>
                <p className="text-gray-700">
                  Onze visie is om dé toonaangevende wielrenclub in de regio te
                  zijn, bekend om onze inclusiviteit, kwaliteit van evenementen,
                  en bijdrage aan de lokale gemeenschap. We streven ernaar om
                  wielrennen te promoten als een gezonde, duurzame en plezierige
                  activiteit voor mensen van alle leeftijden en achtergronden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
              Ons Bestuur
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Peter de Vries",
                  role: "Voorzitter",
                  image:
                    "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
                  bio: "Peter is sinds 2015 voorzitter en zorgt ervoor dat de club blijft groeien met behoud van de gezellige sfeer.",
                },
                {
                  name: "Laura Janssen",
                  role: "Secretaris",
                  image:
                    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
                  bio: "Als secretaris houdt Laura alle administratieve zaken bij en is ze het eerste aanspreekpunt voor leden en geïnteresseerden.",
                },
                {
                  name: "Mark Bakker",
                  role: "Penningmeester",
                  image:
                    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
                  bio: "Mark bewaakt de financiën van de club en zorgt ervoor dat we verantwoord omgaan met de contributie en sponsorgelden.",
                },
                {
                  name: "Sophie de Boer",
                  role: "Evenementencoördinator",
                  image:
                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1022&q=80",
                  bio: "Sophie organiseert alle clubevenementen, van wekelijkse ritten tot speciale evenementen en fietsvakanties.",
                },
                {
                  name: "Thomas van Dijk",
                  role: "Routeplanner",
                  image:
                    "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1634&q=80",
                  bio: "Thomas kent de regio als geen ander en zet de mooiste en meest uitdagende routes uit voor onze clubritten.",
                },
                {
                  name: "Emma Visser",
                  role: "Communicatie & PR",
                  image:
                    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
                  bio: "Emma verzorgt alle communicatie naar leden en de buitenwereld via onze website, nieuwsbrief en sociale media.",
                },
              ].map((person, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-cycling-blue font-medium mb-3">
                      {person.role}
                    </p>
                    <p className="text-gray-700">{person.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
