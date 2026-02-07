import React, { useState, useEffect } from 'react';
import { Menu, X, Scissors } from 'lucide-react';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset calculation:
      // Top Switcher (56px) + Navbar Height (~80px) = ~136px
      const headerOffset = 140; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    // Top-14 accounts for the switcher bar
    <nav 
      className={`fixed top-14 w-full z-40 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-primary/95 backdrop-blur-xl border-secondary/20 py-3 shadow-lg' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div 
            className="flex items-center space-x-3 cursor-pointer group" 
            onClick={() => scrollToSection('hero')}
          >
            <div className="relative">
                <div className="absolute inset-0 bg-secondary blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative p-2 border border-secondary/50 rounded-sm bg-black group-hover:bg-secondary transition-colors duration-300">
                    <Scissors className="h-6 w-6 text-secondary group-hover:text-black transition-colors" />
                </div>
            </div>
            <div className="flex flex-col">
                <span className="text-xl font-display text-white tracking-wide leading-none">CROWN</span>
                <span className="text-[10px] text-secondary font-bold tracking-[0.4em] uppercase leading-tight mt-1 group-hover:text-white transition-colors">& RAZOR</span>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-10">
            {['Services', 'Team', 'Testimonials'].map((name) => (
              <button
                key={name}
                onClick={() => scrollToSection(name.toLowerCase())}
                className="text-gray-400 hover:text-secondary text-xs uppercase tracking-[0.2em] font-bold transition-all hover:scale-105"
              >
                {name}
              </button>
            ))}
            <Button onClick={() => scrollToSection('booking')} className="ml-4">
              Book Appointment
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-secondary p-2 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 border-b border-secondary/20 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-10 space-y-8 flex flex-col items-center min-h-[50vh]">
          {['Services', 'Team', 'Testimonials'].map((name) => (
            <button
              key={name}
              onClick={() => scrollToSection(name.toLowerCase())}
              className="text-gray-300 hover:text-secondary text-2xl font-serif italic tracking-wide transition-colors"
            >
              {name}
            </button>
          ))}
          <div className="pt-4 w-full max-w-xs">
            <Button onClick={() => scrollToSection('booking')} className="w-full justify-center">
              Book Appointment
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
