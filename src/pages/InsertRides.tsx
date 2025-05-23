import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const InsertRides = () => {
  const [status, setStatus] = useState<string>("");

  const newRides = [
    {
      title: "Oisterwijkse Bossen Tour",
      date: "15 juli 2024",
      time: "09:00",
      distance: "45 km",
      level: "Gemiddeld",
      max_participants: 15,
      participants: 0,
      description:
        "Een prachtige tocht door de Oisterwijkse bossen met mooie singletracks en verharde paden. Perfect voor een zomerse ochtendrit.",
    },
    {
      title: "Kampina Natuurgebied",
      date: "22 juli 2024",
      time: "10:00",
      distance: "35 km",
      level: "Beginner",
      max_participants: 20,
      participants: 0,
      description:
        "Ontdek het mooie Kampina natuurgebied met deze toegankelijke route. Ideaal voor beginnende fietsers.",
    },
    {
      title: "Kempen Challenge",
      date: "29 juli 2024",
      time: "08:30",
      distance: "75 km",
      level: "Uitdagend",
      max_participants: 12,
      participants: 0,
      description:
        "Een uitdagende route door de Kempen met enkele stevige klimmetjes. Voor ervaren fietsers die een uitdaging zoeken.",
    },
    {
      title: "Tilburg City Tour",
      date: "5 augustus 2024",
      time: "14:00",
      distance: "25 km",
      level: "Beginner",
      max_participants: 25,
      participants: 0,
      description:
        "Een ontspannen fietstocht door Tilburg en omgeving. Perfect voor een zonnige zondagmiddag.",
    },
    {
      title: "Brabantse Heuvels",
      date: "12 augustus 2024",
      time: "09:30",
      distance: "60 km",
      level: "Uitdagend",
      max_participants: 15,
      participants: 0,
      description:
        "Een pittige route door de Brabantse heuvels met mooie uitzichten en uitdagende klimmetjes.",
    },
    {
      title: "Moerenburg Route",
      date: "19 augustus 2024",
      time: "10:30",
      distance: "40 km",
      level: "Gemiddeld",
      max_participants: 18,
      participants: 0,
      description:
        "Een gevarieerde route door het mooie Moerenburg gebied met een mix van verharde en onverharde paden.",
    },
  ];

  useEffect(() => {
    async function insertRides() {
      try {
        const { data, error } = await supabase
          .from("rides")
          .insert(newRides)
          .select();

        if (error) {
          setStatus(`Error: ${error.message}`);
        } else {
          setStatus(`Successfully inserted ${data.length} rides`);
        }
      } catch (error) {
        setStatus(
          `Error: ${error instanceof Error ? error.message : "Unknown error"}`
        );
      }
    }

    insertRides();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Insert Rides</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-700">{status || "Inserting rides..."}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InsertRides;
