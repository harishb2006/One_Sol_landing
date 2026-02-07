"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  Zap, 
  Target, 
  MessageSquare, 
  DollarSign, 
  Sparkles, 
  TrendingUp,
  Users,
  Clock,
  Award,
  Briefcase
} from "lucide-react";

interface Metric {
  title: string;
  value: string;
  description: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

const METRICS: Metric[] = [
  {
    title: "Time to Hire",
    value: "70% Faster",
    description: "Reduce hiring time from 42 days to just 12 days with automated workflows",
    icon: Zap,
    color: "#FBBF24",
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Screening Speed",
    value: "10x More",
    description: "Process 250+ applications daily with AI-powered resume analysis",
    icon: Target,
    color: "#EF4444",
    gradient: "from-red-400 to-pink-500",
  },
  {
    title: "Interview Scale",
    value: "25x Capacity",
    description: "Conduct 200+ automated pre-screening interviews every day",
    icon: MessageSquare,
    color: "#8B5CF6",
    gradient: "from-purple-400 to-indigo-500",
  },
  {
    title: "Cost Reduction",
    value: "80% Savings",
    description: "Cut recruitment costs vs traditional agencies and multiple tools",
    icon: DollarSign,
    color: "#10B981",
    gradient: "from-green-400 to-emerald-500",
  
  },
  {
    title: "Quality Hires",
    value: "89% Match",
    description: "AI-optimized job descriptions attract better-qualified candidates",
    icon: Sparkles,
    color: "#3B82F6",
    gradient: "from-blue-400 to-cyan-500",
  },
  {
    title: "Completion Rate",
    value: "95% Finished",
    description: "Smart forms reduce candidate drop-off dramatically",
    icon: TrendingUp,
    color: "#F59E0B",
    gradient: "from-amber-400 to-orange-500",
  },
];

// Floating icons for background animation
const FLOATING_ICONS = [
  { Icon: Users, position: { top: "15%", left: "8%" } },
  { Icon: Clock, position: { top: "25%", right: "12%" } },
  { Icon: Award, position: { bottom: "20%", left: "10%" } },
  { Icon: Briefcase, position: { bottom: "30%", right: "8%" } },
];

const ImpactResults = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <div ref={containerRef} className="relative h-[300vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <section className="w-full py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-br from-[#F4F9FF] via-white to-[#EEF6FF] relative">
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          
          {/* Floating Icons Background */}
          {FLOATING_ICONS.map((item, index) => {
            const iconOpacity = useTransform(
              scrollYProgress,
              [0.1 + index * 0.05, 0.2 + index * 0.05],
              [0, 0.08]
            );
            
            return (
              <motion.div
                key={index}
                style={{ opacity: iconOpacity }}
                className="absolute hidden lg:block"
                {...item.position}
              >
                <motion.div
                  animate={{ 
                    y: [0, -20, 0],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  <item.Icon size={60} strokeWidth={1.5} />
                </motion.div>
              </motion.div>
            );
          })}
          
          <div className="max-w-7xl mx-auto relative">
            
          
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {METRICS.map((metric, index) => {
                const IconComponent = metric.icon;
                
                // Calculate scroll-based animation ranges for each card
                const startProgress = 0.2 + (index * 0.08);
                const endProgress = startProgress + 0.1;
                
                const cardOpacity = useTransform(
                  scrollYProgress,
                  [startProgress, endProgress],
                  [0, 1]
                );
                
                const cardScale = useTransform(
                  scrollYProgress,
                  [startProgress, endProgress],
                  [0.8, 1]
                );
                
                const cardY = useTransform(
                  scrollYProgress,
                  [startProgress, endProgress],
                  [100, 0]
                );
                
                return (
                  <motion.div
                    key={metric.title}
                    style={{
                      opacity: cardOpacity,
                      scale: cardScale,
                      y: cardY
                    }}
                    className="relative bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-2xl p-4 sm:p-6 md:p-8 transition-all duration-300"
                  >
                    {/* Icon Container */}
                    <div 
                      className={`relative inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${metric.gradient} mb-4 sm:mb-6`}
                    >
                      <IconComponent 
                        size={28} 
                        className="text-white sm:w-7 sm:h-7 md:w-8 md:h-8" 
                        strokeWidth={2.5}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="text-slate-500 font-semibold text-xs sm:text-sm uppercase tracking-wide mb-2">
                      {metric.title}
                    </h3>

                    {/* Value */}
                    <div className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-br ${metric.gradient} bg-clip-text text-transparent mb-3 sm:mb-4`}>
                      {metric.value}
                    </div>

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-xs sm:text-sm md:text-base">
                      {metric.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <motion.div
              className="mt-20 text-center"
              style={{
                opacity: useTransform(scrollYProgress, [0.75, 0.85], [0, 1]),
                y: useTransform(scrollYProgress, [0.75, 0.85], [50, 0])
              }}
            >
            
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ImpactResults;