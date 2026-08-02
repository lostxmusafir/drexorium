import React, { useState } from 'react';
import { Layers, Rocket, CheckCircle2, ShieldCheck, Flame, ChevronRight } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';

const stagesBreakdown = [
  {
    id: 's200',
    title: 'Stage 1: Twin S200 Solid Rocket Boosters',
    propellant: 'HTPB (Hydroxyl-terminated polybutadiene)',
    thrust: '2 x 5,150 kN (Total 10,300 kN)',
    burnTime: '130 Seconds',
    mass: '2 x 236 Tons',
    description: 'The S200 solid rocket boosters are the world\'s 3rd largest solid boosters, producing massive sea-level liftoff thrust to accelerate the 640-ton vehicle off Launch Pad LC-2.',
    keyFeatures: [
      'Segmented motor casing with high-strength maraging steel.',
      'Flex-nozzle vector control for initial pitch/roll maneuvers.',
      'S200 ignition initiated at T-00:00:00.'
    ]
  },
  {
    id: 'l110',
    title: 'Stage 2: L110 Liquid Core Stage (Twin Vikas Engines)',
    propellant: 'UDMH + N2O4 (Unsymmetrical Dimethylhydrazine & Dinitrogen Tetroxide)',
    thrust: '1,598 kN Vacuum Thrust',
    burnTime: '203 Seconds',
    mass: '116 Tons',
    description: 'Powered by two hypergolic Vikas liquid propellant engines. Ignited at T+114 seconds prior to S200 booster separation at T+130 seconds.',
    keyFeatures: [
      'Gimballed engine nozzles for active pitch/yaw/roll flight stabilization.',
      'Regeneratively cooled engine thrust chambers.',
      'Hypergolic self-igniting propellant combination.'
    ]
  },
  {
    id: 'c25',
    title: 'Stage 3: C25 Cryogenic Upper Stage',
    propellant: 'LH2 + LOX (Liquid Hydrogen & Liquid Oxygen at 20 K)',
    thrust: '200 kN Cryogenic Thrust (CE-20 Engine)',
    burnTime: '640 Seconds',
    mass: '28 Tons',
    description: 'High specific impulse (454 seconds) cryogenic upper stage designed by Drexorium for precise orbital injection into Trans-Lunar & Trans-Mars Trajectories.',
    keyFeatures: [
      'CE-20 gas generator cycle cryogenic engine.',
      'Multi-restart capability for complex orbital transfer maneuvers.',
      'Multilayer superinsulation (MLI) thermal protection tanks.'
    ]
  },
  {
    id: 'fairing',
    title: 'Payload Assembly: 5-Meter Composite Fairing',
    propellant: 'N/A (Structural Protective Shield)',
    thrust: 'Pneumatic Separation Thrusters',
    burnTime: 'Separated at T+250 Seconds',
    mass: '4.5 Tons',
    description: 'Aerodynamic payload fairing constructed from carbon-fiber reinforced polymer (CFRP) honeycomb panels, housing satellite and deep space probe payloads.',
    keyFeatures: [
      'Cleanroom interior environmental conditioning during ascent.',
      'Acoustic suppression blanket protection against max-Q vibration.',
      'Dual-halves pyrotechnic separation system.'
    ]
  }
];

export default function RocketExplodedView() {
  const [selectedStage, setSelectedStage] = useState(stagesBreakdown[0]);

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
      <div className="border-b blueprint-line pb-4 flex justify-between items-end">
        <div>
          <span className="text-label-sm text-[#0057FF] font-bold uppercase">ARCHITECTURAL BLUEPRINT</span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
            GSLV-MK3 EXPLODED STAGE ARCHITECTURE
          </h2>
        </div>
        <div className="text-label-sm text-[#46474A] hidden md:block">
          BLUEPRINT_REF: DRX_MK3_EXPLODED
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Stage Selector Buttons */}
        <div className="lg:col-span-5 space-y-3">
          {stagesBreakdown.map((stg) => {
            const isSelected = selectedStage.id === stg.id;
            return (
              <div
                key={stg.id}
                onClick={() => {
                  playClickSound();
                  setSelectedStage(stg);
                }}
                onMouseEnter={playHoverSound}
                className={`p-3.5 sm:p-5 border cursor-pointer transition-all flex items-center justify-between ${
                  isSelected
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#F8F9FA] text-[#191C1D] border-[#E5E7EB] hover:border-[#191C1D]'
                }`}
              >
                <div>
                  <div className={`text-[10px] sm:text-label-sm font-bold uppercase ${isSelected ? 'text-[#00D2FF]' : 'text-[#0057FF]'}`}>
                    {stg.id.toUpperCase()} STAGE
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-heading uppercase mt-0.5 sm:mt-1">{stg.title}</div>
                </div>
                <ChevronRight className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 ${isSelected ? 'text-[#00D2FF]' : 'text-gray-400'}`} />
              </div>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="lg:col-span-7 border blueprint-line bg-[#F8F9FA] p-4 sm:p-8 space-y-6">
          <div className="flex justify-between items-start border-b blueprint-line pb-4">
            <div>
              <span className="text-label-sm text-[#0057FF] font-bold uppercase">SELECTED STAGE PROFILE</span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                {selectedStage.title}
              </h3>
            </div>
            <span className="px-3 py-1 bg-[#191C1D] text-[#FFFFFF] font-mono text-xs font-bold">
              {selectedStage.id.toUpperCase()}
            </span>
          </div>

          <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed">
            {selectedStage.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
            <div className="p-3 bg-[#FFFFFF] border blueprint-line">
              <div className="text-[10px] text-gray-500">PROPELLANT TYPE</div>
              <div className="text-xs font-bold text-[#191C1D] mt-0.5">{selectedStage.propellant}</div>
            </div>

            <div className="p-3 bg-[#FFFFFF] border blueprint-line">
              <div className="text-[10px] text-gray-500">THRUST OUTPUT</div>
              <div className="text-xs font-bold text-[#0057FF] mt-0.5">{selectedStage.thrust}</div>
            </div>

            <div className="p-3 bg-[#FFFFFF] border blueprint-line">
              <div className="text-[10px] text-gray-500">BURN DURATION</div>
              <div className="text-xs font-bold text-[#191C1D] mt-0.5">{selectedStage.burnTime}</div>
            </div>

            <div className="p-3 bg-[#FFFFFF] border blueprint-line">
              <div className="text-[10px] text-gray-500">STAGE MASS</div>
              <div className="text-xs font-bold text-[#00AA66] mt-0.5">{selectedStage.mass}</div>
            </div>
          </div>

          <div className="space-y-2 pt-2 border-t blueprint-line">
            <div className="text-label-sm text-[#191C1D]">KEY ARCHITECTURAL HIGHLIGHTS</div>
            {selectedStage.keyFeatures.map((kf, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-[#46474A] font-sans">
                <CheckCircle2 className="w-4 h-4 text-[#0057FF] flex-shrink-0 mt-0.5" />
                <span>{kf}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
