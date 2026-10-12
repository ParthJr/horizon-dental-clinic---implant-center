import React, { useState, useEffect } from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface HeaderProps {
  onBookClick: (serviceTitle?: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onBookClick, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero', id: 'hero' },
    { label: 'Our Approach', href: '#approach', id: 'approach' },
    { label: 'Treatments', href: '#treatments-directory', id: 'treatments-directory' },
    { label: 'Procedure Visualizer', href: '#procedure-visualizer', id: 'procedure-visualizer' },
    { label: 'Dental Implants', href: '#implant-education', id: 'implant-education' },
    { label: 'Patient Guide', href: '#patient-faq', id: 'patient-faq' },
    { label: 'Location & Contact', href: '#location-contact', id: 'location-contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#000E21] text-white py-2 px-4 md:px-12 text-xs border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#B6C8E4]">
              <span className="material-symbols-outlined text-[16px] text-[#73F7EF]">location_on</span>
              {CLINIC_CONFIG.address.area}, {CLINIC_CONFIG.address.city}, {CLINIC_CONFIG.address.state}
            </span>
            <a
              href={CLINIC_CONFIG.telLink}
              className="flex items-center gap-1.5 text-white hover:text-[#73F7EF] transition-colors font-mono-tech font-bold"
            >
              <span className="material-symbols-outlined text-[16px] text-[#73F7EF]">call</span>
              {CLINIC_CONFIG.phone}
            </a>
          </div>
          <div className="flex items-center gap-4 justify-between md:justify-end">
            <span className="flex items-center gap-2 font-mono-tech text-[#D7ED70]">
              <span className="w-2 h-2 rounded-full bg-[#19B7B0] animate-pulse"></span>
              {CLINIC_CONFIG.openingHours.displayShort}
            </span>
            <span className="hidden lg:inline text-[#7A8CA6] font-mono-tech text-[11px]">
              CLINICAL_CODE: {CLINIC_CONFIG.clinicalCode}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 px-4 md:px-12 ${
        scrolled
          ? 'bg-[#FFFFFF]/95 backdrop-blur-md shadow-md py-3'
          : 'bg-[#FFFFFF] py-4 border-b border-[#E1E8ED]'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-lg bg-[#12243A] text-white font-bold font-mono-tech text-lg flex items-center justify-center group-hover:bg-[#19B7B0] transition-colors">
              H
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[#000E21] text-lg tracking-tight leading-none">
                HORIZON
              </span>
              <span className="font-mono-tech text-[10px] text-[#006A66] font-bold uppercase tracking-widest mt-0.5">
                Dental & Implant Center
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`py-1 text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-[#000E21] font-bold after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-[#19B7B0]'
                      : 'text-[#44474D] hover:text-[#000E21]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onBookClick()}
              className="hidden sm:inline-flex items-center justify-center bg-[#12243A] hover:bg-[#19B7B0] text-white hover:text-[#12243A] px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow"
            >
              BOOK A CONSULTATION
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#12243A] hover:bg-[#EAF5F8] transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="material-symbols-outlined text-[28px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#12243A] text-white border-b border-[#19B7B0]/30 shadow-xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="text-base font-medium text-slate-200 hover:text-[#19B7B0] transition-colors py-1.5 border-b border-white/10"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-3">
              <button
                onClick={() => { setMobileMenuOpen(false); onBookClick(); }}
                className="w-full bg-[#19B7B0] text-[#12243A] font-bold py-3 rounded-lg text-center text-sm uppercase tracking-wider hover:bg-[#D2E86C] transition-colors"
              >
                BOOK A CONSULTATION
              </button>
              <a
                href={CLINIC_CONFIG.telLink}
                className="w-full border border-white/20 text-white font-mono-tech text-xs text-center py-2.5 rounded-lg flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-[#19B7B0]">call</span>
                Call Clinic: {CLINIC_CONFIG.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
