import React from 'react';
import { Sparkles, Calendar, Phone, ArrowRight } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

interface BridalFeatureProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const BridalFeature: React.FC<BridalFeatureProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="bridal-feature-section" className="py-20 lg:py-28 bg-[#17181C] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle architectural background texture accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#FAF8F5_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Imagery Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              <div className="relative overflow-hidden border border-[#383733] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596704017254-9b121068fb31?auto=format&fit=crop&w=1200&q=85"
                  alt="Bridal Makeup & Hair Styling at 360 Salon Varanasi"
                  className="w-full h-[460px] object-cover object-center grayscale-20 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#17181C] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#17181C]/90 border border-[#383733] backdrop-blur-xs">
                  <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold block mb-1">
                    Signature Wedding Services
                  </span>
                  <p className="font-serif text-lg text-[#FAF8F5]">
                    Custom Bridal Makeup & Intricate Bridal Hair Do
                  </p>
                </div>
              </div>

              {/* Offset Accent Box */}
              <div className="hidden sm:block absolute -top-4 -right-4 w-28 h-28 border border-[#C5A880]/30 -z-10" />
              <div className="hidden sm:block absolute -bottom-4 -left-4 w-36 h-36 bg-[#C5A880]/5 -z-10" />
            </div>
          </div>

          {/* Right Column: Copy & Presentation */}
          <div className="lg:col-span-6 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Wedding & Event Artistry</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#FAF8F5] leading-tight">
                Made for Your Most Important Moments.
              </h2>
              <div className="w-12 h-[1px] bg-[#C5A880] mt-4" />
            </div>

            <p className="text-sm sm:text-base text-[#BFB9AD] leading-relaxed">
              At 360 SALON on Vidyapeeth Road, we understand the significance of your celebration days. Our senior artists craft tailored looks that balance traditional elegance with contemporary refinement, ensuring long-lasting flawlessness from the morning rituals to the reception lights.
            </p>

            {/* Core Bridal Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 border border-[#2D2C29] bg-[#1E1F24]/60 space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  01 • High Definition
                </span>
                <h3 className="font-serif text-xl text-[#FAF8F5]">Bridal Makeup</h3>
                <p className="text-xs text-[#A8A296] leading-relaxed">
                  Skin-perfecting base, tailored eye dimensions, and long-wear pigments suited for ceremony lighting and high-definition photography.
                </p>
              </div>

              <div className="p-5 border border-[#2D2C29] bg-[#1E1F24]/60 space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#C5A880] font-semibold block">
                  02 • Structural Artistry
                </span>
                <h3 className="font-serif text-xl text-[#FAF8F5]">Bridal Hair Do</h3>
                <p className="text-xs text-[#A8A296] leading-relaxed">
                  Intricate buns, cascading waves, and secure dupatta setting tailored to support royal jewellery and flower accessories comfortably.
                </p>
              </div>
            </div>

            {/* Additional Occasions list */}
            <div className="pt-2 border-t border-[#2B2A27] text-xs text-[#A8A296]">
              <span className="text-[#E6DFD3] font-medium mr-2">Also Specializing In:</span>
              <span>Engagement Makeup • Party Makeup • Complete Bridal Package • Groom Makeup</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                id="bridal-enquire-btn"
                onClick={() => onOpenEnquiry('Bridal Makeup')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#C5A880] text-[#17181C] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4BC9B] transition-all duration-200 cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Enquire For Bridal</span>
              </button>

              <a
                id="bridal-call-btn"
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#474540] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call +91 63891 22360</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
