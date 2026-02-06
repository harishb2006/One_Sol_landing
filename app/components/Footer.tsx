// components/Hero.tsx
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className={`relative h-[500px] w-full flex flex-col items-center justify-center  text-white px-4 overflow-hidden ${inter.className}`}>
      
      
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-8">
        
        {/* Headline */}
        <h1 className={`${playfair.className} text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[1.1]`}>
          Ready to Hire <br />
          <span className="italic">Better, Faster?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto font-light">
          Join 500+ companies hiring smarter with AI.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-6 pt-4">
          
          {/* Main Input/CTA Pill */}
          <div className="bg-white p-1.5 pl-6 rounded-full flex items-center w-full max-w-lg shadow-2xl">
            <input 
              type="email" 
              placeholder="What's your work email?" 
              className="flex-grow bg-transparent text-gray-800 outline-none placeholder:text-gray-400 text-sm md:text-base"
            />
            <button className="bg-[#2D2D2D] hover:bg-black transition-colors text-white px-6 py-3 rounded-full flex items-center gap-2 text-sm md:text-base font-medium whitespace-nowrap">
              Start Free Trial
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Secondary CTA */}
          <button className="text-gray-400 hover:text-white transition-colors text-sm font-medium underline underline-offset-4">
            Schedule Demo
          </button>

        </div>
      </div>

      {/* Bottom Gradient Fade (Optional - adds depth) */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
    </div>
  );
}