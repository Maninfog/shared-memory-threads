import { useState } from 'react';
import { Plus, Camera, Mic, Heart, MoreHorizontal, MessageCircle, ArrowLeft, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

interface JournalProps {
  selectedGroup?: string;
  onBackToDashboard: () => void;
}

const Journal = ({ selectedGroup, onBackToDashboard }: JournalProps) => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      text: "Heute war unser erster gemeinsamer Kochabend über Videocall. Auch wenn wir 6000km auseinander sind, haben wir zusammen Pasta gemacht und es hat sich angefühlt, als wären wir im selben Raum. ❤️",
      author: "Mara",
      handle: "@mara_loves",
      timestamp: "2h",
      avatar: "M",
      group: "family",
      groupColor: "bg-blue-500"
    },
    {
      id: 2,
      text: "Das synchronized cooking war so süß! Nächste Woche probieren wir Sushi 🍣",
      author: "Alex",
      handle: "@alex_cooks",
      timestamp: "1h", 
      avatar: "A",
      group: "best-friend",
      groupColor: "bg-pink-500"
    },
    {
      id: 3,
      text: "New project launch went great today! The team really pulled together.",
      author: "Sarah",
      handle: "@sarah_pm",
      timestamp: "4h",
      avatar: "S",
      group: "work-colleagues",
      groupColor: "bg-green-500"
    },
    {
      id: 4,
      text: "Sometimes I just need a moment to reflect on how grateful I am for everything in my life.",
      author: "Du",
      handle: "@you",
      timestamp: "1d",
      avatar: "D",
      group: "private",
      groupColor: "bg-purple-500"
    }
  ]);

  const [newEntry, setNewEntry] = useState('');

  const groupNames = {
    'best-friend': 'Best Friend',
    'private': 'Private',
    'family': 'Family',
    'work-colleagues': 'Work Colleagues'
  };

  const groupColors = {
    'best-friend': 'bg-pink-500',
    'private': 'bg-purple-500',
    'family': 'bg-blue-500',
    'work-colleagues': 'bg-green-500'
  };

  const filteredEntries = selectedGroup 
    ? entries.filter(entry => entry.group === selectedGroup)
    : entries;

  const handleExport = () => {
    console.log('Export group data clicked');
    // Export functionality will be implemented here
  };

  const handleAddMember = () => {
    console.log('Add member to group clicked');
    // Add member functionality will be implemented here
  };

  const addEntry = () => {
    if (newEntry.trim() && selectedGroup) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        text: newEntry,
        author: "Du",
        handle: "@you",
        timestamp: "jetzt",
        avatar: "D",
        group: selectedGroup,
        groupColor: groupColors[selectedGroup as keyof typeof groupColors] || 'bg-gray-500'
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };

  const currentGroupName = selectedGroup ? groupNames[selectedGroup as keyof typeof groupNames] : 'Home';

  return (
    <section className="bg-black min-h-screen">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={onBackToDashboard}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <h1 className="text-xl font-bold text-white">{currentGroupName}</h1>
            </div>
            
            {selectedGroup && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                    <Settings className="w-5 h-5 text-white" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent 
                  align="end" 
                  className="bg-gray-800 border-gray-700 min-w-[160px]"
                >
                  <DropdownMenuItem 
                    onClick={handleExport}
                    className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  >
                    Export Data
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={handleAddMember}
                    className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
                  >
                    Add Member
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </div>
        </div>

        {/* Entry Input - only show if a specific group is selected */}
        {selectedGroup && (
          <div className="border-b border-gray-800 p-4">
            <div className="flex space-x-3">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-medium">D</span>
              </div>
              <div className="flex-1">
                <textarea
                  value={newEntry}
                  onChange={(e) => setNewEntry(e.target.value)}
                  placeholder="Was passiert gerade?"
                  className="w-full bg-transparent text-white placeholder-gray-500 resize-none outline-none text-xl leading-relaxed min-h-[120px]"
                />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex space-x-4">
                    <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                      <Camera className="w-5 h-5" />
                    </button>
                    <button className="text-blue-400 hover:bg-blue-400/10 p-2 rounded-full transition-colors">
                      <Mic className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={addEntry}
                    disabled={!newEntry.trim()}
                    className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Posten
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Entries Timeline */}
        <div>
          {filteredEntries.map((entry) => (
            <article key={entry.id} className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
              <div className="flex space-x-3">
                {/* Avatar */}
                <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-medium">{entry.avatar}</span>
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-white hover:underline cursor-pointer">{entry.author}</span>
                    <span className="text-gray-500 text-sm">{entry.handle}</span>
                    <span className="text-gray-500 text-sm">·</span>
                    <span className="text-gray-500 text-sm hover:underline cursor-pointer">{entry.timestamp}</span>
                    {!selectedGroup && (
                      <>
                        <span className="text-gray-500 text-sm">·</span>
                        <span className={`${entry.groupColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                          {groupNames[entry.group as keyof typeof groupNames]}
                        </span>
                      </>
                    )}
                    <div className="ml-auto">
                      <button className="text-gray-500 hover:bg-gray-800 p-1.5 rounded-full transition-colors">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Text Content */}
                  <div className="text-white text-base leading-normal mb-3">
                    {entry.text}
                  </div>
                  
                  {/* Actions */}
                  <div className="flex items-center space-x-8">
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 px-3 py-1.5 rounded-full transition-colors group">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-sm">12</span>
                    </button>
                    
                    <button className="flex items-center space-x-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 px-3 py-1.5 rounded-full transition-colors group">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">24</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
