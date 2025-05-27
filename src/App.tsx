import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Agenda from "./pages/Agenda";
import NotFound from "./pages/NotFound";
import InsertRides from "./pages/InsertRides";
import Admin from "./pages/Admin";
import UpdateDates from "./pages/UpdateDates";
import UpdateDistances from "./pages/UpdateDistances";

const queryClient = new QueryClient();

const AppRoutes = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/over-ons" element={<AboutUs />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/insert-rides" element={<InsertRides />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/update-dates" element={<UpdateDates />} />
      <Route path="/update-distances" element={<UpdateDistances />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
