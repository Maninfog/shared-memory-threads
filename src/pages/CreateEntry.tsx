
import { useState } from 'react';
import { ArrowUp, ArrowLeft, Sparkles } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
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
    <div className="flex flex-col h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <button 
          onClick={handleCancel}
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back</span>
        </button>
        <h1 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Neuer Eintrag</h1>
        <div className="w-16"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col max-w-3xl mx-auto w-full">
        {/* Center content when no messages */}
        <div className="flex-1 flex items-center justify-center p-6">
          <div className="text-center max-w-md">
            <div className="w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-gray-600 dark:text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Teile deine Gedanken
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Wähle eine Gruppe und beginne zu schreiben
            </p>
          </div>
        </div>

        {/* Bottom Input Area */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
          {/* Group Selection */}
          <div className="mb-4">
            <Select value={selectedGroup} onValueChange={setSelectedGroup}>
              <SelectTrigger className="bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-gray-100 h-10 rounded-lg">
                <SelectValue placeholder="Gruppe auswählen..." />
              </SelectTrigger>
              <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 rounded-lg">
                {groups.map(group => (
                  <SelectItem key={group.id} value={group.id} className="text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700">
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
            <div className="flex items-end bg-gray-100 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-3">
              <textarea 
                value={entryText} 
                onChange={e => setEntryText(e.target.value)} 
                onKeyPress={handleKeyPress} 
                placeholder="Nachricht eingeben..." 
                className="flex-1 bg-transparent text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 resize-none outline-none max-h-32 min-h-[24px]" 
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
                className="ml-2 bg-gray-900 dark:bg-gray-100 hover:bg-gray-700 dark:hover:bg-gray-300 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white dark:text-gray-900 disabled:text-gray-500 dark:disabled:text-gray-400 rounded-lg p-2 transition-colors disabled:cursor-not-allowed flex-shrink-0"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* AI Toggle */}
          <div className="flex items-center justify-between mt-3">
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {selectedGroup ? `Schreibt in: ${groups.find(g => g.id === selectedGroup)?.name}` : ''}
            </div>
            
            <button 
              onClick={() => setAiEnabled(!aiEnabled)} 
              className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                aiEnabled 
                  ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700'
              }`}
            >
              <Sparkles className="w-3 h-3" />
              <span>Lumen</span>
            </button>
          </div>

          {/* AI Info */}
          {aiEnabled && (
            <div className="mt-3 bg-purple-50 dark:bg-purple-900/30 border border-purple-200 dark:border-purple-500/50 rounded-lg p-3">
              <div className="flex items-start space-x-2">
                <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                <div className="text-xs text-purple-800 dark:text-purple-200">
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
