
import { JournalEntry, GroupNames, GroupColors } from '../types/JournalTypes';
import JournalEntryInput from './JournalEntryInput';
import HighlightChapters from './HighlightChapters';
import MonthlyEntries from './MonthlyEntries';
import PreviousEntriesTimeline from './PreviousEntriesTimeline';
import NotesStyleEntries from './NotesStyleEntries';
import { getHighlightChapters } from '../data/journalData';

interface JournalContentProps {
  selectedGroup?: string;
  entries: JournalEntry[];
  groupNames: GroupNames;
  groupColors: GroupColors;
  onAddEntry: (text: string) => void;
  onChapterSelect: (chapterId: string) => void;
}

const JournalContent = ({ 
  selectedGroup, 
  entries, 
  groupNames, 
  groupColors, 
  onAddEntry, 
  onChapterSelect 
}: JournalContentProps) => {
  const highlightChapters = getHighlightChapters(selectedGroup);
  const filteredEntries = selectedGroup 
    ? entries.filter(entry => entry.group === selectedGroup)
    : entries;

  if (selectedGroup) {
    return (
      <>
        {highlightChapters.length > 0 && (
          <div className="px-4 py-6">
            <h2 className="text-gray-400 text-sm font-medium mb-4">Jump back in</h2>
            <HighlightChapters 
              chapters={highlightChapters}
              onChapterSelect={onChapterSelect}
            />
          </div>
        )}

        <PreviousEntriesTimeline
          entries={filteredEntries}
          selectedGroup={selectedGroup}
          groupNames={groupNames}
        />
        
        <JournalEntryInput onAddEntry={onAddEntry} />
        
        <NotesStyleEntries
          entries={filteredEntries}
          groupNames={groupNames}
        />
      </>
    );
  }

  return (
    <MonthlyEntries
      entries={filteredEntries}
      selectedGroup={selectedGroup}
      groupNames={groupNames}
    />
  );
};

export default JournalContent;
