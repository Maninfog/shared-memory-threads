
import { Star, Heart, Sparkles } from 'lucide-react';
import { JournalEntry, HighlightChapter, GroupNames, GroupColors } from '../types/JournalTypes';

export const initialEntries: JournalEntry[] = [
  {
    id: 1,
    text: "Heute war unser erster gemeinsamer Kochabend über Videocall. Auch wenn wir 6000km auseinander sind, haben wir zusammen Pasta gemacht und es hat sich angefühlt, als wären wir im selben Raum. ❤️",
    author: "Mara",
    handle: "@mara_loves",
    timestamp: "2h",
    avatar: "M",
    group: "family",
    groupColor: "bg-blue-500",
    date: new Date('2024-12-23T16:00:00')
  },
  {
    id: 2,
    text: "Das synchronized cooking war so süß! Nächste Woche probieren wir Sushi 🍣",
    author: "Alex",
    handle: "@alex_cooks",
    timestamp: "1h", 
    avatar: "A",
    group: "best-friend",
    groupColor: "bg-pink-500",
    date: new Date('2024-12-23T17:00:00')
  },
  {
    id: 3,
    text: "New project launch went great today! The team really pulled together.",
    author: "Sarah",
    handle: "@sarah_pm",
    timestamp: "4h",
    avatar: "S",
    group: "work-colleagues",
    groupColor: "bg-green-500",
    date: new Date('2024-12-23T14:00:00')
  },
  {
    id: 4,
    text: "Sometimes I just need a moment to reflect on how grateful I am for everything in my life.",
    author: "Du",
    handle: "@you",
    timestamp: "1d",
    avatar: "D",
    group: "private",
    groupColor: "bg-purple-500",
    date: new Date('2024-12-22T10:00:00')
  },
  {
    id: 5,
    text: "Unser Familienurlaub in den Bergen war unvergesslich. Die Kinder haben zum ersten Mal Schnee gesehen!",
    author: "Papa",
    handle: "@papa_berg",
    timestamp: "3d",
    avatar: "P",
    group: "family",
    groupColor: "bg-blue-500",
    date: new Date('2024-11-15T12:00:00')
  }
];

export const groupNames: GroupNames = {
  'best-friend': 'Beste Freundin',
  'private': 'Privat',
  'family': 'Familie',
  'work-colleagues': 'Arbeitskollegen'
};

export const groupColors: GroupColors = {
  'best-friend': 'bg-pink-500',
  'private': 'bg-purple-500',
  'family': 'bg-blue-500',
  'work-colleagues': 'bg-green-500'
};

export const getHighlightChapters = (selectedGroup?: string): HighlightChapter[] => {
  if (!selectedGroup) return [];
  
  return [
    {
      id: 'special-moments',
      title: 'Besondere Momente',
      description: '3 Monate in Reflexionen',
      icon: Heart,
      color: 'bg-orange-500',
      entryCount: 3
    },
    {
      id: 'milestones',
      title: 'Meilensteine',
      description: 'Performance Cycle Q4',
      icon: Star,
      color: 'bg-blue-500',
      entryCount: 2
    },
    {
      id: 'reflections',
      title: 'Check-In',
      description: 'Tiefe Gedanken und Erkenntnisse',
      icon: Sparkles,
      color: 'bg-purple-500',
      entryCount: 4
    }
  ];
};
