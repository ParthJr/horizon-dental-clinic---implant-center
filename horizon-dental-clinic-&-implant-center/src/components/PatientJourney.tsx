import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PatientJourney: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const stepsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate connecting line
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 1.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 75%',
            },
          }
        );
      }

      // Stagger steps reveal
      if (stepsRef.current) {
        gsap.fromTo(
          stepsRef.current.children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: stepsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const journeySteps = [
    {
      num: '01',
      code: 'STEP_INQUIRY',
      title: 'Get in touch',
      description: 'Request an appointment and share the primary reason or discomfort prompting your visit.',
    },
    {
      num: '02',
      code: 'STEP_DIALOGUE',
      title: 'Discuss concerns',
      description: 'Explain your symptoms, cosmetic aspirations, and medical circumstances during your one-on-one session.',
    },
    {
      num: '03',
      code: 'STEP_DIAGNOSIS',
      title: 'Review options',
      description: 'Understand the clinical examination findings, radiograph insights, and evidence-based treatment plans.',
    },
    {
      num: '04',
      code: 'STEP_EXECUTION',
      title: 'Plan next steps',
      description: 'Discuss timing, scheduling, costs, post-op instructions, and resolve all questions prior to treatment.',
    },
  ];

  return (
    <section
      id="patient-journey"
      ref={containerRef}
      className="w-full bg-[#000E21] text-white px-4 md:px-12 py-16 lg:py-24 border-b border-white/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="max-w-2xl flex flex-col gap-2">
          <span className="font-mono-tech text-xs text-[#73F7EF] tracking-widest uppercase font-bold">
            WORKFLOW TRANSPARENCY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            FROM YOUR FIRST VISIT TO YOUR CARE PLAN.
          </h2>
          <p className="text-sm sm:text-base text-[#7A8CA6] leading-relaxed">
            A structured clinical roadmap designed to keep you informed, comfortable, and in full control of your care.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative pt-2">
          {/* Connecting line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-[#73F7EF]/30 z-0"
          ></div>

          <div ref={stepsRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {journeySteps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-3 bg-[#12243A] p-6 rounded-xl border border-white/10 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-full bg-[#6FF4EC] text-[#00201E] font-mono-tech text-xs flex items-center justify-center font-bold">
                    {step.num}
                  </span>
                  <span className="font-mono-tech text-[10px] text-[#73F7EF]">
                    {step.code}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mt-1">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A8CA6] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
