import { supabase } from "@/integrations/supabase/client";

const updateDistances = async () => {
  // Get all rides
  const { data: rides, error: fetchError } = await supabase
    .from("rides")
    .select("*");

  if (fetchError) {
    console.error("Error fetching rides:", fetchError);
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
      console.error(`Error updating ride ${ride.id}:`, updateError);
    } else {
      console.log(
        `Updated ride ${ride.id} distance from "${ride.distance}" to "${cleanDistance}"`
      );
    }
  }
};

// Run the update
updateDistances().then(() => {
  console.log("Distance update completed");
});
