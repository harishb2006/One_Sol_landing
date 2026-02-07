"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { 
  Mail, 
  Sparkles, 
  Send, 
  Calendar, 
  ThumbsUp,
  Video,
  FileCheck,
  Award,
  Users,
  Clock,
  RefreshCw,
  CheckCircle,
  XCircle,
  ArrowRight
} from "lucide-react";

// --- Types ---
interface FlowNode {
  id: string;
  label: string;
  sublabel?: string;
  icon: React.ElementType;
  type: "start" | "process" | "decision" | "end";
  color: string;
  nextNodes?: string[];
  decisionPaths?: {
    condition: string;
    nextNode: string;
    label: string;
  }[];
}

interface SectionData {
  id: number;
  title: string;
  subtitle: string;
  benefit: string;
  nodes: FlowNode[];
  bgColor: string;
  accentColor: string;
}

// --- Data ---
const SECTIONS: SectionData[] = [
  {
    id: 1,
    title: "Automated Candidate Screening",
    subtitle: "& Interview Scheduling",
    benefit: "Reduce time-to-hire from 42 days to 12 days",
    bgColor: "#D1C4FF",
    accentColor: "#9D84F5",
    nodes: [
      { id: "n1", label: "New Application", icon: Mail, type: "start", color: "#FF6B6B", nextNodes: ["n2"] },
      { id: "n2", label: "AI Resume Screening", sublabel: "Ranks top 20%", icon: Sparkles, type: "process", color: "#4ECDC4", nextNodes: ["n3"] },
      { id: "n3", label: "Auto-send Screening", sublabel: "Questions via email", icon: Send, type: "process", color: "#45B7D1", nextNodes: ["n4"] },
      { 
        id: "n4", 
        label: "Score > 75%?", 
        icon: FileCheck, 
        type: "decision", 
        color: "#FFA500",
        decisionPaths: [
          { condition: "YES", nextNode: "n5", label: "Qualified" },
          { condition: "NO", nextNode: "n6", label: "Keep in pool" }
        ]
      },
      { id: "n5", label: "Auto-schedule Interview", sublabel: "Calendar link sent", icon: Calendar, type: "end", color: "#95E1D3" },
      { id: "n6", label: "Thank You Email", sublabel: "Future opportunities", icon: ThumbsUp, type: "end", color: "#B39DDB" },
    ],
  },
  {
    id: 2,
    title: "Multi-Stage Interview Process",
    subtitle: "Automation",
    benefit: "Reduce time-to-hire from 42 days to 12 days",
    bgColor: "#B3DFFF",
    accentColor: "#59B2F8",
    nodes: [
      { id: "n1", label: "Interview Accepted", icon: CheckCircle, type: "start", color: "#95E1D3", nextNodes: ["n2"] },
      { id: "n2", label: "AI Video Interview", sublabel: "Technical screening", icon: Video, type: "process", color: "#4ECDC4", nextNodes: ["n3"] },
      { id: "n3", label: "AI Scores Response", sublabel: "Custom rubric", icon: Award, type: "process", color: "#45B7D1", nextNodes: ["n4"] },
      { 
        id: "n4", 
        label: "Score > 80%?", 
        icon: FileCheck, 
        type: "decision", 
        color: "#FFA500",
        decisionPaths: [
          { condition: "YES", nextNode: "n5", label: "Proceed" },
          { condition: "NO", nextNode: "n8", label: "Reject" }
        ]
      },
      { id: "n5", label: "Manager Interview", sublabel: "Round 2", icon: Users, type: "process", color: "#A78BFA", nextNodes: ["n6"] },
      { 
        id: "n6", 
        label: "Hire?", 
        icon: ThumbsUp, 
        type: "decision", 
        color: "#FFA500",
        decisionPaths: [
          { condition: "YES", nextNode: "n7", label: "Offer" },
          { condition: "NO", nextNode: "n8", label: "Decline" }
        ]
      },
      { id: "n7", label: "Send Offer Letter", sublabel: "Welcome kit", icon: Mail, type: "end", color: "#10B981" },
      { id: "n8", label: "Rejection Email", sublabel: "With feedback", icon: XCircle, type: "end", color: "#EF4444" },
    ],
  },
  {
    id: 3,
    title: "Passive Candidate",
    subtitle: "Re-engagement System",
    benefit: "Build a qualified talent pipeline automatically - never start from zero",
    bgColor: "#C4B5FD",
    accentColor: "#8B5CF6",
    nodes: [
      { id: "n1", label: "Borderline Candidate", sublabel: "Score 60-74%", icon: Users, type: "start", color: "#FFA500", nextNodes: ["n2"] },
      { id: "n2", label: "Add to Talent Pool", sublabel: "Future opportunities", icon: Award, type: "process", color: "#A78BFA", nextNodes: ["n3"] },
      { id: "n3", label: "Wait 3 Months", sublabel: "Nurture period", icon: Clock, type: "process", color: "#818CF8", nextNodes: ["n4"] },
      { 
        id: "n4", 
        label: "New Position?", 
        icon: RefreshCw, 
        type: "decision", 
        color: "#FFA500",
        decisionPaths: [
          { condition: "YES", nextNode: "n5", label: "Re-engage" },
          { condition: "NO", nextNode: "n7", label: "Wait" }
        ]
      },
      { id: "n5", label: "Personalized Email", sublabel: "New role match", icon: Send, type: "process", color: "#4ECDC4", nextNodes: ["n6"] },
      { id: "n6", label: "Fast-track Interview", sublabel: "Skip screening", icon: CheckCircle, type: "end", color: "#10B981" },
      { id: "n7", label: "Check Next Quarter", sublabel: "Automatic retry", icon: RefreshCw, type: "end", color: "#B39DDB" },
    ],
  },
];

