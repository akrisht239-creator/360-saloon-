import React, { useState } from 'react';
import {
  Scissors,
  Sparkles,
  Phone,
  ArrowRight,
  Search,
  Filter,
  CheckCircle2,
  Calendar,
  Layers,
  Heart
} from 'lucide-react';
import {
  ALL_SERVICES,
  SERVICE_CATEGORIES,
  SALON_INFO,
  ServiceItem,
  CategoryId
} from '../data/salonData';

interface ServicesPageProps {
  onOpenEnquiry: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter((service) => {
    const matchesCategory =
      selectedCategory === 'ALL' || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryCount = (catId: CategoryId) => {
    if (catId === 'ALL') return ALL_SERVICES.length;
    return ALL_SERVICES.filter((s) => s.category === catId).length;
  };

  return (
    <div id="services-page-container" className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F5]">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl text-left space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
            <Scissors className="w-3.5 h-3.5" />
            <span>Curated Service Catalogue</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#17181C] tracking-tight">
            Complete Salon Care
          </h1>
          <p className="text-base sm:text-lg text-[#615C54] leading-relaxed font-light">
            Every service at 360 SALON is performed with precision techniques, premium product formulations, and individualized consultation for the entire family.
          </p>
        </div>

        {/* Informational Guidance Ribbon */}
        <div className="mt-8 p-4 bg-[#F2ECE1] border border-[#DDD3C3] text-xs text-[#524D44] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#A88B63] shrink-0" />
            <span>
              <strong>Personalized Consultation:</strong> Every hair, bridal, or skincare appointment includes hair analysis and skin evaluation before treatment.
            </span>
          </div>
          <a
            href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
            className="text-xs font-semibold text-[#17181C] hover:text-[#A88B63] underline shrink-0"
          >
            Call Desk for Assistance
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls & Search */}
        <div className="sticky top-20 z-30 bg-[#FAF8F5]/95 backdrop-blur-md py-4 mb-10 border-b border-[#E3DACD]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 no-scrollbar">
              {SERVICE_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  id={`filter-tab-${cat.id.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-[#17181C] text-[#FAF8F5] border border-[#17181C] shadow-xs'
                      : 'bg-[#FFFFFF] text-[#555048] hover:text-[#17181C] border border-[#D9D1C5]'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      selectedCategory === cat.id
                        ? 'bg-[#C5A880] text-[#17181C] font-bold'
                        : 'bg-[#EAE4D9] text-[#69645C]'
                    }`}
                  >
                    {getCategoryCount(cat.id)}
                  </span>
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative min-w-[240px] sm:min-w-[280px]">
              <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#88837A]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-9 pr-4 py-2 bg-[#FFFFFF] border border-[#D9D1C5] focus:border-[#17181C] focus:outline-none text-xs text-[#17181C]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#88837A] hover:text-[#17181C]"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Active Filter Summary */}
        <div className="mb-6 flex items-center justify-between text-xs text-[#6B665E]">
          <p>
            Showing <span className="font-semibold text-[#17181C]">{filteredServices.length}</span> services in{' '}
            <span className="font-semibold text-[#17181C]">
              {SERVICE_CATEGORIES.find((c) => c.id === selectedCategory)?.label}
            </span>
          </p>
          {searchQuery && (
            <p>
              Filtering by keyword: &ldquo;{searchQuery}&rdquo;
            </p>
          )}
        </div>

        {/* Services Grid */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="bg-[#FFFFFF] border border-[#E0D7CC] p-6 sm:p-7 hover:border-[#C5A880] transition-all duration-300 flex flex-col justify-between group text-left relative overflow-hidden shadow-xs hover:shadow-md"
              >
                {/* Accent top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#C5A880] transition-colors" />

                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8C714D]">
                      {service.category}
                    </span>
                    {service.featured && (
                      <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#F4EDE2] text-[#8C714D] font-bold border border-[#E2D6C5]">
                        Popular
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-2xl text-[#17181C] group-hover:text-[#8C714D] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#5C5850] leading-relaxed">
                    {service.description}
                  </p>

                  {service.recommendedFor && (
                    <div className="pt-2 border-t border-[#F2ECE4] text-xs text-[#7B766D]">
                      <span className="font-semibold text-[#3C3933]">Recommended For:</span>{' '}
                      {service.recommendedFor}
                    </div>
                  )}
                </div>

                <div className="pt-6 mt-4 border-t border-[#ECE5DB] flex items-center justify-between">
                  <button
                    id={`service-enquire-btn-${service.id}`}
                    onClick={() => onOpenEnquiry(service.name)}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-[#17181C] group-hover:text-[#A88B63] transition-colors cursor-pointer"
                  >
                    <span>Enquire / Book</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#A88B63]" />
                  </button>

                  <a
                    href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="text-xs text-[#7A756D] hover:text-[#17181C] flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3 text-[#A88B63]" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#FFFFFF] border border-[#E0D7CC] p-8 space-y-4">
            <p className="text-sm text-[#66625B]">
              No services matched your current search &ldquo;{searchQuery}&rdquo;.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('ALL');
              }}
              className="px-6 py-2.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Bottom Consultation Box */}
        <div className="mt-16 bg-[#17181C] text-[#FAF8F5] p-8 sm:p-12 border border-[#3E3D38] flex flex-col md:flex-row items-center justify-between gap-8 text-left">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C5A880] font-semibold">
              Personalized Appointments
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5]">
              Looking for a Custom Treatment or Bridal Package?
            </h3>
            <p className="text-xs sm:text-sm text-[#A8A296] max-w-xl">
              Connect with our senior stylists at Ganpati Complex, Vidyapeeth Road to discuss bridal timelines, keratin/cysteine smoothing requirements, or family appointments.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full md:w-auto">
            <button
              onClick={() => onOpenEnquiry()}
              className="px-6 py-3.5 bg-[#C5A880] text-[#17181C] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#D4BC9B] transition-colors cursor-pointer text-center"
            >
              Send Enquiry
            </button>
            <a
              href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
              className="px-6 py-3.5 border border-[#54524C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:border-[#C5A880] hover:text-[#C5A880] transition-colors text-center"
            >
              Call +91 63891 22360
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
