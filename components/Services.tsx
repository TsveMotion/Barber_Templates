import React from 'react';
import { SERVICES } from '../constants';
import { Clock } from 'lucide-react';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary text-sm tracking-[0.3em] uppercase font-bold mb-3">Our Menu</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white font-bold">Premium Services</h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group p-8 border border-white/10 hover:border-secondary/50 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-lg relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-secondary group-hover:h-full transition-all duration-300"></div>
              
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-2xl font-serif text-white group-hover:text-secondary transition-colors">
                  {service.title}
                </h4>
                <span className="text-xl font-bold text-secondary">
                  {service.price}
                </span>
              </div>
              
              <p className="text-gray-400 mb-6 font-light leading-relaxed">
                {service.description}
              </p>
              
              <div className="flex items-center text-sm text-gray-500">
                <Clock size={16} className="mr-2" />
                <span>{service.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
