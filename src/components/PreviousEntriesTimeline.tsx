
import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { JournalEntry, GroupNames } from '../types/JournalTypes';

interface PreviousEntriesTimelineProps {
  entries: JournalEntry[];
  selectedGroup?: string;
  groupNames: GroupNames;
}

const PreviousEntriesTimeline = ({
  entries,
  selectedGroup,
  groupNames
}: PreviousEntriesTimelineProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Get the last 3-5 entries for the timeline preview
  const recentEntries = entries.slice(0, 3);
  const hasMoreEntries = entries.length > 3;

  if (entries.length === 0) return null;

  const currentGroupName = selectedGroup ? groupNames[selectedGroup] : 'dieser Gruppe';

  return (
    <div className="px-4 py-6 border-b border-gray-800">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-gray-400" />
          <h3 className="text-gray-400 text-sm font-medium">
            Letzte Einträge in {currentGroupName}
          </h3>
        </div>
        {hasMoreEntries && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-blue-400 hover:text-blue-300 text-sm flex items-center space-x-1"
          >
            <span>{isExpanded ? 'Weniger' : 'Mehr'}</span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4" />
            ) : (
              <ChevronDown className="w-4 h-4" />
            )}
          </button>
        )}
      </div>

      <div className="space-y-3">
        {(isExpanded ? entries : recentEntries).map((entry) => (
          <Card key={entry.id} className="bg-gray-900 border-gray-700 hover:bg-gray-800 transition-colors cursor-pointer">
            <CardContent className="p-3">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs font-medium">{entry.avatar}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-white text-sm font-medium">{entry.author}</span>
                    <span className="text-gray-400 text-xs">{entry.timestamp}</span>
                  </div>
                  <p className="text-gray-300 text-sm line-clamp-2">{entry.text}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PreviousEntriesTimeline;
