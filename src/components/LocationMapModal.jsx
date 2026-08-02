import React from 'react';
import { X, ExternalLink, MapPin, Navigation, Radio, ShieldCheck, Activity } from 'lucide-react';
import { playClickSound } from './SoundFX';

export default function LocationMapModal({ location, onClose }) {
  if (!location) return null;

  // Build OpenStreetMap Embed & Direct URLs based on lat / lon
  const lat = location.lat || (location.coordinates ? parseFloat(location.coordinates.split(',')[0]) : 46.4322);
  const lon = location.lon || (location.coordinates ? parseFloat(location.coordinates.split(',')[1]) : 51.8569);

  const bboxDelta = 0.15;
  const bbox = `${lon - bboxDelta}%2C${lat - bboxDelta}%2C${lon + bboxDelta}%2C${lat + bboxDelta}`;
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lon}`;
  const externalUrl = `https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=10/${lat}/${lon}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="w-full max-w-4xl bg-[#FFFFFF] border-2 border-[#191C1D] p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 max-h-[92vh] overflow-y-auto shadow-2xl">
        {/* Modal Header */}
        <div className="flex justify-between items-start border-b blueprint-line pb-3 sm:pb-4">
          <div>
            <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-2.5 py-0.5 bg-[#F8F9FA] mb-1">
              <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-pulse"></span>
              <span className="text-[10px] font-mono text-[#0057FF] font-bold uppercase">
                {location.type || "FACILITY LOCATION MAP"}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase">
              {location.name}
            </h3>
            <div className="text-xs font-mono text-[#46474A] mt-1 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>{location.city || location.location}, {location.region || ''}</span>
              <span className="hidden sm:inline">//</span>
              <span className="text-[#0057FF] font-bold">GPS: {lat}°, {lon}°</span>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-1.5 bg-[#F8F9FA] border blueprint-line text-[#191C1D] hover:bg-[#191C1D] hover:text-[#FFFFFF] transition-colors"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Interactive OpenStreetMap Embed */}
        <div className="border-2 border-[#191C1D] bg-[#1A1A1B] h-[260px] sm:h-[420px] relative overflow-hidden p-1 shadow-inner">
          <iframe
            title={location.name}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src={mapUrl}
            className="w-full h-full filter contrast-105"
          />

          {/* Map Overlay Badge */}
          <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10 bg-[#1A1A1B]/95 text-[#FFFFFF] px-2.5 py-1 sm:px-3 sm:py-1.5 border border-gray-800 text-[10px] sm:text-label-sm font-mono backdrop-blur-sm truncate max-w-[65%]">
            <span className="text-[#00D2FF] font-bold">MAP LOCK</span>
          </div>

          <a
            href={externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-10 bg-[#FFFFFF] text-[#191C1D] px-2.5 py-1 sm:px-3.5 sm:py-2 border blueprint-line text-[10px] sm:text-xs font-mono font-bold flex items-center gap-1.5 hover:bg-[#191C1D] hover:text-[#FFFFFF] transition-colors shadow-md"
          >
            <span>OPEN MAP</span> <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Technical Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
          <div className="p-4 bg-[#F8F9FA] border blueprint-line space-y-1">
            <div className="text-[10px] text-gray-500 uppercase">OPERATIONAL FOCUS</div>
            <div className="text-xs font-bold text-[#191C1D] leading-snug">
              {location.focus || location.role || "Deep Space Tracking & Satellite Telemetry"}
            </div>
          </div>

          <div className="p-4 bg-[#F8F9FA] border blueprint-line space-y-1">
            <div className="text-[10px] text-gray-500 uppercase">STATUS / TELEMETRY</div>
            <div className="text-xs font-bold text-[#00AA66]">
              ● {location.status || "ONLINE"} // 99.999% UPTIME
            </div>
          </div>

          <div className="p-4 bg-[#F8F9FA] border blueprint-line space-y-1">
            <div className="text-[10px] text-gray-500 uppercase">LATENCY LINK</div>
            <div className="text-xs font-bold text-[#0057FF]">
              {location.ping || "12 ms"} (DREXORIUM DSN LINK)
            </div>
          </div>
        </div>

        {/* Modal Action Bar */}
        <div className="text-right pt-4 border-t blueprint-line">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-6 py-2.5 bg-[#191C1D] text-[#FFFFFF] text-label-sm font-bold uppercase tracking-widest hover:bg-[#0057FF] transition-colors"
          >
            CLOSE MAP VIEW
          </button>
        </div>
      </div>
    </div>
  );
}
