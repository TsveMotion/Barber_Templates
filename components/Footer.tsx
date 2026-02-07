import React from 'react';
import { Scissors, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary rounded-full">
                    <Scissors className="h-5 w-5 text-primary" />
                </div>
                <div>
                    <span className="block text-xl font-serif font-bold text-white tracking-wider leading-none">CROWN</span>
                    <span className="block text-xs text-secondary font-bold tracking-[0.3em] leading-none">& RAZOR</span>
                </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevating the standard of male grooming. Precision cuts, hot shaves, and premium styling in a relaxed, vintage atmosphere.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-secondary hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-3">
              {['Services', 'Our Team', 'Testimonials', 'Book Now', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-sm uppercase tracking-wide">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-secondary mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Grooming Blvd,<br/>Fashion District, NY 10012</span>
              </li>
              <li className="flex items-center">
                <Phone className="text-secondary mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-secondary mr-3 flex-shrink-0" size={18} />
                <span className="text-gray-400">hello@crownandrazor.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-serif font-bold text-lg mb-6">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between text-secondary">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-gray-600 text-sm">
          <p>&copy; {new Date().getFullYear()} Crown & Razor Barbershop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
