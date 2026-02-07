import React from 'react';
import { BARBERS } from '../constants';

export const Team: React.FC = () => {
  return (
    <section id="team" className="py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-secondary text-sm tracking-[0.3em] uppercase font-bold mb-3">The Artists</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Meet The Barbers</h3>
          <div className="w-24 h-1 bg-secondary mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {BARBERS.map((barber) => (
            <div key={barber.id} className="group text-center">
              <div className="relative overflow-hidden mb-6 rounded-sm">
                <div className="aspect-[4/5] overflow-hidden">
                    <img 
                    src={barber.image} 
                    alt={barber.name} 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-110"
                    />
                </div>
                <div className="absolute inset-0 border-2 border-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-95 pointer-events-none"></div>
              </div>
              <h4 className="text-2xl font-serif font-bold mb-2 text-white group-hover:text-secondary transition-colors">
                {barber.name}
              </h4>
              <p className="text-gray-400 text-sm tracking-widest uppercase mb-3">{barber.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                {barber.specialties.map((spec) => (
                  <span key={spec} className="px-3 py-1 bg-white/5 text-xs text-gray-300 rounded-full">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
