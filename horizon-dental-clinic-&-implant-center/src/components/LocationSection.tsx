import React from 'react';
import { CLINIC_CONFIG } from '../config/clinicData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location-contact" className="w-full bg-[#FFFFFF] px-4 md:px-12 py-16 lg:py-24 border-b border-[#E1E8ED]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <span className="font-mono-tech text-xs text-[#006A66] tracking-widest uppercase font-bold">
            CLINICAL LOCATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#000E21] tracking-tight">
            VISIT HORIZON.
          </h2>
          <p className="text-sm sm:text-base text-[#44474D]">
            Easily accessible dental medicine and oral surgical facility situated on PSY Road in Sargasan, Gandhinagar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Facility Details Card */}
          <div className="lg:col-span-5 bg-[#EDF4FF] p-6 sm:p-8 rounded-2xl border border-[#E1E8ED] flex flex-col justify-between gap-8 shadow-sm">
            <div className="flex flex-col gap-6">
              <div>
                <span className="font-mono-tech text-xs text-[#006A66] font-bold">
                  FACILITY_NAME
                </span>
                <h3 className="text-xl font-bold text-[#000E21] mt-1">
                  {CLINIC_CONFIG.businessName}
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006A66] text-[22px] mt-0.5">
                    location_on
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#000E21]">Practice Address</span>
                    <span className="text-xs sm:text-sm text-[#44474D] leading-relaxed">
                      {CLINIC_CONFIG.address.fullAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006A66] text-[22px] mt-0.5">
                    call
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#000E21]">Telephone Inquiries</span>
                    <a
                      href={CLINIC_CONFIG.telLink}
                      className="font-mono-tech text-sm text-[#006A66] font-bold hover:underline"
                    >
                      {CLINIC_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#006A66] text-[22px] mt-0.5">
                    schedule
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-[#000E21]">Hours of Practice</span>
                    <span className="text-xs sm:text-sm text-[#44474D]">
                      {CLINIC_CONFIG.openingHours.weeklySchedule}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={CLINIC_CONFIG.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#000E21] hover:bg-[#006A66] text-white px-5 py-3 rounded-lg text-xs font-bold uppercase transition-colors shadow-sm"
              >
                <span className="material-symbols-outlined text-[18px]">directions</span>
                <span>Get Directions</span>
              </a>
              <a
                href={CLINIC_CONFIG.telLink}
                className="inline-flex items-center justify-center gap-2 bg-[#E3EFFF] hover:bg-[#D8EAFF] text-[#000E21] px-5 py-3 rounded-lg text-xs font-bold transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">phone</span>
                <span>Call Clinic Directly</span>
              </a>
            </div>
          </div>

          {/* Location Map Preview Block */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#E1E8ED] shadow-sm relative min-h-[360px] bg-[#E3EFFF]">
            <div
              className="w-full h-full min-h-[360px] bg-cover bg-center"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBknL_cr9m15CYxQs4-Wl3VquFcf8g-YOkJDfJ6fmcNn37W-fn6xM-2Wxj6DAUMRSjRQhdB1fDqtApd7Xim6Xv8RmWQiabrccw4L5tILD-6mOp7PfZSSqoN_mY-qQlcMSgy64f5XrCWa-X_W4lIFRb6edZ0C5Y9_sz7NPK0Gi_ezbIVkZ2mfIvp8swhUmwDKHvBlxDpaz64uN79pzeZvmw4nIQO7_LOj7WOtKz9JxrZ79XmC3rtNrgt')`,
              }}
            ></div>

            {/* GPS Overlay Tag */}
            <div className="absolute bottom-4 left-4 bg-[#12243A]/95 text-white p-3.5 rounded-xl backdrop-blur-md flex items-center gap-3 shadow-md border border-white/10">
              <span className="material-symbols-outlined text-[#73F7EF] text-[22px]">
                pin_drop
              </span>
              <div className="flex flex-col">
                <span className="text-xs font-bold">PSY Road · Sargasan Hub</span>
                <span className="font-mono-tech text-[10px] text-[#B6C8E4]">
                  COORDINATES: {CLINIC_CONFIG.coordinates.lat}, {CLINIC_CONFIG.coordinates.lng}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
