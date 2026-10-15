import React from 'react';
import { ArrowRight, MessageCircle, MapPin, Phone, Clock, Utensils, Sparkles, Coffee } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';
import heroImg from '../assets/images/hero_korean_spread_1791734900310.jpg';
import chickenImg from '../assets/images/korean_fried_chicken_1791734911285.jpg';
import ramenImg from '../assets/images/kimchi_chashu_ramen_1791734923924.jpg';
import dumplingsImg from '../assets/images/handmade_dumplings_1791734934801.jpg';
import drinksImg from '../assets/images/iced_boba_matcha_taro_1791734944856.jpg';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 sm:space-y-28 pb-16">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-[#F7F1E8] pt-8 sm:pt-14 pb-12 sm:pb-20 border-b border-[#681F32]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Hero Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#681F32] bg-[#681F32]/10 px-3 py-1.5 rounded-md">
                <Sparkles className="w-3.5 h-3.5 text-[#C7A56A]" />
                <span>Sahiwal's First Korean Restaurant</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand text-[#171717] leading-[1.15] text-balance">
                Discover the Taste of Korea in Sahiwal.
              </h1>

              <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed max-w-xl">
                From Korean fried chicken and comforting ramen to handmade dumplings and refreshing boba drinks, explore Korean-inspired flavours at MinSu in Farid Town.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('menu')}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#681F32] hover:bg-[#521625] text-[#F7F1E8] font-semibold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md group"
                >
                  <span>Explore Our Menu</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-white hover:bg-slate-50 border border-slate-300 text-[#171717] font-semibold text-sm rounded-xl transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Order / Contact Us</span>
                </a>
              </div>

              {/* Verified Trust Strip */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-300/80 text-xs text-[#171717]/70">
                <div>
                  <span className="block font-semibold text-[#171717]">Dine-In</span>
                  <span className="text-[11px] text-slate-600">Farid Town Market</span>
                </div>
                <div>
                  <span className="block font-semibold text-[#171717]">Takeout</span>
                  <span className="text-[11px] text-slate-600">Quick pickup</span>
                </div>
                <div>
                  <span className="block font-semibold text-[#171717]">Delivery</span>
                  <span className="text-[11px] text-slate-600">WhatsApp / Foodpanda</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Food Spread */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[16/10] sm:aspect-[16/10] lg:aspect-[4/3] group">
                <img
                  src={heroImg}
                  alt="MinSu Korean dining spread with fried chicken, ramen, dumplings, and matcha boba"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <p className="text-xs uppercase tracking-widest text-[#C7A56A] font-semibold">
                      Signature Feast
                    </p>
                    <p className="text-lg font-serif-brand font-medium">
                      Authentic Korean-inspired comfort food served fresh in Sahiwal
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Concise Introduction to MinSu */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#681F32]/10 shadow-sm">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
              Pioneering Korean Cuisine
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
              Welcome to MinSu
            </h2>
            <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
              MinSu proudly presents itself as Sahiwal's first Korean restaurant. Located in the bustling heart of Main Market Farid Town, we bring the vibrant culinary traditions of Korea to our city—from crunchy fried chicken and steaming ramen bowls to delicate steamed dumplings and iced boba teas.
            </p>
            <div className="pt-4 flex items-center justify-center gap-6 text-sm text-[#681F32] font-medium">
              <button
                onClick={() => onNavigate('about')}
                className="hover:underline flex items-center gap-1.5"
              >
                <span>Read our full story</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Signature Food Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#681F32]">
              Menu Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717] mt-1">
              Crafted With Care & Character
            </h2>
          </div>
          <button
            onClick={() => onNavigate('menu')}
            className="text-sm font-semibold text-[#681F32] hover:text-[#521625] flex items-center gap-1.5 self-start md:self-auto"
          >
            <span>View all menu highlights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Korean Fried Chicken */}
          <div
            onClick={() => onNavigate('chicken-specialities')}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={chickenImg}
                alt="Korean Fried Chicken"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#681F32] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Chicken
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-serif-brand group-hover:text-[#681F32] transition-colors">
                  Korean Fried Chicken
                </h3>
                <p className="text-xs text-[#171717]/70 mt-1 line-clamp-2">
                  Crispy Korean-style fried chicken and Dynamite chicken tossed with signature glazes.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#681F32] flex items-center gap-1 pt-2 border-t border-slate-100">
                Explore chicken & wraps <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Kimchi Ramen */}
          <div
            onClick={() => onNavigate('ramen-dumplings')}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={ramenImg}
                alt="Kimchi Ramen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#78947A] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Ramen
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-serif-brand group-hover:text-[#681F32] transition-colors">
                  Kimchi & Chashu Ramen
                </h3>
                <p className="text-xs text-[#171717]/70 mt-1 line-clamp-2">
                  Warm bowls of springy noodles in savory broth with fermented kimchi and tender chashu chicken.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#681F32] flex items-center gap-1 pt-2 border-t border-slate-100">
                Explore ramen bowls <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Dumplings & Gyoza */}
          <div
            onClick={() => onNavigate('ramen-dumplings')}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={dumplingsImg}
                alt="Handmade Dumplings and Gyoza"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#C7A56A] text-[#171717] text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Dumplings
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-serif-brand group-hover:text-[#681F32] transition-colors">
                  Handmade Dumplings & Gyoza
                </h3>
                <p className="text-xs text-[#171717]/70 mt-1 line-clamp-2">
                  Tender steamed mandu and pan-seared gyoza served with rich soy dipping sauces.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#681F32] flex items-center gap-1 pt-2 border-t border-slate-100">
                Explore dumplings <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 4: Boba & Specialty Drinks */}
          <div
            onClick={() => onNavigate('boba-drinks')}
            className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all cursor-pointer group flex flex-col"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={drinksImg}
                alt="Iced Boba Matcha and Taro Milk"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-[#681F32] text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Drinks
              </span>
            </div>
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="text-lg font-bold font-serif-brand group-hover:text-[#681F32] transition-colors">
                  Iced Boba & Matcha Drinks
                </h3>
                <p className="text-xs text-[#171717]/70 mt-1 line-clamp-2">
                  Layered iced matcha milk, classic boba milk, and creamy taro beverages with tapioca pearls.
                </p>
              </div>
              <span className="text-xs font-semibold text-[#681F32] flex items-center gap-1 pt-2 border-t border-slate-100">
                Explore drink menu <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Visual Split: Ramen & Korean Fried Chicken */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ramen Feature */}
          <div className="bg-[#171717] text-[#F7F1E8] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
                Warm Comfort
              </span>
              <h3 className="text-3xl font-bold font-serif-brand">
                Soul-Warming Kimchi Ramen
              </h3>
              <p className="text-sm text-[#F7F1E8]/80 leading-relaxed">
                Experience deep, layered broth prepared with Korean kimchi, delicate ramen noodles, and seasoned chashu chicken. A hearty bowl suited for lunch or late-night cravings.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
              <img
                src={ramenImg}
                alt="Bowl of kimchi chashu ramen"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => onNavigate('ramen-dumplings')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C7A56A] hover:text-white transition-colors"
            >
              <span>View Ramen Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Fried Chicken Feature */}
          <div className="bg-[#681F32] text-[#F7F1E8] rounded-3xl p-8 sm:p-10 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F7F1E8]/80">
                Crunch & Glaze
              </span>
              <h3 className="text-3xl font-bold font-serif-brand">
                Signature Korean Fried Chicken
              </h3>
              <p className="text-sm text-[#F7F1E8]/85 leading-relaxed">
                Tender on the inside, exceptionally crisp on the outside. Featuring our classic Korean fried chicken and fiery Dynamite chicken glaze sprinkled with toasted sesame.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10 aspect-[16/9]">
              <img
                src={chickenImg}
                alt="Glazed Korean fried chicken with sesame"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <button
              onClick={() => onNavigate('chicken-specialities')}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#F7F1E8] hover:text-[#C7A56A] transition-colors"
            >
              <span>View Chicken Specialities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 5. Boba & Drinks Feature Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-12 border border-[#78947A]/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden shadow-md aspect-[4/3]">
              <img
                src={drinksImg}
                alt="Iced matcha boba milk and taro drinks"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#78947A]">
                Chilled Refreshment
              </span>
              <h3 className="text-3xl sm:text-4xl font-bold font-serif-brand text-[#171717]">
                Artisanal Boba & Matcha Milk
              </h3>
              <p className="text-base text-[#171717]/80 leading-relaxed">
                Pair your meal with our specialty chilled drinks. Enjoy rich Iced Boba Matcha Milk, classic sweet Iced Boba Milk, and comforting Taro and Matcha drink creations.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => onNavigate('boba-drinks')}
                  className="px-5 py-2.5 bg-[#78947A] hover:bg-[#5A755C] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-sm"
                >
                  Explore Drinks
                </button>
                <a
                  href={getWhatsAppLink("Assalam-o-Alaikum MinSu! What drinks are currently available today?")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white border border-slate-300 text-[#171717] text-xs font-semibold rounded-xl hover:bg-slate-50 transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Enquire Today's Drinks</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Location & Dining Details */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#681F32]/10 flex items-center justify-center text-[#681F32]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-brand">Farid Town Location</h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <div className="text-xs font-mono text-[#78947A]">
                Plus Code: {BUSINESS_INFO.mapsCode}
              </div>
            </div>

            {/* Hours */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#78947A]/15 flex items-center justify-center text-[#78947A]">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-brand">Operating Hours</h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                {BUSINESS_INFO.closingStatus}
              </p>
              <p className="text-[11px] text-slate-500">
                Please contact via phone or WhatsApp prior to arrival.
              </p>
            </div>

            {/* Service & Delivery */}
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#C7A56A]/20 flex items-center justify-center text-[#171717]">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-serif-brand">Dining & Orders</h3>
              <p className="text-xs text-[#171717]/75 leading-relaxed">
                Enjoy dine-in seating or place takeout and delivery orders. Listed on Foodpanda.pk.
              </p>
              <div className="text-xs font-semibold text-[#681F32]">
                Price Guide: {BUSINESS_INFO.priceRange}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Polished Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#171717] text-[#F7F1E8] rounded-3xl p-10 sm:p-14 text-center space-y-6 relative overflow-hidden border border-[#681F32]/40">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
              Visit Us Today
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif-brand">
              Ready to Explore Korean Flavours in Sahiwal?
            </h2>
            <p className="text-sm sm:text-base text-[#F7F1E8]/75 leading-relaxed">
              Check our menu, ask about today's fresh availability, or find directions to our restaurant beside Bank Al Habib in Farid Town.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#681F32] hover:bg-[#521625] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              Explore Menu
            </button>
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp: +92 317 6064957</span>
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/20"
            >
              Find Location
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
