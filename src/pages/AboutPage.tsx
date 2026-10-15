import React from 'react';
import { ArrowRight, MapPin, Phone, MessageCircle, Utensils, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';
import heroImg from '../assets/images/hero_korean_spread_1791734900310.jpg';
import dumplingsImg from '../assets/images/handmade_dumplings_1791734934801.jpg';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Culinary Concept
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            About MinSu
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            MinSu presents itself as Sahiwal's first Korean restaurant, introducing Farid Town to rich Korean-inspired dining culture.
          </p>
        </div>
      </section>

      {/* 2. Editorial Concept Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/5]">
              <img
                src={dumplingsImg}
                alt="Handmade dumplings and Asian dining spread"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block bg-[#681F32] text-[#F7F1E8] p-5 rounded-2xl shadow-lg border border-[#C7A56A]/40 max-w-xs">
              <p className="text-xs font-serif-brand italic">
                “Bringing Korean-inspired ramen, dumplings, fried chicken, and specialty boba to Sahiwal.”
              </p>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
                The Concept
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                A First for Sahiwal Dining
              </h2>
            </div>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              MinSu was created to offer the community in Sahiwal an exciting alternative to standard dining fare. As the city's first dedicated Korean dining establishment, MinSu introduces locals to iconic Korean culinary highlights in an accessible, warm, and contemporary setting.
            </p>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              Our kitchen focuses on core Korean comfort items that have captured food lovers worldwide: double-fried crispy chicken glazed with sweet and savory sauces, hot bowls of comforting ramen with kimchi and seasoned broth, tender steamed dumplings and golden pan-fried gyoza, and chilled artisanal boba drinks.
            </p>

            {/* Core Offerings List */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#78947A] shrink-0" />
                <span>Korean Fried Chicken & Glazes</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#78947A] shrink-0" />
                <span>Kimchi & Chashu Chicken Ramen</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#78947A] shrink-0" />
                <span>Handmade Dumplings & Gyoza</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#171717]">
                <CheckCircle2 className="w-4 h-4 text-[#78947A] shrink-0" />
                <span>Matcha & Taro Boba Beverages</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('menu')}
                className="px-6 py-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center gap-2"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-6 py-3 bg-white border border-slate-300 text-[#171717] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all"
              >
                Find Us in Farid Town
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Dining Atmosphere & Formats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-12 border border-[#78947A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#681F32]">
                How We Serve You
              </span>
              <h3 className="text-3xl font-bold font-serif-brand text-[#171717]">
                Dine-In, Takeout, & Delivery
              </h3>
              <p className="text-sm sm:text-base text-[#171717]/80 leading-relaxed">
                Whether you prefer to sit down with friends for an evening ramen bowl, grab freshly fried chicken on the way home, or order for home delivery, MinSu accommodates your schedule.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200/60">
                  <span className="font-semibold text-sm text-[#681F32] block">Dine-In</span>
                  <span className="text-xs text-slate-600 mt-1 block">
                    Warm dining space at Stop No. 9, Farid Town Main Market.
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200/60">
                  <span className="font-semibold text-sm text-[#78947A] block">Takeout</span>
                  <span className="text-xs text-slate-600 mt-1 block">
                    Call or WhatsApp in advance for quick pickup.
                  </span>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-xs border border-slate-200/60">
                  <span className="font-semibold text-sm text-[#C7A56A] block">Delivery</span>
                  <span className="text-xs text-slate-600 mt-1 block">
                    Delivery support and listing on Foodpanda.pk.
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-lg aspect-[4/3]">
              <img
                src={heroImg}
                alt="MinSu Korean dining experience"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Verified Details Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
              Visit MinSu
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#171717]">
              Stop No. 9, Farid Town, Sahiwal
            </h3>
            <p className="text-sm text-[#171717]/75 leading-relaxed">
              Located right beside Bank Al Habib in the Main Market of Farid Town, Sahiwal (Postal Code: 57000). Direct phone and WhatsApp inquiries are welcomed at <strong className="text-[#681F32]">+92 317 6064957</strong>.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-6 py-3 bg-white border border-slate-300 text-[#171717] text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#681F32]" />
                <span>Call {BUSINESS_INFO.phoneDisplay}</span>
              </a>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#681F32] text-white text-xs font-semibold uppercase tracking-wider rounded-xl hover:bg-[#521625] transition-all flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
