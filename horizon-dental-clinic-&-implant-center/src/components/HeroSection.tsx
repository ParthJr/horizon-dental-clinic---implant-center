import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { CLINIC_CONFIG } from '../config/clinicData';

interface HeroSectionProps {
  onExploreClick: () => void;
  onRequestConsultationClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onRequestConsultationClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const accentRef = useRef<HTMLDivElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // 1. Reveal headline lines
      if (headlineRef.current) {
        tl.fromTo(
          headlineRef.current.querySelectorAll('.hero-line'),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
        );
      }

      // 2. Reveal image with clip mask transition
      if (imageRef.current) {
        tl.fromTo(
          imageRef.current,
          { clipPath: 'inset(10% 10% 10% 10% round 12px)', opacity: 0.2 },
          { clipPath: 'inset(0% 0% 0% 0% round 12px)', opacity: 1, duration: 0.9 },
          '-=0.5'
        );
      }

      // 3. Move turquoise accent subtly
      if (accentRef.current) {
        tl.fromTo(
          accentRef.current,
          { scale: 0.8, opacity: 0 },
          { scale: 1, opacity: 0.2, duration: 1 },
          '-=0.7'
        );
      }

      // 4. Fade & translate supporting text
      if (subtextRef.current) {
        tl.fromTo(
          subtextRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          '-=0.6'
        );
      }

      // 5. Stagger CTA entrances
      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current.children,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
          '-=0.4'
        );
      }

      if (trustRef.current) {
        tl.fromTo(
          trustRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          '-=0.2'
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="w-full bg-[#FFFFFF] px-4 md:px-12 pt-36 pb-16 lg:py-24 relative overflow-hidden border-b border-[#E1E8ED]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Content Column */}
        <div className="lg:col-span-6 flex flex-col gap-6 z-10">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 text-[#006A66]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#19B7B0] animate-pulse"></span>
            <span className="font-mono-tech text-xs uppercase tracking-wider font-bold">
              HORIZON DENTAL CLINIC AND IMPLANT CENTER · SARGASAN
            </span>
          </div>

          {/* Staggered Headline */}
          <h1
            ref={headlineRef}
            className="font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#000E21] tracking-tight leading-[1.15]"
          >
            <span className="hero-line block">BETTER UNDERSTANDING.</span>
            <span className="hero-line block text-[#12243A]">HEALTHIER SMILES.</span>
          </h1>

          {/* Supporting Copy */}
          <p
            ref={subtextRef}
            className="text-base sm:text-lg text-[#44474D] max-w-xl leading-relaxed font-normal"
          >
            {CLINIC_CONFIG.supportingCopy}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center bg-[#12243A] hover:bg-[#19B7B0] text-white hover:text-[#12243A] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-sm"
            >
              EXPLORE TREATMENTS
            </button>
            <button
              onClick={onRequestConsultationClick}
              className="inline-flex items-center justify-center bg-[#EAF5F8] hover:bg-[#D8EAFF] text-[#12243A] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 gap-2"
            >
              <span>REQUEST A CONSULTATION</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>

          {/* Reputation Indicator Badge */}
          <div ref={trustRef} className="pt-2 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-0.5 text-[#80931F]">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[20px] text-[#D7ED70] fill-active"
                >
                  star
                </span>
              ))}
            </div>
            <a
              href={CLINIC_CONFIG.googleRating.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-tech text-xs text-[#0B1D2C] hover:text-[#006A66] flex items-center gap-1.5 transition-colors"
            >
              <span className="font-bold">{CLINIC_CONFIG.googleRating.badgeText}</span>
              <span className="material-symbols-outlined text-[14px] text-[#19B7B0]">verified</span>
            </a>
          </div>
        </div>

        {/* Right Visual Column */}
        <div className="lg:col-span-6 relative">
          <div
            ref={imageRef}
            className="relative rounded-xl overflow-hidden shadow-xl bg-[#D8EAFF] border border-[#E1E8ED]"
          >
            {/* Background glowing accent */}
            <div
              ref={accentRef}
              className="absolute -top-12 -right-12 w-64 h-64 bg-[#19B7B0]/20 rounded-full blur-3xl pointer-events-none"
            ></div>

            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMsjAxpTyohgzoOs-Ndbgszm4TuhVnw2sEY8SzJAE8yFvy-vSgjeqdhzHv1cOMUQUDba5wEKtaZjn1M6mg9bW-B_yasaM9VSO39fSsYvCVGJhRwhjpDOPqSFfhVWHbVuNICIxJxLFK8rWe3ALVKCEElSBDDAlzk8GbZmfsehRJmW7maxDoQBoID89_y1mjgDYcJwIy0CNSttu_RBTe0PRh10juJyDMU-0ZUBCF4FPXtObuNTH_rwO9"
              alt="Horizon Dental Operatory Suite in Sargasan Gandhinagar"
              className="w-full h-[380px] sm:h-[460px] object-cover object-center"
            />

            {/* Surgical Tag */}
            <div className="absolute top-4 left-4 bg-[#D7ED70] text-[#181E00] px-3 py-1 rounded text-xs font-mono-tech uppercase font-bold shadow-sm">
              SARGASAN CLINICAL SUITE
            </div>

            {/* Floating Clinical Stats Bar */}
            <div className="absolute bottom-4 left-4 right-4 bg-[#12243A]/95 backdrop-blur-md p-3.5 rounded-lg text-white shadow-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-white/10 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px]">verified_user</span>
                <span className="font-semibold">Gandhinagar Care</span>
              </div>
              <div className="hidden sm:block text-[#7A8CA6]">•</div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px]">biotech</span>
                <span className="font-semibold">Digital Diagnostics</span>
              </div>
              <div className="hidden sm:block text-[#7A8CA6]">•</div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[#73F7EF] text-[18px]">dentistry</span>
                <span className="font-semibold">Precision Implants</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
