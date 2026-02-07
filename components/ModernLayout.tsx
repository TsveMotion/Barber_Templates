import React, { useEffect, useState } from 'react';
import { SERVICES, BARBERS } from '../constants';
import { Calendar, Clock, ArrowRight, Star, Scissors, Menu, X, Check, ChevronRight } from 'lucide-react';

export const ModernLayout: React.FC = () => {
  useEffect(() => {
    document.body.style.backgroundColor = '#f8fafc'; // slate-50
    document.body.style.color = '#0f172a'; // slate-900
    return () => {
        document.body.style.backgroundColor = '';
        document.body.style.color = '';
    }
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenu(false);
    const element = document.getElementById(id);
    if (element) {
      // Offset: Switcher (56px) + Nav (80px) = 136px
      const headerOffset = 136;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-modern selection:bg-blue-600 selection:text-white pt-14">
      
      {/* Modern Header */}
      <nav className="sticky top-14 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div 
                className="flex items-center space-x-2 cursor-pointer"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-600/20 transform -rotate-3 transition-transform hover:rotate-0">
                <Scissors size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-slate-900">URBAN<span className="text-blue-600">TRIM.</span></span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('modern-services')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wide">Services</button>
              <button onClick={() => scrollToSection('modern-team')} className="text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors uppercase tracking-wide">Team</button>
              <button onClick={() => scrollToSection('modern-booking')} className="px-6 py-3 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-blue-600 transition-all hover:-translate-y-0.5 shadow-lg shadow-slate-900/20 hover:shadow-blue-600/30">
                Book Cut
              </button>
            </div>

            <button onClick={() => setMobileMenu(!mobileMenu)} className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors">
                {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl transition-all duration-300 ease-in-out overflow-hidden ${mobileMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col p-6 space-y-4">
                <button 
                    onClick={() => scrollToSection('modern-services')}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                    <span className="text-lg font-bold text-slate-700 group-hover:text-blue-600">Services</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600" />
                </button>
                <button 
                    onClick={() => scrollToSection('modern-team')}
                    className="flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                    <span className="text-lg font-bold text-slate-700 group-hover:text-blue-600">Our Team</span>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600" />
                </button>
                <button 
                    onClick={() => scrollToSection('modern-booking')}
                    className="mt-4 w-full py-4 bg-blue-600 text-white font-bold rounded-xl shadow-lg shadow-blue-600/20 active:scale-95 transition-all"
                >
                    Book Appointment Now
                </button>
            </div>
        </div>
      </nav>

      <main>
        {/* Modern Hero */}
        <section className="relative pt-20 pb-32 overflow-hidden bg-white">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 skew-x-12 transform translate-x-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wide mb-8 border border-blue-100">
                  <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                  Accepting New Clients
                </div>
                <h1 className="text-7xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
                  SHARP.<br/>
                  CLEAN.<br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">READY.</span>
                </h1>
                <p className="text-xl text-slate-500 mb-10 leading-relaxed max-w-md font-medium">
                  Contemporary grooming for the modern lifestyle. 
                  Minimalist space, maximum style.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button onClick={() => scrollToSection('modern-booking')} className="inline-flex justify-center items-center px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all hover:scale-[1.02] shadow-xl shadow-blue-600/25">
                    Book Now <ArrowRight size={18} className="ml-2" />
                  </button>
                  <button onClick={() => scrollToSection('modern-services')} className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-xl hover:border-slate-300 transition-all">
                    View Menu
                  </button>
                </div>
                
                <div className="mt-12 flex items-center gap-6 text-slate-400 grayscale opacity-70">
                    {/* Fake Logos */}
                   <div className="font-black text-xl">GQ</div>
                   <div className="font-black text-xl">VOGUE</div>
                   <div className="font-black text-xl">MEN'S HEALTH</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-[3rem] transform rotate-6 scale-95 opacity-20 blur-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1000&auto=format&fit=crop" 
                  alt="Modern Barber" 
                  className="relative rounded-[3rem] shadow-2xl w-full object-cover aspect-[4/5] z-10"
                />
                
                {/* Floating Stats Card */}
                <div className="absolute bottom-10 -left-12 z-20 bg-white p-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 hidden md:block animate-bounce" style={{animationDuration: '3s'}}>
                    <div className="flex items-center space-x-2 mb-1">
                        <Check className="text-blue-600" size={20} strokeWidth={3} />
                        <span className="text-lg font-black text-slate-900">Verified Pro</span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium pl-7">Top Rated Studio 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modern Services */}
        <section id="modern-services" className="py-32 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20">
              <div>
                <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">Our Expertise</span>
                <h2 className="text-5xl font-black text-slate-900 tracking-tight">The Menu</h2>
              </div>
              <p className="text-slate-500 text-lg max-w-xs mt-4 md:mt-0 font-medium">Curated services designed for efficiency and style.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="group p-8 rounded-[2rem] bg-white hover:bg-blue-600 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-2 border border-slate-100 hover:border-transparent">
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-900 mb-8 group-hover:bg-white/20 group-hover:text-white transition-colors">
                    <Scissors size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 group-hover:text-blue-100">{service.description}</p>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-100 group-hover:border-white/10">
                     <span className="text-sm font-bold text-slate-400 group-hover:text-blue-100 transition-colors uppercase tracking-wide">{service.duration}</span>
                     <span className="text-xl font-black text-slate-900 group-hover:text-white transition-colors">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modern Team */}
        <section id="modern-team" className="py-32 bg-white relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-20">
                <span className="text-blue-600 font-bold tracking-wider uppercase mb-2 block">The Talent</span>
                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tight">Meet the Specialists</h2>
                <p className="text-slate-500 text-lg">Master barbers selected for their precision and attention to detail.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {BARBERS.map((barber) => (
                    <div key={barber.id} className="group relative">
                        <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-slate-100 mb-6">
                            <img src={barber.image} alt={barber.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-white font-medium">{barber.specialties.join(' • ')}</p>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-2xl font-bold text-slate-900 mb-1">{barber.name}</h4>
                            <p className="text-blue-600 font-bold uppercase tracking-wide text-sm">{barber.role}</p>
                        </div>
                    </div>
                ))}
            </div>
           </div>
        </section>

        {/* Modern Booking */}
        <section id="modern-booking" className="py-32 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-50"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-purple-600 rounded-full blur-[100px] opacity-30"></div>
            
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tight">Ready to look sharp?</h2>
                <p className="text-slate-400 mb-12 text-xl max-w-xl mx-auto">Book your appointment in seconds. No account required. Pay at the venue.</p>
                
                <div className="bg-white/10 backdrop-blur-lg border border-white/10 rounded-3xl p-3 shadow-2xl">
                    <form className="grid grid-cols-1 md:grid-cols-3 gap-3" onSubmit={(e) => e.preventDefault()}>
                        <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Calendar size={20} className="text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <input 
                                type="date" 
                                className="w-full bg-slate-900/50 border-none rounded-2xl py-5 pl-14 pr-4 text-white font-medium focus:ring-2 focus:ring-blue-500 placeholder-slate-500 transition-all hover:bg-slate-900/70"
                            />
                        </div>
                         <div className="relative group">
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <Clock size={20} className="text-slate-400 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <select className="w-full bg-slate-900/50 border-none rounded-2xl py-5 pl-14 pr-4 text-white font-medium focus:ring-2 focus:ring-blue-500 appearance-none transition-all hover:bg-slate-900/70 cursor-pointer">
                                <option>10:00 AM</option>
                                <option>11:00 AM</option>
                                <option>12:00 PM</option>
                                <option>01:00 PM</option>
                            </select>
                        </div>
                        <button className="bg-blue-600 text-white font-bold text-lg py-4 rounded-2xl hover:bg-blue-500 transition-all hover:scale-[1.02] shadow-lg shadow-blue-600/30">
                            Check Availability
                        </button>
                    </form>
                </div>
            </div>
        </section>

      </main>

      <footer className="bg-white border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-8 md:mb-0">
               <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
                 <Scissors size={16} />
               </div>
               <span className="text-xl font-black tracking-tight text-slate-900">URBAN TRIM.</span>
            </div>
            <div className="flex space-x-10 text-sm font-bold text-slate-500 uppercase tracking-wide">
                <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Terms</a>
                <a href="#" className="hover:text-blue-600 transition-colors">Instagram</a>
            </div>
        </div>
      </footer>
    </div>
  );
};
