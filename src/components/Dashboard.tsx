
import { Users, Heart, Home, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useJournalEntries } from '../hooks/useJournalEntries';

interface Group {
  id: string;
  name: string;
  color: string;
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
    color: 'bg-gradient-to-r from-pink-500 to-rose-400',
    icon: Heart,
    description: 'Close moments with your bestie',
    memberCount: 2,
    lastActivity: '2h ago'
  }, {
    id: 'private',
    name: 'Private',
    color: 'bg-gradient-to-r from-purple-500 to-violet-400',
    icon: Users,
    description: 'Personal thoughts and reflections',
    memberCount: 1,
    lastActivity: '1h ago'
  }, {
    id: 'family',
    name: 'Family',
    color: 'bg-gradient-to-r from-blue-500 to-indigo-400',
    icon: Home,
    description: 'Family moments and updates',
    memberCount: 6,
    lastActivity: '30m ago'
  }, {
    id: 'work-colleagues',
    name: 'Work Colleagues',
    color: 'bg-gradient-to-r from-green-500 to-emerald-400',
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
      {/* Group Cards Grid */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map(group => {
            const IconComponent = group.icon;
            const postCount = getPostCount(group.id);
            
            return (
              <Card 
                key={group.id} 
                className="zen-gradient-card border-zen-soft hover:border-zen-accent transition-all duration-300 cursor-pointer transform hover:scale-105 zen-glow-violet backdrop-blur-sm" 
                onClick={() => onGroupSelect(group.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${group.color} p-3 rounded-full zen-glow-violet`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-zen-primary mb-2">{group.name}</h3>
                      <p className="text-zen-muted text-sm mb-4">{group.description}</p>
                      <div className="flex items-center justify-between text-xs text-zen-muted">
                        <span>{group.memberCount} member{group.memberCount > 1 ? 's' : ''}</span>
                        <span className="text-zen-accent-violet">{postCount} post{postCount !== 1 ? 's' : ''}</span>
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
