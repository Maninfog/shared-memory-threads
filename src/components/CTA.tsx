
import { ArrowRight, Heart, Shield, Users } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Startet euer gemeinsames<br />Gedächtnis heute
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Gebt euren Beziehungen den Raum, den sie verdienen. 
            Kostenlos starten, jederzeit kündbar, komplett privat.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-white text-gray-900 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center justify-center space-x-2">
            <span>Jetzt kostenfrei starten</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="border-2 border-white/30 text-white px-8 py-4 rounded-full hover:border-white/50 hover:bg-white/10 transition-all duration-300 font-semibold text-lg">
            Demo buchen
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-white/90 text-sm">
          <div className="flex items-center justify-center space-x-2">
            <Heart className="w-5 h-5" />
            <span>30 Tage kostenlos testen</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Shield className="w-5 h-5" />
            <span>Ende-zu-Ende verschlüsselt</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-5 h-5" />
            <span>Für alle Beziehungsformen</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
