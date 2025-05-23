import { supabase } from "@/integrations/supabase/client";

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

const updateDates = async () => {
  // Get all rides
  const { data: rides, error: fetchError } = await supabase
    .from("rides")
    .select("*");

  if (fetchError) {
    console.error("Error fetching rides:", fetchError);
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
      console.error(`Error updating ride ${ride.id}:`, updateError);
    } else {
      console.log(`Updated ride ${ride.id} date to ${formattedDate}`);
    }
  }
};

// Run the update
updateDates().then(() => {
  console.log("Date update completed");
});
