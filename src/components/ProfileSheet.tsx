
import { useState } from 'react';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from '@/components/ui/sheet';
import { 
  Settings, 
  User, 
  Shield, 
  Crown, 
  Bell, 
  Database, 
  Lock, 
  Users, 
  Palette, 
  HelpCircle, 
  Info,
  ChevronRight
} from 'lucide-react';

interface ProfileSheetProps {
  children: React.ReactNode;
}

const ProfileSheet = ({ children }: ProfileSheetProps) => {
  const [open, setOpen] = useState(false);

  const menuItems = [
    {
      icon: User,
      title: "Profile Edit",
      description: "Update your personal information",
    },
    {
      icon: Shield,
      title: "Privacy Settings",
      description: "Control your privacy and visibility",
    },
    {
      icon: Crown,
      title: "Membership",
      description: "Manage your subscription",
    },
    {
      icon: Bell,
      title: "Notifications",
      description: "Configure your alerts",
    },
    {
      icon: Database,
      title: "Data & Backup",
      description: "Export and backup your journals",
    },
    {
      icon: Lock,
      title: "Security",
      description: "Two-factor auth and login history",
    },
    {
      icon: Users,
      title: "Group Management",
      description: "Create and manage your groups",
    },
    {
      icon: Palette,
      title: "Theme & Display",
      description: "Customize your app appearance",
    },
    {
      icon: HelpCircle,
      title: "Support & Help",
      description: "Get help and contact support",
    },
    {
      icon: Info,
      title: "About",
      description: "App info and legal documents",
    },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-gray-900 border-gray-800 max-h-[80vh]">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-white text-xl">Profile Settings</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.title}
                className="w-full flex items-center justify-between p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => {
                  console.log(`Clicked: ${item.title}`);
                  // Handle navigation here
                }}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-white font-medium">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
