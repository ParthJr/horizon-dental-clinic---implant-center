import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { VERIFIED_SERVICES, TreatmentService } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

interface TreatmentDirectoryProps {
  onEnquireTreatment: (serviceTitle: string) => void;
}

export const TreatmentDirectory: React.FC<TreatmentDirectoryProps> = ({ onEnquireTreatment }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !gridRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        gridRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [selectedCategory, searchQuery]);

  const categories = ['All', 'General', 'Restorative', 'Cosmetic', 'Implants', 'Orthodontics', 'Surgery'];

  const filteredServices = VERIFIED_SERVICES.filter((service) => {
    const matchesCat = selectedCategory === 'All' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.code.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section
      id="treatments-directory"
      ref={containerRef}
      className="w-full bg-[#F7F9FF] px-4 md:px-12 py-16 lg:py-24 border-b border-[#E1E8ED]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <span className="font-mono-tech text-xs text-[#006A66] tracking-widest uppercase font-bold">
              SERVICE INDEX
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000E21] tracking-tight">
              EXPLORE DENTAL CARE.
            </h2>
            <p className="text-sm sm:text-base text-[#44474D] leading-relaxed">
              Learn about common dental treatments and the questions worth discussing during an in-person consultation.
            </p>
          </div>
          <div className="font-mono-tech text-xs text-[#536476] bg-[#EAF5F8] px-3 py-1.5 rounded-md border border-[#E1E8ED] self-start md:self-end">
            PROCEDURAL CATALOG · REVISED 2026
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 bg-white p-3 rounded-xl border border-[#E1E8ED] shadow-sm">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#12243A] text-white shadow-sm'
                    : 'text-[#44474D] hover:bg-[#EAF5F8] hover:text-[#12243A]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[220px]">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search treatments..."
              className="w-full pl-9 pr-3 py-1.5 rounded-lg text-xs bg-[#F7F9FF] border border-[#E1E8ED] text-[#000E21] focus:outline-none focus:border-[#19B7B0]"
            />
            <span className="material-symbols-outlined text-[18px] text-[#74777D] absolute left-2.5 top-2">
              search
            </span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-2 text-[#74777D] hover:text-[#000E21]"
              >
                <span className="material-symbols-outlined text-[16px]">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Treatments Cards Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: TreatmentService) => (
            <div
              key={service.id}
              className="flex flex-col justify-between bg-white p-6 rounded-xl border border-[#E1E8ED] shadow-sm hover:shadow-md hover:border-[#19B7B0]/60 transition-all group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tech text-xs text-[#006A66] font-bold">
                    {service.code}
                  </span>
                  <span className="material-symbols-outlined text-[#006A66] text-[26px] group-hover:scale-110 transition-transform">
                    {service.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#000E21] tracking-tight">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                  {service.summary}
                </p>

                {/* Patient Note Box */}
                <div className="bg-[#EDF4FF] p-3.5 rounded-lg border-l-2 border-l-[#19B7B0]">
                  <p className="text-xs text-[#0B1D2C] leading-normal">
                    <span className="font-bold text-[#000E21]">Patient Note:</span> {service.patientNote}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="flex flex-col gap-1.5 pt-1">
                  <span className="text-[11px] font-mono-tech uppercase font-bold text-[#536476]">
                    Key Considerations:
                  </span>
                  <ul className="text-xs text-[#44474D] space-y-1">
                    {service.keyBenefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="material-symbols-outlined text-[14px] text-[#19B7B0] shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer */}
              <div className="pt-6 flex flex-col gap-2 border-t border-[#E1E8ED] mt-4">
                <span className="font-mono-tech text-[10px] text-[#74777D]">
                  {service.suitabilityDisclaimer}
                </span>
                <button
                  onClick={() => onEnquireTreatment(service.title)}
                  className="w-full inline-flex items-center justify-center bg-[#D8EAFF] hover:bg-[#19B7B0] text-[#000E21] hover:text-white font-bold text-xs py-2.5 rounded-lg transition-colors gap-1.5 group-hover:bg-[#12243A] group-hover:text-white"
                >
                  <span>Enquire About This Treatment</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}

          {filteredServices.length === 0 && (
            <div className="col-span-full bg-white p-12 text-center rounded-xl border border-[#E1E8ED] flex flex-col items-center gap-3">
              <span className="material-symbols-outlined text-4xl text-[#74777D]">search_off</span>
              <p className="text-sm font-semibold text-[#000E21]">No treatments matched your search criteria.</p>
              <button
                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                className="text-xs font-bold text-[#006A66] hover:underline"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
