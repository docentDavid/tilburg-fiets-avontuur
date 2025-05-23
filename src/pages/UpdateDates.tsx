import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

const UpdateDates = () => {
  const [status, setStatus] = useState<string>("Starting update...");

  useEffect(() => {
    const updateDates = async () => {
      try {
        // Get all rides
        const { data: rides, error: fetchError } = await supabase
          .from("rides")
          .select("*");

        if (fetchError) {
          setStatus(`Error fetching rides: ${fetchError.message}`);
          return;
        }

        // Update each ride's date format
        for (const ride of rides) {
          const date = new Date(ride.date);
          const formattedDate = `${date.getDate()} ${
            monthNames[date.getMonth()]
          } ${date.getFullYear()}`;

          const { error: updateError } = await supabase
            .from("rides")
            .update({ date: formattedDate })
            .eq("id", ride.id);

          if (updateError) {
            setStatus(`Error updating ride ${ride.id}: ${updateError.message}`);
          } else {
            setStatus(`Updated ride ${ride.id} date to ${formattedDate}`);
          }
        }

        setStatus("Date update completed successfully!");
      } catch (error) {
        setStatus(
          `An error occurred: ${
            error instanceof Error ? error.message : String(error)
          }`
        );
      }
    };

    updateDates();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">Update Dates</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          <p>{status}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateDates;
