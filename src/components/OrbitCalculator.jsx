import React, { useState } from 'react';
import { Calculator, Compass, Activity, CheckCircle2, RotateCcw } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';

export default function OrbitCalculator() {
  const [altitude, setAltitude] = useState(400); // km
  const [inclination, setInclination] = useState(51.6); // deg
  const [payloadMass, setPayloadMass] = useState(4000); // kg

  // Orbital Calculations
  const earthRadius = 6371; // km
  const mu = 398600; // km^3/s^2
  const r = earthRadius + altitude;
  
  // Orbital Velocity v = sqrt(mu / r)
  const velocity = Math.sqrt(mu / r); // km/s
  // Orbital Period T = 2 * pi * sqrt(r^3 / mu)
  const periodSeconds = 2 * Math.PI * Math.sqrt(Math.pow(r, 3) / mu);
  const periodMinutes = (periodSeconds / 60).toFixed(1);
  
  // Delta-V for HOHMANN TRANSFER TO GEO (35,786 km)
  const rGeo = earthRadius + 35786;
  const v1 = Math.sqrt(mu / r);
  const vHohmann1 = Math.sqrt(mu * (2 / r - 2 / (r + rGeo)));
  const deltaV1 = Math.abs(vHohmann1 - v1);
  const vHohmann2 = Math.sqrt(mu * (2 / rGeo - 2 / (r + rGeo)));
  const v2Geo = Math.sqrt(mu / rGeo);
  const deltaV2 = Math.abs(v2Geo - vHohmann2);
  const totalDeltaV = ((deltaV1 + deltaV2) * 1000).toFixed(0); // m/s

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
      <div className="border-b blueprint-line pb-4 flex justify-between items-end">
        <div>
          <span className="text-label-sm text-[#0057FF] font-bold uppercase">INTERACTIVE CALCULATOR</span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
            ORBITNET TRAJECTORY & DELTA-V SIMULATOR
          </h2>
        </div>
        <div className="text-label-sm text-[#0057FF] hidden md:block">
          CALC_ENGINE: ORBITNET_V4
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-6 space-y-6">
          {/* Slider 1: Orbital Altitude */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#191C1D] font-bold">ORBITAL ALTITUDE (H):</span>
              <span className="text-[#0057FF] font-bold">{altitude} KM</span>
            </div>
            <input
              type="range"
              min={200}
              max={2000}
              step={10}
              value={altitude}
              onChange={(e) => setAltitude(Number(e.target.value))}
              className="w-full h-2 bg-[#F8F9FA] border blueprint-line appearance-none cursor-pointer accent-[#191C1D]"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-500">
              <span>LEO (200 km)</span>
              <span>ISS (400 km)</span>
              <span>MEO (2,000 km)</span>
            </div>
          </div>

          {/* Slider 2: Orbital Inclination */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#191C1D] font-bold">ORBITAL INCLINATION (i):</span>
              <span className="text-[#00AA66] font-bold">{inclination}°</span>
            </div>
            <input
              type="range"
              min={0}
              max={98.6}
              step={0.1}
              value={inclination}
              onChange={(e) => setInclination(Number(e.target.value))}
              className="w-full h-2 bg-[#F8F9FA] border blueprint-line appearance-none cursor-pointer accent-[#191C1D]"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-500">
              <span>Equatorial (0°)</span>
              <span>ISS Orbit (51.6°)</span>
              <span>Sun-Sync (98.6°)</span>
            </div>
          </div>

          {/* Slider 3: Payload Mass */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-[#191C1D] font-bold">PAYLOAD MASS (m):</span>
              <span className="text-[#FF5500] font-bold">{payloadMass} KG</span>
            </div>
            <input
              type="range"
              min={500}
              max={8000}
              step={100}
              value={payloadMass}
              onChange={(e) => setPayloadMass(Number(e.target.value))}
              className="w-full h-2 bg-[#F8F9FA] border blueprint-line appearance-none cursor-pointer accent-[#191C1D]"
            />
            <div className="flex justify-between text-[10px] font-mono text-gray-500">
              <span>Cubesat (500 kg)</span>
              <span>GSLV Max (4,000 kg)</span>
              <span>Heavy (8,000 kg)</span>
            </div>
          </div>
        </div>

        {/* Real-time Computed Results */}
        <div className="lg:col-span-6 border blueprint-line bg-[#1A1A1B] text-[#FFFFFF] p-4 sm:p-8 space-y-6">
          <div className="flex justify-between items-center pb-4 border-b border-gray-800">
            <span className="text-label-sm text-[#00D2FF]">ORBITAL MECHANICS COMPUTATION</span>
            <span className="text-[#00AA66] text-xs font-mono font-bold animate-pulse">_COMPUTED</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs">
            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400">ORBITAL VELOCITY (v)</div>
              <div className="text-sm font-bold text-[#00D2FF] mt-1">{velocity.toFixed(3)} KM/S</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400">ORBITAL PERIOD (T)</div>
              <div className="text-sm font-bold text-[#00AA66] mt-1">{periodMinutes} MINS</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400">GEO TRANSFER DELTA-V</div>
              <div className="text-sm font-bold text-[#FF8800] mt-1">{totalDeltaV} M/S</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400">GSLV THRUST MARGIN</div>
              <div className="text-sm font-bold text-[#00D2FF] mt-1">{payloadMass <= 4000 ? 'NOMINAL (100%)' : 'REDUCED (78%)'}</div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-gray-400 pt-2 border-t border-gray-800">
            Equating Keplerian two-body problem: v = sqrt(mu / r) where mu = 3.986e5 km^3/s^2.
          </div>
        </div>
      </div>
    </div>
  );
}
