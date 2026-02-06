import React from 'react';

const AfterHero = () => {
  return (
    <div className="relative bg-[#F4F9FF]  py-20 px-6">
      {/* Dotted line */}
      <div className="h-2 w-full mb-12">
        <div className="border-t border-dashed border-slate-300" />
      </div>
      
      {/* Title Section */}
      <div className="max-w-4xl  font-serif  mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-medium text-slate-900 mb-4 leading-tight">
          AI Recruiting Software That Works Like Your Own HR Team
        </h1>
        <p className="text-lg md:text-xl text-slate-500 font-medium">
          Build custom hiring workflows in minutes. No coding required.
        </p>
      </div>

      {/* Overlapping Animation Section - Add your content here */}
      <div className="mt-16 max-w-6xl mx-auto">
        {/* Animation content will go here */}
      </div>
    </div>
  );
};

export default AfterHero;