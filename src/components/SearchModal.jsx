import React, { useState, useEffect } from 'react';
import { Search, X, Rocket, Cpu, Calendar, ArrowRight, Dna } from 'lucide-react';
import { gslvRocketData } from '../data/rocketsData';
import { aiModelsData } from '../data/aiModelsData';
import { missionsData } from '../data/missionsData';
import { extremophileStrains } from '../data/bioData';

export default function SearchModal({ isOpen, onClose, onNavigate }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        isOpen ? onClose() : null;
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredBio = extremophileStrains.filter(
    (b) => b.name.toLowerCase().includes(query.toLowerCase()) || b.category.toLowerCase().includes(query.toLowerCase()) || b.summary.toLowerCase().includes(query.toLowerCase())
  );

  const filteredRockets = gslvRocketData.stages.filter(
    (s) => s.name.toLowerCase().includes(query.toLowerCase()) || s.type.toLowerCase().includes(query.toLowerCase())
  );

  const filteredModels = aiModelsData.filter(
    (m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.category.toLowerCase().includes(query.toLowerCase())
  );

  const filteredMissions = missionsData.filter(
    (m) => m.name.toLowerCase().includes(query.toLowerCase()) || m.payload.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-12 sm:pt-20 px-3 sm:px-4">
      <div className="w-full max-w-2xl glass-panel rounded-2xl border border-electric-cyan/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Search Input Bar */}
        <div className="p-3.5 sm:p-4 border-b border-gray-800 flex items-center gap-2.5 sm:gap-3">
          <Search className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search GSLV stages, AI models, missions..."
            className="flex-1 bg-transparent text-white font-mono text-xs sm:text-sm placeholder-gray-500 focus:outline-none"
          />
          <button onClick={onClose} className="p-1 text-gray-400 hover:text-white flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] sm:max-h-[420px] overflow-y-auto p-3.5 sm:p-4 space-y-4 sm:space-y-6">
          {/* Space Bio & Extremophiles Match */}
          {filteredBio.length > 0 && (
            <div>
              <div className="text-[10px] font-mono text-[#00AA66] font-bold uppercase tracking-wider mb-2">
                ASTROBIOLOGY & MICROBIOLOGY SPECIES ({filteredBio.length})
              </div>
              <div className="space-y-2">
                {filteredBio.map((b) => (
                  <div
                    key={b.id}
                    onClick={() => {
                      onNavigate('space-biotech');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-space-dark border border-gray-800 hover:border-[#00AA66] cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Dna className="w-5 h-5 text-[#00AA66]" />
                      <div>
                        <div className="text-sm font-heading font-bold text-white group-hover:text-[#00AA66]">
                          {b.name}
                        </div>
                        <div className="text-xs font-mono text-gray-400">{b.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-[#00AA66] group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AI Models Match */}
          {filteredModels.length > 0 && (
            <div>
              <div className="text-[10px] font-mono text-electric-cyan font-bold uppercase tracking-wider mb-2">
                AI TRANSFORMER MODELS ({filteredModels.length})
              </div>
              <div className="space-y-2">
                {filteredModels.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onNavigate('ai-analytics');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-space-dark border border-gray-800 hover:border-electric-cyan cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-electric-cyan" />
                      <div>
                        <div className="text-sm font-heading font-bold text-white group-hover:text-electric-cyan">
                          {m.name}
                        </div>
                        <div className="text-xs font-mono text-gray-400">{m.category}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-electric-cyan group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Rocket Stages Match */}
          {filteredRockets.length > 0 && (
            <div>
              <div className="text-[10px] font-mono text-stellar-orange font-bold uppercase tracking-wider mb-2">
                GSLV ROCKET ARCHITECTURE ({filteredRockets.length})
              </div>
              <div className="space-y-2">
                {filteredRockets.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => {
                      onNavigate('launch-systems');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-space-dark border border-gray-800 hover:border-stellar-orange cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Rocket className="w-5 h-5 text-stellar-orange" />
                      <div>
                        <div className="text-sm font-heading font-bold text-white group-hover:text-stellar-orange">
                          {s.name}
                        </div>
                        <div className="text-xs font-mono text-gray-400">Thrust: {s.thrust}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-stellar-orange group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Missions Match */}
          {filteredMissions.length > 0 && (
            <div>
              <div className="text-[10px] font-mono text-status-emerald font-bold uppercase tracking-wider mb-2">
                FLIGHT MANIFEST & MISSIONS ({filteredMissions.length})
              </div>
              <div className="space-y-2">
                {filteredMissions.map((m) => (
                  <div
                    key={m.id}
                    onClick={() => {
                      onNavigate('missions');
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-space-dark border border-gray-800 hover:border-status-emerald cursor-pointer transition-all flex items-center justify-between group"
                  >
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-status-emerald" />
                      <div>
                        <div className="text-sm font-heading font-bold text-white group-hover:text-status-emerald">
                          {m.name}
                        </div>
                        <div className="text-xs font-mono text-gray-400">{m.date} // {m.orbit}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-status-emerald group-hover:translate-x-1 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredModels.length === 0 && filteredRockets.length === 0 && filteredMissions.length === 0 && (
            <div className="py-8 text-center text-gray-400 font-mono text-xs">
              No matching aerospace records found for "{query}".
            </div>
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="p-3 bg-space-dark border-t border-gray-800 text-[11px] font-mono text-gray-500 flex justify-between">
          <span>Search index updated 2026</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
