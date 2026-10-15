import React, { useState } from 'react';
import { ChevronDown, MessageCircle, Phone, MapPin, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS, FaqItem, BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';

interface FaqPageProps {
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigate }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Visitor Questions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Helpful, factual answers regarding MinSu's location, menu, dining formats, and hours in Farid Town, Sahiwal.
          </p>
        </div>
      </section>

      {/* 2. Accordion Container */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3">
          {FAQ_ITEMS.map((item: FaqItem, index: number) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-4.5 px-6 flex items-center justify-between text-left gap-4 hover:bg-slate-50/70 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681F32]"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base sm:text-lg font-serif-brand text-[#171717]">
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#F7F1E8] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-[#681F32] text-white' : 'text-[#171717]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#171717]/80 leading-relaxed border-t border-slate-100 animate-in fade-in duration-150">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Contact Assistance Strip */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-10 border border-[#78947A]/30 text-center space-y-4">
          <h3 className="text-2xl font-bold font-serif-brand text-[#171717]">
            Have another question?
          </h3>
          <p className="text-sm text-[#171717]/80 max-w-lg mx-auto">
            Our staff at MinSu is happy to help with menu details, today's specials, takeout orders, or directions.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-6 py-3 bg-white border border-slate-300 text-[#171717] font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#681F32]" />
              <span>Call +92 317 6064957</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-[#681F32] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#521625] transition-all"
            >
              Visit & Contact Page
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
