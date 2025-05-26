import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { CalendarIcon, ClockIcon, Bike } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Agenda = () => {
  const {
    data: rides,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["rides"],
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

      return processedData
        .filter((ride) => ride.sortableDate >= today)
        .sort((a, b) => a.sortableDate.getTime() - b.sortableDate.getTime());
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Ritten Agenda
              </h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Bekijk alle geplande ritten en schrijf je in. Voor elk niveau en
                elke afstand hebben we een geschikte tocht.
              </p>
            </div>

            {isLoading ? (
              <div className="flex justify-center py-12">
                <div className="animate-pulse flex space-x-4">
                  <div className="w-full space-y-6">
                    {[...Array(3)].map((_, index) => (
                      <div
                        key={index}
                        className="h-32 bg-gray-200 rounded-lg"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-500">
                  Er is een fout opgetreden bij het laden van de ritten.
                </p>
                <Button
                  onClick={() => window.location.reload()}
                  className="mt-4"
                >
                  Probeer opnieuw
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {rides?.map((ride) => (
                  <Card
                    key={ride.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-xl font-bold text-gray-900">
                          {ride.title}
                        </CardTitle>
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
                      <CardDescription>
                        <div className="flex items-center text-gray-600 mt-2">
                          <CalendarIcon className="w-5 h-5 mr-2" />
                          <span>
                            {ride.date} - {ride.time}
                          </span>
                        </div>
                        <div className="flex items-center text-gray-600 mt-2">
                          <Bike className="w-5 h-5 mr-2" />
                          <span>{ride.distance} km</span>
                        </div>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">{ride.description}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center pt-2">
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">
                          {ride.participants}/{ride.max_participants}
                        </span>{" "}
                        deelnemers
                      </div>
                      <Button className="bg-cycling-blue hover:bg-blue-600">
                        Inschrijven
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}

            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Agenda;
