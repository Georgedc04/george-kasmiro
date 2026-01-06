"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";
import Title from "@/components/Title";

const faqs = [
  {
    question: "What core specializations do you offer?",
    answer: "I specialize in end-to-end web architecture (Full Stack), Offensive Security (Penetration Testing), and implementing Zero Trust Network Access (ZTNA) protocols.",
  },
  {
    question: "How do I initiate a security audit or project?",
    answer: "You can deploy a message via the Contact node. I typically review technical requirements and respond with a project roadmap within 24–48 hours.",
  },
  {
    question: "Do you provide post-deployment system hardening?",
    answer: "Yes. Beyond initial delivery, I offer maintenance packages focused on security patching, vulnerability monitoring, and performance optimization.",
  },
  {
    question: "Which technical stack do you prefer?",
    answer: "My primary stack includes Next.js, TypeScript, TailwindCSS, and Node.js. For security automation and scripting, I utilize Python and Bash.",
  },
  {
    question: "How is data integrity ensured during development?",
    answer: "I follow DevSecOps principles: integrating secure code audits, multi-factor authentication, and encrypted data-at-rest protocols from the first line of code.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Robust toggle logic
  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#0B1120] px-6">
      <div className="max-w-4xl mx-auto">
        <Title title="KNOWLEDGE_BASE" des="Frequently Asked Questions" />

        <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`transition-all duration-500 rounded-xl border ${
                  isOpen
                    ? "bg-[#1E293B]/60 border-[#00D1FF]/50 shadow-[0_0_25px_rgba(0,209,255,0.1)]"
                    : "bg-[#111827]/50 border-white/5 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-5 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-4">
                    <FiHelpCircle
                      className={`text-xl transition-colors ${
                        isOpen ? "text-[#00D1FF]" : "text-gray-500 group-hover:text-gray-300"
                      }`}
                    />
                    <span
                      className={`font-semibold tracking-wide transition-colors ${
                        isOpen ? "text-white" : "text-gray-400 group-hover:text-gray-200"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <FiChevronDown
                    className={`text-xl transition-transform duration-500 ${
                      isOpen ? "rotate-180 text-[#00D1FF]" : "text-gray-600"
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden" // CRITICAL: Fixes height jumping/failing
                    >
                      <div className="px-14 pb-6">
                        <div className="h-[1px] w-full bg-gradient-to-r from-[#00D1FF]/30 to-transparent mb-4"></div>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[3px]">
            End_of_Transmission // More questions?{" "}
            <a href="/contact" className="text-[#00D1FF] hover:underline">
              Contact_Uplink
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;