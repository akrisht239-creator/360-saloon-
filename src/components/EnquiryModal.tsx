import React, { useState, useEffect } from 'react';
import { X, Phone, CheckCircle2, MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { ALL_SERVICES, SALON_INFO } from '../data/salonData';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const EnquiryModal: React.FC<EnquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedService
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: preselectedService || 'Haircut',
    preferredDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitted(false);
      setErrorMsg('');
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your name and contact phone number.');
      return;
    }
    // Clean phone check
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);
  };

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div
      id="enquiry-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="enquiry-modal-content"
        className="relative w-full max-w-lg bg-[#FAF8F5] border border-[#D9D2C7] shadow-2xl p-6 sm:p-8 my-8 text-[#17181C]"
      >
        {/* Close button */}
        <button
          id="close-enquiry-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-1 text-[#76736C] hover:text-[#17181C] transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div id="enquiry-success-view" className="text-center py-6 space-y-5">
            <div className="w-14 h-14 bg-[#F2ECE1] border border-[#C5A880] rounded-full mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-7 h-7 text-[#A88B63]" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#A88B63] font-semibold">
                Enquiry Received
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#17181C]">
                Thank You, {formData.name}
              </h3>
              <p className="text-sm text-[#66625B] leading-relaxed max-w-sm mx-auto">
                Our front desk team at Vidyapeeth Road will call you at{' '}
                <span className="font-semibold text-[#17181C]">{formData.phone}</span> to confirm
                availability and discuss your service requirements.
              </p>
            </div>

            <div className="bg-[#F3EFEA] p-4 text-xs text-[#524E47] border border-[#E0D9CE] text-left space-y-1">
              <p><span className="font-medium text-[#17181C]">Selected Service:</span> {formData.service}</p>
              {formData.preferredDate && (
                <p><span className="font-medium text-[#17181C]">Preferred Date:</span> {formData.preferredDate}</p>
              )}
              <p><span className="font-medium text-[#17181C]">Location:</span> 360 SALON, Ganpati Complex, Vidyapeeth Road</p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <a
                id="success-call-direct-btn"
                href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 bg-[#17181C] text-[#FAF8F5] text-xs uppercase font-medium tracking-wider hover:bg-[#2C2B29] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Salon Now
              </a>
              <button
                id="success-dismiss-btn"
                onClick={onClose}
                className="flex-1 py-3 border border-[#C5A880] text-[#17181C] text-xs uppercase font-medium tracking-wider hover:bg-[#F0EAE1] transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="space-y-2 mb-6">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#A88B63] font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>360 SALON • Enquiry</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-[#17181C]">
                Book Your Consultation
              </h2>
              <p className="text-xs text-[#736E66] leading-relaxed">
                Connect with our team to inquire about appointments, treatments, or custom bridal packages.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-[#FBF1F0] border border-[#E4B8B6] text-xs text-[#9B2C2C]">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#47443E] mb-1.5">
                  Your Full Name <span className="text-[#A88B63]">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Priya Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D9D2C7] focus:border-[#17181C] focus:outline-none text-sm text-[#17181C]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#47443E] mb-1.5">
                  Contact Phone Number <span className="text-[#A88B63]">*</span>
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 border border-r-0 border-[#D9D2C7] bg-[#F2EEE8] text-xs font-semibold text-[#5A564F]">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="63891 22360"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#D9D2C7] focus:border-[#17181C] focus:outline-none text-sm text-[#17181C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#47443E] mb-1.5">
                    Select Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FFFFFF] border border-[#D9D2C7] focus:border-[#17181C] focus:outline-none text-xs text-[#17181C]"
                  >
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.category})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-[#47443E] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={getTodayDate()}
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2.5 bg-[#FFFFFF] border border-[#D9D2C7] focus:border-[#17181C] focus:outline-none text-xs text-[#17181C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#47443E] mb-1.5">
                  Message / Specific Request (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Share details such as wedding date, specific stylist preference, or query..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 bg-[#FFFFFF] border border-[#D9D2C7] focus:border-[#17181C] focus:outline-none text-xs text-[#17181C] resize-none"
                />
              </div>

              <button
                id="submit-enquiry-form-btn"
                type="submit"
                className="w-full py-3.5 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-[0.2em] hover:bg-[#2C2B29] transition-colors cursor-pointer border border-[#17181C]"
              >
                SEND ENQUIRY
              </button>

              <div className="pt-2 text-center">
                <p className="text-[11px] text-[#78746D]">
                  Need immediate confirmation? Call directly at{' '}
                  <a
                    href={`tel:${SALON_INFO.primaryPhone.replace(/\s+/g, '')}`}
                    className="underline text-[#17181C] font-semibold hover:text-[#A88B63]"
                  >
                    {SALON_INFO.primaryPhone}
                  </a>
                </p>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
