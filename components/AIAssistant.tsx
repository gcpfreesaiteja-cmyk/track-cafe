
import React, { useState } from 'react';
import { Cpu, Send, Loader2 } from 'lucide-react';
import { getCoffeeRecommendation } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    setLoading(true);
    const result = await getCoffeeRecommendation(input);
    setRecommendation(result);
    setLoading(false);
  };

  return (
    <section id="ai-advisor" className="py-32 bg-zinc-900 overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="grid grid-cols-10 h-full">
          {Array.from({length: 100}).map((_, i) => (
            <div key={i} className="border border-white/20 h-20"></div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Cpu className="w-10 h-10 text-neon" />
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">AI Telemetry Advisor</h2>
          </div>
          
          <div className="bg-black p-8 md:p-12 border border-white/10 shadow-2xl">
            <p className="text-zinc-400 mb-8 font-light text-lg">
              Input your current state or vibe. Our race engineers will analyze your telemetry and recommend the perfect fuel.
            </p>

            <form onSubmit={handleSubmit} className="mb-8">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="E.g. Just woke up, need high revs / Long day ahead / Looking for a victory lap..."
                  className="w-full bg-zinc-900 border border-white/20 px-6 py-5 text-white focus:outline-none focus:border-neon transition-colors pr-16"
                />
                <button 
                  type="submit"
                  disabled={loading}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-neon hover:text-white transition-colors"
                >
                  {loading ? <Loader2 className="w-6 h-6 animate-spin" /> : <Send className="w-6 h-6" />}
                </button>
              </div>
            </form>

            {recommendation && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-zinc-900/50 p-8 border-l-4 border-neon">
                <p className="text-neon font-black uppercase tracking-[0.2em] text-xs mb-4">Official Recommendation:</p>
                <p className="text-xl md:text-2xl font-medium leading-relaxed italic">
                  "{recommendation}"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
