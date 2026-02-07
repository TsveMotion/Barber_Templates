import React, { useState } from 'react';
import { SERVICES, BARBERS } from '../constants';
import { Button } from './Button';
import { Service, Barber } from '../types';
import { CheckCircle, Calendar, Clock, User, Scissors, ChevronRight, ChevronLeft, Star } from 'lucide-react';

// Mock time slots for the UI
const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30', 
  '11:00', '11:30', '12:00', '13:00',
  '13:30', '14:00', '14:30', '15:00',
  '15:30', '16:00', '16:30', '17:00'
];

export const Booking: React.FC = () => {
  const [step, setStep] = useState(1);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Booking State
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedBarber, setSelectedBarber] = useState<Barber | null>(null); // null = Any
  const [selectedDate, setSelectedDate] = useState<string>(new Date().toISOString().split('T')[0]);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [contactInfo, setContactInfo] = useState({ name: '', email: '', phone: '' });

  const handleNext = () => setStep((prev) => prev + 1);
  const handleBack = () => setStep((prev) => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  const resetBooking = () => {
    setStatus('idle');
    setStep(1);
    setSelectedService(null);
    setSelectedBarber(null);
    setSelectedTime(null);
    setContactInfo({ name: '', email: '', phone: '' });
  };

  // Helper to check if current step is valid
  const isStepValid = () => {
    if (step === 1) return !!selectedService;
    if (step === 2) return !!selectedDate && !!selectedTime;
    if (step === 3) return !!contactInfo.name && !!contactInfo.email && !!contactInfo.phone;
    return false;
  };

  if (status === 'success') {
    return (
      <section id="booking" className="py-24 bg-background relative min-h-[600px] flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center animate-fade-in-up">
          <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-secondary" />
          </div>
          <h2 className="text-3xl font-serif font-bold text-white mb-4">Booking Confirmed</h2>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Thank you, {contactInfo.name}. Your appointment for <strong>{selectedService?.title}</strong> with <strong>{selectedBarber ? selectedBarber.name : "Any Expert Barber"}</strong> has been scheduled for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
          </p>
          <Button onClick={resetBooking}>Book Another Appointment</Button>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-background relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-secondary text-sm tracking-[0.3em] uppercase font-bold mb-3">Reservations</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">Secure Your Seat</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: The Wizard */}
            <div className="lg:col-span-2">
                <div className="bg-primary/50 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
                    {/* Progress Bar */}
                    <div className="bg-black/40 px-6 py-4 flex items-center justify-between border-b border-white/5">
                        <div className="flex items-center space-x-2">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${step >= 1 ? 'bg-secondary text-primary' : 'bg-white/10 text-gray-500'}`}>1</span>
                            <span className={`text-sm font-bold tracking-wide ${step >= 1 ? 'text-white' : 'text-gray-500'}`}>Service</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-white/10 mx-4"></div>
                        <div className="flex items-center space-x-2">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${step >= 2 ? 'bg-secondary text-primary' : 'bg-white/10 text-gray-500'}`}>2</span>
                            <span className={`text-sm font-bold tracking-wide ${step >= 2 ? 'text-white' : 'text-gray-500'}`}>Time</span>
                        </div>
                        <div className="h-[1px] flex-1 bg-white/10 mx-4"></div>
                        <div className="flex items-center space-x-2">
                            <span className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-bold ${step >= 3 ? 'bg-secondary text-primary' : 'bg-white/10 text-gray-500'}`}>3</span>
                            <span className={`text-sm font-bold tracking-wide ${step >= 3 ? 'text-white' : 'text-gray-500'}`}>Details</span>
                        </div>
                    </div>

                    <div className="p-6 md:p-8 min-h-[400px]">
                        {/* STEP 1: Service & Barber */}
                        {step === 1 && (
                            <div className="space-y-8 animate-fade-in-up">
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
                                        <Scissors className="w-5 h-5 text-secondary mr-2" /> Select Service
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {SERVICES.map((service) => (
                                            <div 
                                                key={service.id}
                                                onClick={() => setSelectedService(service)}
                                                className={`cursor-pointer p-4 rounded-lg border transition-all duration-300 relative group
                                                    ${selectedService?.id === service.id 
                                                        ? 'bg-secondary/10 border-secondary' 
                                                        : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <span className={`font-bold font-serif ${selectedService?.id === service.id ? 'text-secondary' : 'text-white'}`}>{service.title}</span>
                                                    <span className="text-white font-bold">{service.price}</span>
                                                </div>
                                                <div className="text-xs text-gray-400 flex items-center mb-2">
                                                    <Clock size={12} className="mr-1" /> {service.duration}
                                                </div>
                                                <p className="text-sm text-gray-500 line-clamp-2">{service.description}</p>
                                                
                                                {/* Checkmark for selected state */}
                                                {selectedService?.id === service.id && (
                                                    <div className="absolute top-3 right-3 text-secondary">
                                                        <CheckCircle size={16} />
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
                                        <User className="w-5 h-5 text-secondary mr-2" /> Select Barber
                                    </h4>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        {/* "Any" Option */}
                                        <div 
                                            onClick={() => setSelectedBarber(null)}
                                            className={`cursor-pointer p-3 rounded-lg border transition-all duration-300 text-center
                                                ${selectedBarber === null 
                                                    ? 'bg-secondary/10 border-secondary' 
                                                    : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                                        >
                                            <div className="w-12 h-12 rounded-full bg-white/10 mx-auto mb-2 flex items-center justify-center text-gray-400">
                                                <Scissors size={20} />
                                            </div>
                                            <span className={`text-sm font-bold ${selectedBarber === null ? 'text-secondary' : 'text-white'}`}>Any Barber</span>
                                            <span className="block text-xs text-gray-500">First Available</span>
                                        </div>

                                        {/* Specific Barbers */}
                                        {BARBERS.map((barber) => (
                                            <div 
                                                key={barber.id}
                                                onClick={() => setSelectedBarber(barber)}
                                                className={`cursor-pointer p-3 rounded-lg border transition-all duration-300 text-center
                                                    ${selectedBarber?.id === barber.id 
                                                        ? 'bg-secondary/10 border-secondary' 
                                                        : 'bg-white/5 border-transparent hover:bg-white/10'}`}
                                            >
                                                <img src={barber.image} alt={barber.name} className="w-12 h-12 rounded-full object-cover mx-auto mb-2" />
                                                <span className={`text-sm font-bold line-clamp-1 ${selectedBarber?.id === barber.id ? 'text-secondary' : 'text-white'}`}>{barber.name.split(' ')[0]}</span>
                                                <span className="block text-xs text-gray-500">{barber.role}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* STEP 2: Date & Time */}
                        {step === 2 && (
                             <div className="space-y-8 animate-fade-in-up">
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
                                        <Calendar className="w-5 h-5 text-secondary mr-2" /> Select Date
                                    </h4>
                                    <input 
                                        type="date" 
                                        value={selectedDate}
                                        min={new Date().toISOString().split('T')[0]}
                                        onChange={(e) => {
                                            setSelectedDate(e.target.value);
                                            setSelectedTime(null); // Reset time if date changes
                                        }}
                                        className="w-full bg-white/5 border border-gray-700 rounded-lg p-4 text-white focus:border-secondary outline-none [color-scheme:dark]"
                                    />
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
                                        <Clock className="w-5 h-5 text-secondary mr-2" /> Available Slots
                                    </h4>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                                        {TIME_SLOTS.map((time) => (
                                            <button
                                                key={time}
                                                onClick={() => setSelectedTime(time)}
                                                className={`py-2 px-1 rounded text-sm font-medium transition-all duration-200 
                                                    ${selectedTime === time 
                                                        ? 'bg-secondary text-primary font-bold shadow-lg transform scale-105' 
                                                        : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'}`}
                                            >
                                                {time}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                             </div>
                        )}

                        {/* STEP 3: Details */}
                        {step === 3 && (
                            <div className="space-y-6 animate-fade-in-up">
                                <div>
                                    <h4 className="text-lg font-serif font-bold text-white mb-4 flex items-center">
                                        <User className="w-5 h-5 text-secondary mr-2" /> Contact Information
                                    </h4>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    value={contactInfo.name}
                                                    onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                                                    className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-secondary outline-none transition-all"
                                                    placeholder="Enter your name"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    value={contactInfo.phone}
                                                    onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                                                    className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-secondary outline-none transition-all"
                                                    placeholder="(555) 000-0000"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-wider text-gray-500 mb-1">Email Address</label>
                                            <input
                                                type="email"
                                                value={contactInfo.email}
                                                onChange={(e) => setContactInfo({...contactInfo, email: e.target.value})}
                                                className="w-full bg-white/5 border border-gray-700 rounded-lg p-3 text-white focus:border-secondary outline-none transition-all"
                                                placeholder="you@example.com"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20 mt-6">
                                    <div className="flex items-start space-x-3">
                                        <Star className="text-secondary w-5 h-5 mt-1 flex-shrink-0" fill="currentColor" />
                                        <p className="text-sm text-gray-300">
                                            <strong>Cancellation Policy:</strong> Please provide at least 24 hours notice for cancellations to avoid being charged a 50% fee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer Actions */}
                    <div className="bg-black/40 p-6 border-t border-white/5 flex justify-between items-center">
                        {step > 1 ? (
                            <button 
                                onClick={handleBack}
                                className="flex items-center text-gray-400 hover:text-white transition-colors"
                            >
                                <ChevronLeft size={20} className="mr-1" /> Back
                            </button>
                        ) : (
                            <div></div>
                        )}

                        {step < 3 ? (
                            <Button 
                                onClick={handleNext} 
                                disabled={!isStepValid()}
                                className={!isStepValid() ? "opacity-50 cursor-not-allowed" : ""}
                            >
                                Next Step <ChevronRight size={18} className="ml-2" />
                            </Button>
                        ) : (
                            <Button 
                                onClick={handleSubmit} 
                                disabled={!isStepValid() || status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Processing...' : 'Confirm Booking'}
                            </Button>
                        )}
                    </div>
                </div>
            </div>

            {/* Right Column: Summary Panel */}
            <div className="lg:col-span-1 mt-8 lg:mt-0">
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 sticky top-24">
                    <h3 className="text-xl font-serif font-bold text-white mb-6 border-b border-white/10 pb-4">Booking Summary</h3>
                    
                    {/* Service Summary */}
                    <div className="mb-6">
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Service</span>
                        {selectedService ? (
                            <div>
                                <div className="text-white font-bold text-lg">{selectedService.title}</div>
                                <div className="text-secondary font-bold">{selectedService.price}</div>
                                <div className="text-sm text-gray-400 mt-1">{selectedService.duration}</div>
                            </div>
                        ) : (
                            <div className="text-gray-600 italic">No service selected</div>
                        )}
                    </div>

                    {/* Barber Summary */}
                    <div className="mb-6">
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Professional</span>
                        {selectedBarber ? (
                            <div className="flex items-center space-x-3">
                                <img src={selectedBarber.image} alt={selectedBarber.name} className="w-10 h-10 rounded-full object-cover" />
                                <div>
                                    <div className="text-white font-bold">{selectedBarber.name}</div>
                                    <div className="text-xs text-gray-400">{selectedBarber.role}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="text-white font-bold flex items-center">
                                <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center mr-3">
                                    <Scissors size={16} />
                                </span>
                                Any Available Barber
                            </div>
                        )}
                    </div>

                    {/* Date/Time Summary */}
                    <div className="mb-6">
                        <span className="text-xs text-gray-500 uppercase tracking-widest block mb-2">Date & Time</span>
                        {selectedDate && selectedTime ? (
                            <div>
                                <div className="text-white font-bold">{selectedDate}</div>
                                <div className="text-secondary font-bold">{selectedTime}</div>
                            </div>
                        ) : (
                            <div className="text-gray-600 italic">Select a date & time</div>
                        )}
                    </div>

                    {/* Total */}
                    <div className="mt-8 pt-6 border-t border-white/10 flex justify-between items-center">
                        <span className="text-gray-400 font-bold uppercase tracking-wider">Total</span>
                        <span className="text-2xl font-serif text-white">{selectedService ? selectedService.price : '€0'}</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
