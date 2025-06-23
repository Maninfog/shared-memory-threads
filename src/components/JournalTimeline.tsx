
import JournalEntryCard from './JournalEntryCard';

interface JournalEntry {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  avatar: string;
  handle: string;
  group: string;
  groupColor: string;
}

interface JournalTimelineProps {
  entries: JournalEntry[];
  selectedGroup?: string;
  groupNames: Record<string, string>;
}

const JournalTimeline = ({ entries, selectedGroup, groupNames }: JournalTimelineProps) => {
  return (
    <div>
      {entries.map((entry) => (
        <JournalEntryCard
          key={entry.id}
          entry={entry}
          showGroupBadge={!selectedGroup}
          groupNames={groupNames}
        />
      ))}
    </div>
  );
};

export default JournalTimeline;
