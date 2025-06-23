
import { Heart, Lock, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-xl text-gray-900">Threaded</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Lock className="w-4 h-4" />
              <span>Ende-zu-Ende verschlüsselt</span>
            </div>
            <div className="flex items-center space-x-1 text-sm text-gray-600">
              <Users className="w-4 h-4" />
              <span>Für 2-n Personen</span>
            </div>
          </nav>
          
          <button className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 font-medium">
            Jetzt starten
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
