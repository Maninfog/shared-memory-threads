
import { MoreHorizontal, MessageCircle, Heart } from 'lucide-react';

interface JournalEntry {
  id: number;
  text: string;
  author: string;
  timestamp: string;
  avatar: string;
  handle: string;
  group: string;
  groupColor: string;
}

interface JournalEntryCardProps {
  entry: JournalEntry;
  showGroupBadge?: boolean;
  groupNames: Record<string, string>;
}

const JournalEntryCard = ({ entry, showGroupBadge = false, groupNames }: JournalEntryCardProps) => {
  return (
    <article className="border-b border-gray-800 p-4 hover:bg-gray-950/50 transition-colors cursor-pointer">
      <div className="flex space-x-3">
        {/* Avatar */}
        <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-white font-medium">{entry.avatar}</span>
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-bold text-white hover:underline cursor-pointer">{entry.author}</span>
            <span className="text-gray-500 text-sm">{entry.handle}</span>
            <span className="text-gray-500 text-sm">·</span>
            <span className="text-gray-500 text-sm hover:underline cursor-pointer">{entry.timestamp}</span>
            {showGroupBadge && (
              <>
                <span className="text-gray-500 text-sm">·</span>
                <span className={`${entry.groupColor} text-white text-xs px-2 py-1 rounded-full font-medium`}>
                  {groupNames[entry.group]}
                </span>
              </>
            )}
            <div className="ml-auto">
              <button className="text-gray-500 hover:bg-gray-800 p-1.5 rounded-full transition-colors">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Text Content */}
          <div className="text-white text-base leading-normal mb-3">
            {entry.text}
          </div>
          
          {/* Actions */}
          <div className="flex items-center space-x-8">
            <button className="flex items-center space-x-2 text-gray-500 hover:text-blue-400 hover:bg-blue-400/10 px-3 py-1.5 rounded-full transition-colors group">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm">12</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 px-3 py-1.5 rounded-full transition-colors group">
              <Heart className="w-4 h-4" />
              <span className="text-sm">24</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JournalEntryCard;
