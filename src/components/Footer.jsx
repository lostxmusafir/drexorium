import React from 'react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-[#1A1A1B] text-[#FFFFFF] border-t border-gray-800 py-12 relative overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-gray-800 pb-8">
          {/* Brand */}
          <div>
            <div className="text-xl font-bold font-heading text-[#FFFFFF] tracking-tight">
              Drexorium Labs
            </div>
            <div className="text-xs font-mono text-[#00D2FF] mt-1">
              MAIN HQ: ALFRED FAURE // AI OPERATING OFFICE: BARCELONA
            </div>
          </div>

          {/* Technical Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => onNavigate('about-us')}
              className="text-label-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              About & Global HQ
            </button>
            <button
              onClick={() => onNavigate('ai-analytics')}
              className="text-label-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              AI Telemetry Protocol
            </button>
            <button
              onClick={() => onNavigate('space-biotech')}
              className="text-label-sm text-gray-300 hover:text-[#00AA66] transition-colors uppercase tracking-widest"
            >
              Space BioTech
            </button>
            <button
              onClick={() => onNavigate('drone-tech')}
              className="text-label-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              Drone Fleet
            </button>
            <button
              onClick={() => onNavigate('launch-systems')}
              className="text-label-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              Launch Envelope
            </button>
            <button
              onClick={() => onNavigate('careers')}
              className="text-label-sm text-gray-300 hover:text-white transition-colors uppercase tracking-widest"
            >
              Careers & Internships
            </button>
          </div>
        </div>

        {/* Global Office Network Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono text-gray-400 border-b border-gray-800 pb-6">
          <div>
            <div className="text-[#00D2FF] font-bold text-[10px] uppercase">MAIN EXECUTIVE HQ</div>
            <div className="text-white font-bold mt-0.5">Alfred Faure</div>
            <div className="text-[10px]">French Southern and Antarctic Lands</div>
          </div>

          <div>
            <div className="text-[#00AA66] font-bold text-[10px] uppercase">AI OPERATING OFFICE</div>
            <div className="text-white font-bold mt-0.5">Barcelona Hub</div>
            <div className="text-[10px]">Barcelona, Spain</div>
          </div>

          <div>
            <div className="text-[#FF8800] font-bold text-[10px] uppercase">POLAR SPACE STATION</div>
            <div className="text-white font-bold mt-0.5">Svalbard Station</div>
            <div className="text-[10px]">Svalbard, Norway</div>
          </div>

          <div>
            <div className="text-[#00D2FF] font-bold text-[10px] uppercase">EQUATORIAL SPACE STATION</div>
            <div className="text-white font-bold mt-0.5">Castle Bruce Station</div>
            <div className="text-[10px]">Castle Bruce, Dominica</div>
          </div>
        </div>

        {/* Copyright & SEO Sitemap Links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-gray-400">
          <div>
            © {new Date().getFullYear()} Drexorium Labs. Founded by <strong className="text-white font-bold">Raj Patil</strong>. Developing AI Software & Research Concepts for Aerospace Applications.
          </div>

          <div className="flex items-center gap-4 text-[11px] text-gray-400">
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D2FF] transition-colors">
              SITEMAP.XML
            </a>
            <span className="text-gray-700">•</span>
            <a href="/llms.txt" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D2FF] transition-colors">
              LLMS.TXT
            </a>
            <span className="text-gray-700">•</span>
            <a href="/robots.txt" target="_blank" rel="noopener noreferrer" className="hover:text-[#00D2FF] transition-colors">
              ROBOTS.TXT
            </a>
            <span className="text-gray-700">•</span>
            <span className="text-[10px] text-gray-500">ISO-26262 / AS9100 COMPLIANT</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
