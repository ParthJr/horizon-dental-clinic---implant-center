import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms') => void;
  onNavigate: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy, onNavigate }) => {
  return (
    <footer className="w-full bg-[#12243A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#19B7B0] text-[#12243A] font-bold font-mono-tech text-base flex items-center justify-center">
                H
              </div>
              <span className="font-extrabold text-xl text-white tracking-tight">
                HORIZON DENTAL
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#7A8CA6] leading-relaxed max-w-md">
              Advanced oral implantology, digital CBCT diagnostic diagnostics, and compassionate surgical care serving Sargasan and Gandhinagar with precision-first dental medicine.
            </p>

            <div className="flex flex-col gap-2 pt-2 text-xs text-[#7A8CA6]">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px] shrink-0 mt-0.5">
                  location_on
                </span>
                <span>{CLINIC_CONFIG.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px] shrink-0">
                  call
                </span>
                <a
                  href={CLINIC_CONFIG.telLink}
                  className="text-white hover:text-[#73F7EF] font-mono-tech font-bold transition-colors"
                >
                  {CLINIC_CONFIG.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px] shrink-0">
                  schedule
                </span>
                <span className="font-mono-tech">{CLINIC_CONFIG.openingHours.weeklySchedule}</span>
              </div>
            </div>
          </div>

          {/* Treatments Link Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-xs font-bold text-[#73F7EF] uppercase tracking-wider">
              Treatments
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#7A8CA6]">
              <li>
                <a
                  href="#treatments-directory"
                  onClick={(e) => { e.preventDefault(); onNavigate('#treatments-directory'); }}
                  className="hover:text-white transition-colors"
                >
                  General Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#treatments-directory"
                  onClick={(e) => { e.preventDefault(); onNavigate('#treatments-directory'); }}
                  className="hover:text-white transition-colors"
                >
                  Restorative Prosthetics
                </a>
              </li>
              <li>
                <a
                  href="#treatments-directory"
                  onClick={(e) => { e.preventDefault(); onNavigate('#treatments-directory'); }}
                  className="hover:text-white transition-colors"
                >
                  Cosmetic Dentistry & Veneers
                </a>
              </li>
              <li>
                <a
                  href="#implant-education"
                  onClick={(e) => { e.preventDefault(); onNavigate('#implant-education'); }}
                  className="hover:text-white transition-colors"
                >
                  Advanced Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="#procedure-visualizer"
                  onClick={(e) => { e.preventDefault(); onNavigate('#procedure-visualizer'); }}
                  className="hover:text-white transition-colors"
                >
                  Orthodontics & Clear Aligners
                </a>
              </li>
              <li>
                <a
                  href="#treatments-directory"
                  onClick={(e) => { e.preventDefault(); onNavigate('#treatments-directory'); }}
                  className="hover:text-white transition-colors"
                >
                  Surgical Tooth Extractions
                </a>
              </li>
            </ul>
          </div>

          {/* Patient Resources Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-xs font-bold text-[#73F7EF] uppercase tracking-wider">
              Patient Resources
            </span>
            <ul className="flex flex-col gap-2 text-xs sm:text-sm text-[#7A8CA6]">
              <li>
                <a
                  href="#patient-journey"
                  onClick={(e) => { e.preventDefault(); onNavigate('#patient-journey'); }}
                  className="hover:text-white transition-colors"
                >
                  Consultation Protocol
                </a>
              </li>
              <li>
                <a
                  href="#procedure-visualizer"
                  onClick={(e) => { e.preventDefault(); onNavigate('#procedure-visualizer'); }}
                  className="hover:text-white transition-colors"
                >
                  CBCT Scan & Diagnosis
                </a>
              </li>
              <li>
                <a
                  href="#patient-faq"
                  onClick={(e) => { e.preventDefault(); onNavigate('#patient-faq'); }}
                  className="hover:text-white transition-colors"
                >
                  Pre- & Post-Op Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#location-contact"
                  onClick={(e) => { e.preventDefault(); onNavigate('#location-contact'); }}
                  className="hover:text-white transition-colors"
                >
                  Location Directions (Sargasan)
                </a>
              </li>
            </ul>
          </div>

          {/* Clinical Assurance Column */}
          <div className="flex flex-col gap-4">
            <span className="font-mono-tech text-xs font-bold text-[#73F7EF] uppercase tracking-wider">
              Clinical Assurance
            </span>
            <div className="p-4 rounded-xl bg-[#000E21]/80 border-l-2 border-l-[#D7ED70] border border-white/5 flex flex-col gap-1">
              <span className="font-mono-tech text-[11px] text-[#D7ED70] uppercase font-bold">
                ISO Standard Sterilization
              </span>
              <p className="text-xs text-[#7A8CA6] leading-relaxed">
                Class-B autoclaved instruments and zero-cross-contamination operatory suites.
              </p>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] font-mono-tech text-[#7A8CA6] pt-1">
              <span className="material-symbols-outlined text-[16px] text-[#19B7B0]">
                verified
              </span>
              <span>NABH ACCREDITED STANDARDS</span>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#7A8CA6] text-center lg:text-left leading-relaxed max-w-2xl">
            <span className="font-semibold text-white">Clinical Disclaimer:</span> {CLINIC_CONFIG.disclaimerText}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-[#7A8CA6] shrink-0">
            <button
              onClick={() => onOpenPolicy('privacy')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => onOpenPolicy('terms')}
              className="hover:text-white transition-colors underline-offset-4 hover:underline"
            >
              Terms of Use
            </button>
            <span>•</span>
            <span className="font-mono-tech text-[11px]">© 2026 {CLINIC_CONFIG.businessName}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
