import React, { useEffect } from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { Services } from './Services';
import { Team } from './Team';
import { Booking } from './Booking';
import { Testimonials } from './Testimonials';
import { Footer } from './Footer';

export const LuxuryLayout: React.FC = () => {
  useEffect(() => {
    // Set body styles for this theme
    document.body.style.backgroundColor = '#0a0a0a';
    document.body.style.color = '#ffffff';
    document.body.classList.add('bg-texture');
    
    return () => {
        document.body.classList.remove('bg-texture');
    }
  }, []);

  return (
    <div className="min-h-screen text-white selection:bg-secondary selection:text-black font-sans pt-14">
      <Header />
      <main>
        <Hero />
        <Services />
        <Team />
        <Booking />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};
