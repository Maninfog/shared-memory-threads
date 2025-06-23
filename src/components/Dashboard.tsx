
import { Users, Heart, Home, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useJournalEntries } from '../hooks/useJournalEntries';

interface Group {
  id: string;
  name: string;
  icon: any;
  description: string;
  memberCount: number;
  lastActivity: string;
}

interface DashboardProps {
  onGroupSelect: (groupId: string) => void;
}

const Dashboard = ({ onGroupSelect }: DashboardProps) => {
  const { entries } = useJournalEntries();
  
  const groups: Group[] = [{
    id: 'best-friend',
    name: 'Best Friend',
    icon: Heart,
    description: 'Close moments with your bestie',
    memberCount: 2,
    lastActivity: '2h ago'
  }, {
    id: 'private',
    name: 'Private',
    icon: Users,
    description: 'Personal thoughts and reflections',
    memberCount: 1,
    lastActivity: '1h ago'
  }, {
    id: 'family',
    name: 'Family',
    icon: Home,
    description: 'Family moments and updates',
    memberCount: 6,
    lastActivity: '30m ago'
  }, {
    id: 'work-colleagues',
    name: 'Work Colleagues',
    icon: Briefcase,
    description: 'Professional connections',
    memberCount: 12,
    lastActivity: '4h ago'
  }];

  // Calculate post count for each group
  const getPostCount = (groupId: string) => {
    return entries.filter(entry => entry.group === groupId).length;
  };

  return (
    <section className="min-h-screen">
      <div className="mineral-container mineral-section">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-medium text-mineral-primary mb-2">
            Home
          </h1>
          <p className="text-mineral-secondary">
            Deine Journal-Gruppen im Überblick
          </p>
        </div>

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {groups.map(group => {
            const IconComponent = group.icon;
            const postCount = getPostCount(group.id);
            
            return (
              <Card 
                key={group.id} 
                className="mineral-card mineral-hover cursor-pointer border-2 border-mineral hover:border-primary transition-all duration-200" 
                onClick={() => onGroupSelect(group.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary p-3 rounded-lg mineral-shadow-soft">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-medium text-mineral-primary mb-2">
                        {group.name}
                      </h3>
                      <p className="text-mineral-secondary text-sm mb-4">
                        {group.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-mineral-secondary">
                        <span>
                          {group.memberCount} member{group.memberCount > 1 ? 's' : ''}
                        </span>
                        <span className="font-medium text-mineral-primary">
                          {postCount} post{postCount !== 1 ? 's' : ''}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
