import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, ChevronRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface FooterProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'visit') => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer id="main-footer" className="bg-[#121316] text-[#FAF8F5] border-t border-[#26272D] pt-16 pb-24 lg:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#24252B]">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div>
              <span className="font-serif text-3xl sm:text-4xl tracking-[0.18em] font-medium text-[#FAF8F5] block">
                360 SALON
              </span>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold mt-1">
                Family Salon • Varanasi
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#A8A296] leading-relaxed max-w-sm">
              Complete professional hair styling, bridal makeup, revitalizing skincare, nail artistry, and grooming under one roof at Vidyapeeth Road.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#1B1C22] border border-[#2F3039] text-xs text-[#DCD4C7]">
                <span className="text-[#C5A880] font-bold">4.8★</span>
                <span className="text-[#7A756D]">|</span>
                <span>3,458+ Google Reviews</span>
              </div>
            </div>

            {/* Social links: Facebook only (per explicit prompt rule "Do NOT invent an Instagram URL") */}
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-[#79746A] block mb-2">Connect</span>
              <a
                id="footer-facebook-link"
                href={SALON_INFO.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-[#D8D1C5] hover:text-[#C5A880] transition-colors"
              >
                <Facebook className="w-4 h-4 text-[#C5A880]" />
                <span>facebook.com/360afamilysalon</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-2 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#A8A296]">
              <li>
                <button
                  id="footer-nav-home"
                  onClick={() => {
                    onNavigate('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-services"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Services</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-about"
                  onClick={() => {
                    onNavigate('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                  <span>About Us</span>
                </button>
              </li>
              <li>
                <button
                  id="footer-nav-visit"
                  onClick={() => {
                    onNavigate('visit');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-[#FAF8F5] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <ChevronRight className="w-3 h-3 text-[#C5A880]" />
                  <span>Visit Us</span>
                </button>
              </li>
              <li className="pt-2">
                <button
                  id="footer-nav-enquire"
                  onClick={onOpenEnquiry}
                  className="text-[#C5A880] hover:text-[#FAF8F5] uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Book / Enquire →
                </button>
              </li>
            </ul>
          </div>

          {/* Service Categories */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Service Pillars
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A8A296]">
              <li>Hair Styling & Cuts</li>
              <li>Bridal & Party Makeup</li>
              <li>Facials & Skin Rejuvenation</li>
              <li>Manicure & Nail Extensions</li>
              <li>Waxing & Body Polishing</li>
              <li>Cysteine & Keratin Therapy</li>
              <li>Kids & Gentleman Grooming</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-4 text-left">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#C5A880] font-semibold">
              Visit & Contact
            </h4>
            <div className="space-y-3 text-xs text-[#A8A296]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  GANPATI COMPLEX, C 32/3-1-G-F-12, Vidyapeeth Road, Englishiyaline, Shivpurwa, Varanasi, UP 221002
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#FAF8F5] block">
                    {SALON_INFO.primaryPhone}
                  </a>
                  <a href={`tel:${SALON_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#FAF8F5] block text-[#878278]">
                    {SALON_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C5A880] shrink-0" />
                <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#FAF8F5] break-all">
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
                <p>Every Day: 9:00 AM – 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#736E66] gap-4">
          <p>© {new Date().getFullYear()} 360 SALON. All rights reserved. Vidyapeeth Road, Varanasi.</p>
          <div className="flex items-center gap-4 text-[11px] tracking-wider uppercase">
            <span>Website: 360salon.in</span>
            <span>•</span>
            <a href={SALON_INFO.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C5A880]">
              Google Maps Location
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
