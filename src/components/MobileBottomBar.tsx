import React from 'react';
import { Phone, Navigation, Calendar } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface MobileBottomBarProps {
  onOpenEnquiry: () => void;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ onOpenEnquiry }) => {
  return (
    <div
      id="mobile-fixed-bottom-bar"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#17181C]/95 backdrop-blur-md border-t border-[#31302C] px-3 py-2.5 pb-[max(0.625rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* CALL */}
        <a
          id="mobile-bottom-call-btn"
          href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 text-[#FAF8F5] hover:text-[#C5A880] transition-colors rounded-sm active:bg-[#252528]"
        >
          <Phone className="w-4 h-4 text-[#C5A880] mb-1" />
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">CALL</span>
        </a>

        {/* DIRECTIONS */}
        <a
          id="mobile-bottom-directions-btn"
          href={SALON_INFO.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 text-[#FAF8F5] hover:text-[#C5A880] transition-colors rounded-sm active:bg-[#252528]"
        >
          <Navigation className="w-4 h-4 text-[#C5A880] mb-1" />
          <span className="text-[10px] font-semibold tracking-[0.15em] uppercase">DIRECTIONS</span>
        </a>

        {/* ENQUIRE */}
        <button
          id="mobile-bottom-enquire-btn"
          onClick={onOpenEnquiry}
          className="flex flex-col items-center justify-center py-2 px-1 bg-[#C5A880] text-[#17181C] font-semibold rounded-sm active:bg-[#B3956F] cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-[#17181C] mb-1" />
          <span className="text-[10px] font-bold tracking-[0.15em] uppercase">ENQUIRE</span>
        </button>
      </div>
    </div>
  );
};
