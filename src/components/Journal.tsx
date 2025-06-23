
import { useState } from 'react';
import { Plus, Camera, Mic, Heart, Calendar, Tag } from 'lucide-react';

interface JournalEntry {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  mood: string;
  tags: string[];
}

const Journal = () => {
  const [entries, setEntries] = useState<JournalEntry[]>([
    {
      id: 1,
      text: "Heute war unser erster gemeinsamer Kochabend über Videocall. Auch wenn wir 6000km auseinander sind, haben wir zusammen Pasta gemacht und es hat sich angefühlt, als wären wir im selben Raum. ❤️",
      author: "Mara",
      timestamp: "vor 2 Stunden",
      mood: "💕",
      tags: ["Fernbeziehung", "Kochen", "Videocall"]
    },
    {
      id: 2,
      text: "Das Foto von unserem 'synchronized cooking' ist zu süß geworden! Ich freu mich schon auf nächste Woche, wenn wir Sushi probieren.",
      author: "Alex",
      timestamp: "vor 1 Stunde",
      mood: "🥰",
      tags: ["Kochen", "Pläne", "Sushi"]
    }
  ]);

  const [newEntry, setNewEntry] = useState('');

  const addEntry = () => {
    if (newEntry.trim()) {
      const entry: JournalEntry = {
        id: entries.length + 1,
        text: newEntry,
        author: "Du",
        timestamp: "gerade eben",
        mood: "😊",
        tags: ["Neu"]
      };
      setEntries([entry, ...entries]);
      setNewEntry('');
    }
  };

  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Euer gemeinsames Journal</h2>
          <p className="text-gray-600">Hier entstehen eure gemeinsamen Erinnerungen</p>
        </div>

        {/* Entry Input */}
        <div className="bg-gradient-to-r from-orange-50 to-pink-50 rounded-2xl p-6 mb-8 border border-orange-100">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium">M</span>
            </div>
            <div className="flex-1">
              <textarea
                value={newEntry}
                onChange={(e) => setNewEntry(e.target.value)}
                placeholder="Was beschäftigt dich heute? Teile deine Gedanken..."
                className="w-full bg-white rounded-xl p-4 border border-gray-200 focus:border-orange-300 focus:ring-2 focus:ring-orange-100 outline-none resize-none min-h-[100px]"
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <Camera className="w-4 h-4" />
                    <span className="text-sm">Foto</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <Mic className="w-4 h-4" />
                    <span className="text-sm">Audio</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors">
                    <Tag className="w-4 h-4" />
                    <span className="text-sm">Tag</span>
                  </button>
                </div>
                <button
                  onClick={addEntry}
                  className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full hover:from-orange-500 hover:to-pink-600 transition-all duration-300 font-medium flex items-center space-x-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Teilen</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Entries Timeline */}
        <div className="space-y-6">
          {entries.map((entry) => (
            <div key={entry.id} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium">{entry.author[0]}</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium text-gray-900">{entry.author}</span>
                    <span className="text-gray-500 text-sm">{entry.timestamp}</span>
                    <span className="text-lg">{entry.mood}</span>
                  </div>
                  <p className="text-gray-700 mb-3 leading-relaxed">{entry.text}</p>
                  <div className="flex items-center space-x-2">
                    {entry.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-orange-100 to-pink-100 text-orange-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-4 mt-4 text-gray-500">
                    <button className="flex items-center space-x-1 hover:text-pink-500 transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-sm">Gefällt mir</span>
                    </button>
                    <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">Zu Meilenstein hinzufügen</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
