import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { MenuPage } from './pages/MenuPage';
import { ChickenSpecialitiesPage } from './pages/ChickenSpecialitiesPage';
import { RamenDumplingsPage } from './pages/RamenDumplingsPage';
import { BobaDrinksPage } from './pages/BobaDrinksPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { FaqPage } from './pages/FaqPage';

export default function App() {
  const getPageFromHash = (): string => {
    const hash = window.location.hash.replace(/^#\/?/, '');
    const validPages = [
      'home',
      'about',
      'menu',
      'chicken-specialities',
      'ramen-dumplings',
      'boba-drinks',
      'gallery',
      'contact',
      'faqs',
    ];
    return validPages.includes(hash) ? hash : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Dynamic document title update per page
  useEffect(() => {
    const titles: Record<string, string> = {
      home: "MinSu – Sahiwal's First Korean Restaurant | Farid Town",
      about: "About MinSu – Korean Dining Experience in Sahiwal",
      menu: "Menu – Korean Fried Chicken, Ramen & Boba | MinSu Sahiwal",
      'chicken-specialities': "Korean Fried Chicken & Bento Specialities | MinSu Sahiwal",
      'ramen-dumplings': "Kimchi Ramen & Handmade Dumplings | MinSu Sahiwal",
      'boba-drinks': "Iced Boba Milk & Matcha Drinks | MinSu Sahiwal",
      gallery: "Food Gallery – MinSu Korean Restaurant Sahiwal",
      contact: "Visit & Contact MinSu – Farid Town, Sahiwal, Pakistan",
      faqs: "Frequently Asked Questions – MinSu Korean Restaurant",
    };
    document.title = titles[currentPage] || "MinSu – Korean Restaurant | Sahiwal";
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'menu':
        return <MenuPage onNavigate={navigateTo} />;
      case 'chicken-specialities':
        return <ChickenSpecialitiesPage onNavigate={navigateTo} />;
      case 'ramen-dumplings':
        return <RamenDumplingsPage onNavigate={navigateTo} />;
      case 'boba-drinks':
        return <BobaDrinksPage onNavigate={navigateTo} />;
      case 'gallery':
        return <GalleryPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage onNavigate={navigateTo} />;
      case 'faqs':
        return <FaqPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F1E8] text-[#171717] selection:bg-[#681F32] selection:text-[#F7F1E8]">
      {/* Top 3-Zone Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {renderPage()}
      </main>

      {/* Persistent Floating Contact Button on the LEFT SIDE */}
      <FloatingWhatsApp />

      {/* Refined Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
