import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Agenda from "./pages/Agenda";
import NotFound from "./pages/NotFound";
import InsertRides from "./pages/InsertRides"; // Add this import
import Admin from "./pages/Admin";
import UpdateDates from "./pages/UpdateDates";
import UpdateDistances from "./pages/UpdateDistances";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/over-ons" element={<AboutUs />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/insert-rides" element={<InsertRides />} />{" "}
          {/* Add this route */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/update-dates" element={<UpdateDates />} />
          <Route path="/update-distances" element={<UpdateDistances />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
