import React, { useState } from 'react';
import { Menu, X, ChevronDown, Phone, MapPin } from 'lucide-react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/restaurantData';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [specialitiesDropdownOpen, setSpecialitiesDropdownOpen] = useState(false);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    setSpecialitiesDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isSpecialitiesActive = ['chicken-specialities', 'ramen-dumplings', 'boba-drinks'].includes(currentPage);

  return (
    <header className="sticky top-0 z-40 bg-[#F7F1E8]/95 backdrop-blur-md border-b border-[#681F32]/10 transition-colors">
      {/* Announcement notice bar strictly for hours and location */}
      <div className="bg-[#171717] text-[#F7F1E8] text-xs py-1.5 px-4 text-center font-medium tracking-wide flex items-center justify-center gap-3">
        <span className="flex items-center gap-1.5 opacity-90">
          <MapPin className="w-3.5 h-3.5 text-[#C7A56A]" />
          <span>Stop No. 9, Main Market Farid Town, Sahiwal</span>
        </span>
        <span className="hidden md:inline text-white/40">·</span>
        <span className="hidden md:inline text-[#C7A56A]">
          Closing 1:30 AM · Dine-in, Takeout & Delivery
        </span>
      </div>

      {/* Main 3-Zone Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-2xl sm:text-3xl font-bold tracking-tight text-[#681F32] font-serif-brand whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity flex items-baseline gap-2"
        >
          <span>MinSu</span>
          <span className="text-xs uppercase tracking-widest text-[#78947A] font-sans font-medium">민수</span>
        </button>

        {/* Zone 2: Navigation Links (Clean single-line typography) */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#171717]/85">
          <button
            onClick={() => handleNavClick('home')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'home'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            Home
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'about'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            About
          </button>

          <button
            onClick={() => handleNavClick('menu')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'menu'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            Menu
          </button>

          {/* Specialities Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setSpecialitiesDropdownOpen(true)}
            onMouseLeave={() => setSpecialitiesDropdownOpen(false)}
          >
            <button
              onClick={() => handleNavClick('chicken-specialities')}
              className={`flex items-center gap-1 whitespace-nowrap transition-colors py-1 border-b-2 ${
                isSpecialitiesActive
                  ? 'border-[#681F32] text-[#681F32] font-semibold'
                  : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
              }`}
            >
              <span>Dishes & Drinks</span>
              <ChevronDown className="w-3.5 h-3.5 opacity-70" />
            </button>

            {specialitiesDropdownOpen && (
              <div className="absolute left-0 top-full pt-2 w-56 animate-in fade-in duration-150">
                <div className="bg-white rounded-xl shadow-xl border border-slate-200/80 p-2 space-y-1 text-xs">
                  <button
                    onClick={() => handleNavClick('chicken-specialities')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7F1E8] hover:text-[#681F32] transition-colors"
                  >
                    Korean Fried Chicken & Bento
                  </button>
                  <button
                    onClick={() => handleNavClick('ramen-dumplings')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7F1E8] hover:text-[#681F32] transition-colors"
                  >
                    Ramen & Dumplings
                  </button>
                  <button
                    onClick={() => handleNavClick('boba-drinks')}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F7F1E8] hover:text-[#681F32] transition-colors"
                  >
                    Boba & Matcha Drinks
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'gallery'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            Food Gallery
          </button>

          <button
            onClick={() => handleNavClick('faqs')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'faqs'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            FAQs
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className={`whitespace-nowrap transition-colors py-1 border-b-2 ${
              currentPage === 'contact'
                ? 'border-[#681F32] text-[#681F32] font-semibold'
                : 'border-transparent hover:text-[#681F32] hover:border-[#681F32]/40'
            }`}
          >
            Visit & Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#F7F1E8] bg-[#681F32] hover:bg-[#521625] rounded-lg transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Order / Contact</span>
          </a>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#171717] hover:text-[#681F32] hover:bg-[#681F32]/10 rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F7F1E8] border-b border-[#681F32]/20 px-4 pt-2 pb-6 space-y-1 shadow-lg animate-in fade-in duration-200">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'home' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('about')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'about' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            About MinSu
          </button>
          <button
            onClick={() => handleNavClick('menu')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'menu' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            Full Menu
          </button>

          <div className="pl-4 py-1 border-l-2 border-[#78947A] my-2 space-y-1">
            <span className="text-[11px] uppercase tracking-wider text-[#78947A] font-semibold block px-2">
              Featured Highlights
            </span>
            <button
              onClick={() => handleNavClick('chicken-specialities')}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs ${
                currentPage === 'chicken-specialities' ? 'font-bold text-[#681F32]' : 'text-[#171717]/80'
              }`}
            >
              Korean Fried Chicken & Bento
            </button>
            <button
              onClick={() => handleNavClick('ramen-dumplings')}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs ${
                currentPage === 'ramen-dumplings' ? 'font-bold text-[#681F32]' : 'text-[#171717]/80'
              }`}
            >
              Ramen & Handmade Dumplings
            </button>
            <button
              onClick={() => handleNavClick('boba-drinks')}
              className={`w-full text-left px-2 py-1.5 rounded-md text-xs ${
                currentPage === 'boba-drinks' ? 'font-bold text-[#681F32]' : 'text-[#171717]/80'
              }`}
            >
              Boba & Matcha Drinks
            </button>
          </div>

          <button
            onClick={() => handleNavClick('gallery')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'gallery' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            Food Gallery
          </button>
          <button
            onClick={() => handleNavClick('faqs')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'faqs' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            Frequently Asked Questions
          </button>
          <button
            onClick={() => handleNavClick('contact')}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium ${
              currentPage === 'contact' ? 'bg-[#681F32] text-[#F7F1E8]' : 'text-[#171717] hover:bg-[#EFE8DD]'
            }`}
          >
            Visit & Contact
          </button>

          <div className="pt-3 border-t border-slate-300 flex flex-col gap-2">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 bg-[#681F32] text-[#F7F1E8] font-semibold text-xs uppercase tracking-wider rounded-lg shadow-sm"
            >
              Order on WhatsApp
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-white border border-slate-300 text-[#171717] font-medium text-xs rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-[#681F32]" />
              <span>Call {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
