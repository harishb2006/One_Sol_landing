"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

// --- Types ---
interface Step {
  label: string;
  status: "active" | "inactive" | "completed";
}

interface SectionData {
  id: number;
  title: string;
  steps: Step[];
  bgColor: string;
  accentColor: string;
  gridColor: string;
}

// --- Data ---
const SECTIONS: SectionData[] = [
 
  {
    id: 1,
    title: "Automated Screening",
    bgColor: "#D1C4FF", // Light Purple from image 2
    accentColor: "#9D84F5",
    gridColor: "rgba(100, 0, 200, 0.1)",
    steps: [
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
    ],
  },

 {
    id: 2,
    title: "Automated Screening",
    bgColor: "#B3DFFF", // Light Blue from image 1
    accentColor: "#59B2F8", 
    gridColor: "rgba(0, 100, 200, 0.1)",
    steps: [
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
      { label: "New Application", status: "active" },
    ],
  },

  {
    id: 3,
    title: "Automated Screening",
    bgColor: "#C4B5FD", // Deep Purple from image 3
    accentColor: "#8B5CF6",
    gridColor: "rgba(100, 0, 200, 0.2)",
    steps: [
      { label: "New Application", status: "active" },
      { label: "AI Resume Rank", status: "active" },
      { label: "Auto screening quiz", status: "active" },
      { label: "Interview auto-schedule", status: "active" },
    ],
  },
];

// --- Components ---

const WorkflowCard = ({ section, index, progress }: { section: SectionData, index: number, progress: any }) => {
  // This handles the "merging/shrinking" effect of the previous card
  const scale = useTransform(progress, [0, 1], [1, 0.9]);
  const opacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0.6]);

  return (
    <motion.div
      style={{ 
        backgroundColor: section.bgColor,
        scale: index === SECTIONS.length - 1 ? 1 : scale,
        opacity: index === SECTIONS.length - 1 ? 1 : opacity,
      }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden  rounded-t-4xl"
    >
    
      {/* Grid Lines - Vertical and Horizontal - Centered around card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl h-full">
          {/* Vertical Lines */}
          <div className="absolute left-[10%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="absolute left-[25%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="absolute left-[50%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="absolute right-[25%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="absolute right-[10%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          
          {/* Horizontal Lines */}
          <div className="absolute top-[15%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="absolute top-[35%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="absolute top-[65%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="absolute top-[85%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
        </div>
      </div>

      {/* Side Decorative Blocks (Matching the images) */}
      <div className="absolute top-24 left-0 w-[270px] h-32 opacity-60" style={{ backgroundColor: section.accentColor }} />
      <div className="absolute bottom-40 right-0 w-[270px] h-40 opacity-60" style={{ backgroundColor: section.accentColor }} />

      {/* Main Workflow Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white p-12 rounded-lg shadow-2xl w-full max-w-xl border border-gray-200"
      >
        <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
          {section.title}
        </h2>

        <div className="flex flex-col items-center gap-4">
          {section.steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="w-full max-w-sm py-4 px-6 rounded-xl text-center transition-all duration-500 font-medium shadow-sm border bg-[#232F42] text-white border-transparent">
                {step.label}
              </div>
              
              {/* Down Arrow / Connector */}
              {i < section.steps.length - 1 && (
                <div className="text-gray-400">
                  <ChevronDown size={24} strokeWidth={1.5} />
                </div>
              )}
            </React.Fragment>
          ))}
          {/* Final dangling arrow for flow feel */}
          <div className="text-gray-400 pt-2">
            <ChevronDown size={24} strokeWidth={1.5} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function WorkflowScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={containerRef} className="relative bg-[#F4F9FF]">
     

      {SECTIONS.map((section, index) => {
        // We create a custom range for each card to trigger its individual "shrink" animation
        // Based on its position in the total scroll
        return (
          <WorkflowCard 
            key={section.id} 
            section={section} 
            index={index}
            progress={scrollYProgress}
          />
        );
      })}

      {/* Footer Space */}
      <div className="h-screen bg-white flex items-center justify-center">
        <p className="text-gray-500 font-medium">End of Automated Screening Flow</p>
      </div>
    </main>
  );
}