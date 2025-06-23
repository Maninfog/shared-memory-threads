
import { useState } from 'react';
import { Plus, Camera, Mic, Heart, MoreHorizontal } from 'lucide-react';

interface JournalEntry {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  avatar: string;
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      text: "Heute war unser erster gemeinsamer Kochabend über Videocall. Auch wenn wir 6000km auseinander sind, haben wir zusammen Pasta gemacht und es hat sich angefühlt, als wären wir im selben Raum. ❤️",
      author: "Mara",
      timestamp: "2h",
      avatar: "M"
    },
    {
      id: 2,
      text: "Das synchronized cooking war so süß! Nächste Woche probieren wir Sushi 🍣",
      author: "Alex",
      timestamp: "1h",
      avatar: "A"
    }
  ]);

  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        text: newEntry,
        author: "Du",
        timestamp: "jetzt",
        avatar: "D"
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };

  return (
    <section className="bg-gray-900 py-8">
      <div className="max-w-2xl mx-auto px-4">
        {/* Entry Input - iOS Notes style */}
        <div className="bg-gray-800 rounded-2xl p-4 mb-6 border border-gray-700">
          <textarea
            value={newEntry}
            onChange={(e) => setNewEntry(e.target.value)}
            placeholder="Was denkst du gerade..."
            className="w-full bg-transparent text-white placeholder-gray-400 resize-none outline-none text-base leading-relaxed min-h-[80px]"
          />
          <div className="flex items-center justify-between mt-3">
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <Camera className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <Mic className="w-5 h-5" />
              </button>
            </div>
            <button
              onClick={addEntry}
              disabled={!newEntry.trim()}
              className="bg-white text-gray-900 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Teilen
            </button>
          </div>
        </div>

        {/* Entries Timeline - Instagram style */}
        <div className="space-y-4">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 pb-2">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">{entry.avatar}</span>
                  </div>
                  <div>
                    <span className="font-medium text-white text-sm">{entry.author}</span>
                    <span className="text-gray-400 text-xs ml-2">{entry.timestamp}</span>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-white transition-colors">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
              
              {/* Content */}
              <div className="px-4 pb-2">
                <p className="text-white text-base leading-relaxed">{entry.text}</p>
              </div>
              
              {/* Actions */}
              <div className="px-4 pb-4">
                <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm">Gefällt mir</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
