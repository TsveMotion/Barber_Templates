import React, { useState } from 'react';
import { SiteSwitcher } from './components/SiteSwitcher';
import { LuxuryLayout } from './components/LuxuryLayout';
import { ModernLayout } from './components/ModernLayout';
import { RusticLayout } from './components/RusticLayout';
import { NeonLayout } from './components/NeonLayout';

function App() {
  const [theme, setTheme] = useState<'luxury' | 'modern' | 'rustic' | 'neon'>('luxury');

  return (
    <>
      <SiteSwitcher currentTheme={theme} setTheme={setTheme} />
      {theme === 'luxury' && <LuxuryLayout />}
      {theme === 'modern' && <ModernLayout />}
      {theme === 'rustic' && <RusticLayout />}
      {theme === 'neon' && <NeonLayout />}
    </>
  );
}

export default App;
