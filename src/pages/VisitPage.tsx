import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  ExternalLink,
  Sparkles,
  Calendar,
  CheckCircle2
} from 'lucide-react';
import { SALON_INFO, ALL_SERVICES } from '../data/salonData';
import { LocationMap } from '../components/LocationMap';

interface VisitPageProps {
  onOpenEnquiry: () => void;
}

export const VisitPage: React.FC<VisitPageProps> = ({ onOpenEnquiry }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Haircut',
    preferredDate: '',
    message: ''
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setFormSubmitted(true);
    }
  };

  return (
    <div id="visit-page-container" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit 360 SALON</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17181C] tracking-tight">
            Find Us in Varanasi
          </h1>
          <p className="text-base sm:text-lg text-[#615C54] leading-relaxed font-light">
            Conveniently situated at Ganpati Complex on Vidyapeeth Road, Englishiyaline. We welcome you every day from 9:00 AM to 9:00 PM.
          </p>
        </div>

        {/* Primary Action Buttons Ribbon */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            id="visit-primary-call-btn"
            href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#2C2B29] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>CALL NOW</span>
          </a>

          <a
            id="visit-primary-directions-btn"
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#17181C] text-[#17181C] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#17181C] hover:text-[#FAF8F5] transition-colors"
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>GET DIRECTIONS</span>
          </a>

          <button
            id="visit-primary-enquiry-btn"
            onClick={onOpenEnquiry}
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#C5A880] text-[#17181C] text-xs font-semibold uppercase tracking-[0.18em] hover:bg-[#D4BC9B] transition-colors cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>SEND ENQUIRY</span>
          </button>
        </div>
      </div>

      {/* Main Location & Real Visual Map Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <LocationMap onOpenEnquiry={onOpenEnquiry} standalone={true} />
      </div>

      {/* Detailed Address Breakdown & On-Page Quick Enquiry Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Detailed Address Block */}
          <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E0D7CB] p-8 space-y-6 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#17181C]">
              Location & Contact Details
            </h2>

            <div className="space-y-4 text-xs text-[#524E47]">
              <div>
                <span className="font-semibold uppercase tracking-wider text-[#17181C] block mb-1">
                  Full Postal Address:
                </span>
                <p className="leading-relaxed bg-[#FBF9F5] p-3 border border-[#ECE5DB] font-mono text-[11px] text-[#3D3A34]">
                  360 SALON<br />
                  GANPATI COMPLEX, C 32/3-1-G-F-12,<br />
                  Vidyapeeth Road, Englishiyaline,<br />
                  Vidya Vihar Colony, Shivpurwa,<br />
                  Varanasi, Uttar Pradesh 221002, India
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3 bg-[#FAF8F5] border border-[#EAE3D9]">
                  <span className="font-semibold uppercase tracking-wider text-[#17181C] block mb-1">
                    Primary Phone:
                  </span>
                  <a href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-[#8C714D] hover:underline">
                    {SALON_INFO.primaryPhone}
                  </a>
                </div>

                <div className="p-3 bg-[#FAF8F5] border border-[#EAE3D9]">
                  <span className="font-semibold uppercase tracking-wider text-[#17181C] block mb-1">
                    Secondary Phone:
                  </span>
                  <a href={`tel:${SALON_INFO.secondaryPhone.replace(/\s+/g, '')}`} className="text-sm font-semibold text-[#8C714D] hover:underline">
                    {SALON_INFO.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-[#EAE3D9]">
                <span className="font-semibold uppercase tracking-wider text-[#17181C] block mb-1">
                  Email Address:
                </span>
                <a href={`mailto:${SALON_INFO.email}`} className="text-xs text-[#17181C] hover:text-[#A88B63]">
                  {SALON_INFO.email}
                </a>
              </div>

              <div className="p-3 bg-[#FAF8F5] border border-[#EAE3D9]">
                <span className="font-semibold uppercase tracking-wider text-[#17181C] block mb-1">
                  Working Hours:
                </span>
                <p className="text-xs text-[#17181C] font-medium">
                  Every Day — 9:00 AM to 9:00 PM (Monday through Sunday)
                </p>
              </div>
            </div>
          </div>

          {/* On-Page Quick Enquiry Form */}
          <div className="lg:col-span-6 bg-[#FFFFFF] border border-[#E0D7CB] p-8 text-left">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#17181C] mb-2">
              Send an Enquiry
            </h2>
            <p className="text-xs text-[#6F6A62] mb-6">
              Connect with our team to inquire about availability, hair transformations, or bridal appointments.
            </p>

            {formSubmitted ? (
              <div className="p-6 bg-[#FAF8F5] border border-[#C5A880] text-center space-y-4">
                <CheckCircle2 className="w-10 h-10 text-[#A88B63] mx-auto" />
                <h3 className="font-serif text-2xl text-[#17181C]">Enquiry Received</h3>
                <p className="text-xs text-[#615D56] leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Our front desk team will call you shortly at <strong>{formData.phone}</strong> to assist you with your appointment request.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#8C714D] underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#47443E] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#47443E] mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 63891 22360"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#47443E] mb-1">
                      Service
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-2.5 py-2 bg-[#FAF8F5] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none"
                    >
                      {ALL_SERVICES.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name} ({s.category})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold uppercase tracking-wider text-[#47443E] mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold uppercase tracking-wider text-[#47443E] mb-1">
                    Message / Queries
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the occasion or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 bg-[#FAF8F5] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#17181C] text-[#FAF8F5] font-semibold uppercase tracking-[0.2em] hover:bg-[#2C2B29] transition-colors cursor-pointer"
                >
                  SEND ENQUIRY
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
