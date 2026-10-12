import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-[#E1E8ED] flex flex-col gap-6 text-[#000E21]">
        <div className="flex items-center justify-between border-b border-[#E1E8ED] pb-4">
          <div className="flex flex-col">
            <span className="font-mono-tech text-xs text-[#006A66] font-bold uppercase">
              LEGAL DOCUMENTATION
            </span>
            <h3 className="text-xl font-bold text-[#000E21]">
              {type === 'privacy' ? 'Privacy Policy & Data Security' : 'Terms of Use & Clinical Disclaimers'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#74777D] hover:text-[#000E21] hover:bg-[#EAF5F8]"
            aria-label="Close modal"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {type === 'privacy' ? (
          <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#44474D] leading-relaxed">
            <p>
              At <strong>{CLINIC_CONFIG.businessName}</strong>, we strictly preserve patient confidentiality and personal health data privacy in accordance with medical ethics standards.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">1. Collection of Information</h4>
            <p>
              Information collected via online consultation forms (such as full name, contact mobile number, preferred date, and clinical symptom notes) is transmitted solely to clinic administrative staff to coordinate appointment slots.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">2. Non-Disclosure & Patient Records</h4>
            <p>
              We do not share, sell, or rent patient contact information or clinical details to third-party advertisers. All diagnostic records, CBCT radiography, and treatment notes remain protected under clinical privacy regulations.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">3. Digital Communications</h4>
            <p>
              By submitting an appointment request, you grant permission for clinic coordinators to reach you by telephone or text messaging regarding appointment scheduling, pre-op instructions, or care follow-ups.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4 text-xs sm:text-sm text-[#44474D] leading-relaxed">
            <p>
              Please read these terms carefully before utilizing the web services of <strong>{CLINIC_CONFIG.businessName}</strong>.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">1. Informational & Non-Diagnostic Content</h4>
            <p>
              All materials, treatment summaries, procedural stage descriptions, and FAQ answers provided on this website are for general educational purposes only. They do not constitute a formal clinical diagnosis or personalized medical recommendation.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">2. Appointment Requests vs. Confirmation</h4>
            <p>
              Submitting an online enquiry does not guarantee a confirmed operatory slot until clinic staff review availability and contact you directly to confirm timing.
            </p>
            <h4 className="font-bold text-[#000E21] text-sm">3. Treatment Suitability</h4>
            <p>
              Individual treatment eligibility (including dental implant suitability, bone grafting necessity, or orthodontic options) requires a physical clinical examination and 3D CBCT/radiographic verification by registered oral specialists.
            </p>
          </div>
        )}

        <div className="pt-4 border-t border-[#E1E8ED] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#12243A] hover:bg-[#006A66] text-white px-6 py-2.5 rounded-lg text-xs font-bold uppercase transition-colors"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};
