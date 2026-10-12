import React, { useState } from 'react';
import { PATIENT_FAQS } from '../config/clinicData';

export const PatientEducationSection: React.FC = () => {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>(['faq-1']);

  const toggleFaq = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="patient-faq" className="w-full bg-[#FFFFFF] px-4 md:px-12 py-16 lg:py-24 border-b border-[#E1E8ED]">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center items-center">
          <span className="font-mono-tech text-xs text-[#006A66] tracking-widest uppercase font-bold">
            PATIENT INFORMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000E21] tracking-tight">
            YOUR QUESTIONS MATTER.
          </h2>
          <p className="text-sm sm:text-base text-[#44474D] max-w-xl leading-relaxed">
            Clear, honest information helps eliminate apprehension and equips you to collaborate meaningfully in your treatment path.
          </p>
        </div>

        {/* Accordion Panels */}
        <div className="flex flex-col gap-3">
          {PATIENT_FAQS.map((faq, index) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-[#EDF4FF] rounded-xl border border-[#E1E8ED] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${faq.id}`}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-[#19B7B0]/50"
                >
                  <span className="font-bold text-base sm:text-lg text-[#000E21]">
                    {index + 1}. {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-[#006A66] text-[24px] transform transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${faq.id}`}
                    className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#44474D] leading-relaxed border-t border-[#E1E8ED]/60"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Informational Disclaimer Footer */}
        <div className="bg-[#E3EFFF] p-4 rounded-xl border border-[#E1E8ED] flex items-center gap-3 text-[#44474D]">
          <span className="material-symbols-outlined text-[#006A66] text-[22px] shrink-0">
            verified
          </span>
          <span className="text-xs sm:text-sm">
            Informational content only. Non-diagnostic. Clinical diagnoses require comprehensive in-person dental and radiographic examination.
          </span>
        </div>
      </div>
    </section>
  );
};
