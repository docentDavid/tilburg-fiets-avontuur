
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTASection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-cycling-blue to-blue-600 rounded-2xl shadow-xl overflow-hidden relative">
          <div className="absolute inset-0 z-0 opacity-20">
            <img 
              src="https://images.unsplash.com/photo-1501147830916-ce44a6359892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Cycling together" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="relative z-10 px-6 py-12 md:px-12 md:py-16 lg:px-16 text-white">
            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Klaar om met ons mee te fietsen?
                </h2>
                <p className="text-lg text-blue-100 max-w-lg">
                  Word vandaag nog lid van Wielrenclub Tilburg en ontdek het plezier van samen wielrennen, 
                  ongeacht je niveau of ervaring. We verwelkomen je graag in onze club!
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-cycling-orange hover:bg-orange-600 text-white rounded-full px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                  <Link to="/word-lid">Word Lid</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur hover:bg-white/20 text-white border-white/30 rounded-full px-8 py-6 text-lg">
                  <Link to="/contact">Stel Een Vraag</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
