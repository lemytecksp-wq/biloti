'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQItem } from '@/lib/data/faqData';

interface FaqAccordionProps {
  faqs: FAQItem[];
  allowMultiple?: boolean;
}

export default function FaqAccordion({ faqs, allowMultiple = true }: FaqAccordionProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]); // First open by default

  const toggleIndex = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {faqs.map((faq, idx) => {
        const isOpen = openIndices.includes(idx);
        return (
          <div
            key={idx}
            className="border border-slate-200 rounded-xl bg-white shadow-xs overflow-hidden transition-all duration-200 hover:border-emerald-200"
          >
            <button
              onClick={() => toggleIndex(idx)}
              className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-slate-900 text-base sm:text-lg focus:outline-none focus:bg-slate-50"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#1F6F50] shrink-0" />
                <span>{faq.question}</span>
              </span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180 text-[#1F6F50]' : ''
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-5 pb-6 sm:px-6 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 bg-slate-50/50">
                <p className="pt-4">{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
