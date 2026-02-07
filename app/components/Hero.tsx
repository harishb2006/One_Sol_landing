"use client"

import React from 'react';

const HeroSection = () => {
  // Static loading value for animation
  const loading = 85;
  
  // Helper to render the dashed lines from your provided code logic
  const DashedLine = ({ className }: { className: string }) => (
    <div className={`absolute flex overflow-hidden pointer-events-none ${className}`}>
      {[...Array(25)].map((_, i) => (
        <div key={i} className="min-w-[8px] h-[1px] bg-slate-200 mr-2" />
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#F4F9FF] font-sans overflow-hidden">
      {/* --- BACKGROUND PATTERNS --- */}
      
      {/* Diagonal Striped Sides - Hidden on mobile */}
      <div className="hidden lg:block absolute top-36 bottom-0 left-0 w-24 md:w-32 border-r border-slate-200 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_50%,#e2e8f0_50%,#e2e8f0_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-40" />
      <div className="hidden lg:block absolute top-36 bottom-0 right-0 w-24 md:w-32 border-l border-slate-200 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_50%,#e2e8f0_50%,#e2e8f0_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-40" />

      {/* Grid Lines (The "Blueprint" look) - Simplified on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Dashed Lines - Hidden on mobile */}
        <div className="hidden md:block absolute left-[15%] h-full w-[1px] border-l border-dashed border-slate-300" />
        <div className="hidden md:block absolute right-[15%] h-full w-[1px] border-l border-dashed border-slate-300" />
        
        {/* Horizontal Dashed Lines (Based on your code structure) */}
        <DashedLine className="top-22 w-full hidden sm:flex" />
        <DashedLine className="top-34 w-full hidden sm:flex" />
        <DashedLine className="w-full hidden sm:flex" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-4 md:py-6 max-w-7xl mx-auto gap-4">
        <div className="hidden md:flex gap-4 lg:gap-8 text-xs sm:text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Platform</a>
          <a href="#" className="hover:text-blue-600 transition">Impact</a>
          <a href="#" className="hover:text-blue-600 transition">Integrations</a>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full md:w-auto">
          <button className="bg-[#4182F9] text-white px-4 sm:px-6 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-blue-600 transition shadow-sm whitespace-nowrap">
            Start Hiring Smarter
          </button>
          <button className="border-2 border-[#4182F9] text-black px-4 sm:px-6 py-2.5 rounded-sm font-semibold text-xs sm:text-sm hover:bg-blue-50 transition whitespace-nowrap">
            see how it works
          </button>
        </div>
      </nav>

      {/* Horizontal line after navbar */}
      <div className="relative z-10 h-2 w-full absolute  ">
        <div className="border-t border-slate-300" />
      </div>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 max-w-5xl mx-auto pt-8 sm:pt-12 md:pt-20 px-4 sm:px-6">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-4 sm:mb-6 tracking-tight">
            Every Hire <br />
            Faster and Better
          </h1>
          <p className="max-w-xl text-base sm:text-lg text-slate-400 leading-relaxed">
            Stop losing great candidates to slow, manual hiring processes. 
            Let AI handle the heavy lifting while you focus on building your team.
          </p>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="flex flex-wrap items-start gap-6 mt-8 sm:mt-12 md:mt-16">
          
          {/* --- DYNAMIC ANIMATION STAGE --- */}
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[500px] w-full mt-6 sm:mt-10">
          
          {/* Animated SVG Connections (The "Running Lines") - Hidden on mobile */}
          <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" fill="none">
            {/* Connection from Card 1 & 2 (Left) to Center */}
            <path d="M 280 100 Q 350 100 400 200" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            <path d="M 280 200 Q 350 200 400 220" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            
            {/* Connection from Card 3 & 4 (Right) to Center */}
            <path d="M 720 100 Q 650 100 600 200" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            <path d="M 720 200 Q 650 200 600 220" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="5,5" />
            
            {/* Animated "Data Particle" Lines */}
            <path d="M 280 100 Q 350 100 400 200" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,100" className="animate-[dash_3s_linear_infinite]" />
            <path d="M 280 200 Q 350 200 400 220" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,120" className="animate-[dash_4s_linear_infinite]" />
            <path d="M 720 100 Q 650 100 600 200" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,100" className="animate-[dash_3.5s_linear_infinite]" />
            <path d="M 720 200 Q 650 200 600 220" stroke="#4182F9" strokeWidth="2" strokeDasharray="10,120" className="animate-[dash_4.5s_linear_infinite]" />
          </svg>

          {/* LEFT COLUMN: Input Nodes - Responsive layout */}
          <div className="lg:absolute lg:left-0 lg:top-10 flex flex-col gap-4 sm:gap-6 lg:gap-8 z-10 w-full lg:w-auto">
            {/* Card 1 */}
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-3 sm:gap-4 w-full lg:w-[280px] xl:w-[300px] animate-bounce-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" />
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 leading-tight">"Wait time is 3 weeks..."</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">Losing top talent to competitors</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 border border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-3 sm:gap-4 w-full lg:w-[280px] xl:w-[300px] lg:translate-x-4 animate-bounce-slower">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aria" alt="avatar" />
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 leading-tight">"200 resumes to read."</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">CEO doing manual screening</p>
              </div>
            </div>

            {/* Card 3 - Right side on desktop */}
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 border lg:absolute lg:ml-[680px] xl:ml-[700px] border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-3 sm:gap-4 w-full lg:w-[280px] xl:w-[300px] lg:translate-x-4 animate-bounce-slow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-purple-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Priya" alt="avatar" />
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 leading-tight">"I'm the CEO, product lead..."</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">Zero time to read resumes</p>
              </div>
            </div>

            {/* Card 4 - Right side on desktop */}
            <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 border lg:absolute lg:ml-[680px] xl:ml-[700px] lg:mt-[150px] xl:mt-[170px] border-slate-200 rounded-xl shadow-xl shadow-slate-200/50 flex items-center gap-3 sm:gap-4 w-full lg:w-[280px] xl:w-[300px] animate-bounce-slower">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex-shrink-0 flex items-center justify-center border-2 border-white overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Amit" alt="avatar" />
              </div>
              <div>
                <p className="text-[11px] sm:text-[12px] font-bold text-slate-800 leading-tight">"Best candidate accepted another offer"</p>
                <p className="text-[9px] sm:text-[10px] text-slate-400">This keeps happening</p>
              </div>
            </div>
          </div>





          {/* CENTER: The AI Engine Core - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-56 md:w-60 lg:w-64 h-64 sm:h-72 md:h-76 lg:h-80 bg-white border-2 border-blue-100 rounded-2xl shadow-2xl z-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 to-transparent" />
            
            {/* Scanning Laser Line */}
            <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-scan z-30 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
            
            {/* Inner "Logic" Content */}
            <div className="p-4 sm:p-5 md:p-6 flex flex-col h-full justify-between relative z-10">
               <div className="space-y-2 sm:space-y-3">
                 {[1,2,3,4,5].map(i => (
                    <div key={i} className="h-1.5 sm:h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="h-full bg-blue-400/30 animate-pulse" style={{ width: `${Math.random() * 100}%` }} />
                    </div>
                 ))}
               </div>
               <div className="bg-blue-600 h-10 sm:h-12 rounded-xl flex items-center justify-center text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase">
                  AI Processing...
               </div>
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