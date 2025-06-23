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
  return;
};
export default JournalEntryInput;