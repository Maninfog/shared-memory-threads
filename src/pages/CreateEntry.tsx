
import { useState } from 'react';
import { ArrowUp, ArrowLeft, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';

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
    color: 'bg-gradient-to-r from-pink-500 to-rose-400'
  }, {
    id: 'private',
    name: 'Privat',
    color: 'bg-gradient-to-r from-purple-500 to-violet-400'
  }, {
    id: 'family',
    name: 'Familie',
    color: 'bg-gradient-to-r from-blue-500 to-indigo-400'
  }, {
    id: 'work-colleagues',
    name: 'Arbeitskollegen',
    color: 'bg-gradient-to-r from-green-500 to-emerald-400'
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
      navigate('/dashboard');
    }
  };

  const handleCancel = () => {
    setEntryText('');
    setSelectedGroup('');
    setAiEnabled(false);
    navigate('/dashboard');
  };

  const handleChatClick = () => {
    navigate('/dashboard');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="flex flex-col h-screen zen-gradient-primary">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zen-soft">
        <button 
          onClick={handleCancel}
          className="flex items-center space-x-2 text-zen-muted hover:text-zen-primary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <h1 className="text-lg font-semibold text-zen-primary">Neuer Eintrag</h1>
        <div className="w-16"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full pb-20">
        {/* Center content when no messages */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 zen-gradient-card rounded-full flex items-center justify-center mx-auto mb-4 zen-glow-violet">
              <Sparkles className="w-8 h-8 text-zen-accent-violet" />
            </div>
            <h2 className="text-xl font-semibold text-zen-primary mb-2">
              Teile deine Gedanken
            </h2>
            <p className="text-zen-muted">
              Wähle eine Gruppe und beginne zu schreiben
            </p>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="p-4 border-t border-zen-soft zen-gradient-secondary">
          {/* Group Selection */}
          <div className="mb-4">
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="zen-gradient-card border-zen-soft text-zen-primary h-10 rounded-lg backdrop-blur-sm">
                <SelectValue placeholder="Gruppe auswählen..." />
              </SelectTrigger>
              <SelectContent className="zen-gradient-card border-zen-soft rounded-lg backdrop-blur-xl">
                {groups.map(group => (
                  <SelectItem key={group.id} value={group.id} className="text-zen-primary hover:bg-white/5 focus:bg-white/5">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${group.color}`} />
                      <span>{group.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Input Area */}
          <div className="relative">
            <div className="flex items-end zen-gradient-card rounded-xl border border-zen-soft p-3 backdrop-blur-sm zen-glow-violet">
              <textarea 
                value={entryText} 
                onChange={e => setEntryText(e.target.value)} 
                onKeyPress={handleKeyPress} 
                placeholder="Nachricht eingeben..." 
                className="flex-1 bg-transparent text-zen-primary placeholder-zen-muted resize-none outline-none max-h-32 min-h-[24px]" 
                rows={1}
                style={{ height: 'auto' }}
                onInput={(e) => {
                  const target = e.target as HTMLTextAreaElement;
                  target.style.height = 'auto';
                  target.style.height = target.scrollHeight + 'px';
                }}
              />
              
              {/* Send Button */}
              <button 
                onClick={handleSubmit} 
                disabled={!entryText.trim() || !selectedGroup} 
                className="ml-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-700 disabled:to-gray-600 text-white disabled:text-zen-muted rounded-lg p-2 transition-all disabled:cursor-not-allowed flex-shrink-0 zen-glow-violet"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* AI Toggle */}
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-zen-muted">
              {selectedGroup ? `Schreibt in: ${groups.find(g => g.id === selectedGroup)?.name}` : ''}
            </div>
            
            <button 
              onClick={() => setAiEnabled(!aiEnabled)} 
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                aiEnabled 
                  ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-zen-primary zen-glow-violet' 
                  : 'zen-gradient-card text-zen-muted hover:bg-white/5 border border-zen-soft'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Lumen</span>
            </button>
          </div>

          {/* AI Info */}
          {aiEnabled && (
            <div className="mt-3 zen-gradient-card border border-purple-500/30 rounded-lg p-3 zen-glow-violet">
              <div className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-zen-accent-violet mt-0.5 flex-shrink-0" />
                <div className="text-xs text-zen-secondary">
                  <p className="font-medium mb-1 text-zen-accent-violet">Lumen-Journaling aktiviert</p>
                  <p className="text-zen-muted">
                    Lumen wird deinen Eintrag analysieren und dir Fragen basierend auf 
                    deinen bisherigen Einträgen in dieser Gruppe stellen.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <BottomNav onChatClick={handleChatClick} />
    </div>
  );
};

export default CreateEntry;
