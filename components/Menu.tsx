
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';

const Menu: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');
  const categories = ['All', 'Quick Laps', 'Long Stints', 'Pit Stops'];

  const filteredItems = activeTab === 'All' 
    ? MENU_ITEMS.filter(i => i.category !== 'Merch')
    : MENU_ITEMS.filter(item => item.category === activeTab);

  return (
    <section id="menu" className="py-32 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-4">THE MENU</h2>
            <p className="text-zinc-500 uppercase tracking-[0.3em] font-semibold text-sm">Optimal Performance Sips</p>
          </div>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-6 py-2 border text-xs font-bold uppercase tracking-widest transition-all ${
                  activeTab === cat 
                    ? 'bg-white text-black border-white' 
                    : 'bg-transparent text-white border-white/20 hover:border-neon'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {filteredItems.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-zinc-900">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale hover:grayscale-0"
                />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-neon text-[10px] font-black px-2 py-1 uppercase tracking-tighter">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl font-bold group-hover:text-neon transition-colors">{item.name}</h3>
                <span className="text-xl font-light text-zinc-400">{item.price}</span>
              </div>
              <p className="text-zinc-500 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
