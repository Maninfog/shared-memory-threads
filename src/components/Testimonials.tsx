
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      text: "Threaded hat unsere Fernbeziehung gerettet. Endlich vergessen wir die wichtigen Momente nicht mehr.",
      author: "Mara, 30",
      location: "Berlin ↔ Vancouver",
      avatar: "M"
    },
    {
      text: "Wie iOS Notes für Paare. Einfach, privat und wunderschön.",
      author: "Familie Schmidt",
      location: "München",
      avatar: "S"
    }
  ];

  return (
    <section className="bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-white mb-3">
            Was Nutzer sagen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 border border-gray-700"
            >
              <Quote className="w-6 h-6 text-gray-500 mb-4" />
              
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-medium text-sm">{testimonial.avatar}</span>
                </div>
                <div>
                  <div className="font-medium text-white text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-400">{testimonial.location}</div>
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
