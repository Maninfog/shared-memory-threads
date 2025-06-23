
import { Heart, MessageCircle, Calendar, Shield } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-orange-50 via-pink-50 to-blue-50 py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Das private <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600">Gedächtnis</span><br />
            zwischen Menschen
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Threaded ist euer geschützter Ort für gemeinsame Geschichten, Erinnerungen und emotionale Tiefe. 
            Wo WhatsApp vergisst, bewahrt Threaded auf – intelligent, privat und mit Liebe zum Detail.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-8 py-4 rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 font-semibold text-lg shadow-lg">
            Kostenfrei starten
          </button>
          <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-gray-400 transition-all duration-300 font-semibold text-lg">
            Demo ansehen
          </button>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <MessageCircle className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Gemeinsam schreiben</h3>
            <p className="text-gray-600 text-sm">Teilt Gedanken, Fotos und Momente in eurem privaten Raum</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Heart className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">KI versteht euch</h3>
            <p className="text-gray-600 text-sm">Automatische Tags, Stimmungsanalyse und schöne Rückblicke</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Calendar className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Timeline-Magie</h3>
            <p className="text-gray-600 text-sm">Eure Geschichte wird automatisch zur Timeline eurer Beziehung</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Shield className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">100% privat</h3>
            <p className="text-gray-600 text-sm">Ende-zu-Ende verschlüsselt – nur ihr könnt eure Inhalte sehen</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
