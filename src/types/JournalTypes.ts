
export interface JournalEntry {
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

export interface HighlightChapter {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  entryCount: number;
}

export interface GroupNames {
  [key: string]: string;
}

export interface GroupColors {
  [key: string]: string;
}
