import React, { useEffect, useState } from 'react';
import { SERVICES, BARBERS, TESTIMONIALS } from '../constants';
import { Activity, Menu, X, Clock, MapPin, ChevronRight, Zap, Play, Star, Shield } from 'lucide-react';

export const NeonLayout: React.FC = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Volt / Neon Theme Global Styles
    document.body.style.backgroundColor = '#050505';
    document.body.style.color = '#ffffff';
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset = SiteSwitcher (56px) + NavHeight (80px) + Buffer
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
    <div className="min-h-screen font-tech text-white pt-14 selection:bg-[#ccff00] selection:text-black bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]">
      
      {/* Fixed Header - Aligned with Luxury Layout */}
      <nav className={`fixed top-14 w-full z-40 transition-all duration-300 border-b ${scrolled ? 'bg-[#050505]/90 backdrop-blur-md border-[#ccff00]/20 py-0' : 'bg-transparent border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                <div 
                    className="flex items-center space-x-2 cursor-pointer group"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="relative">
                        <div className="absolute inset-0 bg-[#ccff00] blur opacity-20 group-hover:opacity-50 transition-opacity"></div>
                        <Activity className="text-[#ccff00] relative z-10" size={28} />
                    </div>
                    <span className="text-3xl font-bold tracking-tighter uppercase italic glow-text">VOLT<span className="text-[#ccff00]">.CUTS</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10">
                    {['Services', 'Team', 'Reviews'].map((item) => (
                        <button 
                            key={item}
                            onClick={() => scrollToSection(`neon-${item.toLowerCase()}`)}
                            className="text-sm font-bold tracking-[0.2em] hover:text-[#ccff00] transition-colors uppercase relative group"
                        >
                            {item}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#ccff00] transition-all group-hover:w-full box-shadow-[0_0_10px_#ccff00]"></span>
                        </button>
                    ))}
                    <button 
                        onClick={() => scrollToSection('neon-booking')}
                        className="bg-[#ccff00] text-black border border-[#ccff00] px-8 py-2 font-bold tracking-widest uppercase hover:bg-transparent hover:text-[#ccff00] transition-all hover:shadow-[0_0_20px_rgba(204,255,0,0.5)] transform hover:-translate-y-1"
                    >
                        Initialize
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button 
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="md:hidden text-white hover:text-[#ccff00] transition-colors"
                >
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-[#050505] border-b border-[#ccff00]/30 transition-all duration-300 overflow-hidden ${mobileMenu ? 'max-h-screen opacity-100 shadow-[0_10px_30px_rgba(0,0,0,0.9)]' : 'max-h-0 opacity-0'}`}>
            <div className="p-8 flex flex-col space-y-6 items-center">
                 {['Services', 'Team', 'Reviews'].map((item) => (
                    <button 
                        key={item}
                        onClick={() => scrollToSection(`neon-${item.toLowerCase()}`)}
                        className="text-2xl font-bold uppercase hover:text-[#ccff00] tracking-widest"
                    >
                        {item}
                    </button>
                ))}
                <button 
                    onClick={() => scrollToSection('neon-booking')}
                    className="w-full bg-[#ccff00] text-black py-4 font-bold tracking-widest uppercase"
                >
                    Initialize Booking
                </button>
            </div>
        </div>
      </nav>

      <main>
        {/* Hero Section - Centered & Full Screen like Luxury */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
             {/* Background Layers */}
             <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=2000&auto=format&fit=crop" 
                    alt="Cyber Barber" 
                    className="w-full h-full object-cover opacity-40 filter grayscale contrast-125" 
                />
                 <div className="absolute inset-0 bg-[#050505]/80 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]"></div>
                 {/* Cyber Grid */}
                 <div className="absolute inset-0 bg-[linear-gradient(rgba(204,255,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(204,255,0,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <div className="inline-flex items-center space-x-2 border border-[#ccff00]/30 bg-[#ccff00]/5 px-4 py-2 mb-8 backdrop-blur-sm animate-pulse">
                    <div className="w-2 h-2 bg-[#ccff00] rounded-full"></div>
                    <span className="text-[#ccff00] text-xs md:text-sm tracking-[0.4em] uppercase font-bold">
                        System Online • Version 2.0
                    </span>
                </div>
                
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-white mb-8 leading-none tracking-tighter uppercase glow-text">
                    VOLT <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#ccff00] to-transparent">CUTS</span>
                </h1>
                
                <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide font-light">
                    Where precision algorithms meet razor sharp styling. Experience the next generation of grooming protocols.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button onClick={() => scrollToSection('neon-booking')} className="px-10 py-4 bg-[#ccff00] hover:bg-white text-black font-bold text-lg tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_50px_rgba(204,255,0,0.6)] hover:-translate-y-1">
                        Initialize Booking
                    </button>
                    <button onClick={() => scrollToSection('neon-services')} className="px-10 py-4 border border-white/20 hover:border-[#ccff00] text-white hover:text-[#ccff00] font-bold text-lg tracking-widest uppercase transition-all backdrop-blur-sm hover:bg-[#ccff00]/5">
                        Access Menu
                    </button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce opacity-50">
                <span className="text-[10px] uppercase tracking-widest mb-2 text-[#ccff00]">Scroll</span>
                <ChevronRight className="rotate-90 text-[#ccff00]" size={20} />
            </div>
        </section>

        {/* Services Section - Standard Grid like Luxury */}
        <section id="neon-services" className="py-24 bg-[#0a0a0a] relative border-t border-[#ccff00]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#ccff00] text-sm tracking-[0.3em] uppercase font-bold mb-3">Protocols</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Service Modules</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {SERVICES.map((service, idx) => (
                        <div key={idx} className="group relative bg-[#111] border border-white/5 hover:border-[#ccff00] transition-all duration-300 overflow-hidden">
                            {/* Hover Glitch Effect Background */}
                            <div className="absolute inset-0 bg-[#ccff00]/0 group-hover:bg-[#ccff00]/5 transition-colors duration-300"></div>
                            
                            <div className="p-8 relative z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 bg-[#050505] border border-white/10 group-hover:border-[#ccff00] transition-colors">
                                        <Zap className="text-white group-hover:text-[#ccff00]" size={24} />
                                    </div>
                                    <span className="text-2xl font-bold text-[#ccff00] font-mono">{service.price}</span>
                                </div>
                                
                                <h3 className="text-2xl font-bold text-white uppercase mb-4 group-hover:text-[#ccff00] transition-colors">{service.title}</h3>
                                <p className="text-gray-500 mb-6 font-mono text-sm leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-[#ccff00] transition-colors">
                                    {service.description}
                                </p>
                                
                                <div className="flex items-center text-[#00f3ff] text-xs font-bold uppercase tracking-widest">
                                    <Clock size={14} className="mr-2" />
                                    Execution Time: {service.duration}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Team Section - Standard Grid like Luxury */}
        <section id="neon-team" className="py-24 bg-[#050505] border-t border-[#ccff00]/10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-[#ccff00] text-sm tracking-[0.3em] uppercase font-bold mb-3">Unit Leaders</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Active Operators</h3>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#ccff00] to-transparent mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {BARBERS.map((barber) => (
                        <div key={barber.id} className="group relative">
                            {/* Image Container */}
                            <div className="aspect-[4/5] overflow-hidden bg-[#111] mb-6 relative border border-white/5 group-hover:border-[#ccff00] transition-all">
                                <img 
                                    src={barber.image} 
                                    alt={barber.name} 
                                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
                                
                                {/* Overlay Info */}
                                <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <div className="flex flex-wrap gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                         {barber.specialties.map(spec => (
                                            <span key={spec} className="text-[10px] bg-[#ccff00] text-black px-2 py-0.5 font-bold uppercase tracking-wider">{spec}</span>
                                         ))}
                                    </div>
                                </div>
                            </div>
                            
                            {/* Name Block */}
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-white uppercase italic mb-1 group-hover:text-[#ccff00] transition-colors">{barber.name}</h3>
                                <p className="text-gray-500 font-mono text-xs uppercase tracking-widest">Rank: {barber.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Reviews Section - Added to match others */}
        <section id="neon-reviews" className="py-24 bg-[#0a0a0a] border-t border-[#ccff00]/10">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((t) => (
                        <div key={t.id} className="bg-[#050505] p-8 border border-white/5 relative">
                             <div className="flex text-[#ccff00] mb-4">
                                {[...Array(t.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                             </div>
                             <p className="text-gray-400 italic mb-6 leading-relaxed">"{t.text}"</p>
                             <div className="flex items-center space-x-3">
                                <div className="w-8 h-8 bg-[#ccff00]/20 rounded-full flex items-center justify-center text-[#ccff00] font-bold text-xs">
                                    {t.name.charAt(0)}
                                </div>
                                <div>
                                    <h5 className="text-white font-bold text-sm uppercase">{t.name}</h5>
                                    <span className="text-gray-600 text-xs uppercase tracking-widest">{t.date}</span>
                                </div>
                             </div>
                        </div>
                    ))}
                </div>
             </div>
        </section>

        {/* Booking Section - Centered Form like other themes */}
        <section id="neon-booking" className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20" style={{background: 'linear-gradient(transparent 95%, #00f3ff 95%)', backgroundSize: '100% 40px'}}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#ccff00] rounded-full blur-[200px] opacity-5"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-[#ccff00] text-sm tracking-[0.3em] uppercase font-bold mb-3">Initialization</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase tracking-tight">Confirm Sequence</h3>
                </div>

                <div className="bg-[#111]/90 backdrop-blur-xl border border-[#ccff00]/30 p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.8)] relative">
                    {/* Decorative Corner Markers */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#ccff00]"></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#ccff00]"></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#ccff00]"></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#ccff00]"></div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="space-y-4">
                            <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest flex items-center">
                                <Shield size={12} className="mr-2" /> Client Identification
                            </label>
                            <input type="text" placeholder="FULL DESIGNATION" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-white p-4 font-mono outline-none transition-colors placeholder-gray-700" />
                            <input type="tel" placeholder="COMM LINK (PHONE)" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-white p-4 font-mono outline-none transition-colors placeholder-gray-700" />
                        </div>
                        
                        <div className="space-y-4">
                            <label className="text-[#ccff00] text-xs font-bold uppercase tracking-widest flex items-center">
                                <Activity size={12} className="mr-2" /> Protocol Selection
                            </label>
                            <select className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none transition-colors">
                                <option>SELECT SERVICE MODULE...</option>
                                {SERVICES.map(s => <option key={s.id}>{s.title} // {s.price}</option>)}
                            </select>
                            <div className="grid grid-cols-2 gap-4">
                                <input type="date" className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none [color-scheme:dark]" />
                                <select className="w-full bg-[#050505] border border-[#333] focus:border-[#ccff00] text-gray-400 p-4 font-mono outline-none">
                                    <option>10:00</option>
                                    <option>12:00</option>
                                    <option>14:00</option>
                                    <option>16:00</option>
                                </select>
                            </div>
                        </div>

                        <div className="md:col-span-2 pt-6">
                            <button className="w-full bg-[#ccff00] hover:bg-white text-black font-bold text-xl py-6 uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(204,255,0,0.4)] transition-all hover:scale-[1.01] flex items-center justify-center group">
                                <span className="group-hover:mr-4 transition-all">Execute Booking</span>
                                <ChevronRight className="opacity-0 group-hover:opacity-100 transition-all -ml-4 group-hover:ml-0" />
                            </button>
                            <p className="text-center text-gray-600 text-[10px] uppercase tracking-widest mt-4">
                                By confirming, you agree to the Volt styling terms and conditions.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-[#050505] border-t border-[#333] py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start">
                <div className="flex items-center space-x-2 mb-2">
                    <Activity className="text-[#ccff00]" size={20} />
                    <span className="text-xl font-bold uppercase tracking-widest text-white">VOLT.CUTS</span>
                </div>
                <p className="text-gray-600 text-xs font-mono uppercase tracking-widest">
                    System Version 2.0.4 • Cyber District, Sector 7
                </p>
            </div>
            
             <div className="flex space-x-8">
                {['Instagram', 'Twitter', 'Network'].map(social => (
                    <a key={social} href="#" className="text-gray-500 hover:text-[#ccff00] text-xs font-bold uppercase tracking-widest transition-colors">
                        {social}
                    </a>
                ))}
            </div>
        </div>
      </footer>
    </div>
  );
};
