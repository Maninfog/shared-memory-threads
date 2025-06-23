
import { useState } from 'react';
import { Send } from 'lucide-react';

interface JournalEntryInputProps {
  onAddEntry: (text: string) => void;
}

const JournalEntryInput = ({
  onAddEntry
}: JournalEntryInputProps) => {
  const [newEntry, setNewEntry] = useState('');

  const handleSubmit = () => {
    if (newEntry.trim()) {
      onAddEntry(newEntry);
      setNewEntry('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="sticky bottom-20 bg-black/95 backdrop-blur-sm border-t border-gray-800 p-4">
      <div className="max-w-2xl mx-auto flex items-center space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="What's on your mind?"
            className="w-full bg-gray-900 text-white placeholder-gray-400 border border-gray-700 rounded-2xl px-4 py-3 pr-12 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={1}
            style={{ minHeight: '48px', maxHeight: '120px' }}
          />
          <button
            onClick={handleSubmit}
            disabled={!newEntry.trim()}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white rounded-full p-2 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryInput;
