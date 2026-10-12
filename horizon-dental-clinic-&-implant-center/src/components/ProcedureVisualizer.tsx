import React, { useState } from 'react';
import { INTERACTIVE_PROCEDURES, InteractiveProcedure } from '../config/clinicData';

interface ProcedureVisualizerProps {
  onSelectProcedure: (procedureTitle: string) => void;
}

export const ProcedureVisualizer: React.FC<ProcedureVisualizerProps> = ({ onSelectProcedure }) => {
  const [activeProcId, setActiveProcId] = useState<string>(INTERACTIVE_PROCEDURES[0].id);
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [selectedToothZone, setSelectedToothZone] = useState<string>('Molars');

  const activeProc: InteractiveProcedure =
    INTERACTIVE_PROCEDURES.find((p) => p.id === activeProcId) || INTERACTIVE_PROCEDURES[0];

  const toothZones = [
    { name: 'Molars', label: 'Back Chewing Teeth (16, 17, 18, 26, 27, 28, 36, 37, 38, 46, 47, 48)' },
    { name: 'Premolars', label: 'Bicuspid Support Teeth (14, 15, 24, 25, 34, 35, 44, 45)' },
    { name: 'Canines', label: 'Corner Eye-Teeth (13, 23, 33, 43)' },
    { name: 'Incisors', label: 'Front Aesthetic Smile Teeth (11, 12, 21, 22, 31, 32, 41, 42)' },
  ];

  return (
    <section id="procedure-visualizer" className="w-full bg-[#12243A] text-white px-4 md:px-12 py-16 lg:py-24 border-b border-[#19B7B0]/20 relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl flex flex-col gap-2">
            <div className="inline-flex items-center gap-2">
              <span className="bg-[#D7ED70] text-[#181E00] font-mono-tech text-xs font-bold px-2.5 py-1 rounded uppercase">
                INTERACTIVE CLINICAL VISUALIZER
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              STEP-BY-STEP DENTAL PROCEDURE EXPLORER
            </h2>
            <p className="text-sm sm:text-base text-[#7A8CA6] leading-relaxed">
              Understand what happens during common dental procedures before your appointment. Explore anatomical stages, expectations, and care protocols.
            </p>
          </div>
          <div className="font-mono-tech text-xs text-[#73F7EF] bg-[#000E21] px-4 py-2 rounded-lg border border-white/10">
            DIAGNOSTIC MODE: DENTAL_ANATOMY_SIMULATOR
          </div>
        </div>

        {/* Tooth Zone & Procedure Selectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: Tooth Zone & Procedure Picker */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Tooth Zone Selector */}
            <div className="bg-[#000E21] p-5 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono-tech text-[#73F7EF] font-bold uppercase">
                01. SELECT TOOTH LOCATION
              </span>
              <div className="grid grid-cols-2 gap-2">
                {toothZones.map((zone) => (
                  <button
                    key={zone.name}
                    onClick={() => setSelectedToothZone(zone.name)}
                    className={`p-2.5 rounded-lg text-xs font-semibold text-left transition-all ${
                      selectedToothZone === zone.name
                        ? 'bg-[#19B7B0] text-[#000E21] shadow-sm font-bold'
                        : 'bg-[#12243A] text-slate-300 hover:bg-[#12243A]/80 border border-white/5'
                    }`}
                  >
                    {zone.name}
                  </button>
                ))}
              </div>
              <span className="text-[11px] text-[#7A8CA6] font-mono-tech pt-1">
                Active Zone: {toothZones.find(z => z.name === selectedToothZone)?.label}
              </span>
            </div>

            {/* Procedures Navigation Tabs */}
            <div className="bg-[#000E21] p-5 rounded-xl border border-white/10 flex flex-col gap-3">
              <span className="text-xs font-mono-tech text-[#73F7EF] font-bold uppercase">
                02. CHOOSE CLINICAL PROCEDURE
              </span>
              <div className="flex flex-col gap-2">
                {INTERACTIVE_PROCEDURES.map((proc) => {
                  const isSelected = proc.id === activeProcId;
                  return (
                    <button
                      key={proc.id}
                      onClick={() => {
                        setActiveProcId(proc.id);
                        setActiveStageIndex(0);
                      }}
                      className={`p-3.5 rounded-lg text-left transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#12243A] border-[#19B7B0] text-white shadow-md'
                          : 'bg-[#12243A]/50 border-white/5 text-slate-300 hover:border-white/20'
                      }`}
                    >
                      <div className="flex flex-col">
                        <span className="text-xs font-mono-tech text-[#73F7EF]">{proc.code}</span>
                        <span className="text-sm font-bold mt-0.5">{proc.title}</span>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-[#19B7B0]">
                        {isSelected ? 'chevron_right' : 'add'}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Stage Interactive Viewer */}
          <div className="lg:col-span-8 bg-[#000E21] p-6 sm:p-8 rounded-xl border border-white/10 flex flex-col justify-between gap-6">
            {/* Header info */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="font-mono-tech text-xs text-[#73F7EF] uppercase font-bold">
                  {activeProc.code} · {activeProc.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {activeProc.title}
                </h3>
                <p className="text-xs text-[#7A8CA6] font-medium mt-0.5">
                  {activeProc.tagline}
                </p>
              </div>
              <div className="bg-[#12243A] px-3.5 py-2 rounded-lg border border-white/10 shrink-0">
                <span className="text-[10px] font-mono-tech text-[#7A8CA6] block">DISCOMFORT MANAGEMENT</span>
                <span className="text-xs font-bold text-[#D7ED70]">{activeProc.discomfortLevel}</span>
              </div>
            </div>

            {/* Stage Progress Stepper */}
            <div className="flex flex-col gap-2">
              <span className="text-xs font-mono-tech text-[#7A8CA6]">
                PROCEDURAL STAGE {activeStageIndex + 1} OF {activeProc.stages.length}
              </span>
              <div className="grid grid-cols-4 gap-2">
                {activeProc.stages.map((stg, idx) => (
                  <button
                    key={stg.stageNumber}
                    onClick={() => setActiveStageIndex(idx)}
                    className={`py-2 px-1 rounded-md text-center transition-all border ${
                      idx === activeStageIndex
                        ? 'bg-[#19B7B0] text-[#000E21] border-[#19B7B0] font-bold shadow'
                        : 'bg-[#12243A] text-slate-400 border-white/10 hover:border-white/30'
                    }`}
                  >
                    <span className="font-mono-tech text-xs block">STAGE {stg.stageNumber}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Stage Details Banner */}
            <div className="bg-[#12243A] p-6 rounded-xl border border-[#19B7B0]/40 flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#19B7B0] font-bold">
                  STAGE {activeProc.stages[activeStageIndex].stageNumber} SPECIFICATION
                </span>
                <span className="bg-[#000E21] text-[#D7ED70] text-[11px] font-mono-tech px-2.5 py-1 rounded border border-white/10">
                  {activeProc.stages[activeStageIndex].clinicalFocus}
                </span>
              </div>

              <h4 className="text-lg font-bold text-white">
                {activeProc.stages[activeStageIndex].title}
              </h4>

              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                {activeProc.stages[activeStageIndex].detail}
              </p>
            </div>

            {/* Recovery & Maintenance Footer Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#12243A] p-4 rounded-lg border border-white/10 flex flex-col gap-1">
                <span className="font-mono-tech text-[11px] text-[#73F7EF] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  EXPECTED RECOVERY
                </span>
                <p className="text-slate-300 font-medium leading-relaxed mt-1">
                  {activeProc.recoveryTimeline}
                </p>
              </div>

              <div className="bg-[#12243A] p-4 rounded-lg border border-white/10 flex flex-col gap-1">
                <span className="font-mono-tech text-[11px] text-[#73F7EF] font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">verified</span>
                  AFTERCARE HIGHLIGHT
                </span>
                <p className="text-slate-300 font-medium leading-relaxed mt-1">
                  {activeProc.maintenanceTips[0]}
                </p>
              </div>
            </div>

            {/* Action Call to Consultation */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10">
              <p className="text-xs text-[#7A8CA6]">
                Have specific questions about {activeProc.title} for your teeth?
              </p>
              <button
                onClick={() => onSelectProcedure(activeProc.title)}
                className="w-full sm:w-auto bg-[#19B7B0] hover:bg-[#D7ED70] text-[#000E21] font-bold px-6 py-3 rounded-lg text-xs uppercase tracking-wider transition-colors shrink-0"
              >
                REQUEST CONSULTATION FOR THIS PROCEDURE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
