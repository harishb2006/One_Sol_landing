"use client"

import React, { useEffect, useState } from 'react';

const HeroSection = () => {
  // Animation state for the "loading" effect
  const [loading, setLoading] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoading(prev => (prev >= 100 ? 0 : prev + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F8FBFF] font-sans overflow-hidden text-slate-900">
      
      {/* --- BACKGROUND ARCHITECTURE --- */}
      {/* Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(#4182F9 1px, transparent 1px), linear-gradient(90deg, #4182F9 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />
      
      {/* Diagonal Side Panels */}
      <div className="absolute top-0 bottom-0 left-0 w-24 md:w-40 border-r border-slate-200/60 bg-[repeating-linear-gradient(45deg,#e2e8f0_0,#e2e8f0_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] opacity-30" />
      <div className="absolute top-0 bottom-0 right-0 w-24 md:w-40 border-l border-slate-200/60 bg-[repeating-linear-gradient(45deg,#e2e8f0_0,#e2e8f0_1px,transparent_0,transparent_50%)] bg-[length:10px_10px] opacity-30" />

      {/* --- NAVIGATION --- */}
      <nav className="relative z-20 flex items-center justify-between px-8 md:px-16 py-8 max-w-7xl mx-auto">
        <div className="flex gap-10 text-[13px] font-bold uppercase tracking-widest text-slate-500">
          <a href="#" className="hover:text-blue-600 transition-colors">Platform</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Impact</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Integrations</a>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#4182F9] text-white px-7 py-3 rounded-full font-bold text-sm hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95">
            Start Hiring Smarter
          </button>
          <button className="border-2 border-slate-200 text-slate-700 px-7 py-3 rounded-full font-bold text-sm hover:bg-white transition-all">
            See how it works
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 max-w-6xl mx-auto pt-16 px-6 text-center md:text-left">
        <div className="max-w-2xl mb-20">
          <h1 className="text-6xl md:text-7xl font-serif text-slate-900 mb-8 leading-[1.1] tracking-tight">
            Every Hire <br />
            <span className="text-blue-600 italic">Faster</span> and Better
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed font-light">
            Stop losing great candidates to manual bottlenecks. 
            Our AI engine automates the heavy lifting so you can focus on people.
          </p>
        </div>

        {/* --- DYNAMIC ANIMATION STAGE --- */}
        <div className="relative h-[500px] w-full mt-10">
          
          {/* Animated SVG Connections (The "Running Lines") */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">
            {/* Connection Left to Center */}
            <path d="M 280 100 Q 350 100 400 200" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            <path d="M 280 200 Q 350 200 400 220" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            
            {/* Animated "Data Particle" Line */}
            <path d="M 280 100 Q 350 100 400 200" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,100" className="animate-[dash_3s_linear_infinite]" />
            <path d="M 280 200 Q 350 200 400 220" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,120" className="animate-[dash_4s_linear_infinite]" />
          </svg>

          {/* LEFT COLUMN: Input Nodes */}
          <div className="absolute left-0 top-10 flex flex-col gap-8 z-10">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-4 border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-4 w-[300px] animate-bounce-slow">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-slate-800 leading-tight">"Wait time is 3 weeks..."</p>
                <p className="text-[10px] text-slate-400">Losing top talent to competitors</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-4 border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-4 w-[300px] translate-x-4 animate-bounce-slower">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aria" alt="avatar" />
              </div>
              <div>
                <p className="text-[12px] font-bold text-slate-800 leading-tight">"200 resumes to read."</p>
                <p className="text-[10px] text-slate-400">CEO doing manual screening</p>
              </div>
            </div>
          </div>

          {/* CENTER: The AI Engine Core */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-80 bg-white border-2 border-blue-100 rounded-2xl shadow-2xl z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
            
            {/* Scanning Laser Line */}
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan z-30 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            {/* Inner "Logic" Content */}
            <div className="p-6 flex flex-col h-full justify-between relative z-10">
               <div className="space-y-3">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400/30 animate-pulse" style={{ width: `${Math.random() * 100}%` }} />
                    </div>
                 ))}
               </div>
               <div className="bg-blue-600 h-12 rounded-xl flex items-center justify-center text-white text-xs font-bold tracking-widest uppercase">
                  AI Processing...
               </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Output Data */}
          <div className="absolute right-0 bottom-10 w-[320px] bg-white border border-slate-200 rounded-2xl p-6 shadow-2xl z-10 overflow-hidden">
             <div className="flex justify-between items-end mb-6">
                <h4 className="text-[11px] font-bold uppercase tracking-widest text-slate-400">Efficiency Report</h4>
                <span className="text-green-500 font-bold text-xl">+{loading}%</span>
             </div>
             
             {/* Animated Bar Chart */}
             <div className="flex items-end gap-3 h-32">
                {[40, 70, 50, 90, 60].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-50 rounded-t-lg relative group">
                        <div 
                            className="absolute bottom-0 w-full bg-blue-500 rounded-t-lg transition-all duration-1000 ease-out" 
                            style={{ height: `${h}%`, opacity: (loading / 100) }}
                        />
                    </div>
                ))}
             </div>
             
             <div className="mt-6 pt-4 border-t border-slate-100">
                <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                    <span className="text-[10px] font-bold text-slate-500">SYSTEMS LIVE & OPTIMIZED</span>
                </div>
             </div>
          </div>

        </div>
      </main>

      {/* Tailwind Config for Custom Animations */}
      <style jsx global>{`
        @keyframes dash {
          to { stroke-dashoffset: -100; }
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce 6s infinite ease-in-out;
        }
        .animate-bounce-slower {
          animation: bounce 8s infinite ease-in-out;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;