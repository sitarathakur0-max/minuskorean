import React, { useEffect } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { GalleryItem, getItemWhatsAppLink } from '../data/restaurantData';

interface LightboxProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full bg-[#171717] rounded-2xl overflow-hidden shadow-2xl border border-[#C7A56A]/20"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors border border-white/20"
          aria-label="Close lightbox view"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row">
          <div className="md:w-3/5 bg-black flex items-center justify-center max-h-[70vh]">
            <img
              src={item.image}
              alt={item.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover max-h-[70vh]"
            />
          </div>

          <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between text-[#F7F1E8]">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold">
                {item.category}
              </span>
              <h3 className="text-2xl font-bold font-serif-brand leading-snug">
                {item.title}
              </h3>
              <p className="text-sm text-[#F7F1E8]/75 leading-relaxed">
                {item.description}
              </p>
              <div className="pt-2 text-xs text-[#78947A]">
                MinSu Korean Dining · Farid Town, Sahiwal
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 space-y-3">
              <a
                href={getItemWhatsAppLink(item.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#681F32] hover:bg-[#521625] text-[#F7F1E8] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask About Availability</span>
              </a>
              <p className="text-[11px] text-center text-[#F7F1E8]/50">
                Menu availability may vary daily. Direct WhatsApp enquiry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
