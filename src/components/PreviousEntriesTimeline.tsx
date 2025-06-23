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
  return;
};
export default PreviousEntriesTimeline;