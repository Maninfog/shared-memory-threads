
import { useState } from 'react';
import Journal from '@/components/Journal';
import Dashboard from '@/components/Dashboard';
import BottomNav from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [currentView, setCurrentView] = useState<'dashboard' | 'group'>('dashboard');
  const [selectedGroup, setSelectedGroup] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const handleGroupSelect = (groupId: string) => {
    setSelectedGroup(groupId);
    setCurrentView('group');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
    setSelectedGroup(undefined);
  };

  const handleChatClick = () => {
    // Navigate to CreateEntry when chat icon is clicked
    navigate('/');
  };

  return (
    <div className="min-h-screen pb-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {currentView === 'dashboard' ? (
        <Dashboard onGroupSelect={handleGroupSelect} />
      ) : (
        <Journal 
          selectedGroup={selectedGroup} 
          onBackToDashboard={handleBackToDashboard}
        />
      )}
      <BottomNav 
        onHomeClick={handleBackToDashboard}
        onChatClick={handleChatClick}
      />
    </div>
  );
};

export default Index;
