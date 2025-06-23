
import { useState } from 'react';
import { Plus, Camera, Mic, Sparkles } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

interface CreateEntryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onCreateEntry: (entry: { text: string; group: string; aiEnabled: boolean }) => void;
}

const CreateEntryDialog = ({ open, onOpenChange, onCreateEntry }: CreateEntryDialogProps) => {
  const [entryText, setEntryText] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [aiEnabled, setAiEnabled] = useState(false);

  const groups = [
    { id: 'best-friend', name: 'Beste Freundin', color: 'bg-pink-500' },
    { id: 'private', name: 'Privat', color: 'bg-purple-500' },
    { id: 'family', name: 'Familie', color: 'bg-blue-500' },
    { id: 'work-colleagues', name: 'Arbeitskollegen', color: 'bg-green-500' }
  ];

  const handleSubmit = () => {
    if (entryText.trim() && selectedGroup) {
      onCreateEntry({
        text: entryText,
        group: selectedGroup,
        aiEnabled
      });
      
      // Reset form
      setEntryText('');
      setSelectedGroup('');
      setAiEnabled(false);
      onOpenChange(false);
    }
  };

  const handleCancel = () => {
    setEntryText('');
    setSelectedGroup('');
    setAiEnabled(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-gray-900 border-gray-700 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Neuer Eintrag</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {/* Group Selection */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Gruppe auswählen
            </label>
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                <SelectValue placeholder="Gruppe auswählen..." />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-600">
                {groups.map((group) => (
                  <SelectItem 
                    key={group.id} 
                    value={group.id}
                    className="text-white hover:bg-gray-700 focus:bg-gray-700"
                  >
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${group.color}`} />
                      <span>{group.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Text Area */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">
              Was passiert gerade?
            </label>
            <Textarea
              value={entryText}
              onChange={(e) => setEntryText(e.target.value)}
              placeholder="Teile deine Gedanken..."
              className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 min-h-[120px] resize-none"
            />
          </div>

          {/* Media Buttons */}
          <div className="flex space-x-4">
            <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
              <Camera className="w-5 h-5" />
            </button>
            <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
              <Mic className="w-5 h-5" />
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              onClick={handleCancel}
              variant="outline"
              className="flex-1 bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Abbrechen
            </Button>
            
            <Button
              onClick={() => setAiEnabled(!aiEnabled)}
              variant={aiEnabled ? "default" : "outline"}
              className={`px-4 ${
                aiEnabled 
                  ? 'bg-purple-600 hover:bg-purple-700 text-white' 
                  : 'bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800'
              }`}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              KI
            </Button>
            
            <Button
              onClick={handleSubmit}
              disabled={!entryText.trim() || !selectedGroup}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Posten
            </Button>
          </div>

          {/* AI Info */}
          {aiEnabled && (
            <div className="bg-purple-900/30 border border-purple-500/50 rounded-lg p-3 mt-4">
              <div className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-purple-200">
                  <p className="font-medium mb-1">KI-Journaling aktiviert</p>
                  <p className="text-purple-300">
                    Die KI wird deinen Eintrag analysieren und dir Fragen basierend auf 
                    deinen bisherigen Einträgen in dieser Gruppe stellen.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateEntryDialog;
