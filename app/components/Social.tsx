"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Linkedin, 
  Briefcase, 
  Search, 
  Globe, 
  Zap, 
  Building2, 
  Users, 
  Star, 
  CheckCircle2, 
  Trophy 
} from "lucide-react";

const logos = [
  { name: "LinkedIn", icon: <Linkedin className="w-6 h-6" /> },
  { name: "Naukri.com", icon: <Briefcase className="w-6 h-6" /> },
  { name: "Indeed", icon: <Search className="w-6 h-6" /> },
  { name: "AngelList", icon: <Globe className="w-6 h-6" /> },
  { name: "Instahyre", icon: <Zap className="w-6 h-6" /> },
  { name: "Wellfound", icon: <Users className="w-6 h-6" /> },
  { name: "IIMJobs", icon: <Building2 className="w-6 h-6" /> },
  { name: "Glassdoor", icon: <Star className="w-6 h-6" /> },
  { name: "Monster India", icon: <Trophy className="w-6 h-6" /> },
  { name: "Cutshort", icon: <CheckCircle2 className="w-6 h-6" /> },
];

// Double the list to ensure seamless looping
const duplicatedLogos = [...logos, ...logos];

const LogoMarquee = () => {
  return (
    <div className="bg-[#F4F9FF] py-12 sm:py-16 md:py-20 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 mb-6 sm:mb-8 md:mb-10 text-center">
        <h2 className="text-gray-400 font-medium uppercase tracking-widest text-xs sm:text-sm">
          Trusted by Top Platforms
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        {/* The Animated Container */}
        <motion.div
          className="flex whitespace-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: (index % logos.length) * 0.1,
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
              className="flex items-center justify-center min-w-[180px] sm:min-w-[220px] md:min-w-[250px] h-[80px] sm:h-[90px] md:h-[100px] mx-2 sm:mx-3 md:mx-4 bg-white border border-gray-100 rounded-xl shadow-sm transition-all duration-300"
              style={{
                filter: 'blur(0px)',
              }}
            >
              <div className="flex items-center space-x-2 sm:space-x-3 text-slate-800">
                <div className="p-1.5 sm:p-2 bg-slate-50 rounded-lg transition-transform">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6">
                    {logo.icon}
                  </div>
                </div>
                <span className="text-base sm:text-lg md:text-xl font-bold tracking-tight">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Gradient Overlays with Blur Effect - Responsive widths */}
        <div className="absolute inset-y-0 left-0 w-[150px] sm:w-[200px] md:w-[260px] z-10 pointer-events-none" 
             style={{ 
               background: 'linear-gradient(to right, rgba(244, 249, 255, 1) 0%, rgba(244, 249, 255, 0.6) 40%, transparent 100%)',
               backdropFilter: 'blur(4px)'
             }} 
        />
        <div className="absolute inset-y-0 right-0 w-[150px] sm:w-[200px] md:w-[260px] z-10 pointer-events-none" 
             style={{ 
               background: 'linear-gradient(to left, rgba(244, 249, 255, 1) 0%, rgba(244, 249, 255, 0.6) 40%, transparent 100%)',
               backdropFilter: 'blur(4px)'
             }} 
        />
      </div>
    </div>
  );
};

export default LogoMarquee;