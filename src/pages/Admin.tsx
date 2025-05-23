import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { nl } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";

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

const timeSlots = [
  "00:00",
  "00:30",
  "01:00",
  "01:30",
  "02:00",
  "02:30",
  "03:00",
  "03:30",
  "04:00",
  "04:30",
  "05:00",
  "05:30",
  "06:00",
  "06:30",
  "07:00",
  "07:30",
  "08:00",
  "08:30",
  "09:00",
  "09:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "12:00",
  "12:30",
  "13:00",
  "13:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
  "22:00",
  "22:30",
  "23:00",
  "23:30",
];

const Admin = () => {
  const [selectedRide, setSelectedRide] = useState<any>(null);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [date, setDate] = useState<Date>();

  const {
    data: rides,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["rides"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("rides")
        .select("*")
        .order("date", { ascending: true });

      if (error) throw error;
      return data;
    },
  });

  const handleEdit = (ride: any) => {
    setSelectedRide(ride);
    const [day, month, year] = ride.date.split(" ");
    const monthIndex = monthNames.indexOf(month.toLowerCase());
    setDate(new Date(parseInt(year), monthIndex, parseInt(day)));
    setIsEditDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Weet je zeker dat je deze rit wilt verwijderen?")) {
      const { error } = await supabase.from("rides").delete().eq("id", id);

      if (error) {
        alert("Er is een fout opgetreden bij het verwijderen van de rit.");
      } else {
        refetch();
      }
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    if (!date) {
      alert("Selecteer een datum");
      return;
    }

    const formattedDate = `${date.getDate()} ${
      monthNames[date.getMonth()]
    } ${date.getFullYear()}`;

    // Extract only the number from the distance input
    const distanceInput = formData.get("distance") as string;
    const distanceNumber = parseInt(distanceInput.replace(/[^0-9]/g, ""));

    const rideData = {
      title: formData.get("title") as string,
      date: formattedDate,
      time: formData.get("time") as string,
      distance: distanceNumber.toString(),
      level: formData.get("level") as string,
      max_participants: parseInt(formData.get("max_participants") as string),
      description: formData.get("description") as string,
    };

    if (selectedRide) {
      // Update existing ride
      const { error } = await supabase
        .from("rides")
        .update(rideData)
        .eq("id", selectedRide.id);

      if (error) {
        alert("Er is een fout opgetreden bij het bijwerken van de rit.");
      } else {
        setIsEditDialogOpen(false);
        refetch();
      }
    } else {
      // Add new ride
      const { error } = await supabase
        .from("rides")
        .insert([{ ...rideData, participants: 0 }]);

      if (error) {
        alert("Er is een fout opgetreden bij het toevoegen van de rit.");
      } else {
        setIsAddDialogOpen(false);
        refetch();
      }
    }
  };

  const renderForm = (isEdit: boolean = false) => (
    <form onSubmit={handleSave} className="space-y-4">
      <div>
        <Label htmlFor={isEdit ? "edit-title" : "title"}>Titel</Label>
        <Input
          id={isEdit ? "edit-title" : "title"}
          name="title"
          defaultValue={isEdit ? selectedRide?.title : ""}
          required
        />
      </div>
      <div>
        <Label>Datum</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date
                ? format(date, "PPP", { locale: nl })
                : "Selecteer een datum"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              initialFocus
              locale={nl}
            />
          </PopoverContent>
        </Popover>
      </div>
      <div>
        <Label htmlFor={isEdit ? "edit-time" : "time"}>Tijd</Label>
        <Select
          name="time"
          defaultValue={isEdit ? selectedRide?.time : "08:00"}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecteer tijd" />
          </SelectTrigger>
          <SelectContent>
            {timeSlots.map((time) => (
              <SelectItem key={time} value={time}>
                {time}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor={isEdit ? "edit-distance" : "distance"}>Afstand</Label>
        <Input
          id={isEdit ? "edit-distance" : "distance"}
          name="distance"
          defaultValue={isEdit ? selectedRide?.distance : ""}
          placeholder="bijv. 45"
          required
        />
        <p className="text-sm text-gray-500 mt-1">
          Voer alleen het aantal kilometers in
        </p>
      </div>
      <div>
        <Label htmlFor={isEdit ? "edit-level" : "level"}>Niveau</Label>
        <Select
          name="level"
          defaultValue={isEdit ? selectedRide?.level : undefined}
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecteer niveau" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Gemiddeld">Gemiddeld</SelectItem>
            <SelectItem value="Uitdagend">Uitdagend</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor={isEdit ? "edit-max_participants" : "max_participants"}>
          Maximum aantal deelnemers
        </Label>
        <Input
          id={isEdit ? "edit-max_participants" : "max_participants"}
          name="max_participants"
          type="number"
          defaultValue={isEdit ? selectedRide?.max_participants : ""}
          required
        />
      </div>
      <div>
        <Label htmlFor={isEdit ? "edit-description" : "description"}>
          Beschrijving
        </Label>
        <Textarea
          id={isEdit ? "edit-description" : "description"}
          name="description"
          defaultValue={isEdit ? selectedRide?.description : ""}
          required
        />
      </div>
      <Button
        type="submit"
        className="w-full bg-cycling-blue hover:bg-blue-600"
      >
        {isEdit ? "Opslaan" : "Toevoegen"}
      </Button>
    </form>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-cycling-blue hover:bg-blue-600">
                <Plus className="w-4 h-4 mr-2" />
                Nieuwe Rit
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Nieuwe Rit Toevoegen</DialogTitle>
              </DialogHeader>
              {renderForm()}
            </DialogContent>
          </Dialog>
        </div>

        {isLoading ? (
          <div>Laden...</div>
        ) : error ? (
          <div className="text-red-500">
            Er is een fout opgetreden bij het laden van de ritten.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rides?.map((ride) => (
              <Card key={ride.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <span>{ride.title}</span>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleEdit(ride)}
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(ride.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Datum:</strong> {ride.date}
                    </p>
                    <p>
                      <strong>Tijd:</strong> {ride.time}
                    </p>
                    <p>
                      <strong>Afstand:</strong> {ride.distance} km
                    </p>
                    <p>
                      <strong>Niveau:</strong> {ride.level}
                    </p>
                    <p>
                      <strong>Deelnemers:</strong> {ride.participants}/
                      {ride.max_participants}
                    </p>
                    <p>
                      <strong>Beschrijving:</strong> {ride.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Rit Bewerken</DialogTitle>
            </DialogHeader>
            {selectedRide && renderForm(true)}
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Admin;
