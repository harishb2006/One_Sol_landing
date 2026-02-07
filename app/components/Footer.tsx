// components/Hero.tsx
import React from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import { ArrowRight } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Hero() {
  return (
    <div className={`relative h-[400px] sm:h-[450px] md:h-[500px] w-full flex flex-col items-center justify-center text-white px-4 overflow-hidden ${inter.className}`}>
      
      
      {/* Background Dot Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 sm:space-y-8">
        
        {/* Headline */}
        <h1 className={`${playfair.className} text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl tracking-tight leading-[1.1]`}>
          Ready to Hire <br />
          <span className="italic">Better, Faster?</span>
        </h1>

        {/* Subheadline */}
        <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-lg mx-auto font-light">
          Join 500+ companies hiring smarter with AI.
        </p>

        {/* CTA Section */}
        <div className="flex flex-col items-center space-y-4 sm:space-y-6 pt-2 sm:pt-4">
          
          {/* Main Input/CTA Pill */}
          <div className="bg-white p-1.5 pl-4 sm:pl-6 rounded-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-0 w-full max-w-lg shadow-2xl">
            <input 
              type="email" 
              placeholder="What's your work email?" 
              className="flex-grow bg-transparent text-gray-800 outline-none placeholder:text-gray-400 text-sm md:text-base px-2 sm:px-0 py-2 sm:py-0"
            />
            <button className="bg-[#2D2D2D] hover:bg-black transition-colors text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 text-xs sm:text-sm md:text-base font-medium whitespace-nowrap">
              Start Free Trial
              <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>

          {/* Secondary CTA */}
          <button className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm font-medium underline underline-offset-4">
            Schedule Demo
          </button>

        </div>
      </div>

      {/* Bottom Gradient Fade (Optional - adds depth) */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0C0C0C] to-transparent pointer-events-none" />
    </div>
  );
}