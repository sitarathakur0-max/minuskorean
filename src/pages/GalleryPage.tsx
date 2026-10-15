import React, { useState } from 'react';
import { Maximize2, MessageCircle } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem, getWhatsAppLink } from '../data/restaurantData';
import { Lightbox } from '../components/Lightbox';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedLightboxItem, setSelectedLightboxItem] = useState<GalleryItem | null>(null);

  const filters = ['All', 'Dining Experience', 'Chicken', 'Ramen', 'Dumplings', 'Drinks'];

  const filteredGallery = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <div className="space-y-12 sm:space-y-16 pb-16">
      {/* 1. Header Banner */}
      <section className="bg-[#171717] text-[#F7F1E8] py-16 sm:py-24 border-b border-[#681F32]/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C7A56A]">
            Culinary Visuals
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif-brand">
            MinSu Food Gallery
          </h1>
          <p className="text-base sm:text-lg text-[#F7F1E8]/80 max-w-2xl mx-auto leading-relaxed">
            Visual highlights of Korean fried chicken, comforting ramen bowls, handmade dumplings, and specialty iced boba drinks.
          </p>
        </div>
      </section>

      {/* 2. Disclaimers & Notes */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-[#171717]/60 text-center max-w-xl mx-auto">
          Photographs illustrate our signature culinary styles, menu highlights, and dishes prepared at MinSu in Farid Town, Sahiwal.
        </p>
      </section>

      {/* 3. Filter Controls */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                activeFilter === filter
                  ? 'bg-[#681F32] text-[#F7F1E8] shadow-sm'
                  : 'bg-white text-[#171717]/70 hover:text-[#171717] border border-slate-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedLightboxItem(item)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white">
                  <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-xs flex items-center justify-center">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider">
                    View Dish
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-[#171717]/85 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg font-serif-brand text-[#171717] group-hover:text-[#681F32] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#171717]/70 leading-relaxed mt-1">
                    {item.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-[#681F32]">
                  <span className="font-semibold">Click to enlarge</span>
                  <span>MinSu Sahiwal</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Inquire Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#EFE8DD] rounded-3xl p-8 sm:p-10 border border-[#78947A]/30 text-center space-y-4">
          <h3 className="text-2xl font-bold font-serif-brand text-[#171717]">
            Interested in any of these dishes?
          </h3>
          <p className="text-sm text-[#171717]/80 max-w-lg mx-auto">
            Contact us directly on WhatsApp to confirm today's freshly available preparations.
          </p>
          <div className="pt-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#681F32] hover:bg-[#521625] text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Inquiry (+92 317 6064957)</span>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        item={selectedLightboxItem}
        onClose={() => setSelectedLightboxItem(null)}
      />
    </div>
  );
};
