
import { Brain, Calendar, BookOpen, Shield, Smartphone, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "KI-gestützte Reflexion",
      description: "Automatisches Tagging, Sentiment-Analyse und personalisierte Wochenrückblicke helfen euch, eure gemeinsame Geschichte zu verstehen.",
      color: "from-purple-400 to-blue-500"
    },
    {
      icon: Calendar,
      title: "Timeline eurer Beziehung",
      description: "Eure Einträge werden automatisch zu einer wunderschönen Timeline eurer gemeinsamen Momente und Meilensteine.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BookOpen,
      title: "Memory Books",
      description: "Verwandelt eure digitalen Erinnerungen in hochwertige gedruckte Bücher für besondere Anlässe.",
      color: "from-cyan-400 to-teal-500"
    },
    {
      icon: Shield,
      title: "Privacy First",
      description: "Ende-zu-Ende-Verschlüsselung und Zero-Knowledge-Design. Nur ihr könnt eure intimsten Gedanken lesen.",
      color: "from-teal-400 to-green-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Optimiert für unterwegs. Teilt Momente direkt, wenn sie passieren – egal wo ihr seid.",
      color: "from-green-400 to-yellow-500"
    },
    {
      icon: Users,
      title: "Flexible Gruppen",
      description: "Funktioniert für Paare, Familien, WGs oder Freundeskreise. Jede Beziehung verdient ihren eigenen Raum.",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mehr als nur ein Journal
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Threaded verbindet moderne KI mit emotionaler Intelligenz, um eure Beziehung zu stärken und eure Geschichte zu bewahren.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
