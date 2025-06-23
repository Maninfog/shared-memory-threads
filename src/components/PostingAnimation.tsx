
import { useState, useEffect } from 'react';
import { Check } from 'lucide-react';

interface PostingAnimationProps {
  isVisible: boolean;
  onComplete: () => void;
}

const PostingAnimation = ({ isVisible, onComplete }: PostingAnimationProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000); // Show for 2 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="mx-4 mb-4 bg-green-900/30 border border-green-800/50 rounded-lg p-3 animate-in slide-in-from-bottom-2">
      <div className="flex items-center space-x-3">
        <div className="bg-green-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
          <Check className="w-4 h-4 text-white" />
        </div>
        <p className="text-green-200 text-sm font-medium">
          Lumen kreiert den Eintrag
        </p>
      </div>
    </div>
  );
};

export default PostingAnimation;
