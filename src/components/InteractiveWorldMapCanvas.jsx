import React, { useState } from 'react';
import { MapPin, Globe, Compass, Radio, Activity, Navigation, Building } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';
import LocationMapModal from './LocationMapModal';

const mapMarkers = [
  { id: 'faure', name: 'Alfred Faure Main Global HQ', latStr: '46.4322° S', lonStr: '51.8569° E', lat: -46.4322, lon: 51.8569, x: 64, y: 76, status: 'MAIN HQ', type: 'MAIN EXECUTIVE HEADQUARTERS', city: 'Alfred Faure', region: 'French Southern Lands', role: 'Global Executive Command & Polar Telemetry HQ' },
  { id: 'barcelona', name: 'Barcelona AI & Operating Office', latStr: '41.3879° N', lonStr: '2.1699° E', lat: 41.3879, lon: 2.1699, x: 50, y: 32, status: 'ONLINE', type: 'AI OPERATING OFFICE', city: 'Barcelona', region: 'Spain', role: 'AI Operating Office & Neural Transformer R&D' },
  { id: 'svalbard', name: 'Svalbard Space Station', latStr: '78.2232° N', lonStr: '15.6267° E', lat: 78.2232, lon: 15.6267, x: 54, y: 12, status: 'ONLINE', type: 'POLAR SPACE STATION', city: 'Longyearbyen', region: 'Svalbard, Norway', role: 'Polar Orbit Satellite Tracking & Spectrometry' },
  { id: 'castlebruce', name: 'Castle Bruce Space Station', latStr: '15.4447° N', lonStr: '61.2561° W', lat: 15.4447, lon: -61.2561, x: 33, y: 48, status: 'ONLINE', type: 'EQUATORIAL SPACE STATION', city: 'Castle Bruce', region: 'Dominica, Caribbean', role: 'Equatorial Satellite Downlink & Antenna Array' },
  { id: 'sriharikota', name: 'Sriharikota Launch Facility', latStr: '13.7199° N', lonStr: '80.2304° E', lat: 13.7199, lon: 80.2304, x: 72, y: 49, status: 'ONLINE', type: 'LAUNCH COMPLEX LC-2', city: 'Sriharikota', region: 'India', role: 'GSLV Vehicle Assembly & Launch Complex 2' },
  { id: 'canaveral', name: 'Cape Canaveral Test Range', latStr: '28.3922° N', lonStr: '80.6077° W', lat: 28.3922, lon: -80.6077, x: 27, y: 38, status: 'ONLINE', type: 'PROPULSION TEST RANGE', city: 'Cape Canaveral', region: 'Florida, USA', role: 'C25 Cryogenic Engine Hot-Fire Range' },
];

export default function InteractiveWorldMapCanvas() {
  const [activeMarker, setActiveMarker] = useState(mapMarkers[0]);
  const [modalLocation, setModalLocation] = useState(null);

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-8 space-y-8">
      <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#F8F9FA] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
            <span className="text-label-sm text-[#46474A] uppercase tracking-widest">LIVE INTERACTIVE MAP CANVAS</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase">
            GLOBAL SATELLITE & OFFICE MAP NETWORK
          </h2>
        </div>

        <div className="flex gap-2 font-mono text-xs text-[#46474A]">
          <span className="px-3 py-1.5 border blueprint-line bg-[#F8F9FA] font-bold text-[#191C1D]">
            MAIN HQ: ALFRED FAURE
          </span>
          <span className="px-3 py-1.5 border blueprint-line bg-[#F8F9FA] font-bold text-[#0057FF]">
            AI OFFICE: BARCELONA
          </span>
        </div>
      </div>

      {/* Visual Interactive SVG World Map Canvas */}
      <div className="border-2 border-[#191C1D] bg-[#1A1A1B] text-[#FFFFFF] relative min-h-[460px] p-6 flex flex-col justify-between overflow-hidden shadow-xl">
        {/* Top Controls Overlay */}
        <div className="flex justify-between items-center text-xs font-mono text-gray-400 pb-4 border-b border-gray-800 z-20">
          <span className="text-label-sm text-[#00D2FF]">DREXORIUM GLOBAL MAP GRAPHIC</span>
          <span>CLICK PINS TO INSPECT LOCATION & OPEN MAP</span>
        </div>

        {/* Map Canvas Body with Continent Outlines & Pulsing Markers */}
        <div className="relative w-full h-[320px] my-4 flex items-center justify-center bg-[#0B0D11] border border-gray-800 overflow-hidden">
          {/* Subtle World Map Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

          {/* Equator & Prime Meridian Grid Lines */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-[#00D2FF]/30 border-t border-dashed border-[#00D2FF]/40 pointer-events-none" />
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#00D2FF]/30 border-l border-dashed border-[#00D2FF]/40 pointer-events-none" />

          {/* Telemetry Arc Lines connecting Alfred Faure HQ to other locations */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {mapMarkers.filter(m => m.id !== 'faure').map((m, idx) => (
              <line
                key={idx}
                x1={`${mapMarkers[0].x}%`}
                y1={`${mapMarkers[0].y}%`}
                x2={`${m.x}%`}
                y2={`${m.y}%`}
                stroke="#0057FF"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                className="opacity-60"
              />
            ))}
          </svg>

          {/* Pulsing Map Markers */}
          {mapMarkers.map((marker) => {
            const isSelected = activeMarker.id === marker.id;
            return (
              <div
                key={marker.id}
                onClick={() => {
                  playClickSound();
                  setActiveMarker(marker);
                }}
                onMouseEnter={playHoverSound}
                className="absolute z-20 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
              >
                <div className="relative flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-full animate-ping absolute ${marker.status === 'MAIN HQ' ? 'bg-[#0057FF]/50' : 'bg-[#00D2FF]/40'}`} />
                  <div className={`w-5 h-5 rounded-full border-2 border-[#FFFFFF] flex items-center justify-center transition-all ${
                    isSelected ? 'bg-[#FF5500] scale-125' : marker.status === 'MAIN HQ' ? 'bg-[#0057FF]' : 'bg-[#00AA66]'
                  }`}>
                    <MapPin className="w-3 h-3 text-[#FFFFFF]" />
                  </div>

                  {/* Marker Hover Label Tooltip */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden group-hover:flex bg-[#FFFFFF] text-[#191C1D] px-2.5 py-1 text-[10px] font-mono font-bold whitespace-nowrap border blueprint-line shadow-md z-30">
                    {marker.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Marker Detail Footer Banner */}
        <div className="pt-4 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono z-20">
          <div>
            <div className="text-label-sm text-[#00D2FF] font-bold">{activeMarker.type}</div>
            <div className="text-sm font-bold font-heading text-white">{activeMarker.name}</div>
            <div className="text-gray-400 text-[11px]">{activeMarker.city}, {activeMarker.region} // GPS: {activeMarker.latStr}, {activeMarker.lonStr}</div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              setModalLocation(activeMarker);
            }}
            className="px-5 py-2 bg-[#0057FF] hover:bg-[#0042C7] text-[#FFFFFF] text-label-sm font-bold uppercase tracking-widest flex items-center gap-2 transition-colors"
          >
            <Navigation className="w-4 h-4" /> OPEN MAP POPUP
          </button>
        </div>
      </div>

      {/* Map Popup Modal */}
      {modalLocation && (
        <LocationMapModal
          location={modalLocation}
          onClose={() => setModalLocation(null)}
        />
      )}
    </div>
  );
}
