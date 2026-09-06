import React from 'react';
import { Star, Clock, Users, ShieldCheck } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const TrustStats: React.FC = () => {
  return (
    <section id="trust-metrics-section" className="border-y border-[#E6E0D6] bg-[#F4EFEA]/60 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold mb-2">
            Varanasi's Verified Standard
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl text-[#17181C]">
            Trusted by Thousands of Clients in Varanasi
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Rating */}
          <div
            id="trust-stat-rating"
            className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="inline-flex items-center justify-center p-2.5 bg-[#F2ECE1] rounded-full text-[#A88B63] mb-3">
              <Star className="w-5 h-5 fill-[#C5A880] text-[#C5A880]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17181C] tracking-tight">
              4.8★
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3A34] mt-2">
              Google Rating
            </p>
            <p className="text-[11px] text-[#78746D] mt-1">Consistently rated excellent</p>
          </div>

          {/* Reviews */}
          <div
            id="trust-stat-reviews"
            className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="inline-flex items-center justify-center p-2.5 bg-[#F2ECE1] rounded-full text-[#A88B63] mb-3">
              <Users className="w-5 h-5 text-[#A88B63]" />
            </div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17181C] tracking-tight">
              3,458+
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3A34] mt-2">
              Google Reviews
            </p>
            <p className="text-[11px] text-[#78746D] mt-1">Verified public feedback</p>
          </div>

          {/* Hours */}
          <div
            id="trust-stat-hours"
            className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="inline-flex items-center justify-center p-2.5 bg-[#F2ECE1] rounded-full text-[#A88B63] mb-3">
              <Clock className="w-5 h-5 text-[#A88B63]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17181C] tracking-tight">
              9 AM – 9 PM
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3A34] mt-2">
              Open Daily
            </p>
            <p className="text-[11px] text-[#78746D] mt-1">Seven days every week</p>
          </div>

          {/* Family Salon */}
          <div
            id="trust-stat-family"
            className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center transition-transform hover:-translate-y-1 duration-200"
          >
            <div className="inline-flex items-center justify-center p-2.5 bg-[#F2ECE1] rounded-full text-[#A88B63] mb-3">
              <ShieldCheck className="w-5 h-5 text-[#A88B63]" />
            </div>
            <div className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#17181C] tracking-tight">
              Family Salon
            </div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#3D3A34] mt-2">
              All Under One Roof
            </p>
            <p className="text-[11px] text-[#78746D] mt-1">Women, men & kids</p>
          </div>
        </div>

        {/* View on Google link bar */}
        <div className="mt-8 text-center">
          <a
            id="trust-view-google-link"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-semibold text-[#17181C] hover:text-[#A88B63] transition-colors border-b border-[#17181C] hover:border-[#A88B63] pb-0.5"
          >
            <span>Read all 3,458+ verified Google reviews</span>
            <span className="text-[#A88B63]">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
