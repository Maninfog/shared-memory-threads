
import { Plus, Home, MessageCircle, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ProfileSheet from './ProfileSheet';

interface BottomNavProps {
  onHomeClick?: () => void;
  onChatClick?: () => void;
}

const BottomNav = ({ onHomeClick, onChatClick }: BottomNavProps) => {
  const navigate = useNavigate();

  const handleCreateClick = () => {
    navigate('/create');
  };

  const handleChatClick = () => {
    if (onChatClick) {
      onChatClick();
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-gray-800 z-50">
      <div className="flex items-center justify-around py-2 px-4 max-w-md mx-auto">
        <button 
          onClick={handleCreateClick}
          className="flex flex-col items-center justify-center p-2"
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Plus className="w-5 h-5 text-black" />
          </div>
        </button>

        <button 
          onClick={onHomeClick}
          className="flex flex-col items-center justify-center p-2"
        >
          <Home className="w-6 h-6 text-white" />
        </button>
        
        <button 
          onClick={handleChatClick}
          className="flex flex-col items-center justify-center p-2"
        >
          <MessageCircle className="w-6 h-6 text-white hover:text-gray-300" />
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
