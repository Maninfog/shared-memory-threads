import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const menuItems = [
    {
      icon: User,
      title: "Profil bearbeiten",
      description: "Persönliche Informationen aktualisieren",
    },
    {
      icon: Shield,
      title: "Datenschutz-Einstellungen",
      description: "Privatsphäre und Sichtbarkeit kontrollieren",
    },
    {
      icon: Crown,
      title: "Mitgliedschaft",
      description: "Abonnement verwalten",
    },
    {
      icon: Bell,
      title: "Benachrichtigungen",
      description: "Benachrichtigungen konfigurieren",
    },
    {
      icon: Database,
      title: "Daten & Backup",
      description: "Tagebücher exportieren und sichern",
    },
    {
      icon: Lock,
      title: "Sicherheit",
      description: "Zwei-Faktor-Auth und Login-Verlauf",
    },
    {
      icon: Users,
      title: "Gruppenverwaltung",
      description: "Gruppen erstellen und verwalten",
    },
    {
      icon: Palette,
      title: "Design & Anzeige",
      description: "App-Erscheinungsbild anpassen",
    },
    {
      icon: HelpCircle,
      title: "Support & Hilfe",
      description: "Hilfe erhalten und Support kontaktieren",
    },
    {
      icon: Info,
      title: "Über",
      description: "App-Informationen und rechtliche Dokumente",
    },
  ];

  const handleMenuItemClick = (title: string) => {
    if (title === "Mitgliedschaft") {
      navigate('/pricing');
      setOpen(false);
    } else {
      console.log(`Geklickt: ${title}`);
      // Handle other navigation here
    }
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent side="bottom" className="bg-background border-border max-h-[80vh] mineral-gradient-primary">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-foreground text-xl">Profil-Einstellungen</SheetTitle>
        </SheetHeader>
        
        <div className="space-y-3 overflow-y-auto">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <button
                key={item.title}
                className="w-full flex items-center justify-between p-4 mineral-card hover:mineral-shadow-medium rounded-lg transition-all duration-200 mineral-hover"
                onClick={() => handleMenuItemClick(item.title)}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mineral-shadow-soft">
                    <IconComponent className="w-5 h-5 text-secondary-foreground" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-foreground font-medium">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ProfileSheet;
