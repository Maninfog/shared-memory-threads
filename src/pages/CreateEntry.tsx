import { useState } from 'react';
import { Plus, Users, Heart, Home, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { useNavigate } from 'react-router-dom';
import BottomNav from '@/components/BottomNav';
const CreateEntry = () => {
  const [entryText, setEntryText] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('private');
  const {
    addEntry
  } = useJournalEntries();
  const navigate = useNavigate();
  const groups = [{
    id: 'private',
    name: 'Private',
    icon: Users,
    color: 'bg-primary'
  }, {
    id: 'best-friend',
    name: 'Best Friend',
    icon: Heart,
    color: 'bg-primary'
  }, {
    id: 'family',
    name: 'Family',
    icon: Home,
    color: 'bg-primary'
  }, {
    id: 'work-colleagues',
    name: 'Work',
    icon: Briefcase,
    color: 'bg-primary'
  }];
  const handleSubmit = () => {
    if (entryText.trim()) {
      addEntry(entryText, selectedGroup);
      setEntryText('');
      navigate('/groups');
    }
  };
  const handleDashboardClick = () => {
    navigate('/groups');
  };
  return <div className="min-h-screen mineral-gradient-primary">
      <div className="mineral-container mineral-section">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-mineral-primary mb-2">
            Neuer Eintrag
          </h1>
          <p className="text-mineral-secondary">
            Teile deine Gedanken und Erlebnisse
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          {/* Entry Input */}
          <div className="mineral-card rounded-lg p-6 mb-6">
            <Textarea value={entryText} onChange={e => setEntryText(e.target.value)} placeholder="Was beschäftigt dich heute?" className="min-h-32 resize-none border-0 bg-transparent text-mineral-primary placeholder:text-mineral-secondary focus:ring-0 text-base leading-relaxed" />
          </div>

          {/* Group Selection */}
          

          {/* Submit Button */}
          <Button onClick={handleSubmit} disabled={!entryText.trim()} className="w-full mineral-button-primary py-3 text-base font-medium rounded-lg">
            <Plus className="w-5 h-5 mr-2" />
            Eintrag erstellen
          </Button>
        </div>
      </div>

      <BottomNav onHomeClick={handleDashboardClick} onChatClick={() => {}} />
    </div>;
};
export default CreateEntry;
