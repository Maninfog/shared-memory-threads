
import { useState, useEffect } from 'react';
import { Bot, X } from 'lucide-react';

interface AIFeedbackProps {
  isVisible: boolean;
  onDismiss: () => void;
  feedbackText: string;
}

const AIFeedback = ({ isVisible, onDismiss, feedbackText }: AIFeedbackProps) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onDismiss();
      }, 4000); // Auto-dismiss after 4 seconds
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onDismiss]);

  if (!isVisible) return null;

  return (
    <div className="mx-4 mb-4 bg-blue-900/30 border border-blue-800/50 rounded-lg p-3 animate-in slide-in-from-bottom-2">
      <div className="flex items-start space-x-3">
        <div className="bg-blue-500 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1">
          <p className="text-blue-200 text-sm leading-relaxed">
            {feedbackText}
          </p>
        </div>
        <button
          onClick={onDismiss}
          className="text-blue-400 hover:text-blue-300 transition-colors flex-shrink-0"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AIFeedback;
