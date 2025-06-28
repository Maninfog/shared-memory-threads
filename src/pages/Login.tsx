
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Fingerprint, Eye, EyeOff, Mail, Lock } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [faceIdLoading, setFaceIdLoading] = useState(false);
  const [faceIdSuccess, setFaceIdSuccess] = useState(false);

  const handleFaceIdLogin = () => {
    setFaceIdLoading(true);
    
    // Simulate Face ID authentication
    setTimeout(() => {
      setFaceIdLoading(false);
      setFaceIdSuccess(true);
      
      setTimeout(() => {
        navigate('/home');
      }, 1000);
    }, 2000);
  };

  const handleEmailLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      navigate('/home');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 mineral-gradient-primary">
      <Card className="w-full max-w-md mineral-card">
        <CardHeader className="text-center pb-6">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center shadow-lg">
              <img 
                src="/lovable-uploads/03921eec-b641-4842-969a-10b6fac11f43.png" 
                alt="App Logo" 
                className="w-12 h-12 object-contain"
              />
            </div>
          </div>
          
          <CardTitle className="text-2xl font-medium text-mineral-primary">
            Willkommen zurück
          </CardTitle>
          <p className="text-mineral-secondary mt-2">
            Melden Sie sich in Ihrem Konto an
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Face ID Login */}
          <div className="text-center">
            <Button
              onClick={handleFaceIdLogin}
              disabled={faceIdLoading || faceIdSuccess}
              className={`w-full h-16 text-lg ${
                faceIdSuccess 
                  ? 'bg-green-500 hover:bg-green-600' 
                  : 'mineral-button-primary'
              }`}
            >
              {faceIdLoading ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Face ID wird erkannt...</span>
                </div>
              ) : faceIdSuccess ? (
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  </div>
                  <span>Erfolgreich authentifiziert</span>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Fingerprint className="w-6 h-6" />
                  <span>Mit Face ID anmelden</span>
                </div>
              )}
            </Button>
          </div>

          {/* Divider */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Oder mit E-Mail
              </span>
            </div>
          </div>

          {/* Email Login Form */}
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">E-Mail</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre.email@beispiel.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Passwort</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ihr Passwort"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 pr-10"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" className="w-full mineral-button-secondary">
              Anmelden
            </Button>
          </form>

          {/* Additional Links */}
          <div className="text-center space-y-2">
            <button className="text-sm text-primary hover:underline">
              Passwort vergessen?
            </button>
            <div className="text-sm text-muted-foreground">
              Noch kein Konto?{' '}
              <button className="text-primary hover:underline">
                Registrieren
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
