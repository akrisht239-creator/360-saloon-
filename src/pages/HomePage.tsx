import React, { useState } from 'react';
import {
  Phone,
  ArrowRight,
  Sparkles,
  MapPin,
  Star,
  Scissors,
  CheckCircle2,
  Calendar,
  ChevronRight,
  Shield,
  Heart
} from 'lucide-react';
import {
  SALON_INFO,
  SERVICE_CATEGORIES,
  ALL_SERVICES,
  SALON_IMAGE_ASSETS,
  TRUST_PILLARS
} from '../data/salonData';
import { TrustStats } from '../components/TrustStats';
import { BridalFeature } from '../components/BridalFeature';
import { GoogleReviewsBadge } from '../components/GoogleReviewsBadge';
import { InstagramGrid } from '../components/InstagramGrid';
import { LocationMap } from '../components/LocationMap';

interface HomePageProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'visit') => void;
  onOpenEnquiry: (serviceName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState<'HAIR' | 'MAKEUP' | 'SKINCARE' | 'NAILS' | 'HAIR REMOVAL' | 'BODY CARE'>('HAIR');

  const previewServices = ALL_SERVICES.filter(
    (s) => s.category === activeCategory
  ).slice(0, 6);

  const categoryImages: Record<string, string> = {
    'HAIR': SALON_IMAGE_ASSETS.hairCut,
    'MAKEUP': SALON_IMAGE_ASSETS.bridalMakeup,
    'SKINCARE': SALON_IMAGE_ASSETS.skincare,
    'NAILS': SALON_IMAGE_ASSETS.nails,
    'HAIR REMOVAL': 'https://images.unsplash.com/photo-1512290900672-1f02a0a8ffb2?auto=format&fit=crop&w=1000&q=80',
    'BODY CARE': SALON_IMAGE_ASSETS.bodyCare
  };

  return (
    <div id="home-page-container" className="space-y-0">
      {/* ==================================================
          1. HERO SECTION
          ================================================== */}
      <section id="hero-section" className="relative bg-[#17181C] text-[#FAF8F5] overflow-hidden min-h-[85vh] lg:min-h-[90vh] flex items-center">
        {/* Editorial Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={SALON_IMAGE_ASSETS.hero}
            alt="360 Salon Varanasi Interior and Styling"
            className="w-full h-full object-cover object-center opacity-30 sm:opacity-35 scale-105 transform motion-safe:animate-pulse [animation-duration:8s]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17181C] via-[#17181C]/90 to-[#17181C]/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#17181C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-8 space-y-6 text-left">
              {/* Location Badge */}
              <div
                id="hero-location-indicator"
                className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#26272E]/90 border border-[#3E3F4A] backdrop-blur-xs text-[#C5A880] text-xs font-semibold tracking-[0.25em] uppercase"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>VARANASI • VIDYAPEETH ROAD</span>
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1
                  id="hero-main-heading"
                  className="font-serif text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#FAF8F5] leading-[1.1]"
                >
                  Your Look. <br />
                  <span className="italic font-normal text-[#D4BC9B]">Your Signature.</span>
                </h1>
              </div>

              {/* Supporting Copy */}
              <p
                id="hero-supporting-copy"
                className="text-base sm:text-lg text-[#CDC7BC] max-w-2xl leading-relaxed font-light"
              >
                360 SALON provides professional hair, beauty, skincare, makeup and grooming services in Varanasi. Experience tailored salon care for the entire family in a refined, hygienic setting at Ganpati Complex, Vidyapeeth Road.
              </p>

              {/* CTA Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  id="hero-explore-services-btn"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C5A880] text-[#17181C] font-semibold text-xs tracking-[0.2em] uppercase hover:bg-[#D4BC9B] transition-all duration-200 cursor-pointer shadow-md"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  id="hero-call-salon-btn"
                  href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent text-[#FAF8F5] border border-[#52504A] font-semibold text-xs tracking-[0.2em] uppercase hover:border-[#C5A880] hover:text-[#C5A880] transition-all duration-200"
                >
                  <Phone className="w-4 h-4 text-[#C5A880]" />
                  <span>CALL 360 SALON</span>
                </a>
              </div>

              {/* Quick Fact Badges */}
              <div className="pt-6 border-t border-[#2F3038] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#A39E92]">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                  <span className="font-semibold text-[#FAF8F5]">4.8★ Google Rating</span>
                  <span>(3,458+ Reviews)</span>
                </div>
                <span className="hidden sm:inline text-[#4A4B56]">•</span>
                <div>
                  <span className="text-[#FAF8F5] font-medium">Open Daily:</span> 9:00 AM – 9:00 PM
                </div>
                <span className="hidden sm:inline text-[#4A4B56]">•</span>
                <div className="text-[#D4BC9B] font-medium">
                  Family Salon • All Services
                </div>
              </div>
            </div>

            {/* Right Hero Visual Card */}
            <div className="lg:col-span-4 hidden lg:block">
              <div className="relative border border-[#3E3F4A] bg-[#1F2026] p-4 shadow-2xl">
                <div className="relative overflow-hidden aspect-[4/5]">
                  <img
                    src={SALON_IMAGE_ASSETS.salonInterior}
                    alt="360 Salon Ambiance and Chairs"
                    className="w-full h-full object-cover grayscale-15"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#17181C] via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#17181C]/90 border border-[#383733]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#C5A880] font-semibold">
                      Complete Family Salon
                    </p>
                    <p className="font-serif text-base text-[#FAF8F5] mt-0.5">
                      Vidyapeeth Road, Shivpurwa, Varanasi
                    </p>
                    <p className="text-[11px] text-[#A8A296] mt-1">
                      Serving with verified distinction across 3,458+ reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          2. TRUST SECTION
          ================================================== */}
      <TrustStats />

      {/* ==================================================
          3. INTRO SECTION
          ================================================== */}
      <section id="intro-section" className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Header & Mission */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Modern Grooming & Care</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#17181C] leading-[1.2]">
                Beauty, Grooming & Self-Care — All Under One Roof
              </h2>

              <div className="w-16 h-[1.5px] bg-[#C5A880]" />

              <div className="space-y-4 text-[#57534D] text-sm sm:text-base leading-relaxed">
                <p>
                  Located at Ganpati Complex, Vidyapeeth Road, 360 SALON was established to bring comprehensive personal care to Varanasi families. Rather than visiting different establishments for haircuts, bridal rituals, skin rejuvenation, and nail grooming, our salon unifies every discipline within a calm, immaculately maintained environment.
                </p>
                <p>
                  From routine trims and soothing hair spas to intricate wedding makeovers and specialized cysteine protein smoothing, every treatment is delivered with meticulous care and unhurried consultation.
                </p>
              </div>

              {/* Pillars checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17181C]">
                  <div className="w-4 h-4 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#A88B63]">
                    ✓
                  </div>
                  <span>Women, Men & Children Services</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17181C]">
                  <div className="w-4 h-4 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#A88B63]">
                    ✓
                  </div>
                  <span>High Hygiene & Sanitized Stations</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17181C]">
                  <div className="w-4 h-4 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#A88B63]">
                    ✓
                  </div>
                  <span>Open 7 Days a Week (9 AM – 9 PM)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-[#17181C]">
                  <div className="w-4 h-4 rounded-full bg-[#EFE8DC] flex items-center justify-center text-[#A88B63]">
                    ✓
                  </div>
                  <span>Central Englishiyaline Location</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  id="intro-view-services-btn"
                  onClick={() => {
                    onNavigate('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#17181C] hover:text-[#A88B63] transition-colors border-b border-[#17181C] hover:border-[#A88B63] pb-1 cursor-pointer"
                >
                  <span>Explore full service catalogue</span>
                  <span>→</span>
                </button>
              </div>
            </div>

            {/* Right Editorial Image Duo */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="border border-[#E0D7CB] bg-[#FFFFFF] p-3 shadow-lg">
                  <img
                    src={SALON_IMAGE_ASSETS.hairColor}
                    alt="Precision Hair Coloring and Styling at 360 Salon"
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                  <div className="p-4 bg-[#FAF8F5] border-t border-[#ECE6DE] text-left">
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#17181C]">
                      360 SALON Varanasi
                    </p>
                    <p className="text-xs text-[#706B62] mt-0.5">
                      GANPATI COMPLEX, Vidyapeeth Road
                    </p>
                  </div>
                </div>

                {/* Floating mini trust tag */}
                <div className="absolute -bottom-5 -left-5 bg-[#17181C] text-[#FAF8F5] p-4 border border-[#3E3D38] shadow-xl hidden sm:block">
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 fill-[#C5A880] text-[#C5A880]" />
                    <span className="font-serif text-lg">4.8 / 5.0</span>
                  </div>
                  <p className="text-[10px] tracking-wider uppercase text-[#C5A880] mt-0.5">
                    3,458+ Google Reviews
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          4. SERVICES PREVIEW
          Interactive service showcase with category tabs
          ================================================== */}
      <section id="services-preview-section" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="text-left space-y-2">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
                <Scissors className="w-3.5 h-3.5" />
                <span>Our Capabilities</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17181C]">
                Services Showcase
              </h2>
              <p className="text-sm text-[#6E6A62] max-w-xl">
                Hair, makeup, skincare, nails, waxing and body care curated for contemporary grooming standards.
              </p>
            </div>

            <div>
              <button
                id="view-all-services-cta"
                onClick={() => {
                  onNavigate('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#2C2B29] transition-colors cursor-pointer"
              >
                <span>VIEW ALL SERVICES</span>
                <ChevronRight className="w-4 h-4 text-[#C5A880]" />
              </button>
            </div>
          </div>

          {/* Interactive Category Selector Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar border-b border-[#ECE6DE]">
            {(['HAIR', 'MAKEUP', 'SKINCARE', 'NAILS', 'HAIR REMOVAL', 'BODY CARE'] as const).map((cat) => (
              <button
                key={cat}
                id={`preview-tab-${cat.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-semibold tracking-wider uppercase whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#17181C] text-[#FAF8F5] border border-[#17181C]'
                    : 'bg-[#FAF8F5] text-[#555149] hover:text-[#17181C] border border-[#E0D7CB]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previewServices.map((service) => (
              <div
                key={service.id}
                id={`preview-card-${service.id}`}
                className="bg-[#FAF8F5] border border-[#E2D9CD] p-6 hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group text-left"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                      {service.categoryLabel}
                    </span>
                    {service.featured && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#F0E6D8] text-[#7A5B2F] font-semibold">
                        Signature
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl text-[#17181C] group-hover:text-[#8C714D] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs text-[#635F57] leading-relaxed">
                    {service.description}
                  </p>

                  {service.recommendedFor && (
                    <div className="pt-1 text-[11px] text-[#878278]">
                      <span className="font-medium text-[#44403B]">Recommended:</span> {service.recommendedFor}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-[#EAE3D9] flex items-center justify-between">
                  <button
                    id={`preview-enquire-${service.id}`}
                    onClick={() => onOpenEnquiry(service.name)}
                    className="text-xs uppercase tracking-wider font-semibold text-[#17181C] hover:text-[#A88B63] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3 h-3 text-[#A88B63]" />
                  </button>

                  <a
                    href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="text-[11px] text-[#78746D] hover:text-[#17181C] flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#A88B63]" />
                    <span>Call Desk</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                onNavigate('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-semibold text-[#17181C] hover:text-[#A88B63] transition-colors border-b border-[#17181C] hover:border-[#A88B63] pb-1 cursor-pointer"
            >
              <span>Explore all {ALL_SERVICES.length} services across 6 categories</span>
              <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================================================
          5. BRIDAL FEATURE SECTION
          "Made for Your Most Important Moments."
          ================================================== */}
      <BridalFeature onOpenEnquiry={onOpenEnquiry} />

      {/* ==================================================
          6. WHY 360 SALON (FACTUAL POSITIONING)
          ================================================== */}
      <section id="why-360-salon-section" className="py-20 lg:py-28 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
              The 360 Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#17181C]">
              Why Clients Choose 360 SALON
            </h2>
            <p className="text-sm text-[#6A665E]">
              Grounded in genuine service breadth, prime accessibility, and verified local trust.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TRUST_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                id={`trust-pillar-${idx}`}
                className="bg-[#FFFFFF] border border-[#E2D9CD] p-6 sm:p-8 space-y-3 text-left hover:border-[#C5A880] transition-colors"
              >
                <span className="font-serif text-2xl text-[#C5A880] font-normal block">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl text-[#17181C]">
                  {pillar.title}
                </h3>
                <p className="text-xs text-[#635F57] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick Consultation Ribbon */}
          <div className="mt-14 p-8 bg-[#17181C] text-[#FAF8F5] border border-[#3A3935] flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="space-y-1">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C5A880] font-semibold">
                Speak to our team
              </span>
              <h3 className="font-serif text-2xl text-[#FAF8F5]">
                Planning a Wedding or Hair Transformation?
              </h3>
              <p className="text-xs text-[#A8A297]">
                Call our senior consultants directly or send an online enquiry anytime.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <a
                id="ribbon-call-btn"
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="px-6 py-3 bg-[#C5A880] text-[#17181C] text-xs font-semibold tracking-wider uppercase hover:bg-[#D4BC9B] transition-colors"
              >
                Call Desk
              </a>
              <button
                id="ribbon-enquire-btn"
                onClick={() => onOpenEnquiry()}
                className="px-6 py-3 border border-[#6B6862] text-[#FAF8F5] text-xs font-semibold tracking-wider uppercase hover:border-[#FAF8F5] transition-colors cursor-pointer"
              >
                Enquire Online
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==================================================
          7. GOOGLE REVIEWS SECTION
          4.8★ with approximately 3,458+ reviews + VIEW ON GOOGLE
          ================================================== */}
      <GoogleReviewsBadge />

      {/* ==================================================
          8. REUSABLE INSTAGRAM SECTION
          "Follow 360 SALON"
          ================================================== */}
      <InstagramGrid />

      {/* ==================================================
          9. VISIT US / LOCATION HIGHLIGHT
          ================================================== */}
      <section id="home-location-section" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#E8E2D8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left mb-10">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-1">
              Find Us In Varanasi
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17181C]">
              Visit 360 SALON at Vidyapeeth Road
            </h2>
            <p className="text-sm text-[#6F6B63] mt-2">
              Centrally located in Ganpati Complex, Englishiyaline. Open every day from 9:00 AM to 9:00 PM.
            </p>
          </div>

          <LocationMap onOpenEnquiry={onOpenEnquiry} />
        </div>
      </section>
    </div>
  );
};
