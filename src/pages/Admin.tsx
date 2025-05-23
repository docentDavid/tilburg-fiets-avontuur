import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useRides } from "@/context/RidesContext";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Loader2 } from "lucide-react";

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

const Admin = () => {
  const { rides, addRide, updateRide, deleteRide, loading, error } = useRides();
  const [editingRide, setEditingRide] = useState<Ride | null>(null);
  const [formData, setFormData] = useState<Partial<Ride>>({
    title: "",
    date: "",
    time: "",
    distance: "",
    level: "",
    participants: 0,
    maxParticipants: 0,
    description: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingRide) {
      updateRide(editingRide.id, formData);
    } else {
      addRide(formData as Omit<Ride, "id">);
    }
    resetForm();
  };

  const handleEdit = (ride: Ride) => {
    setEditingRide(ride);
    setFormData(ride);
  };

  const handleDelete = (id: number) => {
    deleteRide(id);
  };

  const resetForm = () => {
    setEditingRide(null);
    setFormData({
      title: "",
      date: "",
      time: "",
      distance: "",
      level: "",
      participants: 0,
      maxParticipants: 0,
      description: "",
    });
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Beheer Ritten</h1>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulier */}
        <Card>
          <CardHeader>
            <CardTitle>
              {editingRide ? "Rit Bewerken" : "Nieuwe Rit Toevoegen"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Titel</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Datum</Label>
                  <Input
                    id="date"
                    type="date"
                    value={formData.date}
                    onChange={(e) =>
                      setFormData({ ...formData, date: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Tijd</Label>
                  <Input
                    id="time"
                    type="time"
                    value={formData.time}
                    onChange={(e) =>
                      setFormData({ ...formData, time: e.target.value })
                    }
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="distance">Afstand</Label>
                  <Input
                    id="distance"
                    value={formData.distance}
                    onChange={(e) =>
                      setFormData({ ...formData, distance: e.target.value })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="level">Niveau</Label>
                  <Select
                    value={formData.level}
                    onValueChange={(value) =>
                      setFormData({ ...formData, level: value })
                    }
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="participants">Aantal Deelnemers</Label>
                  <Input
                    id="participants"
                    type="number"
                    value={formData.participants}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        participants: parseInt(e.target.value),
                      })
                    }
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxParticipants">Maximum Deelnemers</Label>
                  <Input
                    id="maxParticipants"
                    type="number"
                    value={formData.maxParticipants}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maxParticipants: parseInt(e.target.value),
                      })
                    }
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Beschrijving</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  required
                />
              </div>

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-cycling-blue hover:bg-blue-600"
                  disabled={loading}
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {editingRide ? "Bewerken" : "Toevoegen"}
                </Button>
                {editingRide && (
                  <Button type="button" variant="outline" onClick={resetForm}>
                    Annuleren
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Overzicht van ritten */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Bestaande Ritten</h2>
          {loading ? (
            <div className="flex items-center justify-center p-8">
              <Loader2 className="h-8 w-8 animate-spin" />
            </div>
          ) : (
            rides.map((ride) => (
              <Card key={ride.id}>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>{ride.title}</span>
                    <div className="space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleEdit(ride)}
                        disabled={loading}
                      >
                        Bewerken
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(ride.id)}
                        disabled={loading}
                      >
                        Verwijderen
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {ride.date} om {ride.time} - {ride.distance} ({ride.level})
                  </p>
                  <p className="mt-2">{ride.description}</p>
                  <p className="mt-2 text-sm">
                    Deelnemers: {ride.participants}/{ride.maxParticipants}
                  </p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
