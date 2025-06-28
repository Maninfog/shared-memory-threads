
import { Clock, User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { JournalEntry, GroupNames } from '../types/JournalTypes';

interface NotesStyleEntriesProps {
  entries: JournalEntry[];
  groupNames: GroupNames;
}

const NotesStyleEntries = ({ entries, groupNames }: NotesStyleEntriesProps) => {
  if (entries.length === 0) return null;

  // Group entries by time periods
  const now = new Date();
  const today = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    return entryDate.toDateString() === now.toDateString();
  });

  const last7Days = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const daysDiff = Math.floor((now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysDiff > 0 && daysDiff <= 7;
  });

  const last30Days = entries.filter(entry => {
    const entryDate = new Date(entry.date);
    const daysDiff = Math.floor((now.getTime() - entryDate.getTime()) / (1000 * 60 * 60 * 24));
    return daysDiff > 7 && daysDiff <= 30;
  });

  const TimeSection = ({ title, entries }: { title: string; entries: JournalEntry[] }) => {
    if (entries.length === 0) return null;

    return (
      <div className="mb-6">
        <h3 className="text-mineral-secondary text-sm font-medium mb-3 px-4">{title}</h3>
        <div className="space-y-2">
          {entries.map((entry) => (
            <Card
              key={entry.id}
              className="mineral-card mineral-hover cursor-pointer mx-4 border border-mineral"
            >
              <CardContent className="p-3">
                <div className="flex items-start space-x-3">
                  <div className={`${entry.groupColor} w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mineral-shadow-soft`}>
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-mineral-primary font-medium text-sm truncate">
                        {entry.text.length > 50 ? entry.text.substring(0, 50) + '...' : entry.text}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-mineral-secondary">
                      <Clock className="w-3 h-3" />
                      <span>{entry.timestamp}</span>
                      <span>•</span>
                      <span>{entry.author}</span>
                      <span>•</span>
                      <span className="bg-muted px-2 py-0.5 rounded text-xs">
                        {groupNames[entry.group]}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="pb-6">
      <TimeSection title="Heute" entries={today} />
      <TimeSection title="Letzte 7 Tage" entries={last7Days} />
      <TimeSection title="Letzte 30 Tage" entries={last30Days} />
    </div>
  );
};

export default NotesStyleEntries;
