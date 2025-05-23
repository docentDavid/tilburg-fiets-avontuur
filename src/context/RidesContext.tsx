import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { supabase } from "@/lib/supabase";

interface Ride {
  id: number;
  title: string;
  date: string;
  time: string;
  distance: string;
  level: string;
  participants: number;
  maxParticipants: number;
  description: string;
}

interface RidesContextType {
  rides: Ride[];
  setRides: (rides: Ride[]) => void;
  addRide: (ride: Omit<Ride, "id">) => void;
  updateRide: (id: number, ride: Partial<Ride>) => void;
  deleteRide: (id: number) => void;
  loading: boolean;
  error: string | null;
}

const RidesContext = createContext<RidesContextType | undefined>(undefined);

export function RidesProvider({ children }: { children: ReactNode }) {
  const [rides, setRides] = useState<Ride[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Laad ritten bij het opstarten
  useEffect(() => {
    fetchRides();
  }, []);

  const fetchRides = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("fietsclubtilburg")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      setRides(data || []);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een fout opgetreden bij het laden van de ritten"
      );
    } finally {
      setLoading(false);
    }
  };

  const addRide = async (ride: Omit<Ride, "id">) => {
    try {
      const { data, error } = await supabase
        .from("fietsclubtilburg")
        .insert([ride])
        .select()
        .single();

      if (error) throw error;
      if (data) {
        setRides([...rides, data]);
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een fout opgetreden bij het toevoegen van de rit"
      );
    }
  };

  const updateRide = async (id: number, updatedRide: Partial<Ride>) => {
    try {
      const { data, error } = await supabase
        .from("fietsclubtilburg")
        .update(updatedRide)
        .eq("id", id)
        .select()
        .single();

      if (error) throw error;
      if (data) {
        setRides(rides.map((ride) => (ride.id === id ? data : ride)));
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een fout opgetreden bij het bijwerken van de rit"
      );
    }
  };

  const deleteRide = async (id: number) => {
    try {
      const { error } = await supabase
        .from("fietsclubtilburg")
        .delete()
        .eq("id", id);

      if (error) throw error;
      setRides(rides.filter((ride) => ride.id !== id));
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Er is een fout opgetreden bij het verwijderen van de rit"
      );
    }
  };

  return (
    <RidesContext.Provider
      value={{
        rides,
        setRides,
        addRide,
        updateRide,
        deleteRide,
        loading,
        error,
      }}
    >
      {children}
    </RidesContext.Provider>
  );
}

export function useRides() {
  const context = useContext(RidesContext);
  if (context === undefined) {
    throw new Error("useRides must be used within a RidesProvider");
  }
  return context;
}
