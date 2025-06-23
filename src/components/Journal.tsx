
import JournalHeader from './JournalHeader';
import JournalContent from './JournalContent';
import { useJournalEntries } from '../hooks/useJournalEntries';
import { groupNames } from '../data/journalData';

interface JournalProps {
  selectedGroup?: string;
  onBackToDashboard: () => void;
}

const Journal = ({ selectedGroup, onBackToDashboard }: JournalProps) => {
  const { entries, addEntry } = useJournalEntries();

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
