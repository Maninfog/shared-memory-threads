
import { Heart, Lock, Users } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-lg text-white">Threaded</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Lock className="w-3 h-3" />
              <span>Verschlüsselt</span>
            </div>
            <div className="flex items-center space-x-1 text-xs text-gray-400">
              <Users className="w-3 h-3" />
              <span>Privat</span>
            </div>
          </nav>
          
          <button className="bg-white text-gray-900 px-4 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
            Start
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
