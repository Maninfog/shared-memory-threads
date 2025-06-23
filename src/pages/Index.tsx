
import { useState } from 'react';
import Journal from '@/components/Journal';
import Dashboard from '@/components/Dashboard';
import BottomNav from '@/components/BottomNav';

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'group'>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);

  const handleGroupSelect = (groupId: string) => {
    setSelectedGroup(groupId);
    setCurrentView('group');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedGroup(undefined);
  };

  return (
    <div className="min-h-screen pb-20">
      {currentView === 'dashboard' ? (
        <Dashboard onGroupSelect={handleGroupSelect} />
      ) : (
        <Journal 
          selectedGroup={selectedGroup} 
          onBackToDashboard={handleBackToDashboard} 
        />
      )}
      <BottomNav onHomeClick={handleBackToDashboard} />
    </div>
  );
};

export default Index;
