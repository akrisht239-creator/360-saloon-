import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Clock, Mail, Copy, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface LocationMapProps {
  onOpenEnquiry?: () => void;
  standalone?: boolean;
}

export const LocationMap: React.FC<LocationMapProps> = ({ onOpenEnquiry, standalone = false }) => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id="location-map-component" className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Left / Info Box */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#FFFFFF] border border-[#E0D7CC] p-6 sm:p-8 space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A88B63] font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              <span>Prime Varanasi Location</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#17181C]">
              360 SALON
            </h3>

            {/* Address */}
            <div className="p-4 bg-[#FBF9F5] border border-[#ECE5DB] space-y-2 text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-[#17181C]">
                GANPATI COMPLEX
              </p>
              <p className="text-xs text-[#55514A] leading-relaxed">
                C 32/3-1-G-F-12, Vidyapeeth Road,<br />
                Englishiyaline, Vidya Vihar Colony,<br />
                Shivpurwa, Varanasi, Uttar Pradesh 221002, India
              </p>
              <button
                id="copy-address-btn"
                onClick={copyAddress}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#8C714D] hover:text-[#17181C] transition-colors cursor-pointer pt-1"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Address Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Contact Details */}
            <div className="space-y-3 pt-2 text-xs text-[#4A463F]">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#A88B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#17181C]">Phone Contacts:</p>
                  <a href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#A88B63] block">
                    {SALON_INFO.primaryPhone} (Primary)
                  </a>
                  <a href={`tel:${SALON_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="hover:text-[#A88B63] block">
                    {SALON_INFO.secondaryPhone} (Secondary)
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#A88B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#17181C]">Opening Hours:</p>
                  <p>{SALON_INFO.openingHours}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#A88B63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#17181C]">Official Email:</p>
                  <a href={`mailto:${SALON_INFO.email}`} className="hover:text-[#A88B63]">
                    {SALON_INFO.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="space-y-2 pt-4 border-t border-[#EAE3D8]">
            <a
              id="get-directions-btn"
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#2C2B29] transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>GET DIRECTIONS</span>
            </a>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="call-now-location-btn"
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 border border-[#17181C] text-[#17181C] text-xs font-semibold uppercase tracking-wider hover:bg-[#17181C] hover:text-[#FAF8F5] transition-colors"
              >
                <Phone className="w-3 h-3" />
                <span>CALL NOW</span>
              </a>

              {onOpenEnquiry && (
                <button
                  id="enquire-location-btn"
                  onClick={onOpenEnquiry}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#C5A880] text-[#17181C] text-xs font-semibold uppercase tracking-wider hover:bg-[#D4BC9B] transition-colors cursor-pointer"
                >
                  <span>SEND ENQUIRY</span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right / Visual Real Map Frame */}
        <div className="lg:col-span-7 flex flex-col bg-[#FFFFFF] border border-[#E0D7CC] overflow-hidden">
          <div className="bg-[#FAF8F5] px-4 py-3 border-b border-[#E0D7CC] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-[#55514A]">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="font-semibold text-[#17181C]">Interactive Map View</span>
              <span className="hidden sm:inline text-[#999287]">• Vidyapeeth Road, Shivpurwa</span>
            </div>

            <a
              id="open-google-maps-frame-btn"
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#A88B63] hover:text-[#17181C] transition-colors"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="relative w-full h-[380px] sm:h-[440px] bg-[#EBE5DB]">
            <iframe
              id="salon-google-maps-iframe"
              title="360 SALON Location Vidyapeeth Road Varanasi"
              src="https://maps.google.com/maps?q=360+SALON+GANPATI+COMPLEX+Vidyapeeth+Road+Shivpurwa+Varanasi&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full grayscale-25 contrast-105"
            />

            {/* Float Overlay button to launch directly */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                id="floating-maps-app-btn"
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider shadow-lg hover:bg-[#2C2B29] transition-colors border border-[#42403B]"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>Navigate in Maps</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
