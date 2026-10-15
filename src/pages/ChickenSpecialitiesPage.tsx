import React from 'react';
import { ArrowRight, MessageCircle, Utensils, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, getItemWhatsAppLink } from '../data/restaurantData';
import chickenImg from '../assets/images/korean_fried_chicken_1791734911285.jpg';

interface ChickenSpecialitiesPageProps {
  onNavigate: (page: string) => void;
}

export const ChickenSpecialitiesPage: React.FC<ChickenSpecialitiesPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-20 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Signature Showcase
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            Korean Fried Chicken & Specialities
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Exploring double-fried Korean chicken, signature Dynamite chicken, bento meals, and wraps in Farid Town, Sahiwal.
          </p>
        </div>
      </section>

      {/* 2. Main Chicken Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
            <img
              src={chickenImg}
              alt="Crispy glazed Korean Fried Chicken"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#681F32]">
                Menu Highlights
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                Korean Fried Chicken & Dynamite Chicken
              </h2>
            </div>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              Korean fried chicken is celebrated globally for its distinctive shatteringly crisp exterior and succulent interior. Coated in glossy, savory glazes with sesame seeds, MinSu brings this beloved street-food specialty to diners in Sahiwal.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Korean Fried Chicken
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs text-[#171717]/70 mt-1">
                  Crispy Korean-style fried chicken prepared with savory seasoning and signature glaze.
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <a
                    href={getItemWhatsAppLink("Korean Fried Chicken")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Dynamite Chicken
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs text-[#171717]/70 mt-1">
                  Crispy fried chicken tossed in zesty dynamite sauce.
                </p>
                <div className="mt-3 pt-2 border-t border-slate-100">
                  <a
                    href={getItemWhatsAppLink("Dynamite Chicken")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Meals, Bento & Wraps Visual Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-12 border border-[#78947A]/30 space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
              Speciality Meals & Wraps
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#171717] mt-1">
              Bento, Wraps & Sides
            </h2>
            <p className="text-sm text-[#171717]/75 mt-1 max-w-2xl">
              Other supplied dishes from MinSu include bento meals, wraps, and side items. Note: items below have menu availability to be confirmed with the kitchen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Menu availability to be confirmed
                </span>
                <h3 className="text-lg font-bold font-serif-brand text-[#171717] mt-2">
                  Teriyaki Chicken Bento
                </h3>
                <p className="text-xs text-[#171717]/70 leading-relaxed mt-1">
                  Korean-Japanese inspired bento meal featuring glazed teriyaki chicken.
                </p>
              </div>
              <a
                href={getItemWhatsAppLink("Teriyaki Chicken Bento")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Check Today's Availability</span>
              </a>
            </div>

            {/* Seoul Sizzler Wrap Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Menu availability to be confirmed
                </span>
                <h3 className="text-lg font-bold font-serif-brand text-[#171717] mt-2">
                  Seoul Sizzler Wrap
                </h3>
                <p className="text-xs text-[#171717]/70 leading-relaxed mt-1">
                  Seoul-inspired toasted wrap filled with seasoned chicken and fresh fillings.
                </p>
              </div>
              <a
                href={getItemWhatsAppLink("Seoul Sizzler Wrap")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Check Today's Availability</span>
              </a>
            </div>

            {/* Chips Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Menu availability to be confirmed
                </span>
                <h3 className="text-lg font-bold font-serif-brand text-[#171717] mt-2">
                  Chips
                </h3>
                <p className="text-xs text-[#171717]/70 leading-relaxed mt-1">
                  Crispy fried side chips to accompany your meal.
                </p>
              </div>
              <a
                href={getItemWhatsAppLink("Chips")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2 px-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Check Today's Availability</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Action Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#681F32] text-[#F7F1E8] rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand">
            Want to Order Fried Chicken Today?
          </h3>
          <p className="text-sm text-[#F7F1E8]/85 max-w-xl mx-auto">
            Contact MinSu at Stop No. 9, Farid Town Main Market, Sahiwal. WhatsApp or call +92 317 6064957 for current kitchen preparations.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Assalam-o-Alaikum MinSu! I would like to enquire about ordering Korean Fried Chicken.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#20ba5a] transition-all flex items-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Us Now</span>
            </a>
            <button
              onClick={() => onNavigate('menu')}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/20"
            >
              Back to Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
