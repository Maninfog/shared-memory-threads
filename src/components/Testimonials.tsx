
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Threaded hat unsere Fernbeziehung gerettet. Endlich vergessen wir die kleinen, wichtigen Momente nicht mehr. Die KI hilft uns sogar dabei, Muster in unserer Beziehung zu erkennen.",
      author: "Mara, 30",
      location: "Berlin ↔ Vancouver",
      avatar: "M",
      rating: 5
    },
    {
      text: "Als Familie nutzen wir Threaded für alle wichtigen Momente mit unserem Baby. Die Timeline zeigt so schön, wie sich unsere Kleine entwickelt hat. Das erste gedruckte Memory Book war unser Jahreshighlight!",
      author: "Familie Schmidt",
      location: "München",
      avatar: "S",
      rating: 5
    },
    {
      text: "Nach 40 Jahren Ehe dachten wir, wir hätten schon alles erzählt. Threaded zeigt uns jeden Tag neue Facetten unserer Geschichte. Die Wochenrückblicke sind wie kleine Geschenke.",
      author: "Elisabeth & Werner",
      location: "Hamburg",
      avatar: "E",
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Was unsere Nutzer sagen
          </h2>
          <p className="text-xl text-gray-600">
            Echte Geschichten von Menschen, die Threaded nutzen
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
            >
              <Quote className="w-8 h-8 text-orange-300 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
