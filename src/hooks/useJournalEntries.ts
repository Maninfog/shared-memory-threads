
import { useState } from 'react';
import { JournalEntry, GroupColors } from '../types/JournalTypes';
import { initialEntries, groupColors } from '../data/journalData';

export const useJournalEntries = () => {
  const [entries, setEntries] = useState<JournalEntry[]>(initialEntries);

  const addEntry = (text: string, selectedGroup?: string) => {
    if (selectedGroup) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        text,
        author: "Du",
        handle: "@you",
        timestamp: "jetzt",
        avatar: "D",
        group: selectedGroup,
        groupColor: groupColors[selectedGroup as keyof GroupColors] || 'bg-gray-500',
        date: new Date()
      };
      setEntries([entry, ...entries]);
    }
  };

  return { entries, addEntry };
};
