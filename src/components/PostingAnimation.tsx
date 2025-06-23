
import { useState, useEffect } from 'react';
import { Check, ArrowRight } from 'lucide-react';

interface PostingAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
  onViewEntry?: () => void;
}

const PostingAnimation = ({ isVisible, onComplete, onViewEntry }: PostingAnimationProps) => {
  const [showViewButton, setShowViewButton] = useState(false);

  useEffect(() => {
    if (isVisible) {
      // Show the view button after a short delay
      const buttonTimer = setTimeout(() => {
        setShowViewButton(true);
      }, 1000);

      // Auto-hide after 4 seconds (increased to allow time for button interaction)
      const hideTimer = setTimeout(() => {
        onComplete();
        setShowViewButton(false);
      }, 4000);
      
      return () => {
        clearTimeout(buttonTimer);
        clearTimeout(hideTimer);
      };
    } else {
      setShowViewButton(false);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="mx-4 mb-4 bg-green-900/30 border border-green-800/50 rounded-lg p-3 animate-in slide-in-from-bottom-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-green-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
            <Check className="w-4 h-4 text-white" />
          </div>
          <p className="text-green-200 text-sm font-medium">
            Lumen kreiert den Eintrag
          </p>
        </div>
        
        {showViewButton && onViewEntry && (
          <button
            onClick={onViewEntry}
            className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 text-white text-xs px-3 py-1.5 rounded-md transition-colors"
          >
            <span>Zum Eintrag</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PostingAnimation;
