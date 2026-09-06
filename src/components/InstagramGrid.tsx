import React from 'react';
import { Instagram, Facebook, Sparkles, ExternalLink } from 'lucide-react';
import { SALON_IMAGE_ASSETS, SALON_INFO } from '../data/salonData';

export const InstagramGrid: React.FC = () => {
  return (
    <section id="instagram-editorial-section" className="py-16 lg:py-24 bg-[#F5EFEA]/40 border-t border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#E6DFC] gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Visual Gallery & Looks</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17181C]">
              Follow 360 SALON
            </h2>
            <p className="text-sm text-[#6F6B63] mt-2 max-w-lg">
              Discover the latest looks, salon moments and beauty inspiration.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              id="facebook-social-btn"
              href={SALON_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#FFFFFF] border border-[#D9D1C5] text-xs font-semibold uppercase tracking-wider text-[#17181C] hover:border-[#17181C] transition-colors"
            >
              <Facebook className="w-4 h-4 text-[#1877F2]" />
              <span>Facebook Page</span>
              <ExternalLink className="w-3 h-3 text-[#7B766D]" />
            </a>
          </div>
        </div>

        {/* 6-Image Premium Editorial Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {SALON_IMAGE_ASSETS.instagramFeed.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-square overflow-hidden bg-[#EAE4DB] border border-[#E0D8CB]"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-[#17181C]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
                <span className="text-[10px] tracking-wider uppercase text-[#C5A880] font-semibold">
                  {item.tag}
                </span>
                <p className="text-xs text-[#FAF8F5] line-clamp-2 mt-1 font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center text-xs text-[#7A756D]">
          <span>Experience these styles in person at our Vidyapeeth Road salon.</span>
        </div>
      </div>
    </section>
  );
};
