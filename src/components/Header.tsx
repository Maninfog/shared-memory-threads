
import { Heart, Lock, Users, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const handleExport = () => {
    console.log('Daten exportieren geklickt');
    // Export functionality will be implemented here
  };

  const handleAddMember = () => {
    console.log('Mitglied hinzufügen geklickt');
    // Add member functionality will be implemented here
  };

  return (
    <header className="bg-black/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-7 h-7 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-lg text-white">Lumen</span>
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
          
          <div className="flex items-center space-x-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                  <Settings className="w-5 h-5 text-white" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="bg-gray-800 border-gray-700 min-w-[160px]"
              >
                <DropdownMenuItem 
                  onClick={handleExport}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                >
                  Daten exportieren
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleAddMember}
                  className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                >
                  Mitglied hinzufügen
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <button className="bg-white text-gray-900 px-4 py-1.5 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Starten
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
