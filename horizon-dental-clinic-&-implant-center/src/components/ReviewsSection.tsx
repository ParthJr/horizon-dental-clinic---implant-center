import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CLINIC_CONFIG, PATIENT_REVIEWS } from '../config/clinicData';

gsap.registerPlugin(ScrollTrigger);

export const ReviewsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || !containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="verified-reviews"
      ref={containerRef}
      className="w-full bg-[#EDF4FF] px-4 md:px-12 py-16 lg:py-24 border-b border-[#E1E8ED]"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Main Banner Card */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#E1E8ED] shadow-sm flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="w-24 h-24 rounded-2xl bg-[#E3EFFF] flex flex-col items-center justify-center border border-[#E1E8ED] shrink-0">
              <span className="font-extrabold text-3xl text-[#000E21] leading-none">
                {CLINIC_CONFIG.googleRating.score.toFixed(1)}
              </span>
              <span className="font-mono-tech text-[10px] text-[#536476] font-bold mt-1">
                OUT OF 5
              </span>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-[#80931F]">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-[24px] text-[#D7ED70] fill-active"
                  >
                    star
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold text-[#000E21]">
                Patient Rated Excellence in Sargasan
              </h3>
              <p className="text-xs sm:text-sm text-[#44474D]">
                Based on {CLINIC_CONFIG.googleRating.reviewCount} verified Google patient reviews across surgical, restorative, and routine preventative care.
              </p>
            </div>
          </div>

          <a
            href={CLINIC_CONFIG.googleRating.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#000E21] hover:bg-[#006A66] text-white px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shrink-0 shadow-sm"
          >
            <span>READ GOOGLE REVIEWS</span>
            <span className="material-symbols-outlined text-[18px]">open_in_new</span>
          </a>
        </div>

        {/* Patient Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-white p-5 rounded-xl border border-[#E1E8ED] shadow-sm flex flex-col justify-between gap-4"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-0.5 text-[#D7ED70]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <span
                        key={i}
                        className="material-symbols-outlined text-[18px] text-[#D7ED70] fill-active"
                      >
                        star
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono-tech bg-[#EAF5F8] text-[#006A66] px-2 py-0.5 rounded font-bold">
                    {rev.treatmentTag}
                  </span>
                </div>

                <p className="text-xs text-[#44474D] leading-relaxed italic">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-3 border-t border-[#E1E8ED] flex items-center justify-between text-xs">
                <div className="flex flex-col">
                  <span className="font-bold text-[#000E21]">{rev.authorName}</span>
                  <span className="text-[11px] text-[#536476]">{rev.location}</span>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[11px] font-mono-tech text-[#006A66]">
                    <span className="material-symbols-outlined text-[14px]">verified</span>
                    Verified
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
