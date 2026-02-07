import React, { useEffect, useState } from 'react';
import { SERVICES, BARBERS, TESTIMONIALS } from '../constants';
import { Activity, Menu, X, Clock, MapPin, ChevronRight, Zap, Play } from 'lucide-react';

export const NeonLayout: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    // Volt / Neon Theme
    document.body.style.backgroundColor = '#050505';
    document.body.style.color = '#ffffff';
    document.body.classList.add('font-tech');
    return () => {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        document.body.classList.remove('font-tech');
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
    <div className="min-h-screen font-tech text-white pt-14 selection:bg-[#ccff00] selection:text-black bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Neon Header */}
      <nav className="sticky top-14 z-40 bg-[#050505]/80 backdrop-blur-md border-b border-[#ccff00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div 
                    className="flex items-center space-x-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <Activity className="text-[#ccff00] group-hover:animate-pulse" size={28} />
                    <span className="text-3xl font-bold tracking-tighter uppercase italic glow-text">VOLT<span className="text-[#ccff00]">.CUTS</span></span>
                </div>

                <div className="hidden md:flex items-center space-x-10">
                    {['Services', 'Team', 'Reviews'].map((item) => (
                        <button 
                            key={item}
                            onClick={() => scrollToSection(`neon-${item.toLowerCase()}`)}
                            className="text-lg font-medium tracking-wide hover:text-[#ccff00] transition-colors uppercase relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#ccff00] transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                    <button 
                        onClick={() => scrollToSection('neon-booking')}
                        className="bg-transparent border border-[#ccff00] text-[#ccff00] px-6 py-2 font-bold tracking-widest uppercase hover:bg-[#ccff00] hover:text-black transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] skew-x-[-10deg]"
                    >
                        <span className="skew-x-[10deg] inline-block">Initialize</span>
                    </button>
                </div>

                <button 
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-white hover:text-[#ccff00]"
                >
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden bg-[#050505] border-b border-[#ccff00]/30 transition-all duration-300 overflow-hidden ${mobileMenu ? 'max-h-80' : 'max-h-0'}`}>
            <div className="p-6 flex flex-col space-y-4 items-center">
                 {['Services', 'Team', 'Reviews'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(`neon-${item.toLowerCase()}`)}
                        className="text-xl font-bold uppercase hover:text-[#ccff00] tracking-widest"
                    >
                        {item}
                    </button>
                ))}
            </div>
        </div>
      </nav>

      <main>
        {/* Neon Hero */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
             {/* Background with Grid */}
             <div className="absolute inset-0 bg-[#050505]" style={{backgroundImage: 'linear-gradient(rgba(204, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(204, 255, 0, 0.03) 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>
            
             <div className="absolute inset-0 z-0 opacity-60">
                <img 
                    src="https://images.unsplash.com/photo-1599351431202-6e0c06e7d25a?q=80&w=2000&auto=format&fit=crop" 
                    alt="Cyber Barber" 
                    className="w-full h-full object-cover filter grayscale contrast-125 brightness-50" 
                />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="border-l-4 border-[#ccff00] pl-6 md:pl-10">
                    <div className="inline-block bg-[#ccff00] text-black px-2 py-1 mb-4 font-bold text-xs tracking-[0.3em] uppercase">System Online</div>
                    <h1 className="text-6xl md:text-9xl font-bold text-white mb-2 leading-[0.85] tracking-tighter uppercase glow-text">
                        Next Gen <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00f3ff]">Grooming</span>
                    </h1>
                    <p className="text-gray-400 text-xl md:text-2xl mb-8 max-w-lg font-light tracking-wide">
                        Precision engineered cuts. High voltage style. Welcome to the future of barbering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button onClick={() => scrollToSection('neon-booking')} className="px-8 py-4 bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-xl tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.6)]">
                            Book Sequence
                        </button>
                        <button onClick={() => scrollToSection('neon-services')} className="px-8 py-4 border border-white/20 hover:border-[#00f3ff] text-white hover:text-[#00f3ff] font-bold text-xl tracking-widest uppercase transition-all backdrop-blur-sm">
                            View Protocols
                        </button>
                    </div>
                </div>
            </div>
        </section>

        {/* Neon Services */}
        <section id="neon-services" className="py-24 bg-[#050505] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-end justify-between mb-16 border-b border-[#ccff00]/20 pb-4">
                    <div>
                        <span className="text-[#ccff00] font-bold tracking-[0.2em] uppercase text-sm block mb-1">Modules</span>
                        <h2 className="text-5xl font-bold text-white uppercase tracking-tight">Service Protocols</h2>
                    </div>
                    <Activity className="text-[#ccff00] animate-pulse hidden md:block" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="bg-[#111] p-1 border border-white/5 hover:border-[#ccff00] transition-colors group">
                            <div className="bg-[#0a0a0a] p-8 h-full relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                                    <Zap className="text-[#ccff00]" size={40} />
                                </div>
                                <div className="flex justify-between items-start mb-4 relative z-10">
                                    <h3 className="text-2xl font-bold text-white uppercase group-hover:text-[#ccff00] transition-colors">{service.title}</h3>
                                    <div className="bg-[#ccff00] text-black font-bold px-3 py-1 text-lg">{service.price}</div>
                                </div>
                                <p className="text-gray-500 mb-6 font-mono text-sm leading-relaxed">{service.description}</p>
                                <div className="flex items-center text-[#00f3ff] text-sm font-bold uppercase tracking-widest">
                                    <Clock size={16} className="mr-2" />
                                    {service.duration} <span className="mx-2">///</span> ACTIVE
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Neon Team */}
        <section id="neon-team" className="py-24 bg-[#0a0a0a] border-t border-[#ccff00]/10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 text-center">
                    <h2 className="text-5xl font-bold text-white uppercase mb-2">Operators</h2>
                    <div className="w-1 h-10 bg-[#ccff00] mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BARBERS.map((barber) => (
                        <div key={barber.id} className="group relative">
                            <div className="aspect-[3/4] overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500 border-2 border-transparent group-hover:border-[#ccff00]">
                                <img src={barber.image} alt={barber.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-0 left-0 w-full p-6">
                                    <h3 className="text-3xl font-bold text-white uppercase italic">{barber.name}</h3>
                                    <p className="text-[#ccff00] font-mono text-sm uppercase tracking-widest mb-2">Rank: {barber.role}</p>
                                    <div className="flex flex-wrap gap-2">
                                         {barber.specialties.map(spec => (
                                            <span key={spec} className="text-[10px] border border-[#333] text-gray-400 px-2 py-1 uppercase">{spec}</span>
                                         ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Neon Booking */}
        <section id="neon-booking" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Cyber Grid Overlay */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{background: 'linear-gradient(transparent 95%, #00f3ff 95%)', backgroundSize: '100% 40px'}}></div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="bg-[#111]/90 backdrop-blur-xl border border-[#ccff00]/30 p-8 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
                    <div className="flex items-center justify-between mb-8 border-b border-[#333] pb-6">
                        <h2 className="text-4xl md:text-5xl font-bold text-white uppercase">Initialize Booking</h2>
                        <div className="flex space-x-1">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-[#ccff00]"></div>
                        </div>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-2">
                            <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">Client ID</label>
                            <input type="text" placeholder="NAME" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-white p-4 font-mono outline-none transition-colors" />
                        </div>
                         <div className="space-y-2">
                            <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">Comm Link</label>
                            <input type="tel" placeholder="PHONE / EMAIL" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-white p-4 font-mono outline-none transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">Protocol</label>
                            <select className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none transition-colors">
                                <option>SELECT SERVICE...</option>
                                {SERVICES.map(s => <option key={s.id}>{s.title}</option>)}
                            </select>
                        </div>
                        <div className="space-y-2">
                             <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest">Sync Time</label>
                             <div className="flex gap-2">
                                <input type="date" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none [color-scheme:dark]" />
                                <select className="w-1/3 bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none">
                                    <option>10:00</option>
                                    <option>12:00</option>
                                    <option>14:00</option>
                                </select>
                             </div>
                        </div>

                        <div className="md:col-span-2 pt-4">
                            <button className="w-full bg-[#ccff00] hover:bg-[#b3e600] text-black font-bold text-xl py-5 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all hover:scale-[1.01]">
                                <span className="flex items-center justify-center gap-2">
                                    <Play size={20} fill="black" /> Confirm Sequence
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-[#050505] border-t border-[#333] py-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
                <Activity className="text-[#ccff00]" size={20} />
                <span className="text-xl font-bold uppercase tracking-widest">VOLT.CUTS</span>
            </div>
            <div className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                System Version 2.0.4 • All Rights Reserved
            </div>
        </div>
      </footer>
    </div>
  );
};
