import React, { useState } from 'react';
import { gslvRocketData } from '../data/rocketsData';
import { Rocket, CheckCircle, Flame, Layers } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';
import RocketExplodedView from '../components/RocketExplodedView';
import GlobalGroundStationMap from '../components/GlobalGroundStationMap';

export default function LaunchSystems() {
  const [activeStageId, setActiveStageId] = useState('fairing');
  const selectedStage = gslvRocketData.stages.find((s) => s.id === activeStageId) || gslvRocketData.stages[0];

  return (
    <div className="space-y-16 py-8 max-w-[1280px] mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#FF5500] animate-pulse"></span>
          <span className="text-label-sm text-[#46474A] uppercase tracking-widest">PROPULSION ARCHITECTURE</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          GSLV-MK3 Launch Vehicle
        </h1>

        <p className="text-base font-sans text-[#46474A] max-w-2xl mt-4 leading-relaxed">
          The GSLV-MK3 is Drexorium's primary heavy-lift launch vehicle, featuring solid S200 boosters, twin Vikas liquid core engines, and the C25 LH2/LOX cryogenic upper stage.
        </p>
      </div>

      {/* 1. HIGH-RESOLUTION GSLV ROCKET PHOTOGRAPH & STAGE INSPECTOR */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-6 relative h-[300px] sm:h-[420px] lg:h-[520px] border blueprint-line bg-[#F8F9FA] overflow-hidden p-2">
          <img
            src="/assets/gslv_rocket_launch.png"
            alt="GSLV Launch Vehicle"
            className="w-full h-full object-cover filter contrast-110"
          />
        </div>

        {/* Stage Specs Callout Card */}
        <div className="lg:col-span-6 border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 flex flex-col justify-between min-h-[420px] lg:h-[520px]">
          <div>
            {/* Stage Tabs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 sm:mb-6 border-b blueprint-line pb-4">
              {gslvRocketData.stages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => {
                    playClickSound();
                    setActiveStageId(stage.id);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-label-sm font-bold text-left transition-all border ${
                    activeStageId === stage.id
                      ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                      : 'bg-[#F8F9FA] text-[#46474A] border-[#E5E7EB] hover:text-[#191C1D]'
                  }`}
                >
                  <div>STAGE {stage.number}</div>
                </button>
              ))}
            </div>

            <span className="text-label-sm text-[#0057FF] uppercase font-bold">
              {selectedStage.type}
            </span>

            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1 sm:mt-2 mb-3 sm:mb-4">
              {selectedStage.name}
            </h3>

            <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed mb-4 sm:mb-6">
              {selectedStage.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 font-mono text-xs">
              <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                <div className="text-[10px] text-gray-500">THRUST</div>
                <div className="text-xs sm:text-sm font-bold text-[#191C1D] mt-0.5">{selectedStage.thrust}</div>
              </div>

              <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                <div className="text-[10px] text-gray-500">SPECIFIC IMPULSE</div>
                <div className="text-xs sm:text-sm font-bold text-[#191C1D] mt-0.5">{selectedStage.isp}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-label-sm text-[#191C1D]">ARCHITECTURAL SPECIFICATIONS</div>
              {selectedStage.details.map((dt, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#46474A] font-sans">
                  <CheckCircle className="w-4 h-4 text-[#191C1D] flex-shrink-0 mt-0.5" />
                  <span>{dt}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t blueprint-line text-[10px] sm:text-label-sm text-[#46474A] flex justify-between">
            <span>BURNTIME: {selectedStage.burnTime}</span>
            <span className="text-[#0057FF]">MASS: {selectedStage.mass}</span>
          </div>
        </div>
      </div>

      {/* 2. EXPLODED STAGE ARCHITECTURE COMPONENT */}
      <RocketExplodedView />

      {/* 3. GLOBAL GROUND STATIONS & TELEMETRY ARCS COMPONENT */}
      <GlobalGroundStationMap />

      {/* 4. TECHNICAL SPECIFICATIONS COMPARISON TABLE */}
      <div className="border blueprint-line bg-[#FFFFFF] p-8 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b blueprint-line pb-6">
          <div>
            <div className="text-label-sm text-[#0057FF] uppercase font-bold">PERFORMANCE MATRIX</div>
            <h2 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              GSLV-MK3 TECHNICAL DATA SHEET
            </h2>
          </div>
          <div className="flex gap-4 font-mono text-xs text-[#46474A]">
            <span className="px-3 py-1 border blueprint-line bg-[#F8F9FA]">HEIGHT: 43.43 M</span>
            <span className="px-3 py-1 border blueprint-line bg-[#F8F9FA]">MASS: 640 TONS</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left font-mono text-xs">
            <thead>
              <tr className="border-b blueprint-line text-[#46474A] uppercase text-[10px]">
                <th className="py-3 px-4">METRIC</th>
                <th className="py-3 px-4 text-[#191C1D]">GSLV SPECIFICATION</th>
                <th className="py-3 px-4 text-gray-500">OPERATIONAL COMPARISON</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E7EB]">
              {gslvRocketData.specsTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8F9FA]">
                  <td className="py-4 px-4 font-bold text-[#191C1D] flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0057FF]" /> {row.metric}
                  </td>
                  <td className="py-4 px-4 font-bold text-[#0057FF] text-sm">
                    {row.value}
                  </td>
                  <td className="py-4 px-4 text-[#46474A]">
                    {row.comparison}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
