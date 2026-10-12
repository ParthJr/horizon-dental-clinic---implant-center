import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ImplantEducationSectionProps {
  onRequestImplantConsultation: () => void;
}

export const ImplantEducationSection: React.FC<ImplantEducationSectionProps> = ({
  onRequestImplantConsultation,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !timelineRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        timelineRef.current?.children || [],
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stages = [
    {
      num: '01',
      code: 'STAGE_01',
      title: 'Initial Consultation',
      detail: 'Discuss missing teeth, your specific concerns, health history, and overall aesthetic or functional expectations.',
    },
    {
      num: '02',
      code: 'STAGE_02',
      title: 'Clinical Assessment',
      detail: 'Your dental professional evaluates bone density, gingival health, and orders CBCT 3D radiography if necessary.',
    },
    {
      num: '03',
      code: 'STAGE_03',
      title: 'Treatment Planning',
      detail: 'Review suitable alternatives, surgical sequencing, estimated healing schedules, costs, and known procedural risks.',
    },
    {
      num: '04',
      code: 'STAGE_04',
      title: 'Restoration & Follow-up',
      detail: 'Crown placement, occlusal verification, and ongoing long-term maintenance required for implant longevity.',
    },
  ];

  return (
    <section
      id="implant-education"
      ref={containerRef}
      className="w-full bg-[#12243A] text-white px-4 md:px-12 py-16 lg:py-24 border-b border-[#E1E8ED]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl flex flex-col gap-2">
            <div className="inline-flex">
              <span className="bg-[#D7ED70] text-[#181E00] font-mono-tech text-xs font-bold px-3 py-1 rounded-sm uppercase">
                TOOTH REPLACEMENT OPTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              UNDERSTAND THE PROCESS BEFORE YOU DECIDE.
            </h2>
            <p className="text-sm sm:text-base text-[#7A8CA6] leading-relaxed">
              Dental implant treatment can involve several stages, including assessment, treatment planning, placement where appropriate, restoration, and follow-up care.
            </p>
          </div>
          <button
            onClick={onRequestImplantConsultation}
            className="inline-flex items-center justify-center bg-[#006A66] hover:bg-[#19B7B0] text-white hover:text-[#12243A] px-6 py-3.5 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            REQUEST AN IMPLANT CONSULTATION
          </button>
        </div>

        {/* 4-Stage Timeline Cards */}
        <div className="relative pt-4">
          {/* Connector line for desktop */}
          <div className="hidden md:block absolute top-12 left-10 right-10 h-0.5 bg-[#006A66]/40 z-0"></div>

          <div ref={timelineRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {stages.map((stg) => (
              <div
                key={stg.num}
                className="flex flex-col gap-3 bg-[#000E21]/80 border border-white/10 p-6 rounded-xl backdrop-blur-sm shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <span className="w-8 h-8 rounded-full bg-[#006A66] text-white font-mono-tech text-xs flex items-center justify-center font-bold">
                    {stg.num}
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#73F7EF]">
                    {stg.code}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mt-1">
                  {stg.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A8CA6] leading-relaxed">
                  {stg.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Disclaimer Banner */}
        <div className="bg-[#000E21] p-5 rounded-xl border border-white/10 flex items-start gap-4">
          <span className="material-symbols-outlined text-[#D7ED70] text-[24px] shrink-0 mt-0.5">
            info
          </span>
          <p className="text-xs sm:text-sm text-[#7A8CA6] leading-relaxed">
            <span className="font-bold text-white">Educational note:</span> Dental implants are not suitable for everyone. Individual bone density, systemic conditions, and periodontal status determine clinical eligibility. Alternative restorative procedures (such as fixed bridges or partials) should be thoroughly discussed with a qualified dental specialist.
          </p>
        </div>
      </div>
    </section>
  );
};
