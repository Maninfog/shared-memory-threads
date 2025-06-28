
import { Plus, Users, Heart, Home as HomeIcon, Briefcase, TrendingUp, CreditCard } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import BottomNav from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleDashboardClick = () => {
    navigate('/groups');
  };

  const handleChatClick = () => {
    navigate('/groups');
  };

  const quickStats = [
    { label: 'Total Entries', value: '24', icon: Plus },
    { label: 'Active Groups', value: '4', icon: Users },
    { label: 'This Week', value: '7', icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen pb-20 mineral-gradient-primary">
      <div className="mineral-container mineral-section">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-mineral-primary mb-2">
            Willkommen zurück
          </h1>
          <p className="text-mineral-secondary">
            Dein persönlicher Journal-Überblick
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {quickStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="mineral-card text-center">
                <CardContent className="p-4">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="bg-primary p-2 rounded-lg">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="text-lg font-medium text-mineral-primary">
                      {stat.value}
                    </div>
                    <div className="text-xs text-mineral-secondary">
                      {stat.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="space-y-4">
          <h2 className="text-xl font-medium text-mineral-primary">
            Schnellzugriff
          </h2>
          
          <div className="grid grid-cols-1 gap-4">
            <Card 
              className="mineral-card mineral-hover cursor-pointer" 
              onClick={() => navigate('/create')}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Plus className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mineral-primary">
                      Neuer Eintrag
                    </h3>
                    <p className="text-mineral-secondary text-sm">
                      Teile deine Gedanken und Erlebnisse
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="mineral-card mineral-hover cursor-pointer" 
              onClick={handleDashboardClick}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mineral-primary">
                      Gruppen Dashboard
                    </h3>
                    <p className="text-mineral-secondary text-sm">
                      Verwalte deine Journal-Gruppen
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card 
              className="mineral-card mineral-hover cursor-pointer" 
              onClick={() => navigate('/pricing')}
            >
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary p-3 rounded-lg">
                    <CreditCard className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-mineral-primary">
                      Mitgliedschaft
                    </h3>
                    <p className="text-mineral-secondary text-sm">
                      Wählen Sie Ihr Abo-Modell
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <BottomNav 
        onHomeClick={() => {}}
        onChatClick={handleChatClick}
      />
    </div>
  );
};

export default Home;
