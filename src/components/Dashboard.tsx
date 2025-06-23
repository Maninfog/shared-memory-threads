
import { Users, Heart, Home, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  const groups: Group[] = [
    {
      id: 'best-friend',
      name: 'Best Friend',
      color: 'bg-pink-500',
      icon: Heart,
      description: 'Close moments with your bestie',
      memberCount: 2,
      lastActivity: '2h ago'
    },
    {
      id: 'private',
      name: 'Private',
      color: 'bg-purple-500',
      icon: Users,
      description: 'Personal thoughts and reflections',
      memberCount: 1,
      lastActivity: '1h ago'
    },
    {
      id: 'family',
      name: 'Family',
      color: 'bg-blue-500',
      icon: Home,
      description: 'Family moments and updates',
      memberCount: 6,
      lastActivity: '30m ago'
    },
    {
      id: 'work-colleagues',
      name: 'Work Colleagues',
      color: 'bg-green-500',
      icon: Briefcase,
      description: 'Professional connections',
      memberCount: 12,
      lastActivity: '4h ago'
    }
  ];

  return (
    <section className="bg-black min-h-screen">
      <div className="max-w-4xl mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Your Groups</h1>
          <p className="text-gray-400">Choose a group to see the latest updates</p>
        </div>

        {/* Group Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => {
            const IconComponent = group.icon;
            return (
              <Card
                key={group.id}
                className="bg-gray-900 border-gray-800 hover:bg-gray-800 transition-all duration-200 cursor-pointer transform hover:scale-105"
                onClick={() => onGroupSelect(group.id)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`${group.color} p-3 rounded-full`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{group.name}</h3>
                      <p className="text-gray-400 text-sm mb-4">{group.description}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{group.memberCount} member{group.memberCount > 1 ? 's' : ''}</span>
                        <span>Last activity: {group.lastActivity}</span>
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
