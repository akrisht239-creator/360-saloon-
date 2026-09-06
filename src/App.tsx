/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';
import { EnquiryModal } from './components/EnquiryModal';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { VisitPage } from './pages/VisitPage';

export type PageId = 'home' | 'services' | 'about' | 'visit';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);

  // Sync route with URL hash on load and hashchange
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (hash === 'services' || hash === 'about' || hash === 'visit' || hash === 'home') {
        setCurrentPage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Update document title dynamically based on current page
  useEffect(() => {
    const titles: Record<PageId, string> = {
      home: '360 Salon Varanasi | Family Salon, Hair & Beauty at Vidyapeeth Road',
      services: 'Services & Treatments | 360 Salon Vidyapeeth Road, Varanasi',
      about: 'About Us | 360 Salon - Leading Family Salon in Varanasi',
      visit: 'Visit 360 Salon | Ganpati Complex, Vidyapeeth Road, Varanasi'
    };

    document.title = titles[currentPage] || titles.home;
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : `#${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEnquiry = (serviceName?: string) => {
    setPreselectedService(serviceName);
    setEnquiryModalOpen(true);
  };

  const handleCloseEnquiry = () => {
    setEnquiryModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#17181C] relative selection:bg-[#E2D5C3] selection:text-[#17181C]">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#17181C] text-[#FAF8F5] text-xs font-semibold uppercase tracking-wider"
      >
        Skip to main content
      </a>

      {/* Global Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Main Page View Content */}
      <main id="main-content" className="flex-grow">
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'services' && (
          <ServicesPage
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
        {currentPage === 'visit' && (
          <VisitPage
            onOpenEnquiry={handleOpenEnquiry}
          />
        )}
      </main>

      {/* Global Luxury Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Fixed Mobile Bottom CTA Bar (CALL, DIRECTIONS, ENQUIRE) */}
      <MobileBottomBar
        onOpenEnquiry={handleOpenEnquiry}
      />

      {/* Global Consultation / Booking Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={handleCloseEnquiry}
        preselectedService={preselectedService}
      />
    </div>
  );
}
