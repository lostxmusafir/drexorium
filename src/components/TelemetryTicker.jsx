import React, { useState, useEffect } from 'react';
import { Activity, ShieldCheck, Cpu, Radio, Clock } from 'lucide-react';

export default function TelemetryTicker() {
  const [loss, setLoss] = useState(0.0014);
  const [velocity, setVelocity] = useState(7.68);
  const [altitude, setAltitude] = useState(620.4);
  const [countdown, setCountdown] = useState({ days: 18, hours: 14, mins: 22, secs: 40 });

  useEffect(() => {
    const interval = setInterval(() => {
      setLoss((prev) => +(prev + (Math.random() - 0.5) * 0.00008).toFixed(5));
      setVelocity((prev) => +(prev + (Math.random() - 0.5) * 0.01).toFixed(2));
      setAltitude((prev) => +(prev + (Math.random() - 0.5) * 0.05).toFixed(1));

      setCountdown((prev) => {
        if (prev.secs > 0) return { ...prev, secs: prev.secs - 1 };
        return { ...prev, secs: 59, mins: prev.mins > 0 ? prev.mins - 1 : 59 };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const tickerItems = [
    { label: "ORBITNET_LOSS", value: loss, unit: "FP8", icon: Cpu, color: "text-[#0057FF]" },
    { label: "T-MINUS GSLV-DRX4", value: `${countdown.days}d ${countdown.hours}h ${countdown.mins}m ${countdown.secs}s`, unit: "COUNTDOWN", icon: Clock, color: "text-[#FF5500]" },
    { label: "ORBITAL VELOCITY", value: `${velocity} km/s`, unit: "LEO-600", icon: Activity, color: "text-[#00AA66]" },
    { label: "ALTITUDE", value: `${altitude} km`, unit: "NORAD-99412", icon: Radio, color: "text-[#191C1D]" },
    { label: "SYSTEM STATUS", value: "ALL NOMINAL", unit: "100%", icon: ShieldCheck, color: "text-[#0057FF]" },
  ];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-[#FFFFFF] border-t border-[#E5E7EB] py-2 px-4 flex items-center overflow-hidden shadow-md">
      <div className="flex items-center gap-2 pr-4 border-r border-[#E5E7EB] text-label-sm text-[#191C1D] flex-shrink-0 font-bold">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0057FF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0057FF]"></span>
        </span>
        LIVE TELEMETRY
      </div>

      <div className="flex-1 overflow-hidden relative">
        <div className="flex gap-8 animate-ticker whitespace-nowrap">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="inline-flex items-center gap-2 text-xs font-mono">
                <IconComp className={`w-3.5 h-3.5 ${item.color}`} />
                <span className="text-[#46474A] font-semibold">{item.label}:</span>
                <span className={`font-bold ${item.color}`}>{item.value}</span>
                <span className="text-[10px] text-[#191C1D] bg-[#F3F4F5] px-1.5 py-0.5 border border-[#E5E7EB]">
                  {item.unit}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
