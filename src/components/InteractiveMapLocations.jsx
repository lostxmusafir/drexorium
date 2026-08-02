import React, { useState } from 'react';
import { MapPin, Globe, ExternalLink, ShieldCheck, Activity, Compass, Radio, Building, Navigation } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';

const mapLocations = [
  {
    id: "faure",
    name: "Alfred Faure Main Global HQ",
    type: "MAIN EXECUTIVE HEADQUARTERS",
    city: "Alfred Faure",
    region: "French Southern and Antarctic Lands",
    lat: -46.4322,
    lon: 51.8569,
    latStr: "46.4322° S",
    lonStr: "51.8569° E",
    zoom: 8,
    status: "MAIN HQ",
    role: "Global Executive Command, Deep Space R&D, and Polar Telemetry Command",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=51.5569%2C-46.7322%2C52.1569%2C-46.1322&layer=mapnik&marker=-46.4322%2C51.8569",
    externalUrl: "https://www.openstreetmap.org/?mlat=-46.4322&mlon=51.8569#map=8/-46.4322/51.8569"
  },
  {
    id: "barcelona",
    name: "Barcelona AI & Operating Office",
    type: "AI OPERATING OFFICE",
    city: "Barcelona",
    region: "Catalonia, Spain",
    lat: 41.3879,
    lon: 2.1699,
    latStr: "41.3879° N",
    lonStr: "2.1699° E",
    zoom: 11,
    status: "ONLINE",
    role: "AI Neural Network Operating Office, European Supercomputing Grid & Transformer R&D Hub",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=2.0699%2C41.2879%2C2.2699%2C41.4879&layer=mapnik&marker=41.3879%2C2.1699",
    externalUrl: "https://www.openstreetmap.org/?mlat=41.3879&mlon=2.1699#map=11/41.3879/2.1699"
  },
  {
    id: "svalbard",
    name: "Svalbard Space Station",
    type: "POLAR SPACE STATION",
    city: "Longyearbyen / Svalbard",
    region: "Svalbard, Norway",
    lat: 78.2232,
    lon: 15.6267,
    latStr: "78.2232° N",
    lonStr: "15.6267° E",
    zoom: 7,
    status: "ONLINE",
    role: "Polar Orbit Satellite Tracking & High-Latitude Spectrometry Downlink",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=15.0267%2C78.0232%2C16.2267%2C78.4232&layer=mapnik&marker=78.2232%2C15.6267",
    externalUrl: "https://www.openstreetmap.org/?mlat=78.2232&mlon=15.6267#map=7/78.2232/15.6267"
  },
  {
    id: "castle-bruce",
    name: "Castle Bruce Space Station",
    type: "EQUATORIAL SPACE STATION",
    city: "Castle Bruce",
    region: "Dominica, Caribbean",
    lat: 15.4447,
    lon: -61.2561,
    latStr: "15.4447° N",
    lonStr: "61.2561° W",
    zoom: 10,
    status: "ONLINE",
    role: "Equatorial Satellite Downlink & Trans-Orbital Antenna Array",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-61.4561%2C15.3447%2C-61.0561%2C15.5447&layer=mapnik&marker=15.4447%2C-61.2561",
    externalUrl: "https://www.openstreetmap.org/?mlat=15.4447&mlon=-61.2561#map=10/15.4447/-61.2561"
  },
  {
    id: "sriharikota",
    name: "Sriharikota Orbital Launch Facility",
    type: "LAUNCH COMPLEX LC-2",
    city: "Sriharikota",
    region: "Andhra Pradesh, India",
    lat: 13.7199,
    lon: 80.2304,
    latStr: "13.7199° N",
    lonStr: "80.2304° E",
    zoom: 10,
    status: "ONLINE",
    role: "GSLV Vehicle Assembly, Integration, Test (VAIT), Launch Pad LC-2",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=80.1304%2C13.6199%2C80.3304%2C13.8199&layer=mapnik&marker=13.7199%2C80.2304",
    externalUrl: "https://www.openstreetmap.org/?mlat=13.7199&mlon=80.2304#map=10/13.7199/80.2304"
  },
  {
    id: "capecanaveral",
    name: "Cape Canaveral Deep Space Range",
    type: "PROPULSION TEST RANGE",
    city: "Cape Canaveral",
    region: "Florida, USA",
    lat: 28.3922,
    lon: -80.6077,
    latStr: "28.3922° N",
    lonStr: "80.6077° W",
    zoom: 10,
    status: "ONLINE",
    role: "Cryogenic Engine Test Stands, Satellite Tracking & Deep Space Network",
    mapUrl: "https://www.openstreetmap.org/export/embed.html?bbox=-80.7077%2C28.2922%2C-80.5077%2C28.4922&layer=mapnik&marker=28.3922%2C-80.6077",
    externalUrl: "https://www.openstreetmap.org/?mlat=28.3922&mlon=-80.6077#map=10/28.3922/-80.6077"
  }
];

