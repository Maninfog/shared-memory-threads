
import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, UserPlus, Check } from 'lucide-react';

interface InviteMemberDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  groupName: string;
}

const InviteMemberDialog = ({ open, onOpenChange, groupName }: InviteMemberDialogProps) => {
  const [email, setEmail] = useState('');
  const [isInvited, setIsInvited] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInvite = async () => {
    if (!email || !email.includes('@')) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsInvited(true);
      setIsLoading(false);
      console.log(`Einladung gesendet an: ${email} für Gruppe: ${groupName}`);
    }, 1000);
  };

  const handleClose = () => {
    setEmail('');
    setIsInvited(false);
    setIsLoading(false);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="mineral-card border-mineral max-w-md">
        <DialogHeader className="text-center">
          <DialogTitle className="text-mineral-primary text-xl flex items-center justify-center gap-2">
            <UserPlus className="w-5 h-5" />
            Mitglied einladen
          </DialogTitle>
          <DialogDescription className="text-mineral-secondary">
            Lade jemanden zu der Gruppe "{groupName}" ein
          </DialogDescription>
        </DialogHeader>

        {!isInvited ? (
          <div className="space-y-4 pt-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-mineral-primary">
                E-Mail-Adresse
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-mineral-secondary" />
                <Input
                  type="email"
                  placeholder="beispiel@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 mineral-input"
                  disabled={isLoading}
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <Button
                variant="outline"
                onClick={handleClose}
                className="flex-1 mineral-button-secondary"
                disabled={isLoading}
              >
                Abbrechen
              </Button>
              <Button
                onClick={handleInvite}
                disabled={!email || !email.includes('@') || isLoading}
                className="flex-1 mineral-button-primary"
              >
                {isLoading ? 'Sende...' : 'Einladen'}
              </Button>
            </div>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium text-mineral-primary mb-2">
                Einladung gesendet!
              </h3>
              <p className="text-mineral-secondary text-sm">
                Eine Einladung wurde an <strong>{email}</strong> gesendet.
              </p>
            </div>
            <Button
              onClick={handleClose}
              className="mineral-button-primary"
            >
              Fertig
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default InviteMemberDialog;
