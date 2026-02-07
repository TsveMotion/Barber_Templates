import React from 'react';
import { Monitor, Scissors, Zap, Hammer, Activity } from 'lucide-react';

interface SiteSwitcherProps {
  currentTheme: 'luxury' | 'modern' | 'rustic' | 'neon';
  setTheme: (theme: 'luxury' | 'modern' | 'rustic' | 'neon') => void;
}

export const SiteSwitcher: React.FC<SiteSwitcherProps> = ({ currentTheme, setTheme }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-14 z-[100] bg-neutral-900 border-b border-neutral-800 flex items-center justify-between px-4 sm:px-8 shadow-2xl">
      <div className="flex items-center text-neutral-400 text-xs font-bold tracking-widest uppercase hidden sm:flex">
        <Monitor size={14} className="mr-2" />
        Website Demo Mode
      </div>

      <div className="flex items-center space-x-1 mx-auto sm:mx-0 bg-black/50 p-1 rounded-lg border border-white/10 overflow-x-auto max-w-[380px] sm:max-w-none scrollbar-hide">
        <button
          onClick={() => setTheme('luxury')}
          className={`flex items-center px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            currentTheme === 'luxury'
              ? 'bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 font-bold'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Scissors size={14} className="mr-2" />
          Crown & Razor
        </button>
        <button
          onClick={() => setTheme('modern')}
          className={`flex items-center px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            currentTheme === 'modern'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30 font-bold'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Zap size={14} className="mr-2" />
          Urban Trim
        </button>
        <button
          onClick={() => setTheme('rustic')}
          className={`flex items-center px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            currentTheme === 'rustic'
              ? 'bg-[#d97706] text-black shadow-lg shadow-[#d97706]/20 font-bold'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Hammer size={14} className="mr-2" />
          Iron & Oak
        </button>
        <button
          onClick={() => setTheme('neon')}
          className={`flex items-center px-3 sm:px-4 py-1.5 rounded-md text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
            currentTheme === 'neon'
              ? 'bg-[#ccff00] text-black shadow-lg shadow-[#ccff00]/20 font-bold'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <Activity size={14} className="mr-2" />
          Volt
        </button>
      </div>

      <div className="hidden sm:block w-32">
        {/* Spacer for balance */}
      </div>
    </div>
  );
};
