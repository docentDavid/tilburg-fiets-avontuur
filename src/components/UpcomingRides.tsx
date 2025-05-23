import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CalendarIcon, ClockIcon, Bike } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const UpcomingRides = () => {
  const {
    data: rides,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["upcoming-rides"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("rides")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;

      // Convert date strings to a format that allows proper sorting
      const processedData = data.map((ride) => {
        // Extract day, month and year
        const dateParts = ride.date.split(" ");
        const day = parseInt(dateParts[0]);
        const monthNames = [
          "januari",
          "februari",
          "maart",
          "april",
          "mei",
          "juni",
          "juli",
          "augustus",
          "september",
          "oktober",
          "november",
          "december",
        ];
        const month = monthNames.indexOf(dateParts[1].toLowerCase());
        const year = parseInt(dateParts[2]);

        // Store a sortable date for filtering
        return {
          ...ride,
          sortableDate: new Date(year, month, day),
        };
      });

      // Filter out past rides and sort by date
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const futureRides = processedData
        .filter((ride) => ride.sortableDate >= today)
        .sort((a, b) => a.sortableDate.getTime() - b.sortableDate.getTime())
        .slice(0, 3); // Only take the first 3 rides

      return futureRides;
    },
  });

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Aankomende Ritten
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bekijk en schrijf je in voor onze geplande ritten. Voor elk niveau
            en elke afstand hebben we een geschikte tocht.
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse h-64"
              ></div>
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-8">
            <p className="text-red-500">
              Er is een fout opgetreden bij het laden van de ritten.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {rides?.map((ride) => (
              <div
                key={ride.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-bold text-gray-900">
                      {ride.title}
                    </h3>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        ride.level === "Uitdagend"
                          ? "bg-orange-100 text-orange-700"
                          : ride.level === "Gemiddeld"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {ride.level}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-3">
                    <CalendarIcon className="w-5 h-5 mr-2" />
                    <span>
                      {ride.date} - {ride.time}
                    </span>
                  </div>

                  <div className="flex items-center text-gray-600 mb-4">
                    <Bike className="w-5 h-5 mr-2" />
                    <span>{ride.distance} km</span>
                  </div>

                  <p className="text-gray-700 mb-6">{ride.description}</p>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">
                        {ride.participants}/{ride.max_participants}
                      </span>{" "}
                      deelnemers
                    </div>
                    <Button className="bg-cycling-blue hover:bg-blue-600">
                      Inschrijven
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            className="border-cycling-blue text-cycling-blue hover:bg-cycling-blue hover:text-white"
          >
            <Link to="/agenda">Bekijk Alle Ritten</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingRides;
