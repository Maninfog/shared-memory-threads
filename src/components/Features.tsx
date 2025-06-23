
import { Brain, Calendar, BookOpen, Shield, Smartphone, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "KI versteht euch",
      description: "Automatisches Sortieren und schöne Rückblicke eurer gemeinsamen Momente.",
    },
    {
      icon: Calendar,
      title: "Timeline eurer Geschichte",
      description: "Eure Einträge werden zu einer Timeline eurer Beziehung.",
    },
    {
      icon: Shield,
      title: "100% privat",
      description: "Ende-zu-Ende verschlüsselt. Nur ihr könnt eure Gedanken lesen.",
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimiert für unterwegs, wie iOS Notes.",
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Mehr als nur Notizen
          </h2>
          <p className="text-gray-400 text-lg">
            Euer privater Raum für gemeinsame Erinnerungen
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
