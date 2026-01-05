
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden z-10 bg-transparent">
      <div className="container mx-auto px-10 relative">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-4 mb-10 overflow-hidden">
            <span className="w-12 h-px bg-neon"></span>
            <span className="text-neon text-[10px] font-black uppercase tracking-[0.4em]">Optimized Performance</span>
          </div>
          
          <h1 className="text-7xl md:text-[12rem] font-black leading-[0.85] mb-12 tracking-tighter">
            DRIVE<br />
            <span className="text-neon outline-text">FAST.</span><br />
            SIP SLOW.
          </h1>

          <div className="flex flex-col md:flex-row items-start md:items-end gap-16">
            <p className="text-lg md:text-xl text-zinc-400 max-w-xl font-light leading-relaxed">
              We've engineered a coffee experience for those who live life in the fast lane. 
              Precision-sourced beans. High-rev caffeine. Sleek paddock vibes.
            </p>
            
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <a 
                href="#menu" 
                className="inline-flex items-center justify-center bg-white text-black px-12 py-6 font-black uppercase tracking-[0.2em] text-xs hover:bg-neon transition-all group"
              >
                Telemetry Menu
                <ArrowRight className="ml-4 w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute left-10 bottom-10 flex gap-12 text-[10px] font-black uppercase tracking-widest text-zinc-500">
        <div className="flex flex-col">
          <span className="text-white mb-1">Race Ready</span>
          <span>EST. 2024</span>
        </div>
        <div className="flex flex-col">
          <span className="text-white mb-1">Lat: 51.5074 N</span>
          <span>Lon: 0.1278 W</span>
        </div>
      </div>
      
      <style>{`
        .outline-text {
          -webkit-text-stroke: 2px #d4ff00;
          color: transparent;
        }
      `}</style>
    </section>
  );
};

export default Hero;
