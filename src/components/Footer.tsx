import React from 'react';
import { MapPin, Phone, MessageCircle, Clock, UtensilsCrossed, ExternalLink } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#171717] text-[#F7F1E8] border-t border-[#681F32]/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Concept */}
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-serif-brand text-[#F7F1E8] tracking-tight">
                MinSu
              </span>
              <span className="text-xs uppercase tracking-widest text-[#C7A56A] font-sans">
                민수 · Sahiwal
              </span>
            </div>
            <p className="text-sm text-[#F7F1E8]/75 leading-relaxed">
              Sahiwal's first Korean restaurant. Exploring Korean-inspired fried chicken, comforting ramen bowls, handmade dumplings, and specialty boba drinks in Farid Town.
            </p>
            <div className="pt-2 text-xs text-[#C7A56A] flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 shrink-0" />
              <span>Dine-in · Takeout · Delivery</span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A56A]">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#F7F1E8]/80">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  About MinSu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('menu')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Full Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('chicken-specialities')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Korean Fried Chicken & Bento
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('ramen-dumplings')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Ramen & Dumplings
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('boba-drinks')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Boba & Drinks
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Food Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('faqs')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-[#C7A56A] transition-colors"
                >
                  Visit & Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Verified Location */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A56A]">
              Location & Hours
            </h4>
            <div className="space-y-3 text-sm text-[#F7F1E8]/80 leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <span>
                  {BUSINESS_INFO.address}
                </span>
              </div>
              <div className="text-xs text-[#78947A]">
                Google Maps Code: <span className="font-mono text-white/90">{BUSINESS_INFO.mapsCode}</span>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C7A56A] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Closes at 1:30 AM</p>
                  <p className="text-xs text-[#F7F1E8]/60 mt-0.5">
                    Please call or WhatsApp ahead to confirm current daily opening hours before visiting.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Orders & Contact */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C7A56A]">
              Direct Contact
            </h4>
            <div className="space-y-3">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-3.5 py-2.5 bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/30 rounded-xl text-xs font-semibold transition-all group"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 px-3.5 py-2.5 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl text-xs font-medium transition-all"
              >
                <Phone className="w-4 h-4 text-[#C7A56A]" />
                <span>Call: {BUSINESS_INFO.phoneDisplay}</span>
              </a>

              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between px-3.5 py-2.5 bg-[#681F32] hover:bg-[#521625] text-white rounded-xl text-xs font-medium transition-all"
              >
                <span className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Get Google Maps Directions</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <p className="text-[11px] text-[#F7F1E8]/60 leading-normal pt-1">
                Online orders also available via Foodpanda.pk. Price guide: PKR 1,000–3,000 per person.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F7F1E8]/50 gap-4">
          <p>© {new Date().getFullYear()} MinSu Korean Restaurant. All rights reserved.</p>
          <p className="text-center sm:text-right">
            Stop No. 9, beside Bank Al Habib, Main Market Farid Town, Sahiwal, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};
