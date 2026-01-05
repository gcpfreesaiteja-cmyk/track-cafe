
import React from 'react';
import { MENU_ITEMS } from '../constants';

const Lifestyle: React.FC = () => {
  const merch = MENU_ITEMS.filter(item => item.category === 'Merch');

  return (
    <section id="lifestyle" className="py-32 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=1000" 
              alt="Lifestyle"
              className="w-full h-[600px] object-cover grayscale"
            />
            <div className="absolute -bottom-10 -right-10 bg-neon p-12 hidden md:block">
              <p className="text-black font-black text-4xl leading-none">EST.<br/>2024</p>
            </div>
          </div>
          <div>
            <span className="text-neon font-bold tracking-[0.2em] text-sm uppercase mb-4 block">The Collection</span>
            <h2 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">OFF-TRACK<br/>GEAR.</h2>
            <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
              Designed for life away from the circuit. Premium materials meet functional design. 
              Our collection is built for those who never truly slow down, even when the lights go out.
            </p>
            <button className="border-b-2 border-neon pb-2 text-neon font-black uppercase tracking-widest hover:text-white hover:border-white transition-all">
              Shop The Drop
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {merch.map((item) => (
            <div key={item.id} className="relative group overflow-hidden">
               <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <h3 className="text-3xl font-black mb-2">{item.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-zinc-300 font-bold uppercase tracking-widest">{item.price}</span>
                    <button className="bg-white text-black font-black px-6 py-2 text-xs uppercase hover:bg-neon transition-colors">
                      Quick Add
                    </button>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Lifestyle;
