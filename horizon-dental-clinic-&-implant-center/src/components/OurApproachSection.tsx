import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const OurApproachSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Line animation
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

      // Sequential principle cards reveal
      if (cardsRef.current) {
        gsap.fromTo(
          cardsRef.current.children,
          { y: 35, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const principles = [
    {
      num: '01',
      stage: 'STAGE_DISCOVERY',
      title: 'Understand',
      description: 'Start by discussing your concerns, symptoms, and oral health goals in a transparent clinical environment.'
    },
    {
      num: '02',
      stage: 'STAGE_ANALYSIS',
      title: 'Explore',
      description: 'Learn about relevant treatment options, their benefits, limitations, surgical pathways, and considerations.'
    },
    {
      num: '03',
      stage: 'STAGE_DELIVERY',
      title: 'Plan',
      description: 'Discuss clinical recommendations and structured next steps with your specialized dental professional.'
    }
  ];

  return (
    <section
      id="approach"
      ref={containerRef}
      className="w-full bg-[#12243A] text-white px-4 md:px-12 py-16 lg:py-24 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="max-w-3xl flex flex-col gap-2">
          <span className="font-mono-tech text-xs text-[#73F7EF] tracking-widest uppercase">
            OUR APPROACH
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            KNOW YOUR OPTIONS. TAKE YOUR NEXT STEP.
          </h2>
          <p className="text-sm sm:text-base text-[#7A8CA6] leading-relaxed">
            Understanding your oral health concerns and the available care options can help you have more productive conversations with your dental professional.
          </p>
        </div>

        {/* Principles Chain with Connecting Line */}
        <div className="relative">
          {/* Desktop Connecting Line */}
          <div
            ref={lineRef}
            className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-[#19B7B0]/40 z-0"
          ></div>

          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {principles.map((p) => (
              <div
                key={p.num}
                className="flex flex-col gap-3 p-6 rounded-lg bg-[#000E21]/80 border border-white/10 backdrop-blur-sm shadow-sm hover:border-[#19B7B0]/50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-lg bg-[#006A66] text-white font-mono-tech text-lg flex items-center justify-center font-bold">
                    {p.num}
                  </span>
                  <span className="font-mono-tech text-[11px] text-[#73F7EF]">
                    {p.stage}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight mt-1">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#7A8CA6] leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
