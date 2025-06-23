
import { useState, useEffect } from 'react';
import JournalHeader from './JournalHeader';
import JournalContent from './JournalContent';
import PostingAnimation from './PostingAnimation';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { groupNames } from '../data/journalData';

interface JournalProps {
  selectedGroup?: string;
  onBackToDashboard: () => void;
  pendingEntry?: string | null;
  onEntryProcessed?: () => void;
}

const Journal = ({ selectedGroup, onBackToDashboard, pendingEntry, onEntryProcessed }: JournalProps) => {
  const { entries, addEntry } = useJournalEntries();
  const [showPostingAnimation, setShowPostingAnimation] = useState(false);

  // Handle pending entry from the create dialog
  useEffect(() => {
    if (pendingEntry && selectedGroup) {
      setShowPostingAnimation(true);
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
    setShowPostingAnimation(true);
  };

  const handlePostingComplete = () => {
    setShowPostingAnimation(false);
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

        <PostingAnimation
          isVisible={showPostingAnimation}
          onComplete={handlePostingComplete}
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
