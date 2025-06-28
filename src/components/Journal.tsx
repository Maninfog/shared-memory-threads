
import { useState } from 'react';
import { useJournalEntries } from '../hooks/useJournalEntries';
import JournalHeader from './JournalHeader';
import JournalContent from './JournalContent';
import JournalEntryInput from './JournalEntryInput';
import InviteMemberDialog from './InviteMemberDialog';

interface JournalProps {
  selectedGroup?: string;
  onBackToDashboard: () => void;
}

const Journal = ({ selectedGroup, onBackToDashboard }: JournalProps) => {
  const { entries, addEntry } = useJournalEntries();
  const [showInviteDialog, setShowInviteDialog] = useState(false);

  const handleAddEntry = (text: string) => {
    if (selectedGroup) {
      addEntry(text, selectedGroup);
    }
  };

  const handleExport = () => {
    const groupEntries = entries.filter(entry => entry.group === selectedGroup);
    const exportData = JSON.stringify(groupEntries, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${selectedGroup}-journal-export.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleAddMember = () => {
    console.log('Mitglied hinzufügen geklickt');
    setShowInviteDialog(true);
  };

  const getGroupName = (groupId?: string) => {
    const groupNames: { [key: string]: string } = {
      'best-friend': 'Best Friend',
      'private': 'Private',
      'family': 'Familie',
      'work-colleagues': 'Arbeitskollegen'
    };
    return groupNames[groupId || ''] || 'Unbekannte Gruppe';
  };

  const filteredEntries = entries.filter(entry => entry.group === selectedGroup);

  if (!selectedGroup) {
    return (
      <div className="min-h-screen flex items-center justify-center mineral-gradient-primary">
        <div className="text-center">
          <h2 className="text-2xl font-medium text-mineral-primary mb-2">Keine Gruppe ausgewählt</h2>
          <p className="text-mineral-secondary">Wählen Sie eine Gruppe aus dem Dashboard aus.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen mineral-gradient-primary">
      <JournalHeader 
        currentGroupName={getGroupName(selectedGroup)}
        selectedGroup={selectedGroup}
        onBackToDashboard={onBackToDashboard}
        onExport={handleExport}
        onAddMember={handleAddMember}
      />
      
      <div className="mineral-container">
        <div className="max-w-4xl mx-auto">
          <JournalEntryInput onAddEntry={handleAddEntry} />
          <JournalContent entries={filteredEntries} />
        </div>
      </div>

      <InviteMemberDialog 
        open={showInviteDialog}
        onOpenChange={setShowInviteDialog}
        groupName={getGroupName(selectedGroup)}
      />
    </div>
  );
};

export default Journal;
