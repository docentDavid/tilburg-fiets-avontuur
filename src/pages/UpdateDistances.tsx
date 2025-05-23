import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const UpdateDistances = () => {
  const [status, setStatus] = useState<string>("Starting update...");

  useEffect(() => {
    const updateDistances = async () => {
      // Get all rides
      const { data: rides, error: fetchError } = await supabase
        .from("rides")
        .select("*");

      if (fetchError) {
        setStatus(`Error fetching rides: ${fetchError.message}`);
        return;
      }

      // Update each ride's distance format
      for (const ride of rides) {
        // Remove 'km' and spaces from distance
        const cleanDistance = ride.distance.replace(/km|\s/g, "");

        const { error: updateError } = await supabase
          .from("rides")
          .update({ distance: cleanDistance })
          .eq("id", ride.id);

        if (updateError) {
          setStatus(`Error updating ride ${ride.id}: ${updateError.message}`);
        } else {
          setStatus(
            `Updated ride ${ride.id} distance from "${ride.distance}" to "${cleanDistance}"`
          );
        }
      }

      setStatus("Distance update completed");
    };

    updateDistances();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Update Distances</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <p className="text-gray-700">{status}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UpdateDistances;
