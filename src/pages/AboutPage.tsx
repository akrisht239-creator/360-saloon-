import React from 'react';
import {
  Sparkles,
  Star,
  Users,
  Clock,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Phone,
  ArrowRight,
  HeartHandshake,
  Award
} from 'lucide-react';
import { SALON_INFO, SALON_IMAGE_ASSETS, TRUST_PILLARS } from '../data/salonData';
import { TrustStats } from '../components/TrustStats';
import { GoogleReviewsBadge } from '../components/GoogleReviewsBadge';

interface AboutPageProps {
  onNavigate: (page: 'home' | 'services' | 'about' | 'visit') => void;
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <div id="about-page-container" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      {/* Editorial Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About 360 SALON • Varanasi</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17181C] tracking-tight leading-[1.15]">
              More Than a Salon. <br />
              <span className="italic text-[#8C714D]">A Complete Beauty Experience.</span>
            </h1>

            <div className="w-16 h-[1.5px] bg-[#C5A880]" />

            <div className="space-y-4 text-[#555048] text-sm sm:text-base leading-relaxed font-light">
              <p>
                Established as a full-service family salon in Varanasi, <strong>360 SALON</strong> was founded on a simple principle: bringing professional hair styling, bridal artistry, restorative skincare, and grooming under one trusted roof.
              </p>
              <p>
                Situated at the prominent <strong>Ganpati Complex on Vidyapeeth Road</strong> (Englishiyaline, Shivpurwa), our salon provides a serene, immaculately maintained sanctuary away from the hustle of the city. We cater to every member of the family — women, men, and children — with personalized consultations and attentive care.
              </p>
              <p>
                With over <strong>3,458+ verified Google reviews</strong> and a distinguished <strong>4.8★ rating</strong>, our reputation in Varanasi is built on genuine consistency, high sanitation standards, and genuine client satisfaction.
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <button
                id="about-explore-services-btn"
                onClick={() => onNavigate('services')}
                className="px-6 py-3.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#2C2B29] transition-colors cursor-pointer"
              >
                Explore Services
              </button>
              <button
                id="about-open-enquiry-btn"
                onClick={onOpenEnquiry}
                className="px-6 py-3.5 border border-[#17181C] text-[#17181C] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#17181C] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              >
                Send Enquiry
              </button>
            </div>
          </div>

          {/* Right Imagery Block */}
          <div className="lg:col-span-5">
            <div className="relative border border-[#E0D7CC] bg-[#FFFFFF] p-3 shadow-xl">
              <img
                src={SALON_IMAGE_ASSETS.salonInterior}
                alt="360 Salon Interior on Vidyapeeth Road"
                className="w-full h-[440px] object-cover"
              />
              <div className="p-5 bg-[#FAF8F5] border-t border-[#ECE5DB] text-left space-y-1">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#17181C]">
                  360 SALON • Family Salon
                </p>
                <p className="text-xs text-[#706B62]">
                  GANPATI COMPLEX, C 32/3-1-G-F-12, Vidyapeeth Road, Varanasi
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* At A Glance Section */}
      <section id="about-at-a-glance" className="border-y border-[#E6E0D6] bg-[#FFFFFF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold block mb-1">
              At-a-Glance
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#17181C]">
              Facts That Define 360 SALON
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-serif text-[#17181C]">
                4.8★
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3D3A34]">
                Google Rating
              </p>
              <p className="text-xs text-[#736E66]">
                Consistently maintained across thousands of appointments
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-serif text-[#17181C]">
                3,458+
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3D3A34]">
                Google Reviews
              </p>
              <p className="text-xs text-[#736E66]">
                Verified client feedback in Varanasi
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-serif text-[#17181C]">
                Open Daily
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3D3A34]">
                9:00 AM – 9:00 PM
              </p>
              <p className="text-xs text-[#736E66]">
                Convenient 7-day schedule for busy lifestyles
              </p>
            </div>

            <div className="p-6 bg-[#FAF8F5] border border-[#E4DDD2] text-center space-y-2">
              <div className="text-3xl sm:text-4xl font-serif text-[#17181C]">
                Vidyapeeth Rd
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-[#3D3A34]">
                Ganpati Complex
              </p>
              <p className="text-xs text-[#736E66]">
                Prime Varanasi location with effortless access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Philosophy Section */}
      <section className="py-20 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-[#FFFFFF] border border-[#E0D7CC] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                Philosophy 01
              </span>
              <h3 className="font-serif text-2xl text-[#17181C]">
                Hygienic & Thoughtful Environment
              </h3>
              <p className="text-xs sm:text-sm text-[#615D56] leading-relaxed">
                We place hygiene at the foundation of our work. Clean salon gowns, fresh towels, sanitized implements, and well-organized styling zones ensure peace of mind with every visit.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E0D7CC] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                Philosophy 02
              </span>
              <h3 className="font-serif text-2xl text-[#17181C]">
                Consultation Before Application
              </h3>
              <p className="text-xs sm:text-sm text-[#615D56] leading-relaxed">
                Whether you desire a subtle hair color enhancement or a full bridal transformation, our stylists listen attentively to your goals and tailor treatments that complement your natural features.
              </p>
            </div>

            <div className="p-8 bg-[#FFFFFF] border border-[#E0D7CC] space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                Philosophy 03
              </span>
              <h3 className="font-serif text-2xl text-[#17181C]">
                A True Family Destination
              </h3>
              <p className="text-xs sm:text-sm text-[#615D56] leading-relaxed">
                We take immense pride in serving women, gentlemen, teenagers, and young kids with equal warmth and patience, making salon days a relaxing family routine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews Verification */}
      <GoogleReviewsBadge />
    </div>
  );
};
