import { useState } from 'react';
import { ChevronDown, ChevronUp, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { JournalEntry, GroupNames } from '../types/JournalTypes';

interface PreviousEntriesTimelineProps {
  entries: JournalEntry[];
  selectedGroup?: string;
  groupNames: GroupNames;
}

const PreviousEntriesTimeline = ({ entries, selectedGroup, groupNames }: PreviousEntriesTimelineProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Get the last 3-5 entries for the timeline preview
  const recentEntries = entries.slice(0, 3);
  const hasMoreEntries = entries.length > 3;
  
  if (entries.length === 0) return null;

  const currentGroupName = selectedGroup ? groupNames[selectedGroup] : 'dieser Gruppe';

  return (
    <div className="px-4 py-3 border-b border-gray-800">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors w-full"
      >
        <Clock className="w-4 h-4" />
        <span className="text-sm font-medium">
          Letzte Gedanken mit {currentGroupName}
        </span>
        {isExpanded ? (
          <ChevronUp className="w-4 h-4 ml-auto" />
        ) : (
          <ChevronDown className="w-4 h-4 ml-auto" />
        )}
      </button>
      
      {isExpanded && (
        <div className="mt-3 space-y-2 max-h-64 overflow-y-auto">
          {recentEntries.map((entry) => (
            <Card key={entry.id} className="bg-gray-900/50 border-gray-700">
              <CardContent className="p-3">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-medium">{entry.avatar}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white text-sm font-medium">{entry.author}</span>
                      <span className="text-gray-500 text-xs">{entry.timestamp}</span>
                    </div>
                    <p className="text-gray-300 text-sm line-clamp-2 leading-relaxed">
                      {entry.text}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
          
          {hasMoreEntries && (
            <div className="text-center pt-2">
              <span className="text-gray-500 text-xs">
                und {entries.length - 3} weitere Einträge...
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PreviousEntriesTimeline;
