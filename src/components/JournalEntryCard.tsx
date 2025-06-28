
import { MoreHorizontal, MessageCircle, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { JournalEntry, GroupNames } from '../types/JournalTypes';

interface JournalEntryCardProps {
  entry: JournalEntry;
  showGroupBadge?: boolean;
  groupNames: GroupNames;
}

const JournalEntryCard = ({ entry, showGroupBadge = false, groupNames }: JournalEntryCardProps) => {
  return (
    <Card className="mineral-card border-b border-mineral mineral-hover cursor-pointer mb-1">
      <CardContent className="p-4">
        <div className="flex space-x-3">
          {/* Avatar */}
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center flex-shrink-0 mineral-shadow-soft">
            <span className="text-mineral-primary font-medium">{entry.avatar}</span>
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-bold text-mineral-primary hover:underline cursor-pointer">{entry.author}</span>
              <span className="text-mineral-secondary text-sm">{entry.handle}</span>
              <span className="text-mineral-muted text-sm">·</span>
              <span className="text-mineral-secondary text-sm hover:underline cursor-pointer">{entry.timestamp}</span>
              {showGroupBadge && (
                <>
                  <span className="text-mineral-muted text-sm">·</span>
                  <span className={`${entry.groupColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                    {groupNames[entry.group]}
                  </span>
                </>
              )}
              <div className="ml-auto">
                <button className="text-mineral-secondary hover:bg-secondary p-1.5 rounded-full transition-colors mineral-hover">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Text Content */}
            <div className="text-mineral-primary text-base leading-normal mb-3">
              {entry.text}
            </div>
            
            {/* Actions */}
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-2 text-mineral-secondary hover:text-primary hover:bg-secondary px-3 py-1.5 rounded-full transition-colors group mineral-hover">
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">12</span>
              </button>
              
              <button className="flex items-center space-x-2 text-mineral-secondary hover:text-destructive hover:bg-destructive/10 px-3 py-1.5 rounded-full transition-colors group mineral-hover">
                <Heart className="w-4 h-4" />
                <span className="text-sm">24</span>
              </button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default JournalEntryCard;
