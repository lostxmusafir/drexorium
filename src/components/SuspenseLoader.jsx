import React from 'react';
import { Cpu, Sparkles } from 'lucide-react';

export default function SuspenseLoader({ label = "LOADING TELEMETRY..." }) {
  return (
    <div className="w-full h-full min-h-[350px] rounded-2xl glass-panel border border-electric-cyan/30 flex items-center justify-center p-8">
      <div className="text-center space-y-4">
        <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-electric-cyan border-t-transparent animate-spin" />
          <Cpu className="w-6 h-6 text-electric-cyan animate-pulse" />
        </div>
        <div className="text-xs font-mono font-bold text-electric-cyan tracking-widest uppercase">
          {label}
        </div>
        <div className="text-[10px] font-mono text-gray-500">
          INITIALIZING NEURAL TRANSFORMER BUFFERS
        </div>
      </div>
    </div>
  );
}
