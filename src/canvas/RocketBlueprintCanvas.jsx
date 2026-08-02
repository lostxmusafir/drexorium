import React, { useEffect, useRef, useState } from 'react';
import { gslvRocketData } from '../data/rocketsData';
import { Layers, ShieldAlert, Gauge, Flame, CheckCircle, Info } from 'lucide-react';

export default function RocketBlueprintCanvas({ activeStageId, onSelectStage }) {
  const canvasRef = useRef(null);
  const [selectedStage, setSelectedStage] = useState(
    gslvRocketData.stages.find((s) => s.id === activeStageId) || gslvRocketData.stages[0]
  );

  useEffect(() => {
    if (activeStageId) {
      const match = gslvRocketData.stages.find((s) => s.id === activeStageId);
      if (match) setSelectedStage(match);
    }
  }, [activeStageId]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 550);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 550;
    };

    window.addEventListener('resize', handleResize);

    let pulse = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulse += 0.04;

      const cx = width * 0.4;
      const topY = 40;
      const totalH = height - 80;

      // Rocket Stage Vertical Coordinates
      const fairingH = totalH * 0.22;
      const upperH = totalH * 0.24;
      const coreH = totalH * 0.32;
      const boosterH = totalH * 0.45;

      const rocketW = 44;

      // Draw Grid / X-Ray Scanner Guidelines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
      ctx.lineWidth = 1;
      for (let y = topY; y < height - 40; y += 30) {
        ctx.beginPath();
        ctx.moveTo(30, y);
        ctx.lineTo(width - 30, y);
        ctx.stroke();
      }

      // --- STAGE 01: PAYLOAD FAIRING ---
      const fairingActive = selectedStage.id === 'fairing';
      ctx.fillStyle = fairingActive ? 'rgba(0, 240, 255, 0.25)' : 'rgba(18, 24, 38, 0.8)';
      ctx.strokeStyle = fairingActive ? '#00F0FF' : '#4B5563';
      ctx.lineWidth = fairingActive ? 2.5 : 1.5;

      ctx.beginPath();
      ctx.moveTo(cx, topY);
      ctx.lineTo(cx + rocketW / 2 + 10, topY + fairingH);
      ctx.lineTo(cx - rocketW / 2 - 10, topY + fairingH);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Satellite payload inside fairing (X-Ray effect)
      ctx.fillStyle = '#00F0FF';
      ctx.beginPath();
      ctx.arc(cx, topY + fairingH * 0.6, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeRect(cx - 18, topY + fairingH * 0.5, 36, 16);

      // --- STAGE 02: UPPER CRYOGENIC STAGE (C25) ---
      const upperY = topY + fairingH;
      const upperActive = selectedStage.id === 'upper';
      ctx.fillStyle = upperActive ? 'rgba(59, 130, 246, 0.3)' : 'rgba(18, 24, 38, 0.8)';
      ctx.strokeStyle = upperActive ? '#3B82F6' : '#4B5563';
      ctx.lineWidth = upperActive ? 2.5 : 1.5;

      ctx.fillRect(cx - rocketW / 2, upperY, rocketW, upperH);
      ctx.strokeRect(cx - rocketW / 2, upperY, rocketW, upperH);

      // LH2/LOX Cryo Tank internals
      ctx.strokeStyle = upperActive ? 'rgba(59, 130, 246, 0.8)' : 'rgba(255, 255, 255, 0.2)';
      ctx.beginPath();
      ctx.arc(cx, upperY + upperH * 0.35, 14, 0, Math.PI * 2);
      ctx.arc(cx, upperY + upperH * 0.7, 12, 0, Math.PI * 2);
      ctx.stroke();

      // --- STAGE 03: CORE LIQUID STAGE (L110) ---
      const coreY = upperY + upperH;
      const coreActive = selectedStage.id === 'core';
      ctx.fillStyle = coreActive ? 'rgba(255, 136, 0, 0.3)' : 'rgba(18, 24, 38, 0.8)';
      ctx.strokeStyle = coreActive ? '#FF8800' : '#4B5563';
      ctx.lineWidth = coreActive ? 2.5 : 1.5;

      ctx.fillRect(cx - rocketW / 2, coreY, rocketW, coreH);
      ctx.strokeRect(cx - rocketW / 2, coreY, rocketW, coreH);

      // Twin Vikas Engine nozzles
      ctx.fillStyle = coreActive ? '#FF8800' : '#6B7280';
      ctx.beginPath();
      ctx.moveTo(cx - 14, coreY + coreH);
      ctx.lineTo(cx - 8, coreY + coreH + 18);
      ctx.lineTo(cx - 20, coreY + coreH + 18);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(cx + 14, coreY + coreH);
      ctx.lineTo(cx + 8, coreY + coreH + 18);
      ctx.lineTo(cx + 20, coreY + coreH + 18);
      ctx.closePath();
      ctx.fill();

      // --- STAGE 04: SOLID STRAP-ON BOOSTERS (S200 x2) ---
      const boosterY = coreY + coreH * 0.1;
      const boosterActive = selectedStage.id === 'boosters';
      const bW = 20;

      ctx.fillStyle = boosterActive ? 'rgba(255, 85, 0, 0.35)' : 'rgba(11, 15, 25, 0.9)';
      ctx.strokeStyle = boosterActive ? '#FF5500' : '#4B5563';
      ctx.lineWidth = boosterActive ? 2.5 : 1.5;

      // Booster Left
      ctx.fillRect(cx - rocketW / 2 - bW - 6, boosterY, bW, boosterH);
      ctx.strokeRect(cx - rocketW / 2 - bW - 6, boosterY, bW, boosterH);

      // Booster Right
      ctx.fillRect(cx + rocketW / 2 + 6, boosterY, bW, boosterH);
      ctx.strokeRect(cx + rocketW / 2 + 6, boosterY, bW, boosterH);

      // X-Ray Scanner Target Beam Line on Selected Stage
      let targetY = topY + fairingH * 0.5;
      let targetColor = '#00F0FF';
      if (selectedStage.id === 'upper') {
        targetY = upperY + upperH * 0.5;
        targetColor = '#3B82F6';
      } else if (selectedStage.id === 'core') {
        targetY = coreY + coreH * 0.5;
        targetColor = '#FF8800';
      } else if (selectedStage.id === 'boosters') {
        targetY = boosterY + boosterH * 0.5;
        targetColor = '#FF5500';
      }

      // Draw Glowing Horizontal Scanner Reticle
      ctx.save();
      ctx.strokeStyle = targetColor;
      ctx.lineWidth = 2;
      ctx.shadowBlur = 12 + Math.sin(pulse) * 4;
      ctx.shadowColor = targetColor;
      ctx.beginPath();
      ctx.moveTo(30, targetY);
      ctx.lineTo(width - 30, targetY);
      ctx.stroke();

      // Connector Callout Line to Specs Box
      ctx.beginPath();
      ctx.moveTo(cx + rocketW + 35, targetY);
      ctx.lineTo(width - 40, targetY);
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedStage]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      {/* Canvas Blueprint Interactive Stage Inspector */}
      <div className="lg:col-span-7 relative h-[560px] rounded-2xl glass-panel border border-space-border overflow-hidden flex flex-col justify-between p-6">
        <div className="flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-stellar-orange/20 border border-stellar-orange/40">
              <Layers className="w-5 h-5 text-stellar-orange" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-lg tracking-wide">
                GSLV-MK3 X-RAY ARCHITECTURE
              </h3>
              <p className="text-xs font-mono text-gray-400">Select stage to inspect propulsion & avionics</p>
            </div>
          </div>

          <div className="text-xs font-mono text-status-emerald bg-space-dark px-3 py-1.5 rounded-md border border-status-emerald/30">
            ● X-RAY TELEMETRY LIVE
          </div>
        </div>

        {/* Canvas Renderer */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block z-0" />

        {/* Interactive Stage Selector Tabs */}
        <div className="z-10 grid grid-cols-2 md:grid-cols-4 gap-2 bg-space-dark/90 p-2 rounded-xl border border-gray-700">
          {gslvRocketData.stages.map((stage) => (
            <button
              key={stage.id}
              onClick={() => {
                setSelectedStage(stage);
                onSelectStage && onSelectStage(stage.id);
              }}
              className={`px-3 py-2 rounded-lg text-xs font-mono font-bold text-left transition-all border ${
                selectedStage.id === stage.id
                  ? 'bg-space-card text-white border-electric-cyan shadow-glow'
                  : 'text-gray-400 border-transparent hover:text-white hover:bg-space-gray'
              }`}
            >
              <div className="text-[10px] opacity-60">STAGE {stage.number}</div>
              <div className="truncate" style={{ color: stage.color }}>{stage.name}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Stage Technical Cutaway Spec Inspector Card */}
      <div className="lg:col-span-5 rounded-2xl glass-panel p-6 border border-space-border flex flex-col justify-between h-[560px]">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div>
              <span
                className="px-2.5 py-1 rounded text-[10px] font-mono font-bold uppercase tracking-wider"
                style={{ backgroundColor: `${selectedStage.color}20`, color: selectedStage.color, border: `1px solid ${selectedStage.color}50` }}
              >
                STAGE {selectedStage.number} // {selectedStage.type}
              </span>
              <h3 className="text-2xl font-heading font-bold text-white mt-2">
                {selectedStage.name}
              </h3>
            </div>
          </div>

          <p className="text-sm text-gray-300 mb-6 leading-relaxed">
            {selectedStage.summary}
          </p>

          {/* Quick Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="p-3 rounded-xl bg-space-dark/80 border border-gray-800">
              <div className="text-[10px] font-mono text-gray-400">THRUST</div>
              <div className="text-base font-mono font-bold text-white mt-0.5" style={{ color: selectedStage.color }}>
                {selectedStage.thrust}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-space-dark/80 border border-gray-800">
              <div className="text-[10px] font-mono text-gray-400">SPECIFIC IMPULSE (Isp)</div>
              <div className="text-base font-mono font-bold text-white mt-0.5">
                {selectedStage.isp}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-space-dark/80 border border-gray-800">
              <div className="text-[10px] font-mono text-gray-400">STAGE MASS</div>
              <div className="text-base font-mono font-bold text-white mt-0.5">
                {selectedStage.mass}
              </div>
            </div>

            <div className="p-3 rounded-xl bg-space-dark/80 border border-gray-800">
              <div className="text-[10px] font-mono text-gray-400">BURN TIME / PROFILE</div>
              <div className="text-xs font-mono font-bold text-white mt-0.5 truncate">
                {selectedStage.burnTime}
              </div>
            </div>
          </div>

          {/* Technical Cutaway Feature List */}
          <div className="space-y-2.5">
            <div className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
              KEY ARCHITECTURAL HIGHLIGHTS
            </div>
            {selectedStage.details.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <CheckCircle className="w-4 h-4 text-electric-cyan flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Specs Action CTA */}
        <div className="pt-4 border-t border-gray-800 flex justify-between items-center text-xs font-mono">
          <span className="text-gray-400">PROPULSION ALLOY: NIMONIC-90 & CFRP</span>
          <span className="text-electric-cyan font-bold">STATUS: FLIGHT READY</span>
        </div>
      </div>
    </div>
  );
}
