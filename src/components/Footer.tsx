
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-gray-800 rounded-lg flex items-center justify-center">
                <Heart className="w-3 h-3 text-white" />
              </div>
              <span className="font-medium text-white">Threaded</span>
            </div>
            <p className="text-gray-400 text-sm">
              Das private Gedächtnis zwischen Menschen.
            </p>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3 text-sm">Produkt</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sicherheit</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-white mb-3 text-sm">Support</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Hilfe</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Kontakt</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 Threaded. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
