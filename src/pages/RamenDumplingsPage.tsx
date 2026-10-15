import React from 'react';
import { ArrowRight, MessageCircle, Utensils, CheckCircle } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, getItemWhatsAppLink } from '../data/restaurantData';
import ramenImg from '../assets/images/kimchi_chashu_ramen_1791734923924.jpg';
import dumplingsImg from '../assets/images/handmade_dumplings_1791734934801.jpg';

interface RamenDumplingsPageProps {
  onNavigate: (page: string) => void;
}

export const RamenDumplingsPage: React.FC<RamenDumplingsPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Warm Comfort
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            Ramen & Handmade Dumplings
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Comforting kimchi ramen bowls, chashu chicken ramen, steamed mandu dumplings, and crisp gyoza in Farid Town, Sahiwal.
          </p>
        </div>
      </section>

      {/* 2. Ramen Bowls Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
            <img
              src={ramenImg}
              alt="Steaming bowl of Kimchi and Chashu Chicken Ramen"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
                Slow-Simmered Broth
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                Korean Ramen Bowls
              </h2>
            </div>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              Nothing matches the warmth of a steaming bowl of ramen noodles on a cool evening. MinSu highlights two distinct ramen preparations designed to deliver comforting flavors to Sahiwal.
            </p>

            <div className="space-y-4 pt-2">
              {/* Kimchi Ramen */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg font-serif-brand text-[#171717]">
                    Kimchi Ramen
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#171717]/75">
                  Comforting noodle soup featuring tangy fermented kimchi and rich broth.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Kimchi Ramen")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Chashu Chicken Ramen */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg font-serif-brand text-[#171717]">
                    Chashu Chicken Ramen
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#171717]/75">
                  Ramen noodles served in warming broth with savory sliced chashu chicken and garnishes.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Chashu Chicken Ramen")}
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

      {/* 3. Handmade Dumplings & Gyoza Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
                Bamboo Steamer & Skillet
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                Handmade Dumplings & Gyoza
              </h2>
            </div>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              Crafted with delicate dough wrappers, our dumplings offer an authentic Asian culinary experience whether you prefer tender steamed parcels or crisp, pan-seared gyoza.
            </p>

            <div className="space-y-4 pt-2">
              {/* Handmade Dumplings */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg font-serif-brand text-[#171717]">
                    Handmade Dumplings
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#171717]/75">
                  Delicate handmade dumplings steamed to tender perfection.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Handmade Dumplings")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Gyoza */}
              <div className="p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg font-serif-brand text-[#171717]">
                    Gyoza
                  </h3>
                  <span className="text-xs text-[#78947A] font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Highlight
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#171717]/75">
                  Pan-seared gyoza with golden crisp bottoms and savory filling.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Gyoza")}
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

          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] order-1 lg:order-2 group">
            <img
              src={dumplingsImg}
              alt="Handmade Steamed Dumplings in Bamboo Steamer and Pan-Fried Gyoza"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-12 border border-[#78947A]/30 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#171717]">
            Craving Hot Ramen or Dumplings?
          </h3>
          <p className="text-sm text-[#171717]/80 max-w-xl mx-auto leading-relaxed">
            Reach out directly to MinSu via WhatsApp at +92 317 6064957 to ask about fresh batch availability and timings.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Assalam-o-Alaikum MinSu! I would like to enquire about Ramen and Dumpling availability.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#681F32] hover:bg-[#521625] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Ramen & Dumplings</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="px-6 py-3 bg-white border border-slate-300 text-[#171717] font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all"
            >
              Directions & Hours
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
