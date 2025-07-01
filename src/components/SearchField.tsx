
import { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useJournalEntries } from '../hooks/useJournalEntries';
import JournalEntryCard from './JournalEntryCard';
import { groupNames } from '../data/journalData';

const SearchField = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { entries } = useJournalEntries();

  const filteredEntries = entries.filter(entry =>
    entry.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const showResults = searchTerm.length > 0;

  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-mineral-secondary w-4 h-4" />
        <Input
          type="text"
          placeholder="Journal-Einträge durchsuchen..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10 mineral-card border-mineral"
        />
      </div>

      {showResults && (
        <Card className="mineral-card">
          <CardContent className="p-4">
            <div className="mb-3">
              <h3 className="text-lg font-medium text-mineral-primary">
                Suchergebnisse
              </h3>
              <p className="text-sm text-mineral-secondary">
                {filteredEntries.length} {filteredEntries.length === 1 ? 'Eintrag gefunden' : 'Einträge gefunden'}
              </p>
            </div>
            
            {filteredEntries.length > 0 ? (
              <div className="space-y-0 max-h-64 overflow-y-auto">
                {filteredEntries.map((entry) => (
                  <JournalEntryCard
                    key={entry.id}
                    entry={entry}
                    showGroupBadge={true}
                    groupNames={groupNames}
                  />
                ))}
              </div>
            ) : (
              <p className="text-mineral-secondary text-center py-4">
                Keine Einträge gefunden für "{searchTerm}"
              </p>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchField;
