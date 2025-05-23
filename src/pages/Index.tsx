
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import UpcomingRides from "@/components/UpcomingRides";
import NewsSection from "@/components/NewsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <FeaturesSection />
        <UpcomingRides />
        <NewsSection />
        <TestimonialsSection />
        <CTASection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
