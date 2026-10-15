import React from 'react';
import { MessageCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink, getItemWhatsAppLink } from '../data/restaurantData';
import drinksImg from '../assets/images/iced_boba_matcha_taro_1791734944856.jpg';

interface BobaDrinksPageProps {
  onNavigate: (page: string) => void;
}

export const BobaDrinksPage: React.FC<BobaDrinksPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
            Chilled Refreshment
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            Boba & Matcha Drinks
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Iced Boba Matcha Milk, classic Iced Boba Milk, Taro Drinks, and specialty Matcha beverages in Farid Town, Sahiwal.
          </p>
        </div>
      </section>

      {/* 2. Main Drinks Visual Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-6 rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] group">
            <img
              src={drinksImg}
              alt="Layered iced matcha boba latte and taro milk drink with tapioca pearls"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
            />
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#681F32]">
                Speciality Beverage Bar
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                Refreshing Korean & Asian Teas
              </h2>
            </div>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              No Asian dining experience is complete without chilled specialty refreshments. At MinSu, our drinks pair naturally with hot ramen bowls and crisp Korean fried chicken.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Drink 1 */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Iced Boba Matcha Milk
                  </h3>
                </div>
                <p className="text-xs text-[#171717]/70">
                  Layered chilled matcha green tea milk served over chewy tapioca boba pearls.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Iced Boba Matcha Milk")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </div>

              {/* Drink 2 */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Iced Boba Milk
                  </h3>
                </div>
                <p className="text-xs text-[#171717]/70">
                  Classic chilled milk drink served over brown sugar boba pearls.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Iced Boba Milk")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </div>

              {/* Drink 3 */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Taro Drinks
                  </h3>
                </div>
                <p className="text-xs text-[#171717]/70">
                  Creamy, sweet purple taro specialty beverage served chilled.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Taro Drinks")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </div>

              {/* Drink 4 */}
              <div className="p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base font-serif-brand text-[#171717]">
                    Matcha Drinks
                  </h3>
                </div>
                <p className="text-xs text-[#171717]/70">
                  Refreshing Japanese-style stone-ground matcha beverages.
                </p>
                <div className="pt-2">
                  <a
                    href={getItemWhatsAppLink("Matcha Drinks")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#681F32] hover:text-[#521625]"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                    <span>Enquire Availability</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-12 border border-[#78947A]/30 text-center space-y-4">
          <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand text-[#171717]">
            Looking for Today's Boba Flavours?
          </h3>
          <p className="text-sm text-[#171717]/80 max-w-xl mx-auto leading-relaxed">
            Message MinSu on WhatsApp at +92 317 6064957 to check today's freshly brewed boba tea batches and milk options.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={getWhatsAppLink("Assalam-o-Alaikum MinSu! What boba and matcha drinks are available today?")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#78947A] hover:bg-[#5A755C] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Today's Drinks</span>
            </a>
            <button
              onClick={() => onNavigate('menu')}
              className="px-6 py-3 bg-white border border-slate-300 text-[#171717] font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-slate-50 transition-all"
            >
              Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
