import React from 'react';
import { Button } from './Button';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/id/401/1920/1080" 
          alt="Barbershop interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-[#0a0a0a]"></div>
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="inline-block border-t border-b border-secondary/30 py-2 px-6 mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="block text-secondary text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
            Est. 2024 • New York City
            </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white mb-8 leading-none animate-fade-in-up delay-100 tracking-wide drop-shadow-2xl">
          CROWN <span className="text-secondary">&</span> RAZOR
        </h1>
        
        <p className="text-gray-300 text-lg md:text-xl font-serif italic mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          "Where the precision of the blade meets the luxury of the crown."
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up delay-300">
          <Button onClick={scrollToBooking} className="text-lg px-10 py-4">
            Book Appointment
          </Button>
          <Button variant="outline" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-lg px-10 py-4">
            Our Services
          </Button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-secondary/50">
        <ArrowDown size={32} />
      </div>
    </section>
  );
};
