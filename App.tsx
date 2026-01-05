
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import Lifestyle from './components/Lifestyle';
import AIAssistant from './components/AIAssistant';
import LoadingScreen from './components/LoadingScreen';
import ThreeScene from './components/ThreeScene';
import FluidCursor from './components/FluidCursor';
import { Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => (
  <footer id="footer" className="bg-black py-24 border-t border-white/5 relative z-10">
    <div className="container mx-auto px-10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-black heading-font mb-6">OFF-TRACK<span className="text-neon">/</span>CAFE</h2>
          <p className="text-zinc-500 max-w-sm mb-8 leading-relaxed">
            Engineered fuel for the modern racer. Part of the LN4 Lifestyle ecosystem. Crafted for those who find their rhythm at high velocity.
          </p>
          <div className="flex gap-6">
            <Instagram className="w-6 h-6 text-white hover:text-neon cursor-pointer transition-colors" />
            <Twitter className="w-6 h-6 text-white hover:text-neon cursor-pointer transition-colors" />
            <Youtube className="w-6 h-6 text-white hover:text-neon cursor-pointer transition-colors" />
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest mb-6 text-sm text-zinc-300">Hubs</h4>
          <ul className="space-y-4 text-zinc-500 font-medium text-sm">
            <li className="flex items-center hover:text-white cursor-pointer transition-colors">London Flagship <ArrowUpRight className="ml-2 w-3 h-3" /></li>
            <li className="flex items-center hover:text-white cursor-pointer transition-colors">Monaco Pop-up <ArrowUpRight className="ml-2 w-3 h-3" /></li>
            <li className="flex items-center hover:text-white cursor-pointer transition-colors">Miami Circuit <ArrowUpRight className="ml-2 w-3 h-3" /></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black uppercase tracking-widest mb-6 text-sm text-zinc-300">Paddock Hours</h4>
          <ul className="space-y-4 text-zinc-500 font-medium text-sm">
            <li>Mon - Fri: 07:00 - 20:00</li>
            <li>Sat - Sun: 08:00 - 22:00</li>
            <li className="text-neon">GP Weekends: 24/7</li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-zinc-600 text-[10px] uppercase tracking-widest font-bold">
          &copy; 2024 OFF-TRACK CAFE BY LANDO NORRIS.
        </p>
        <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-zinc-600">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!loading) {
      // Initialize ScrollTrigger animations
      gsap.utils.toArray('section').forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { 
            opacity: 1, 
            y: 0, 
            duration: 1, 
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none"
            }
          }
        );
      });
    }
  }, [loading]);

  return (
    <div className="bg-black text-white selection:bg-neon selection:text-black min-h-screen">
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <div className="animate-in fade-in duration-1000">
          <FluidCursor />
          <ThreeScene />
          <Navbar />
          <Hero />
          <div className="relative z-10">
            <Menu />
            <AIAssistant />
            <Lifestyle />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
