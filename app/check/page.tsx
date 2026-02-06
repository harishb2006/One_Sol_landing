import React from 'react';

const HeroSection = () => {
  // Helper to render the dashed lines from your provided code logic
  const DashedLine = ({ className }: { className: string }) => (
    <div className={`absolute flex overflow-hidden pointer-events-none ${className}`}>
      {[...Array(40)].map((_, i) => (
        <div key={i} className="min-w-[8px] h-[1px] bg-slate-200 mr-2" />
      ))}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-[#F4F9FF] font-sans overflow-hidden">
      {/* --- BACKGROUND PATTERNS --- */}
      
      {/* Diagonal Striped Sides */}
      <div className="absolute inset-y-0 left-0 w-24 md:w-32 border-r border-slate-200 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_50%,#e2e8f0_50%,#e2e8f0_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-40" />
      <div className="absolute inset-y-0 right-0 w-24 md:w-32 border-l border-slate-200 bg-[linear-gradient(45deg,#e2e8f0_25%,transparent_25%,transparent_50%,#e2e8f0_50%,#e2e8f0_75%,transparent_75%,transparent)] bg-[length:10px_10px] opacity-40" />

      {/* Grid Lines (The "Blueprint" look) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Vertical Dashed Lines */}
        <div className="absolute left-[15%] h-full w-[1px] border-l border-dashed border-slate-300" />
        <div className="absolute right-[15%] h-full w-[1px] border-l border-dashed border-slate-300" />
        
        {/* Horizontal Dashed Lines (Based on your code structure) */}
        <DashedLine className="top-32 w-full" />
        <DashedLine className="top-48 w-full" />
        <DashedLine className="bottom-20 w-full" />
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative z-10 flex items-center justify-between px-12 py-6 max-w-7xl mx-auto">
        <div className="flex gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-blue-600 transition">Platform</a>
          <a href="#" className="hover:text-blue-600 transition">Impact</a>
          <a href="#" className="hover:text-blue-600 transition">Integrations</a>
        </div>
        <div className="flex gap-4">
          <button className="bg-[#4182F9] text-white px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-blue-600 transition shadow-sm">
            Start Hiring Smarter
          </button>
          <button className="border-2 border-[#4182F9] text-black px-6 py-2.5 rounded-sm font-semibold text-sm hover:bg-blue-50 transition">
            see how it works
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 max-w-5xl mx-auto pt-20 px-6">
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-6 tracking-tight">
            Every Hire <br />
            Faster and Better
          </h1>
          <p className="max-w-xl text-lg text-slate-400 leading-relaxed">
            Stop losing great candidates to slow, manual hiring processes. 
            Let AI handle the heavy lifting while you focus on building your team.
          </p>
        </div>

        {/* --- CARDS SECTION --- */}
        <div className="flex flex-wrap items-start gap-6 mt-16">
          
          {/* Left Column: Small Cards */}
          <div className="flex flex-col gap-4 w-full md:w-[320px]">
            {/* Card 1 */}
            <div className="bg-white p-4 border border-slate-200 shadow-sm flex items-center gap-4">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                alt="user" className="w-10 h-10 rounded-full bg-yellow-100" 
              />
              <p className="text-[11px] leading-tight font-medium text-slate-800">
                "Candidates wait 3 weeks... <br /> we're losing talent to competitors."
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-4 border border-slate-200 shadow-sm flex items-center gap-4">
              <img 
                src="https://api.dicebear.com/7.x/avataaars/svg?seed=Aria" 
                alt="user" className="w-10 h-10 rounded-full bg-blue-100" 
              />
              <p className="text-[11px] leading-tight font-medium text-slate-800">
                "I'm the CEO and doing HR? <br /> Zero time to read 200 resumes."
              </p>
            </div>
          </div>

          {/* Center Column: Tall Empty Frame */}
          <div className="bg-white border border-slate-200 w-full md:w-[280px] h-[320px] shadow-sm">
            {/* Inner border for the "framed" look */}
            <div className="m-2 border border-slate-100 h-[calc(100%-16px)]" />
          </div>

          {/* Right Column: Gray Box Placeholder */}
          <div className="bg-white border border-slate-200 p-2 shadow-sm w-full md:w-[300px]">
             <div className="bg-[#D9D9D9] w-full h-[180px]" />
          </div>

        </div>
      </main>
    </div>
  );
};

export default HeroSection;