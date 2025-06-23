
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
  date: Date;
}

interface MonthlyEntriesProps {
  entries: JournalEntry[];
  groupNames: Record<string, string>;
  selectedGroup?: string;
}

const MonthlyEntries = ({ entries, groupNames, selectedGroup }: MonthlyEntriesProps) => {
  // Group entries by month
  const groupedEntries = entries.reduce((groups, entry) => {
    const date = new Date(entry.date);
    const monthKey = `${date.getFullYear()}-${date.getMonth()}`;
    const monthLabel = date.toLocaleDateString('de-DE', { 
      month: 'long', 
      year: 'numeric' 
    });
    
    if (!groups[monthKey]) {
      groups[monthKey] = {
        label: monthLabel,
        entries: []
      };
    }
    
    groups[monthKey].entries.push(entry);
    return groups;
  }, {} as Record<string, { label: string; entries: JournalEntry[] }>);

  // Sort months in descending order (newest first)
  const sortedMonths = Object.keys(groupedEntries).sort((a, b) => {
    const [yearA, monthA] = a.split('-').map(Number);
    const [yearB, monthB] = b.split('-').map(Number);
    
    if (yearA !== yearB) return yearB - yearA;
    return monthB - monthA;
  });

  return (
    <div>
      {sortedMonths.map((monthKey) => {
        const { label, entries } = groupedEntries[monthKey];
        
        return (
          <div key={monthKey} className="mb-8">
            <div className="sticky top-16 bg-black/80 backdrop-blur-sm border-b border-gray-800 py-3 px-4 mb-4">
              <h3 className="text-lg font-semibold text-white capitalize">
                {label}
              </h3>
              <p className="text-sm text-gray-400">
                {entries.length} {entries.length === 1 ? 'Eintrag' : 'Einträge'}
              </p>
            </div>
            
            <div className="space-y-0">
              {entries.map((entry) => (
                <JournalEntryCard
                  key={entry.id}
                  entry={entry}
                  showGroupBadge={!selectedGroup}
                  groupNames={groupNames}
                />
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MonthlyEntries;
