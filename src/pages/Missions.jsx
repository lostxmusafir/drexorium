import React, { useState } from 'react';
import { missionsData, timelineEvents } from '../data/missionsData';
import { Calendar, Rocket, CheckCircle2, Clock, Globe, ArrowRight, ShieldCheck, FileText, X } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

export default function Missions() {
  const [filter, setFilter] = useState('ALL');
  const [activeTelemetryModal, setActiveTelemetryModal] = useState(null);

  const filteredMissions = missionsData.filter((m) => {
    if (filter === 'COMPLETED') return m.status === 'COMPLETED';
    if (filter === 'ACTIVE') return m.status.includes('ACTIVE');
    if (filter === 'UPCOMING') return m.status.includes('UPCOMING') || m.status.includes('SCHEDULED');
    return true;
  });

  return (
    <div className="space-y-16 py-8 max-w-[1280px] mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-pulse"></span>
          <span className="text-label-sm text-[#46474A] uppercase tracking-widest">FLIGHT MANIFEST & MANIFEST LOGS</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          Mission Timeline & Manifest
        </h1>

        <p className="text-base font-sans text-[#46474A] max-w-2xl mt-4 leading-relaxed">
          From maiden lunar reconnaissance to deep space interplanetary solar observatories, track Drexorium's past milestones and upcoming GSLV launches.
        </p>
      </div>

      {/* 1. CHRONOLOGICAL EVOLUTION (2021 - 2026 MILESTONES) */}
      <div className="border blueprint-line bg-[#FFFFFF] p-8 space-y-8">
        <div className="border-b blueprint-line pb-4 flex justify-between items-end">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">CHRONOLOGICAL EVOLUTION</span>
            <h2 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              LABORATORY MILESTONES (2021 - 2026)
            </h2>
          </div>
          <div className="text-label-sm text-[#46474A] hidden md:block">
            ARCHIVE_ID: DRX_HIST_LOGS
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {timelineEvents.map((evt, idx) => (
            <div
              key={idx}
              className="p-5 bg-[#F8F9FA] border blueprint-line hover:border-[#191C1D] transition-colors space-y-2"
            >
              <div className="text-2xl font-mono font-bold text-[#191C1D]">
                {evt.year}
              </div>
              <div className="text-sm font-bold font-heading text-[#191C1D] uppercase leading-snug">
                {evt.title}
              </div>
              <p className="text-xs font-sans text-[#46474A] leading-relaxed">
                {evt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. FLIGHT MANIFEST & ORBITAL LAUNCH SCHEDULE */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b blueprint-line pb-6">
          <div>
            <span className="text-label-sm text-[#00AA66] font-bold uppercase">FLIGHT MANIFEST</span>
            <h2 className="text-3xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              ORBITAL LAUNCH SCHEDULE
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 border blueprint-line w-full sm:w-auto">
            {['ALL', 'COMPLETED', 'ACTIVE', 'UPCOMING'].map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  playClickSound();
                  setFilter(tab);
                }}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-label-sm font-bold transition-all border ${
                  filter === tab
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#FFFFFF] text-[#46474A] border-[#E5E7EB] hover:text-[#191C1D]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredMissions.map((mission) => (
            <div
              key={mission.id}
              className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#191C1D] transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 text-[10px] sm:text-label-sm font-bold bg-[#191C1D] text-[#FFFFFF] uppercase">
                    {mission.status}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#46474A]">{mission.date}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase">{mission.name}</h3>

                <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed">{mission.summary}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
                  <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                    <div className="text-[10px] text-gray-500 uppercase">VEHICLE</div>
                    <div className="text-[#191C1D] font-bold mt-0.5">{mission.vehicle}</div>
                  </div>

                  <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                    <div className="text-[10px] text-gray-500 uppercase">TARGET ORBIT</div>
                    <div className="text-[#0057FF] font-bold mt-0.5 truncate">{mission.orbit}</div>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <div className="text-label-sm text-[#191C1D]">MISSION HIGHLIGHTS</div>
                  {mission.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#46474A] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#00AA66] flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t blueprint-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono">
                <span className="text-[#46474A]">PAYLOAD: <strong className="text-[#191C1D]">{mission.payload}</strong></span>
                <button
                  onClick={() => {
                    playClickSound();
                    setActiveTelemetryModal(mission);
                  }}
                  className="w-full sm:w-auto px-4 py-2 bg-[#F8F9FA] border border-[#191C1D] hover:bg-[#191C1D] hover:text-[#FFFFFF] text-[#191C1D] text-label-sm transition-all flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> Telemetry Log
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Telemetry Log Modal */}
      {activeTelemetryModal && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-xl bg-[#FFFFFF] border-2 border-[#191C1D] p-8 space-y-6">
            <div className="flex justify-between items-start border-b blueprint-line pb-4">
              <div>
                <span className="text-label-sm text-[#0057FF]">FLIGHT TELEMETRY RECORD ARCHIVE</span>
                <h3 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">{activeTelemetryModal.name}</h3>
              </div>
              <button
                onClick={() => setActiveTelemetryModal(null)}
                className="p-1 text-[#191C1D] hover:opacity-70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs text-[#191C1D]">
              <div>STATUS: <span className="font-bold text-[#00AA66]">{activeTelemetryModal.status}</span></div>
              <div>DATE: <span className="font-bold">{activeTelemetryModal.date}</span></div>
              <div>VEHICLE: <span className="font-bold text-[#FF5500]">{activeTelemetryModal.vehicle}</span></div>
              <div>ORBIT PROFILE: <span className="font-bold text-[#0057FF]">{activeTelemetryModal.orbit}</span></div>
              
              <div className="p-4 bg-[#F8F9FA] border blueprint-line font-sans text-xs text-[#46474A] leading-relaxed">
                {activeTelemetryModal.summary}
              </div>
            </div>

            <div className="text-right pt-4 border-t blueprint-line">
              <button
                onClick={() => setActiveTelemetryModal(null)}
                className="px-6 py-2.5 bg-[#191C1D] text-[#FFFFFF] font-mono text-xs uppercase font-bold tracking-wider"
              >
                CLOSE LOG
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