// --- Components ---

const FlowNode = ({ node }: { node: FlowNode }) => {
  const IconComponent = node.icon;
  
  if (node.type === "decision") {
    return (
      <div className="flex flex-col items-center">
        <div 
          className="relative w-20 h-20 sm:w-24 sm:h-24 rotate-45 flex items-center justify-center shadow-lg"
          style={{ backgroundColor: node.color }}
        >
          <div className="rotate-[-45deg] flex flex-col items-center">
            <IconComponent size={20} className="text-white mb-1" strokeWidth={2.5} />
            <span className="text-[9px] sm:text-[10px] font-bold text-white text-center leading-tight px-1">
              {node.label}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center max-w-[140px] sm:max-w-[160px]">
      <div 
        className="relative px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg border-2 border-white/50 flex items-center gap-2 min-w-[120px] sm:min-w-[140px]"
        style={{ backgroundColor: node.color }}
      >
        <div className="p-1.5 sm:p-2 bg-white/20 rounded-lg shrink-0">
          <IconComponent size={16} className="text-white sm:w-[18px] sm:h-[18px]" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] sm:text-xs font-bold text-white leading-tight break-words">
            {node.label}
          </div>
          {node.sublabel && (
            <div className="text-[8px] sm:text-[9px] text-white/80 leading-tight break-words">
              {node.sublabel}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const FlowConnector = ({ isDecision, label }: { isDecision?: boolean; label?: string }) => {
  if (isDecision && label) {
    return (
      <div className="flex items-center gap-1 sm:gap-2 my-1">
        <div className="h-6 sm:h-8 w-0.5 bg-slate-300" />
        <span className="text-[9px] sm:text-[10px] font-semibold text-slate-600 bg-white/80 px-1.5 py-0.5 rounded">
          {label}
        </span>
        <ArrowRight size={12} className="text-slate-400 sm:w-[14px] sm:h-[14px]" />
      </div>
    );
  }
  
  return <div className="h-6 sm:h-8 w-0.5 bg-slate-300 my-1" />;
};

const WorkflowCard = ({ section, index, progress }: { section: SectionData, index: number, progress: MotionValue<number> }) => {
  const scale = useTransform(progress, [0, 1], [1, 0.9]);
  const opacity = useTransform(progress, [0, 0.8, 1], [1, 1, 0.6]);

  return (
    <motion.div
      style={{ 
        backgroundColor: section.bgColor,
        scale: index === SECTIONS.length - 1 ? 1 : scale,
        opacity: index === SECTIONS.length - 1 ? 1 : opacity,
      }}
      className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden rounded-t-4xl px-4 sm:px-6 lg:px-8"
    >
    
      {/* Grid Lines - Vertical and Horizontal - Centered around card */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-full max-w-4xl h-full">
          {/* Vertical Lines - Hidden on mobile */}
          <div className="hidden md:block absolute left-[10%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="hidden md:block absolute left-[25%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="absolute left-[50%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="hidden md:block absolute right-[25%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          <div className="hidden md:block absolute right-[10%] h-full w-[1px] border-l border-dashed border-slate-400/40" />
          
          {/* Horizontal Lines - Reduced on mobile */}
          <div className="absolute top-[15%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="hidden sm:block absolute top-[35%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="hidden sm:block absolute top-[65%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
          <div className="absolute top-[85%] w-full h-[1px] border-t border-dashed border-slate-400/40" />
        </div>
      </div>

      {/* Side Decorative Blocks - Responsive sizing and visibility */}
      <div className="hidden lg:block absolute top-16 lg:top-24 left-0 w-32 sm:w-48 lg:w-[270px] h-20 sm:h-28 lg:h-32 opacity-60" style={{ backgroundColor: section.accentColor }} />
      <div className="hidden lg:block absolute bottom-32 lg:bottom-40 right-0 w-32 sm:w-48 lg:w-[270px] h-24 sm:h-32 lg:h-40 opacity-60" style={{ backgroundColor: section.accentColor }} />

      {/* Main Flowchart Content */}
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 bg-white p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl shadow-2xl w-full max-w-[95%] sm:max-w-lg md:max-w-2xl lg:max-w-3xl border border-gray-200 overflow-y-auto max-h-[85vh]"
      >
        {/* Header */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl  font-serif text-gray-900 mb-1 leading-tight">
            {section.title}
          </h2>
         
        </div>

        {/* Flowchart */}
        <div className="flex flex-col items-center gap-0">
          {section.nodes.map((node, i) => {
            const isDecisionNode = node.type === "decision";
            
            return (
              <React.Fragment key={node.id}>
                <FlowNode node={node} />
                
                {/* Handle decision paths */}
                {isDecisionNode && node.decisionPaths ? (
                  <div className="flex gap-4 sm:gap-8 md:gap-12 my-2 w-full justify-center">
                    {node.decisionPaths.map((path, pathIdx) => {
                      const targetNode = section.nodes.find(n => n.id === path.nextNode);
                      if (!targetNode) return null;
                      
                      return (
                        <div key={pathIdx} className="flex flex-col items-center">
                          <FlowConnector isDecision label={path.condition} />
                          <FlowNode node={targetNode} />
                        </div>
                      );
                    })}
                  </div>
                ) : !isDecisionNode && i < section.nodes.length - 1 && !section.nodes[i + 1]?.decisionPaths?.some(p => section.nodes.some(n => n.id === p.nextNode && section.nodes.indexOf(n) === i)) ? (
                  <FlowConnector />
                ) : null}
              </React.Fragment>
            );
          })}
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
      <div className="h-screen bg-white flex items-center justify-center px-4">
        <p className="text-gray-500 font-medium text-sm sm:text-base md:text-lg text-center">
          End of Automated Screening Flow
        </p>
      </div>
    </main>
  );
}