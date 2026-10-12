import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { OurApproachSection } from './components/OurApproachSection';
import { TreatmentDirectory } from './components/TreatmentDirectory';
import { ProcedureVisualizer } from './components/ProcedureVisualizer';
import { ImplantEducationSection } from './components/ImplantEducationSection';
import { PatientEducationSection } from './components/PatientEducationSection';
import { PatientJourney } from './components/PatientJourney';
import { ReviewsSection } from './components/ReviewsSection';
import { AppointmentForm } from './components/AppointmentForm';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { PolicyModal } from './components/PolicyModal';

export default function App() {
  const [selectedService, setSelectedService] = useState<string>('General Dentistry');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [policyType, setPolicyType] = useState<'privacy' | 'terms' | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'hero',
      'approach',
      'treatments-directory',
      'procedure-visualizer',
      'implant-education',
      'patient-faq',
      'patient-journey',
      'verified-reviews',
      'appointment-booking',
      'location-contact',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookConsultation = (serviceTitle?: string) => {
    if (serviceTitle) {
      setSelectedService(serviceTitle);
    }
    scrollToSection('#appointment-booking');
  };

  return (
    <div className="min-h-screen bg-[#F7F9FF] text-[#0B1D2C] font-body flex flex-col">
      {/* Navigation Header */}
      <Header onBookClick={handleBookConsultation} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <HeroSection
          onExploreClick={() => scrollToSection('#treatments-directory')}
          onRequestConsultationClick={() => handleBookConsultation()}
        />

        {/* Our Approach */}
        <OurApproachSection />

        {/* Treatment Directory */}
        <TreatmentDirectory
          onEnquireTreatment={(serviceTitle) => handleBookConsultation(serviceTitle)}
        />

        {/* Interactive Dental Procedure Visualizer */}
        <ProcedureVisualizer
          onSelectProcedure={(procedureTitle) => handleBookConsultation(procedureTitle)}
        />

        {/* Dental Implants Educational Section */}
        <ImplantEducationSection
          onRequestImplantConsultation={() => handleBookConsultation('Dental Implants')}
        />

        {/* Patient Education Accordion */}
        <PatientEducationSection />

        {/* Patient Journey */}
        <PatientJourney />

        {/* Verified Google Reviews */}
        <ReviewsSection />

        {/* Appointment Enquiry Form */}
        <AppointmentForm preselectedService={selectedService} />

        {/* Location and Contact */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenPolicy={(type) => setPolicyType(type)}
        onNavigate={(href) => scrollToSection(href)}
      />

      {/* Legal Policy Modal */}
      <PolicyModal type={policyType} onClose={() => setPolicyType(null)} />
    </div>
  );
}
