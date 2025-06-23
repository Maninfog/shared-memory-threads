
import { ArrowLeft, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface JournalHeaderProps {
  currentGroupName: string;
  selectedGroup?: string;
  onBackToDashboard: () => void;
  onExport: () => void;
  onAddMember: () => void;
}

const JournalHeader = ({ 
  currentGroupName, 
  selectedGroup, 
  onBackToDashboard, 
  onExport, 
  onAddMember 
}: JournalHeaderProps) => {
  return (
    <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onBackToDashboard}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold text-white">{currentGroupName}</h1>
        </div>
        
        {selectedGroup && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
                <Settings className="w-5 h-5 text-white" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
              align="end" 
              className="bg-gray-800 border-gray-700 min-w-[160px]"
            >
              <DropdownMenuItem 
                onClick={onExport}
                className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
              >
                Daten exportieren
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={onAddMember}
                className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer"
              >
                Mitglied hinzufügen
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </div>
  );
};

export default JournalHeader;
