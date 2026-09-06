import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Menu, X, Calendar, ChevronRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface NavbarProps {
  currentPage: 'home' | 'services' | 'about' | 'visit';
  onNavigate: (page: 'home' | 'services' | 'about' | 'visit') => void;
  onOpenEnquiry: (preselectedService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenEnquiry
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'services', label: 'SERVICES' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'visit', label: 'VISIT US' },
  ] as const;

  const handleNavClick = (pageId: 'home' | 'services' | 'about' | 'visit') => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Brand Notification Banner */}
      <div id="top-announcement-bar" className="bg-[#17181C] text-[#D8CFBC] text-xs tracking-wider uppercase py-2 px-4 border-b border-[#2C2B29]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3 truncate">
            <span className="inline-flex items-center gap-1.5 text-[#C5A880]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880] animate-pulse"></span>
              4.8★ Google Rating (3,458+ Reviews)
            </span>
            <span className="hidden sm:inline text-[#76736C]">•</span>
            <span className="hidden sm:inline text-[#BBB3A4]">Vidyapeeth Road, Varanasi</span>
          </div>

          <div className="flex items-center space-x-4 text-[11px]">
            <span className="hidden md:inline text-[#A79F91]">Open Daily: 9:00 AM – 9:00 PM</span>
            <a
              id="top-call-link"
              href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="flex items-center gap-1.5 text-[#EFEBE4] hover:text-[#C5A880] transition-colors font-medium tracking-normal"
            >
              <Phone className="w-3 h-3 text-[#C5A880]" />
              <span>+91 63891 22360</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        id="main-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF8F5]/95 backdrop-blur-md shadow-xs border-b border-[#E6E0D6]'
            : 'bg-[#FAF8F5] border-b border-[#ECE7DF]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('home')}
              className="text-left group cursor-pointer"
            >
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl sm:text-3xl tracking-[0.18em] font-medium text-[#17181C] group-hover:text-[#A88B63] transition-colors">
                  360 SALON
                </span>
              </div>
              <p className="text-[10px] tracking-[0.25em] uppercase text-[#736E66] font-medium">
                Family Salon • Varanasi
              </p>
            </button>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center space-x-10">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`nav-link-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-2 text-xs tracking-[0.2em] font-semibold transition-colors duration-200 cursor-pointer ${
                    currentPage === item.id
                      ? 'text-[#17181C]'
                      : 'text-[#656056] hover:text-[#17181C]'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A880]" />
                  )}
                </button>
              ))}
            </nav>

            {/* Header Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              <a
                id="header-call-btn"
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="text-xs font-semibold tracking-wider text-[#3D3A34] hover:text-[#17181C] px-3 py-2 transition-colors flex items-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-[#A88B63]" />
                CALL NOW
              </a>

              <button
                id="header-enquire-cta"
                onClick={() => onOpenEnquiry()}
                className="bg-[#17181C] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs tracking-[0.18em] uppercase font-medium px-6 py-3 border border-[#17181C] transition-all duration-200 hover:border-[#A88B63] cursor-pointer shadow-xs"
              >
                ENQUIRE
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-3 lg:hidden">
              <button
                id="mobile-enquire-quick-btn"
                onClick={() => onOpenEnquiry()}
                className="bg-[#17181C] text-[#FAF8F5] text-[11px] font-semibold tracking-wider uppercase px-3 py-2"
              >
                ENQUIRE
              </button>
              <button
                id="mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#17181C] hover:text-[#A88B63] transition-colors cursor-pointer"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-drawer"
            className="lg:hidden bg-[#FAF8F5] border-b border-[#E6E0D6] px-6 pt-4 pb-8 space-y-4 shadow-lg animate-fadeIn"
          >
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  id={`mobile-nav-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between py-3 text-sm tracking-[0.15em] font-medium border-b border-[#EFECE6] text-left cursor-pointer ${
                    currentPage === item.id ? 'text-[#C5A880] font-semibold' : 'text-[#17181C]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#A79F91]" />
                </button>
              ))}
            </div>

            <div className="pt-4 space-y-3">
              <div className="text-xs text-[#736E66] space-y-1">
                <p className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A880]" />
                  GANPATI COMPLEX, Vidyapeeth Road, Varanasi
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
                  Open Every Day: 9:00 AM – 9:00 PM
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  id="mobile-drawer-call-btn"
                  href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="w-full flex items-center justify-center gap-2 py-3 border border-[#17181C] text-[#17181C] text-xs font-semibold tracking-wider uppercase text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  CALL
                </a>
                <button
                  id="mobile-drawer-enquire-btn"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenEnquiry();
                  }}
                  className="w-full py-3 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase text-center cursor-pointer"
                >
                  ENQUIRE
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