export default function InteractiveMapLocations() {
  const [selectedLoc, setSelectedLoc] = useState(mapLocations[0]);

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
      <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#F8F9FA] mb-2">
            <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
            <span className="text-label-sm text-[#46474A] uppercase tracking-widest">INTERACTIVE MAPS LOCATION MATRIX</span>
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase">
            GLOBAL OFFICE & SPACE STATION MAP LOCATIONS
          </h2>
        </div>

        <div className="flex gap-2 font-mono text-xs text-[#46474A]">
          <span className="px-3 py-1.5 border blueprint-line bg-[#F8F9FA] font-bold text-[#191C1D]">
            TOTAL LOCATIONS: 6
          </span>
        </div>
      </div>

      {/* Main Grid View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Side: Selectable Locations List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-label-sm text-[#191C1D] font-bold uppercase mb-2">SELECT FACILITY LOCATION</div>

          {mapLocations.map((loc) => {
            const isSelected = selectedLoc.id === loc.id;
            return (
              <div
                key={loc.id}
                onClick={() => {
                  playClickSound();
                  setSelectedLoc(loc);
                }}
                onMouseEnter={playHoverSound}
                className={`p-3.5 sm:p-4 border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#F8F9FA] text-[#191C1D] border-[#E5E7EB] hover:border-[#191C1D]'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#00D2FF]' : 'text-[#0057FF]'}`}>
                    {loc.type}
                  </span>
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 border ${
                    loc.status === 'MAIN HQ' ? 'bg-[#0057FF] text-[#FFFFFF] border-[#0057FF]' : 'bg-[#00AA66]/20 text-[#00AA66] border-[#00AA66]'
                  }`}>
                    {loc.status}
                  </span>
                </div>

                <div className="text-sm sm:text-base font-bold font-heading uppercase">{loc.name}</div>
                <div className={`text-xs font-mono mt-1 ${isSelected ? 'text-gray-300' : 'text-[#46474A]'}`}>
                  {loc.city}, {loc.region}
                </div>

                <div className="flex justify-between items-center text-[10px] font-mono mt-3 pt-2 border-t border-current/20">
                  <span>GPS: {loc.latStr}, {loc.lonStr}</span>
                  <span className="flex items-center gap-1">VIEW MAP <Navigation className="w-3 h-3" /></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Interactive OpenStreetMap Iframe & Details Panel */}
        <div className="lg:col-span-7 space-y-6">
          {/* Map Embed Container */}
          <div className="border-2 border-[#191C1D] bg-[#1A1A1B] h-[280px] sm:h-[400px] relative overflow-hidden p-1 shadow-md">
            <iframe
              key={selectedLoc.id}
              title={selectedLoc.name}
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src={selectedLoc.mapUrl}
              className="w-full h-full filter contrast-105"
            />

            {/* Top Map HUD Banner Overlay */}
            <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-[#1A1A1B]/95 text-[#FFFFFF] px-2.5 py-1 sm:px-3 sm:py-1.5 border border-gray-800 text-[10px] sm:text-label-sm font-mono backdrop-blur-sm truncate max-w-[65%]">
              <span className="text-[#00D2FF] font-bold">MAP LOCK:</span> {selectedLoc.latStr}, {selectedLoc.lonStr}
            </div>

            {/* External Link Overlay Button */}
            <a
              href={selectedLoc.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 bg-[#FFFFFF] text-[#191C1D] px-2.5 py-1 sm:px-3 sm:py-1.5 border blueprint-line text-[10px] sm:text-label-sm font-mono font-bold flex items-center gap-1.5 hover:bg-[#191C1D] hover:text-[#FFFFFF] transition-colors shadow-sm"
            >
              <span>OPEN MAP</span> <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Location Detailed Technical Breakdown */}
          <div className="p-4 sm:p-6 bg-[#F8F9FA] border blueprint-line space-y-4">
            <div className="flex justify-between items-start border-b blueprint-line pb-3">
              <div>
                <span className="text-label-sm text-[#0057FF] font-bold uppercase">{selectedLoc.type}</span>
                <h3 className="text-lg sm:text-xl font-bold font-heading text-[#191C1D] uppercase mt-0.5">
                  {selectedLoc.name}
                </h3>
              </div>
              <span className="text-[10px] sm:text-xs font-mono font-bold text-[#00AA66] bg-[#FFFFFF] px-2.5 py-1 border blueprint-line">
                ● {selectedLoc.status}
              </span>
            </div>

            <p className="text-xs font-sans text-[#46474A] leading-relaxed">
              {selectedLoc.role}. Connected to Drexorium's global satellite uplink network for real-time telemetry processing and deep space operations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 font-mono text-xs pt-2">
              <div className="p-3 bg-[#FFFFFF] border blueprint-line">
                <div className="text-[10px] text-gray-500 uppercase">REGION / TERRITORY</div>
                <div className="text-xs font-bold text-[#191C1D] mt-0.5">{selectedLoc.region}</div>
              </div>

              <div className="p-3 bg-[#FFFFFF] border blueprint-line">
                <div className="text-[10px] text-gray-500 uppercase">COORDINATES</div>
                <div className="text-xs font-bold text-[#0057FF] mt-0.5">{selectedLoc.latStr}, {selectedLoc.lonStr}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
