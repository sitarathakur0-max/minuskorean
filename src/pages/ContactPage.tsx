import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, UtensilsCrossed, ExternalLink, Send, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryType, setInquiryType] = useState('menu');
  const [inquiryMessage, setInquiryMessage] = useState('');

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Assalam-o-Alaikum MinSu!`;
    if (inquiryName.trim()) {
      text += ` My name is ${inquiryName.trim()}.`;
    }
    if (inquiryType === 'order') {
      text += ` I would like to place an order for takeout/delivery.`;
    } else if (inquiryType === 'timing') {
      text += ` I would like to confirm your opening hours and table availability.`;
    } else {
      text += ` I would like to enquire about today's menu availability and pricing.`;
    }
    if (inquiryMessage.trim()) {
      text += ` Details: ${inquiryMessage.trim()}`;
    }

    const waUrl = getWhatsAppLink(text);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Farid Town, Sahiwal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            Visit & Contact MinSu
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Find our location in Main Market Farid Town, get Google Maps directions, or contact us directly on WhatsApp and phone.
          </p>
        </div>
      </section>

      {/* 2. Four Functional Quick Action Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Call MinSu */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#681F32] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#681F32]/10 flex items-center justify-center text-[#681F32] group-hover:bg-[#681F32] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Direct Line</span>
                <span className="font-bold text-sm text-[#171717]">Call MinSu</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#681F32] group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Chat on WhatsApp */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl shadow-xs hover:bg-[#25D366]/20 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-emerald-800 font-medium">Instant Chat</span>
                <span className="font-bold text-sm text-[#171717]">Chat on WhatsApp</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#25D366] group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Get Directions */}
          <a
            href={BUSINESS_INFO.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#78947A] hover:shadow-md transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#78947A]/15 flex items-center justify-center text-[#78947A] group-hover:bg-[#78947A] group-hover:text-white transition-colors">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Google Maps</span>
                <span className="font-bold text-sm text-[#171717]">Get Directions</span>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#78947A] group-hover:translate-x-0.5 transition-all" />
          </a>

          {/* Explore Menu */}
          <button
            onClick={() => onNavigate('menu')}
            className="flex items-center justify-between p-5 bg-white rounded-2xl border border-slate-200/80 shadow-xs hover:border-[#C7A56A] hover:shadow-md transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#C7A56A]/20 flex items-center justify-center text-[#171717] group-hover:bg-[#C7A56A] group-hover:text-white transition-colors">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-slate-500 font-medium">Menu Dishes</span>
                <span className="font-bold text-sm text-[#171717]">Explore Menu</span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#C7A56A] group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </section>

      {/* 3. Detailed Business Information & Interactive Inquiry */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Verified Location Info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
              <h2 className="text-2xl font-bold font-serif-brand text-[#171717]">
                Restaurant Information
              </h2>

              <div className="space-y-4 text-sm">
                {/* Name */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#681F32]/10 text-[#681F32] flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Business Name</span>
                    <span className="text-base font-bold text-[#171717]">{BUSINESS_INFO.name}</span>
                    <span className="text-xs text-[#78947A] block mt-0.5">{BUSINESS_INFO.tagline}</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#78947A]/15 text-[#78947A] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Address</span>
                    <p className="text-sm text-[#171717] leading-relaxed font-medium">
                      {BUSINESS_INFO.address}
                    </p>
                    <p className="text-xs text-slate-500 mt-1">
                      Located beside Bank Al Habib at Stop No. 9 in Main Market Farid Town.
                    </p>
                  </div>
                </div>

                {/* Google Maps Code */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-slate-100 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold">#</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Google Maps Location Code</span>
                    <span className="font-mono text-sm font-semibold text-[#681F32]">{BUSINESS_INFO.mapsCode}</span>
                  </div>
                </div>

                {/* Telephone / WhatsApp */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Phone & WhatsApp</span>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base font-bold text-[#681F32] hover:underline"
                    >
                      {BUSINESS_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* Hours Note */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Opening Information</span>
                    <p className="text-sm font-medium text-[#171717]">Listed closing time: 1:30 AM</p>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Visitors are advised to confirm current daily opening hours before visiting by calling or sending a WhatsApp message.
                    </p>
                  </div>
                </div>

                {/* Dining Formats */}
                <div className="flex items-start gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#C7A56A]/20 text-[#171717] flex items-center justify-center shrink-0 mt-0.5">
                    <UtensilsCrossed className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold block">Dining Options & Price</span>
                    <p className="text-sm font-medium text-[#171717]">Dine-in · Takeout · Delivery</p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Listed price range: {BUSINESS_INFO.priceRange}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Directions Card */}
            <div className="bg-[#171717] text-[#F7F1E8] rounded-3xl p-6 sm:p-8 border border-white/10 space-y-4">
              <h3 className="text-lg font-bold font-serif-brand">
                Navigation to MinSu
              </h3>
              <p className="text-xs text-[#F7F1E8]/75 leading-relaxed">
                Click below to open directions in Google Maps to Stop No. 9, Farid Town Main Market, Sahiwal using official location code <strong>M3GJ+8R</strong>.
              </p>
              <a
                href={BUSINESS_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
              >
                <MapPin className="w-4 h-4" />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-xs space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#681F32]">
                  Send Message
                </span>
                <h2 className="text-2xl font-bold font-serif-brand text-[#171717]">
                  Enquire Directly via WhatsApp
                </h2>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Fill in your query below and click send. It will immediately generate and open a pre-formatted message in WhatsApp to MinSu at +92 317 6064957.
                </p>
              </div>

              <form onSubmit={handleInquirySubmit} className="space-y-4">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name (Optional)
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Ali"
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#681F32] focus:bg-white transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    What would you like to enquire about?
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setInquiryType('menu')}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        inquiryType === 'menu'
                          ? 'bg-[#681F32] text-white border-[#681F32]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Menu & Prices
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('order')}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        inquiryType === 'order'
                          ? 'bg-[#681F32] text-white border-[#681F32]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Place an Order
                    </button>
                    <button
                      type="button"
                      onClick={() => setInquiryType('timing')}
                      className={`px-3 py-2 text-xs font-semibold rounded-lg border transition-all text-center ${
                        inquiryType === 'timing'
                          ? 'bg-[#681F32] text-white border-[#681F32]'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Hours & Seating
                    </button>
                  </div>
                </div>

                <div>
                  <label htmlFor="inquiry-message" className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    Specific Items or Notes (Optional)
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={4}
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="e.g. Asking about Korean Fried Chicken and Kimchi Ramen availability for this evening..."
                    className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#681F32] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </button>

                <p className="text-[11px] text-slate-500 text-center leading-normal">
                  Connects directly with MinSu restaurant staff at +92 317 6064957.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
