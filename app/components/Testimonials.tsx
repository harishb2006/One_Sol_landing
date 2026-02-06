"use client";

import React from "react";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Head of HR",
    company: "TechCorp",
    text: "RecruiterAI transformed our hiring process. We went from 6 weeks to 2 weeks for technical roles. The AI screening is incredibly accurate.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    name: "Michael Chen",
    role: "Founder",
    company: "StartupXYZ",
    text: "As a small team, we couldn't afford a full-time recruiter. This tool gave us enterprise-level hiring capabilities at a fraction of the cost.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
  },
  {
    name: "Emma Rodriguez",
    role: "VP of Talent",
    company: "GrowthCo",
    text: "The automated interview scheduling alone saved us 20+ hours per week. Candidates love the smooth experience too.",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  
];

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-[#F4F9FF]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
         
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-4"
          >
            What our users are saying.
          </motion.h2>
         
        </div>

        {/* Testimonials Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F4F9FF] rounded-4xl p-6 shadow-sm hover:shadow-md transition-shadow border border-slate-200"
            >
              {/* Avatar and Info */}
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full bg-slate-100"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-slate-500">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-slate-400">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 leading-relaxed">
                {testimonial.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;