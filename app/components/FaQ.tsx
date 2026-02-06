"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FAQItem[] = [
  {
    question: "How does AI screening work",
    answer: "Our AI analyzes resumes using natural language processing to match candidates against job requirements. It evaluates skills, experience, and qualifications, then ranks candidates based on fit. The system learns from your hiring patterns to improve accuracy over time."
  },
  {
    question: "Does RecruiterAI integrate with our existing ATS",
    answer: "Yes! RecruiterAI seamlessly integrates with major ATS platforms including Greenhouse, Lever, Workday, and BambooHR. Our API allows for custom integrations, and we provide dedicated support during the setup process to ensure smooth data flow."
  },
  {
    question: "What's the pricing structure",
    answer: "We offer flexible pricing based on your hiring volume. Plans start at $299/month for small teams (up to 50 applications), with enterprise packages available. All plans include AI screening, automated interviews, and analytics. Contact us for a custom quote based on your specific needs."
  },
  {
    question: "How long does setup take",
    answer: "Initial setup takes just 15-20 minutes. You'll connect your ATS, customize your screening criteria, and configure interview questions. Our onboarding team provides step-by-step guidance, and most customers start seeing results within 24 hours."
  },
  {
    question: "Is candidate data secure",
    answer: "Absolutely. We're SOC 2 Type II certified and GDPR compliant. All data is encrypted in transit and at rest using AES-256 encryption. We never share candidate information with third parties, and you maintain full control over data retention and deletion."
  },
  
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-[#1E5EFF] via-[#2563EB] to-[#1E40AF] relative overflow-hidden">
      {/* Background Pattern */}
  
      
      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <div className="mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-white mb-3"
          >
             FAQ
          </motion.h2>
          
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/20"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className="text-white text-lg md:text-xl font-semibold pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-6 h-6 text-white" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 text-blue-100 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

           </div>
    </section>
  );
};

export default FAQ;
