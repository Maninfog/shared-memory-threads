
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
    <div className="sticky top-0 bg-background/95 backdrop-blur-md border-b border-mineral mineral-shadow-soft p-4 z-50">
      <div className="mineral-container">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBackToDashboard}
              className="text-mineral-secondary hover:text-mineral-primary transition-colors p-2 mineral-hover rounded-lg"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-xl font-medium text-mineral-primary">{currentGroupName}</h1>
          </div>
          
          {selectedGroup && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors mineral-hover">
                  <Settings className="w-5 h-5 text-mineral-primary" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className="mineral-card border-mineral min-w-[160px] z-50"
              >
                <DropdownMenuItem 
                  onClick={onExport}
                  className="text-mineral-primary hover:bg-secondary focus:bg-secondary cursor-pointer"
                >
                  Daten exportieren
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={onAddMember}
                  className="text-mineral-primary hover:bg-secondary focus:bg-secondary cursor-pointer"
                >
                  Mitglied hinzufügen
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
};

export default JournalHeader;
