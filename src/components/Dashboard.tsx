
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

  // Calculate post count for each group
  const getPostCount = (groupId: string) => {
    return entries.filter(entry => entry.group === groupId).length;
  };

  return (
    <section className="bg-black min-h-screen">
      {/* Header Section (replaces Hero) */}
      <div className="bg-black py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="font-medium text-2xl text-white">Lumen</span>
            </div>
            
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-4 leading-tight">
              Your Groups
            </h1>
            <p className="text-base text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Choose a group to see the latest updates and share your thoughts
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <button className="bg-white text-gray-900 px-6 py-2.5 rounded-xl hover:bg-gray-100 transition-colors font-medium">
              Kostenfrei starten
            </button>
          </div>
        </div>
      </div>

      {/* Group Cards Grid */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {groups.map((group) => {
            const IconComponent = group.icon;
            const postCount = getPostCount(group.id);
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
                        <span>{postCount} post{postCount !== 1 ? 's' : ''}</span>
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
