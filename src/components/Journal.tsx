
import { useState, useEffect } from 'react';
import JournalHeader from './JournalHeader';
import JournalContent from './JournalContent';
import AIFeedback from './AIFeedback';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { groupNames } from '../data/journalData';
import { generateAIFeedback } from '../utils/aiFeedback';

interface JournalProps {
  selectedGroup?: string;
  onBackToDashboard: () => void;
  pendingEntry?: string | null;
  onEntryProcessed?: () => void;
}

const Journal = ({ selectedGroup, onBackToDashboard, pendingEntry, onEntryProcessed }: JournalProps) => {
  const { entries, addEntry } = useJournalEntries();
  const [showAIFeedback, setShowAIFeedback] = useState(false);
  const [aiFeedbackText, setAIFeedbackText] = useState('');

  // Handle pending entry from the create dialog
  useEffect(() => {
    if (pendingEntry && selectedGroup) {
      handleAddEntry(pendingEntry);
      onEntryProcessed?.();
    }
  }, [pendingEntry, selectedGroup]);

  const handleExport = () => {
    console.log('Gruppendaten exportieren geklickt');
  };

  const handleAddMember = () => {
    console.log('Mitglied hinzufügen geklickt');
  };

  const handleChapterSelect = (chapterId: string) => {
    console.log('Chapter selected:', chapterId);
  };

  const handleAddEntry = (text: string) => {
    addEntry(text, selectedGroup);
    
    // Generate and show AI feedback
    const feedback = generateAIFeedback(text, selectedGroup);
    setAIFeedbackText(feedback);
    setShowAIFeedback(true);
  };

  const handleDismissFeedback = () => {
    setShowAIFeedback(false);
  };

  const currentGroupName = selectedGroup ? groupNames[selectedGroup] : 'Home';

  return (
    <section className="bg-black min-h-screen">
      <div className="max-w-2xl mx-auto">
        <JournalHeader
          currentGroupName={currentGroupName}
          selectedGroup={selectedGroup}
          onBackToDashboard={onBackToDashboard}
          onExport={handleExport}
          onAddMember={handleAddMember}
        />

        <AIFeedback
          isVisible={showAIFeedback}
          onDismiss={handleDismissFeedback}
          feedbackText={aiFeedbackText}
        />

        <JournalContent
          selectedGroup={selectedGroup}
          entries={entries}
          groupNames={groupNames}
          groupColors={{}}
          onAddEntry={handleAddEntry}
          onChapterSelect={handleChapterSelect}
        />
      </div>
    </section>
  );
};

export default Journal;
