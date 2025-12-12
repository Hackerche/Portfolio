import React, { Suspense } from 'react';
import { Navbar } from './components/Layout/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { ThreeBackground } from './components/ThreeBackground';
import { Loader2 } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-brand-dark text-white overflow-x-hidden selection:bg-brand-accent selection:text-black">
      
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ThreeBackground />
      </Suspense>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* Sections */}
        <section id="hero">
          <Hero />
        </section>

        <About />
        
        <Portfolio />
        
        <Services />
        
        <Contact />

        {/* Footer */}
        <footer className="py-8 border-t border-white/5 bg-black/50 backdrop-blur-lg">
          <div className="container mx-auto px-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Lumina. All rights reserved. 
              <span className="hidden md:inline mx-2">|</span>
              Designed & Developed with React & Three.js
            </p>
          </div>
        </footer>

      </main>

      {/* Noise Grain Overlay for Texture */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.02] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />
    </div>
  );
};

export default App;