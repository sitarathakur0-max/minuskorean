import React, { useState } from 'react';
import { MessageCircle, Phone, X, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside aria-label="Quick Contact" className="fixed left-4 bottom-6 md:left-6 md:bottom-8 z-50 flex flex-col items-start gap-2">
      {/* Quick popup modal on click */}
      {isOpen && (
        <div
          role="region"
          aria-label="Direct Contact Popup"
          className="mb-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-[#78947A]/30 overflow-hidden text-[#171717] animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Header */}
          <div className="bg-[#681F32] text-[#F7F1E8] p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#78947A] flex items-center justify-center text-white">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold leading-tight font-serif-brand">MinSu Korean Dining</h4>
                <p className="text-[11px] text-[#F7F1E8]/80">Farid Town, Sahiwal</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#F7F1E8]/70 hover:text-white p-1 rounded-md transition-colors"
              aria-label="Close contact popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-[#F7F1E8]/40 text-xs">
            <p className="text-[#171717]/80 leading-relaxed">
              Connect directly with our team for today's menu availability, takeout orders, or directions:
            </p>

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between w-full px-3.5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-medium rounded-xl transition-all shadow-sm group"
            >
              <span className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-between w-full px-3.5 py-2.5 bg-white hover:bg-slate-50 border border-slate-200 text-[#171717] font-medium rounded-xl transition-all group"
            >
              <span className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#681F32]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </span>
              <span className="text-[11px] text-[#78947A]">Direct Call</span>
            </a>

            <p className="text-[10px] text-slate-500 pt-1 text-center border-t border-slate-200/60">
              Listed closing time: 1:30 AM · Farid Town, Sahiwal
            </p>
          </div>
        </div>
      )}

      {/* Primary Floating Trigger on Left */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Open WhatsApp and contact options for MinSu"
          className="group flex items-center gap-2.5 bg-[#681F32] hover:bg-[#521625] text-[#F7F1E8] pl-3 pr-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border border-[#C7A56A]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681F32]"
        >
          <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-sm">
            <MessageCircle className="w-4 h-4 fill-white" />
          </div>
          <span className="text-xs font-semibold tracking-wide hidden sm:inline whitespace-nowrap">
            Chat with MinSu
          </span>
          <span className="text-xs font-semibold tracking-wide sm:hidden whitespace-nowrap">
            Chat
          </span>
        </button>

        {/* Quick Phone Call Pill next to it */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label={`Call MinSu at ${BUSINESS_INFO.phoneDisplay}`}
          className="w-10 h-10 rounded-full bg-white text-[#681F32] border border-[#681F32]/20 shadow-md hover:bg-[#F7F1E8] flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#681F32]"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>
    </aside>
  );
};
