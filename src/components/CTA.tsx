
import { ArrowRight, Heart, Shield } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-black py-16">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Startet euer gemeinsames<br />Gedächtnis heute
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Kostenlos starten, jederzeit kündbar, komplett privat.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button className="bg-white text-gray-900 px-8 py-3 rounded-xl hover:bg-gray-100 transition-colors font-medium flex items-center justify-center space-x-2">
            <span>Jetzt kostenfrei starten</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex justify-center space-x-8 text-gray-400 text-sm">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4" />
            <span>30 Tage kostenlos</span>
          </div>
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Ende-zu-Ende verschlüsselt</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
