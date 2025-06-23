
import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <div className="sticky bottom-20 bg-background/95 backdrop-blur-sm border-t border-mineral p-4 mineral-shadow-soft">
      <div className="max-w-2xl mx-auto flex items-center space-x-3">
        <div className="flex-1 relative">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Was denkst du gerade?"
            className="w-full mineral-input rounded-xl px-4 py-3 pr-12 resize-none focus:outline-none min-h-12 max-h-32"
            rows={1}
          />
          <Button
            onClick={handleSubmit}
            disabled={!newEntry.trim()}
            size="icon"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 mineral-button-primary rounded-lg h-8 w-8"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default JournalEntryInput;
