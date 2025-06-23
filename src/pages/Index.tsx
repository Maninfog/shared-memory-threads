
import { useState } from 'react';
import Journal from '@/components/Journal';
import Dashboard from '@/components/Dashboard';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'group'>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const [pendingEntry, setPendingEntry] = useState<string | null>(null);

  const handleGroupSelect = (groupId: string) => {
    setSelectedGroup(groupId);
    setCurrentView('group');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedGroup(undefined);
    setPendingEntry(null);
  };

  const handleCreateEntry = (entry: { text: string; group: string; aiEnabled: boolean }) => {
    console.log('Neuer Eintrag erstellt:', entry);
    
    // Set the pending entry to be added when we navigate to the group
    setPendingEntry(entry.text);
    
    // Navigate to the selected group after creating entry
    setSelectedGroup(entry.group);
    setCurrentView('group');
    
    if (entry.aiEnabled) {
      console.log('KI-Journaling ist aktiviert für diesen Eintrag');
      // Here you would trigger the AI functionality
    }
  };

  return (
    <div className="min-h-screen pb-20">
      {currentView === 'dashboard' ? (
        <Dashboard onGroupSelect={handleGroupSelect} />
      ) : (
        <Journal 
          selectedGroup={selectedGroup} 
          onBackToDashboard={handleBackToDashboard}
          pendingEntry={pendingEntry}
          onEntryProcessed={() => setPendingEntry(null)}
        />
      )}
      <BottomNav 
        onHomeClick={handleBackToDashboard}
        onCreateEntry={handleCreateEntry}
      />
    </div>
  );
};

export default Index;
