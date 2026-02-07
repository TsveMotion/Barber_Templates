import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary text-sm tracking-[0.3em] uppercase font-bold mb-3">Reviews</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-bold">Client Stories</h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-background p-8 rounded-lg relative hover:translate-y-[-5px] transition-transform duration-300">
              <div className="absolute top-6 right-8 text-secondary/20">
                <Quote size={48} />
              </div>
              
              <div className="flex text-secondary mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-300 italic mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="mt-auto">
                <h5 className="text-white font-serif font-bold text-lg">{testimonial.name}</h5>
                <span className="text-gray-500 text-sm">{testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
