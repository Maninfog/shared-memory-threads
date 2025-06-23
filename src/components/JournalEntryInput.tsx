
import { useState } from 'react';
import { Camera, Mic } from 'lucide-react';

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

  return (
    <div className="border-b border-gray-800 p-4">
      <div className="flex space-x-3">
        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-medium">D</span>
        </div>
        <div className="flex-1">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Was passiert gerade?"
            className="w-full bg-transparent text-white placeholder-gray-500 resize-none outline-none text-xl leading-relaxed min-h-[120px]"
          />
          <div className="flex items-center justify-between mt-4">
            <div className="flex space-x-4">
              <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!newEntry.trim()}
              className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Posten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryInput;
