import React, { useState, useEffect } from 'react';
import { MapPin, Radio, Activity, CheckCircle2, RefreshCw, Signal, Globe, Building, Navigation, ExternalLink } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';
import LocationMapModal from './LocationMapModal';

const stations = [
  { id: 'faure', name: 'Alfred Faure Main Global HQ', lat: -46.4322, lon: 51.8569, latStr: '46.4322° S', lonStr: '51.8569° E', status: 'MAIN HQ', ping: '8 ms', snr: '49.4 dB', band: 'Polar Deep Space Network', role: 'Main Executive Headquarters & Polar Telemetry Command', location: 'French Southern and Antarctic Lands', city: 'Alfred Faure', region: 'French Southern Lands', type: 'MAIN EXECUTIVE HEADQUARTERS' },
  { id: 'barcelona', name: 'Barcelona AI & Operating Office', lat: 41.3879, lon: 2.1699, latStr: '41.3879° N', lonStr: '2.1699° E', status: 'ONLINE', ping: '14 ms', snr: '46.2 dB', band: 'Supercomputer Optical Grid', role: 'AI Operating Office & Neural Transformer R&D', location: 'Barcelona, Spain', city: 'Barcelona', region: 'Catalonia, Spain', type: 'AI OPERATING OFFICE' },
  { id: 'svalbard', name: 'Svalbard Space Station', lat: 78.2232, lon: 15.6267, latStr: '78.2232° N', lonStr: '15.6267° E', status: 'ONLINE', ping: '32 ms', snr: '41.8 dB', band: 'X-Band Laser Downlink', role: 'Polar Orbit Satellite Tracking & Spectrometry', location: 'Svalbard, Norway', city: 'Longyearbyen', region: 'Svalbard, Norway', type: 'POLAR SPACE STATION' },
  { id: 'castlebruce', name: 'Castle Bruce Space Station', lat: 15.4447, lon: -61.2561, latStr: '15.4447° N', lonStr: '61.2561° W', status: 'ONLINE', ping: '45 ms', snr: '44.1 dB', band: 'Equatorial Array Link', role: 'Equatorial Satellite Downlink & Trans-Orbital Antenna', location: 'Castle Bruce, Dominica', city: 'Castle Bruce', region: 'Dominica, Caribbean', type: 'EQUATORIAL SPACE STATION' },
  { id: 'sriharikota', name: 'Sriharikota Launch Facility', lat: 13.7199, lon: 80.2304, latStr: '13.7199° N', lonStr: '80.2304° E', status: 'ONLINE', ping: '18 ms', snr: '48.2 dB', band: 'S-Band / X-Band', role: 'GSLV Vehicle Assembly & Launch Complex 2', location: 'Sriharikota, India', city: 'Sriharikota', region: 'Andhra Pradesh, India', type: 'LAUNCH COMPLEX LC-2' },
  { id: 'canaveral', name: 'Cape Canaveral Test Range', lat: 28.3922, lon: -80.6077, latStr: '28.3922° N', lonStr: '80.6077° W', status: 'ONLINE', ping: '64 ms', snr: '39.5 dB', band: 'Cryo Test Telemetry', role: 'C25 Cryogenic Engine Hot-Fire Range', location: 'Cape Canaveral, USA', city: 'Cape Canaveral', region: 'Florida, USA', type: 'PROPULSION TEST RANGE' },
];

