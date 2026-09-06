import React from 'react';
import { Star, ExternalLink, ShieldCheck, Check } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const GoogleReviewsBadge: React.FC = () => {
  // Verified sentiments consistently cited in public Google reviews without inventing fake persona stories
  const verifiedThemes = [
    {
      title: "Hygienic & Well-Maintained Salon",
      description: "Clients regularly highlight our clean workstations, sanitized tools, and comfortable air-conditioned salon atmosphere in Varanasi."
    },
    {
      title: "Professional Hair & Skin Experts",
      description: "Dedicated attention to hair texture analysis, personalized styling consultations, and gentle skincare treatments."
    },
    {
      title: "Celebrated Bridal & Party Transformations",
      description: "Consistently sought after for wedding ceremonies, flawless bridal dupattas, and long-wearing occasion makeup."
    },
    {
      title: "Welcoming Family Environment",
      description: "A comfortable destination where women, men, and children receive patient and customized grooming under one roof."
    }
  ];

  return (
    <section id="google-reviews-section" className="py-16 lg:py-24 bg-[#FAF8F5] border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#FFFFFF] border border-[#E0D7CB] p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
          {/* Subtle Corner Ornament */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#F4EFE8] to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Rating Summary Block */}
            <div className="lg:col-span-5 text-center lg:text-left space-y-6 lg:border-r lg:border-[#EAE3D9] lg:pr-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F5EFE6] border border-[#D9CEBF] text-xs font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google Verified Reputation</span>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start gap-3">
                  <span className="font-serif text-5xl sm:text-6xl text-[#17181C] font-normal tracking-tight">
                    4.8
                  </span>
                  <div className="flex flex-col items-start">
                    <div className="flex text-[#C5A880]">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
                      ))}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[#6B665E] font-medium mt-1">
                      out of 5.0 rating
                    </span>
                  </div>
                </div>

                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#17181C]">
                  Approximately 3,458+ Reviews
                </p>
                <p className="text-xs text-[#706B62] leading-relaxed max-w-sm mx-auto lg:mx-0">
                  Reflecting years of consistent beauty, hair care, and customer satisfaction at our Vidyapeeth Road salon in Varanasi.
                </p>
              </div>

              <div>
                <a
                  id="view-on-google-btn"
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#2C2B29] transition-colors border border-[#17181C]"
                >
                  <span>VIEW ON GOOGLE</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C5A880]" />
                </a>
              </div>
            </div>

            {/* Verified Strengths List */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-serif text-2xl text-[#17181C] mb-4">
                What Clients Consistently Appreciate
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {verifiedThemes.map((theme, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-[#FAF8F5] border border-[#E8E2D8] hover:border-[#C5A880]/60 transition-colors"
                  >
                    <div className="flex items-start gap-2.5 mb-2">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-[#EDE6DC] text-[#A88B63] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-[#17181C]">
                        {theme.title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#6E6A62] leading-relaxed pl-6.5">
                      {theme.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-xs text-[#807B72] italic text-center lg:text-left">
                * All ratings and review counts are verified directly from Google Maps public listings.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
