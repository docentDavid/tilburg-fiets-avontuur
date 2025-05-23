import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRides } from "@/context/RidesContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

export default function UpcomingRides() {
  const { rides, loading, error } = useRides();

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Komende Ritten</h2>

        {error && (
          <Alert variant="destructive" className="mb-4">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {loading ? (
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin" />
          </div>
        ) : rides.length === 0 ? (
          <p className="text-center text-gray-500">
            Er zijn momenteel geen ritten gepland.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rides.map((ride) => (
              <Card key={ride.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>{ride.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {ride.date} om {ride.time}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Afstand:</span>{" "}
                    {ride.distance}
                  </p>
                  <p>
                    <span className="font-semibold">Niveau:</span> {ride.level}
                  </p>
                  <p className="mt-2">
                    <span className="font-semibold">Deelnemers:</span>{" "}
                    {ride.participants}/{ride.maxParticipants}
                  </p>
                  <p className="mt-4">{ride.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