export default function GlobalGroundStationMap() {
  const [activeStation, setActiveStation] = useState(stations[0]);
  const [telemetryTicks, setTelemetryTicks] = useState(0);
  const [modalLocation, setModalLocation] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTicks((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
      <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#F8F9FA] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-pulse"></span>
            <span className="text-label-sm text-[#46474A] uppercase tracking-widest">GLOBAL FACILITY NETWORK</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase">
            MAIN HQ, AI OPERATING OFFICE & SPACE STATIONS
          </h2>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-4 font-mono text-[10px] sm:text-xs text-[#46474A]">
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 border blueprint-line bg-[#F8F9FA] flex items-center gap-1.5 font-bold text-[#191C1D]">
            <Building className="w-3.5 h-3.5 text-[#0057FF]" /> MAIN HQ: ALFRED FAURE
          </span>
          <span className="px-2.5 py-1 sm:px-3 sm:py-1.5 border blueprint-line bg-[#F8F9FA] flex items-center gap-1.5 font-bold text-[#00AA66]">
            <Activity className="w-3.5 h-3.5 text-[#00AA66]" /> AI OFFICE: BARCELONA
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Interactive World Location Grid */}
        <div className="lg:col-span-8 border blueprint-line bg-[#1A1A1B] p-4 sm:p-6 text-[#FFFFFF] relative min-h-[380px] flex flex-col justify-between overflow-hidden">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center text-xs font-mono text-gray-400 pb-4 border-b border-gray-800 gap-1 z-10">
            <span className="text-label-sm text-[#00D2FF]">DREXORIUM GLOBAL INFRASTRUCTURE</span>
            <span className="text-[10px]">CLICK CARDS TO POPUP MAP</span>
          </div>

          {/* Location Cards */}
          <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-4 z-10">
            {stations.map((st) => {
              const isSelected = activeStation.id === st.id;
              return (
                <div
                  key={st.id}
                  onClick={() => {
                    playClickSound();
                    setActiveStation(st);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`p-4 border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#0057FF]/20 border-[#00D2FF] text-[#FFFFFF]'
                      : 'bg-[#2E3132]/60 border-gray-800 text-gray-300 hover:border-gray-600'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-[10px] font-mono text-[#00D2FF] font-bold">{st.latStr}, {st.lonStr}</span>
                    <span className={`px-2 py-0.5 text-[9px] font-mono font-bold ${st.status === 'MAIN HQ' ? 'bg-[#0057FF] text-[#FFFFFF]' : 'bg-[#00AA66]/20 text-[#00AA66] border border-[#00AA66]'}`}>
                      {st.status}
                    </span>
                  </div>
                  <div className="text-sm font-bold font-heading uppercase truncate">{st.name}</div>
                  <div className="text-[11px] font-mono text-gray-400 mt-1">{st.location}</div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playClickSound();
                      setModalLocation(st);
                    }}
                    className="mt-3 text-[10px] font-mono font-bold text-[#00D2FF] hover:underline flex items-center gap-1"
                  >
                    OPEN MAP POPUP <Navigation className="w-3 h-3" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Bottom Live Pulse Bar */}
          <div className="pt-4 border-t border-gray-800 text-xs font-mono text-gray-400 flex justify-between items-center z-10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-ping" />
              ACTIVE: {activeStation.name.toUpperCase()}
            </span>
            <span className="text-[#00D2FF]">NET BAND: {activeStation.band}</span>
          </div>
        </div>

        {/* Selected Station Telemetry Inspector */}
        <div className="lg:col-span-4 space-y-6">
          <div>
            <span className="text-label-sm text-[#0057FF] uppercase font-bold">{activeStation.location}</span>
            <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              {activeStation.name}
            </h3>
            <p className="text-xs font-sans text-[#46474A] leading-relaxed mt-2">
              {activeStation.role}. Primary node for continuous space telemetry ingestion and global AI operations.
            </p>
          </div>

          <div className="space-y-3 font-mono text-xs">
            <div className="p-3 bg-[#F8F9FA] border blueprint-line flex justify-between">
              <span className="text-gray-500">COORDINATES</span>
              <span className="font-bold text-[#191C1D]">{activeStation.latStr}, {activeStation.lonStr}</span>
            </div>

            <div className="p-3 bg-[#F8F9FA] border blueprint-line flex justify-between">
              <span className="text-gray-500">PING LATENCY</span>
              <span className="font-bold text-[#0057FF]">{activeStation.ping}</span>
            </div>

            <div className="p-3 bg-[#F8F9FA] border blueprint-line flex justify-between">
              <span className="text-gray-500">SIGNAL RELIABILITY</span>
              <span className="font-bold text-[#00AA66]">{activeStation.snr}</span>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              setModalLocation(activeStation);
            }}
            className="w-full py-3 bg-[#191C1D] text-[#FFFFFF] text-label-sm font-bold uppercase tracking-widest hover:bg-[#0057FF] transition-colors flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#FF5500]" /> SHOW MAP FOR {activeStation.city.toUpperCase()}
          </button>
        </div>
      </div>

      {/* Global Location Map Modal */}
      {modalLocation && (
        <LocationMapModal
          location={modalLocation}
          onClose={() => setModalLocation(null)}
        />
      )}
    </div>
  );
}
