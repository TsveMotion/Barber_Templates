import React, { useEffect, useState } from 'react';
import { SERVICES, BARBERS, TESTIMONIALS } from '../constants';
import { Hammer, Menu, X, Clock, MapPin, Phone, Star, ChevronRight, Anchor } from 'lucide-react';

export const RusticLayout: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // Dark Industrial Theme
    document.body.style.backgroundColor = '#0c0a09'; // stone-950
    document.body.style.color = '#e7e5e4'; // stone-200
    document.body.classList.add('bg-concrete');
    return () => {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.body.classList.remove('bg-concrete');
    }
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen font-rustic text-stone-200 pt-14 selection:bg-[#d97706] selection:text-black">
      
      {/* Industrial Header */}
      <nav className="sticky top-14 z-40 bg-[#0c0a09]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">
                <div 
                    className="flex items-center space-x-3 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="w-12 h-12 bg-stone-800 flex items-center justify-center border border-stone-700 group-hover:border-[#d97706] transition-colors">
                        <Hammer className="text-[#d97706]" size={24} />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-industrial tracking-wider text-white leading-none">IRON & OAK</span>
                        <span className="text-xs text-[#d97706] tracking-[0.4em] uppercase font-bold">Grooming Co.</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-12">
                    {['Services', 'Crew', 'Reviews'].map((item) => (
                        <button 
                            key={item}
                            onClick={() => scrollToSection(`rustic-${item.toLowerCase()}`)}
                            className="font-industrial text-xl tracking-widest hover:text-[#d97706] transition-colors uppercase text-stone-400 hover:scale-105 transform duration-200"
                        >
                            {item}
                        </button>
                    ))}
                    <button 
                        onClick={() => scrollToSection('rustic-booking')}
                        className="bg-[#d97706] text-black px-8 py-3 font-bold font-industrial text-xl tracking-wider hover:bg-[#b45309] transition-all hover:translate-x-1 clip-path-slant"
                        style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0% 100%)' }}
                    >
                        Book Now
                    </button>
                </div>

                <button 
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-stone-200 hover:text-[#d97706] p-2"
                >
                    {mobileMenu ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#1c1917] border-b border-[#d97706] transition-all duration-300 overflow-hidden ${mobileMenu ? 'max-h-96' : 'max-h-0'}`}>
            <div className="p-8 flex flex-col space-y-6 text-center">
                 {['Services', 'Crew', 'Reviews'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(`rustic-${item.toLowerCase()}`)}
                        className="font-industrial text-2xl tracking-widest text-white hover:text-[#d97706] uppercase"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
      </nav>

      <main>
        {/* Industrial Hero */}
        <section className="relative h-[85vh] flex items-center overflow-hidden border-b border-white/5">
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&w=2000&auto=format&fit=crop" 
                    alt="Industrial Barber" 
                    className="w-full h-full object-cover filter brightness-[0.4] contrast-125 grayscale" 
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                {/* Noise Overlay */}
                <div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center space-x-2 border-b-2 border-[#d97706] pb-2 mb-6">
                        <Star size={16} className="text-[#d97706]" fill="currentColor"/>
                        <span className="text-[#d97706] font-bold tracking-[0.2em] uppercase text-sm">Est. 2018 • Industrial District</span>
                    </div>
                    <h1 className="text-7xl md:text-9xl font-industrial font-bold text-white mb-6 leading-[0.85] tracking-wide">
                        FORGED <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#d97706] to-[#78350f]">IN STYLE</span>
                    </h1>
                    <p className="text-xl text-stone-400 mb-10 max-w-lg font-light leading-relaxed">
                        No nonsense. Just precision cuts, cold beverages, and an atmosphere built for the modern craftsman.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button 
                            onClick={() => scrollToSection('rustic-booking')} 
                            className="px-10 py-4 bg-[#d97706] hover:bg-[#b45309] text-black font-industrial text-2xl tracking-wider transition-all uppercase"
                        >
                            Get The Cut
                        </button>
                        <button 
                            onClick={() => scrollToSection('rustic-services')} 
                            className="px-10 py-4 bg-transparent border border-stone-600 hover:border-white text-white hover:text-white font-industrial text-2xl tracking-wider transition-all uppercase"
                        >
                            View Services
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 right-10 hidden md:block animate-pulse">
                <div className="flex flex-col items-center space-y-4">
                    <span className="writing-vertical-rl text-[#d97706] text-xs font-bold tracking-[0.3em] uppercase rotate-180">Scroll Down</span>
                    <div className="w-[1px] h-16 bg-[#d97706]"></div>
                </div>
            </div>
        </section>

        {/* Industrial Services */}
        <section id="rustic-services" className="py-24 bg-[#0c0a09] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.1),transparent_40%)]"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-6">
                    <div>
                        <h2 className="text-6xl font-industrial text-white mb-2">THE WORKSHOP</h2>
                        <p className="text-[#d97706] tracking-[0.2em] uppercase font-bold text-sm">Premium Grooming Services</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="group relative bg-[#1c1917] p-8 border border-white/5 hover:border-[#d97706]/50 transition-all duration-300">
                            {/* Number Background */}
                            <span className="absolute top-0 right-4 text-9xl font-industrial text-white/5 group-hover:text-[#d97706]/10 transition-colors pointer-events-none">
                                0{idx + 1}
                            </span>
                            
                            <div className="relative z-10 flex justify-between items-start mb-4">
                                <h3 className="text-3xl font-industrial text-white tracking-wide group-hover:text-[#d97706] transition-colors">{service.title}</h3>
                                <span className="text-2xl font-bold text-[#d97706] font-industrial bg-black/30 px-3 py-1">{service.price}</span>
                            </div>
                            
                            <p className="text-stone-500 font-sans mb-6 max-w-sm group-hover:text-stone-400 transition-colors">{service.description}</p>
                            
                            <div className="flex items-center text-xs font-bold uppercase tracking-widest text-stone-600 group-hover:text-[#d97706] transition-colors">
                                <Clock size={14} className="mr-2" />
                                {service.duration}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Industrial Crew */}
        <section id="rustic-crew" className="py-24 bg-[#141211] border-t border-b border-white/5">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-6xl font-industrial text-white mb-4">THE IRON CREW</h2>
                    <div className="w-24 h-1 bg-[#d97706] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BARBERS.map((barber) => (
                        <div key={barber.id} className="group bg-[#0c0a09] border border-white/5 hover:border-[#d97706] transition-all duration-300">
                            <div className="aspect-square overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-3xl font-industrial text-white leading-none">{barber.name}</h3>
                                    <p className="text-[#d97706] text-sm font-bold uppercase tracking-wider">{barber.role}</p>
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2">
                                    {barber.specialties.map((spec) => (
                                        <span key={spec} className="text-[10px] uppercase font-bold tracking-widest border border-stone-800 text-stone-500 px-3 py-1 group-hover:border-[#d97706] group-hover:text-[#d97706] transition-colors">
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Industrial Testimonials */}
        <section id="rustic-reviews" className="py-20 bg-[#0c0a09] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                         <h2 className="text-5xl font-industrial text-white mb-8">WORD ON THE STREET</h2>
                         <div className="space-y-8">
                            {TESTIMONIALS.map((t) => (
                                <div key={t.id} className="border-l-2 border-stone-800 pl-6 py-2 hover:border-[#d97706] transition-colors">
                                    <div className="flex text-[#d97706] mb-2">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                    </div>
                                    <p className="text-stone-300 italic font-sans mb-2 text-lg">"{t.text}"</p>
                                    <div className="text-sm font-bold uppercase text-stone-500 tracking-widest">— {t.name}</div>
                                </div>
                            ))}
                         </div>
                    </div>
                    
                    <div className="relative">
                         <div className="absolute inset-0 border-4 border-[#d97706] translate-x-4 translate-y-4"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1599351431202-6e0c06e7d25a?q=80&w=1000&auto=format&fit=crop" 
                            alt="Shop Interior" 
                            className="w-full relative z-10 filter grayscale brightness-75 contrast-125"
                        />
                    </div>
                 </div>
            </div>
        </section>

        {/* Industrial Booking */}
        <section id="rustic-booking" className="py-24 bg-[#1c1917] relative">
            <div className="max-w-3xl mx-auto px-4 relative z-10">
                <div className="bg-[#0c0a09] border border-stone-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d97706] to-transparent"></div>
                    
                    <div className="text-center mb-10">
                        <Hammer className="text-[#d97706] mx-auto mb-4" size={32} />
                        <h2 className="text-5xl font-industrial text-white mb-2">SECURE YOUR SPOT</h2>
                        <p className="text-stone-500 uppercase tracking-widest text-xs">Walk-ins welcome, appointments preferred</p>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-stone-500 tracking-widest">Name</label>
                                <input type="text" className="w-full bg-[#1c1917] border border-stone-800 text-white p-4 font-rustic tracking-wide focus:border-[#d97706] outline-none transition-colors" placeholder="JOHN DOE" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-stone-500 tracking-widest">Phone</label>
                                <input type="tel" className="w-full bg-[#1c1917] border border-stone-800 text-white p-4 font-rustic tracking-wide focus:border-[#d97706] outline-none transition-colors" placeholder="555-0123" />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                             <label className="text-xs uppercase font-bold text-stone-500 tracking-widest">Service</label>
                             <div className="grid grid-cols-2 gap-4">
                                {SERVICES.slice(0,2).map(s => (
                                    <button key={s.id} className="border border-stone-700 hover:border-[#d97706] hover:bg-[#d97706]/10 text-stone-300 py-3 text-sm font-bold uppercase transition-all">
                                        {s.title}
                                    </button>
                                ))}
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-stone-500 tracking-widest">Date</label>
                                <input type="date" className="w-full bg-[#1c1917] border border-stone-800 text-stone-400 p-4 font-rustic tracking-wide focus:border-[#d97706] outline-none transition-colors [color-scheme:dark]" />
                            </div>
                             <div className="space-y-2">
                                <label className="text-xs uppercase font-bold text-stone-500 tracking-widest">Time</label>
                                <select className="w-full bg-[#1c1917] border border-stone-800 text-stone-400 p-4 font-rustic tracking-wide focus:border-[#d97706] outline-none transition-colors">
                                    <option>10:00 AM</option>
                                    <option>11:00 AM</option>
                                    <option>12:00 PM</option>
                                    <option>01:00 PM</option>
                                </select>
                            </div>
                        </div>

                        <button className="w-full bg-[#d97706] hover:bg-[#b45309] text-black font-industrial font-bold text-2xl py-5 tracking-widest transition-all mt-4 hover:shadow-[0_0_20px_rgba(217,119,6,0.3)]">
                            CONFIRM BOOKING
                        </button>
                    </form>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-[#0c0a09] text-stone-500 py-16 border-t border-stone-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
                 <div className="flex items-center space-x-2 mb-2">
                    <Hammer className="text-[#d97706]" size={20} />
                    <span className="font-industrial font-bold text-2xl text-stone-200 tracking-wider">IRON & OAK</span>
                 </div>
                 <p className="text-xs uppercase tracking-widest">Est. 2018 • New York City</p>
            </div>
            
            <div className="flex space-x-8 text-sm font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-[#d97706] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#d97706] transition-colors">Terms</a>
                <a href="#" className="hover:text-[#d97706] transition-colors">Instagram</a>
            </div>

            <p className="font-sans text-xs text-stone-700">© 2024 Iron & Oak Grooming Co.</p>
         </div>
      </footer>
    </div>
  );
};
