
import { Home, Heart, Plus, MessageCircle, User } from 'lucide-react';
import ProfileSheet from './ProfileSheet';

interface BottomNavProps {
  onHomeClick?: () => void;
}

const BottomNav = ({ onHomeClick }: BottomNavProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        <button 
          onClick={onHomeClick}
          className="flex flex-col items-center justify-center p-2"
        >
          <Home className="w-6 h-6 text-white" />
        </button>
        
        <button className="flex flex-col items-center justify-center p-2">
          <Heart className="w-6 h-6 text-gray-400" />
        </button>
        
        <button className="flex flex-col items-center justify-center p-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-black" />
          </div>
        </button>
        
        <button className="flex flex-col items-center justify-center p-2">
          <MessageCircle className="w-6 h-6 text-gray-400" />
        </button>
        
        <ProfileSheet>
          <button className="flex flex-col items-center justify-center p-2">
            <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-white" />
            </div>
          </button>
        </ProfileSheet>
      </div>
    </nav>
  );
};

export default BottomNav;
