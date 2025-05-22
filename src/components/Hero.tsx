
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

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
            Word lid van dé wielrenclub voor recreatieve en fanatieke fietsers in en rondom Tilburg. 
            Ontdek mooie routes, train met gelijkgestemden en verbeter je conditie in een gezellige sfeer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-cycling-orange hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
              <Link to="/word-lid">Word Lid</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg">
              <Link to="/agenda">Bekijk Onze Ritten</Link>
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,154.7C384,149,480,107,576,90.7C672,75,768,85,864,106.7C960,128,1056,160,1152,154.7C1248,149,1344,107,1392,85.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
