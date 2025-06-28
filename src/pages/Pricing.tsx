
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import BottomNav from '@/components/BottomNav';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: "Essential",
      price: "5,99 €",
      period: "/Monat",
      description: "Für Privatanwender*innen, die regelmäßig reflektieren möchten.",
      features: [
        "Unbegrenzte Journaleinträge",
        "Link-Sharing (z. B. mit Coach oder Freund*in)",
        "Erste KI-Einblicke & Auswertungen"
      ],
      cta: "Plan wählen",
      popular: false
    },
    {
      name: "Premium",
      price: "9,99 €",
      period: "/Monat",
      description: "Für Intensivnutzer*innen, die aus ihrem emotionalen Verlauf lernen möchten.",
      features: [
        "KI-Rückblicke & personalisierte Zusammenfassungen",
        "Stimmungsverlauf mit Heatmaps",
        "Monatsreport mit Themen-Clustering"
      ],
      cta: "Plan wählen",
      popular: true
    },
    {
      name: "Family & Friends",
      price: "14,99 €",
      period: "/Monat",
      description: "Ideal für Paare, Familien oder Freundeskreise.",
      features: [
        "Bis zu 5 Konten",
        "Gemeinsame Stimmungsanalysen & Gruppenmuster",
        "In-App-Chatbot für geteilte Reflexion"
      ],
      cta: "Plan wählen",
      popular: false
    },
    {
      name: "Enterprise",
      price: "ab 199 €",
      period: "/Monat",
      description: "Für Coaching-Praxen, HR-Abteilungen oder Unternehmensanwendungen.",
      features: [
        "SSO & SCIM-Unterstützung",
        "API- und SDK-Zugriff",
        "Service Level Agreements (SLAs)",
        "Dedizierter Enterprise-Support"
      ],
      cta: "Kontakt aufnehmen",
      popular: false
    }
  ];

  const handleContactExperts = () => {
    // This would typically open a contact form or redirect to a contact page
    console.log('Kontakt mit Experten aufnehmen');
  };

  return (
    <div className="min-h-screen pb-20 mineral-gradient-primary">
      <div className="mineral-container mineral-section">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-mineral-primary mb-4">
            Wählen Sie Ihr Abo-Modell
          </h1>
          <p className="text-mineral-secondary text-lg max-w-2xl mx-auto">
            Finden Sie den perfekten Plan für Ihre Bedürfnisse. 
            Alle Pläne sind jederzeit kündbar.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`mineral-card relative ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Beliebt
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl text-mineral-primary mb-2">
                  {plan.name}
                </CardTitle>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-mineral-primary">
                    {plan.price}
                  </span>
                  <span className="text-mineral-secondary">
                    {plan.period}
                  </span>
                </div>
                <p className="text-sm text-mineral-secondary leading-relaxed">
                  {plan.description}
                </p>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-mineral-primary">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'mineral-button-primary' 
                      : 'mineral-button-secondary'
                  }`}
                  onClick={() => console.log(`${plan.name} ausgewählt`)}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-mineral-secondary text-center mt-3">
                  Jederzeit kündbar. Es gelten die Nutzungsbedingungen.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enterprise Contact Link */}
        <div className="text-center">
          <button
            onClick={handleContactExperts}
            className="text-sm text-primary hover:underline"
          >
            Sie sind ein Unternehmen? Jetzt mit unseren Experten Kontakt aufnehmen
          </button>
        </div>
      </div>

      <BottomNav />
    </div>
  );
};

export default Pricing;
