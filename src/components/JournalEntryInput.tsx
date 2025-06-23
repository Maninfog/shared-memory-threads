
import { useState } from 'react';
import { Send } from 'lucide-react';

interface JournalEntryInputProps {
  onAddEntry: (text: string) => void;
}

const JournalEntryInput = ({ onAddEntry }: JournalEntryInputProps) => {
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
    <div className="border-b border-gray-800 p-4">
      <div className="flex items-end space-x-3">
        <div className="flex-1">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Was denkst du gerade?"
            className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 resize-none outline-none focus:border-blue-500 transition-colors text-sm"
            rows={2}
          />
        </div>
        <button
          onClick={handleSubmit}
          disabled={!newEntry.trim()}
          className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default JournalEntryInput;
