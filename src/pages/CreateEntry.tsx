
import { useState } from 'react';
import { Plus, Camera, Mic, Sparkles, ArrowUp, ArrowLeft } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useNavigate } from 'react-router-dom';

interface CreateEntryProps {
  onCreateEntry?: (entry: {
    text: string;
    group: string;
    aiEnabled: boolean;
  }) => void;
}

const CreateEntry = ({ onCreateEntry }: CreateEntryProps) => {
  const [entryText, setEntryText] = useState('');
  const [selectedGroup, setSelectedGroup] = useState<string>('');
  const [aiEnabled, setAiEnabled] = useState(false);
  const navigate = useNavigate();

  const groups = [{
    id: 'best-friend',
    name: 'Beste Freundin',
    color: 'bg-pink-500'
  }, {
    id: 'private',
    name: 'Privat',
    color: 'bg-purple-500'
  }, {
    id: 'family',
    name: 'Familie',
    color: 'bg-blue-500'
  }, {
    id: 'work-colleagues',
    name: 'Arbeitskollegen',
    color: 'bg-green-500'
  }];

  const handleSubmit = () => {
    if (entryText.trim() && selectedGroup) {
      if (onCreateEntry) {
        onCreateEntry({
          text: entryText,
          group: selectedGroup,
          aiEnabled
        });
      }

      // Reset form and navigate back
      setEntryText('');
      setSelectedGroup('');
      setAiEnabled(false);
      navigate('/');
    }
  };

  const handleCancel = () => {
    setEntryText('');
    setSelectedGroup('');
    setAiEnabled(false);
    navigate('/');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-slate-950">
          <button 
            onClick={handleCancel}
            className="flex items-center space-x-2 text-slate-400 hover:text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-semibold text-slate-50">Neuer Eintrag</h1>
          <div className="w-16"></div> {/* Spacer for centering */}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Group Selection */}
          <div className="mb-6">
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="bg-secondary border-border text-foreground h-12 rounded-lg">
                <SelectValue placeholder="Gruppe auswählen..." />
              </SelectTrigger>
              <SelectContent className="bg-background border-border rounded-lg">
                {groups.map(group => (
                  <SelectItem key={group.id} value={group.id} className="text-foreground hover:bg-secondary focus:bg-secondary">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${group.color}`} />
                      <span>{group.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Text Input Area */}
          <div className="relative mb-6">
            <Textarea 
              value={entryText} 
              onChange={e => setEntryText(e.target.value)} 
              onKeyPress={handleKeyPress} 
              placeholder="Teile deine Gedanken..." 
              className="bg-secondary border-border text-foreground placeholder-muted-foreground min-h-[200px] resize-none rounded-lg pr-16 focus:ring-2 focus:ring-ring focus:border-transparent" 
            />
            
            {/* Send Button */}
            <button 
              onClick={handleSubmit} 
              disabled={!entryText.trim() || !selectedGroup} 
              className="absolute bottom-3 right-3 bg-primary hover:bg-primary/90 disabled:bg-muted text-primary-foreground rounded-lg p-2 transition-colors disabled:cursor-not-allowed"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

          {/* Media and AI Controls */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex space-x-2">
              <button className="text-muted-foreground hover:text-foreground hover:bg-secondary p-2 rounded-lg transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="text-muted-foreground hover:text-foreground hover:bg-secondary p-2 rounded-lg transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            
            <button 
              onClick={() => setAiEnabled(!aiEnabled)} 
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                aiEnabled 
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' 
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Lumen</span>
            </button>
          </div>

          {/* AI Info */}
          {aiEnabled && (
            <div className="bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/50 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-purple-800 dark:text-purple-200">
                  <p className="font-medium mb-1">Lumen-Journaling aktiviert</p>
                  <p className="text-purple-700 dark:text-purple-300">
                    Lumen wird deinen Eintrag analysieren und dir Fragen basierend auf 
                    deinen bisherigen Einträgen in dieser Gruppe stellen.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateEntry;
