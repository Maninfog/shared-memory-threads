
import { Heart, MessageCircle, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-black py-8 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <div className="mb-6">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium text-2xl text-white">Lumen</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
            Euer privates<br />
            <span className="text-gray-400">Gedächtnis</span>
          </h1>
          <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            Wie iOS Notes, aber für zwei. Sammelt eure Momente, 
            Gedanken und Erinnerungen an einem sicheren Ort.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button className="bg-white text-gray-900 px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors font-medium">
            Kostenfrei starten
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <MessageCircle className="w-8 h-8 text-gray-400 mb-3" />
            <h3 className="font-medium text-white mb-2">Gemeinsam schreiben</h3>
            <p className="text-gray-400 text-sm">Wie in Notes, aber synchron mit der Person, die dir wichtig ist</p>
          </div>
          
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <Shield className="w-8 h-8 text-gray-400 mb-3" />
            <h3 className="font-medium text-white mb-2">Komplett privat</h3>
            <p className="text-gray-400 text-sm">Ende-zu-Ende verschlüsselt – nur ihr könnt eure Gedanken sehen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
