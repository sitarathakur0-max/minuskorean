import React, { useState } from 'react';
import { MessageCircle, HelpCircle, ArrowRight, Utensils, CheckCircle } from 'lucide-react';
import { MENU_ITEMS, MenuItem, BUSINESS_INFO, getWhatsAppLink, getItemWhatsAppLink } from '../data/restaurantData';

interface MenuPageProps {
  onNavigate: (page: string) => void;
}

export const MenuPage: React.FC<MenuPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'chicken', label: 'Korean Fried Chicken' },
    { id: 'ramen', label: 'Ramen Bowls' },
    { id: 'dumplings', label: 'Dumplings & Gyoza' },
    { id: 'meals-wraps', label: 'Meals & Wraps' },
    { id: 'drinks', label: 'Boba & Drinks' },
  ];

  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-20 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Supplied Highlights
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            MinSu Menu
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Korean fried chicken, comforting ramen, delicate dumplings, and specialty boba drinks in Farid Town, Sahiwal.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask About Today's Availability</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Menu Policy & Verification Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] border border-[#78947A]/40 rounded-2xl p-4 sm:p-6 text-xs sm:text-sm text-[#171717]/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-[#681F32] shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <span className="font-bold text-[#171717] block">Daily Menu Notice:</span>
              <p className="text-xs text-[#171717]/75">
                The items below represent supplied menu highlights. To ensure fresh quality, daily kitchen availability and specific pricing may vary. Average price guide: PKR 1,000–3,000 per person.
              </p>
            </div>
          </div>
          <a
            href={getWhatsAppLink("Assalam-o-Alaikum MinSu! Could you please share the current menu and prices for today?")}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap px-4 py-2 bg-white text-[#681F32] font-semibold text-xs rounded-lg border border-[#681F32]/20 hover:bg-slate-50 transition-colors shrink-0 shadow-xs"
          >
            WhatsApp for Current Prices
          </a>
        </div>
      </section>

      {/* 3. Category Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#681F32] text-[#F7F1E8] shadow-sm'
                  : 'bg-white text-[#171717]/70 hover:text-[#171717] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Menu Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                    {item.categoryLabel}
                  </span>
                </div>

                <div className="p-5 sm:p-6 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-bold font-serif-brand text-[#171717]">
                      {item.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-[#171717]/75 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-xs">
                    {item.isConfirmedHighlight ? (
                      <span className="text-[#78947A] font-medium flex items-center gap-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Supplied Highlight</span>
                      </span>
                    ) : (
                      <span className="text-amber-700 bg-amber-50 px-2 py-0.5 rounded text-[11px] font-medium border border-amber-200/60">
                        {item.availabilityNote}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 flex items-center justify-between gap-3 mt-4">
                <a
                  href={getItemWhatsAppLink(item.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-3.5 py-2.5 bg-[#681F32] hover:bg-[#521625] text-[#F7F1E8] text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Enquire Availability</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Foodpanda Ordering & Takeout Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] text-[#F7F1E8] rounded-3xl p-8 sm:p-12 border border-[#681F32]/40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
                Ordering Information
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-serif-brand">
                Delivery & Takeout Options
              </h3>
              <p className="text-sm text-[#F7F1E8]/80 leading-relaxed">
                MinSu offers dine-in, takeout, and delivery. MinSu is listed on Foodpanda.pk. You can also place orders or ask for today's menu availability directly via WhatsApp or phone.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-end">
              <a
                href={getWhatsAppLink("Assalam-o-Alaikum MinSu! I would like to place an order for delivery/takeout.")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] text-white font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#20ba5a] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
              <button
                onClick={() => onNavigate('contact')}
                className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl border border-white/20 transition-all"
              >
                Call / Visit Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
