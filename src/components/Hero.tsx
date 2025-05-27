import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-cycling-blue to-blue-700 text-white overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Cycling background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 pt-20 pb-24 md:pt-32 md:pb-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
            Samen fietsen, samen genieten in Tilburg
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Word lid van dé wielrenclub voor recreatieve en fanatieke fietsers
            in en rondom Tilburg. Ontdek mooie routes, train met gelijkgestemden
            en verbeter je conditie in een gezellige sfeer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-cycling-orange hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
            >
              <Link to="/word-lid">Word Lid</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg"
            >
              <Link to="/agenda">Bekijk Onze Ritten</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
