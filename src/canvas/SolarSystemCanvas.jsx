import React, { useEffect, useRef, useState } from 'react';
import { Radio, Eye, Activity, Database, Crosshair } from 'lucide-react';

const celestialTargets = [
  {
    id: "mars",
    name: "Mars (Valles Marineris)",
    dist: 140,
    radius: 14,
    speed: 0.006,
    color: "#FF5500",
    spectrometry: "Hematite & Subsurface Hydrated Minerals",
    anomalyStatus: "Nominal - Atmospheric Methane Spike Detected",
    aiConfidence: "99.8%"
  },
  {
    id: "lunar",
    name: "Moon (Shackleton Crater)",
    dist: 80,
    radius: 9,
    speed: 0.015,
    color: "#00F0FF",
    spectrometry: "Subsurface Water Ice (1.4 Billion Tons)",
    anomalyStatus: "LSRP-1 Radar Polarized Deposit Mapped",
    aiConfidence: "99.98%"
  },
  {
    id: "europa",
    name: "Jupiter / Europa",
    dist: 210,
    radius: 18,
    speed: 0.003,
    color: "#A855F7",
    spectrometry: "Sub-ice Saline Ocean Plumes",
    anomalyStatus: "Cryo-plume Thermal Gradient Active",
    aiConfidence: "98.4%"
  },
  {
    id: "asteroid",
    name: "Asteroid 2024-DRX9",
    dist: 170,
    radius: 7,
    speed: 0.009,
    color: "#00FF88",
    spectrometry: "Nickel-Iron Metallic Composition",
    anomalyStatus: "Target for GSLV-DRX4 Kinetic Intercept",
    aiConfidence: "99.99%"
  }
];

export default function SolarSystemCanvas({ onSelectTarget }) {
  const canvasRef = useRef(null);
  const [selectedTarget, setSelectedTarget] = useState(celestialTargets[1]); // Moon default
  const [hoveredTarget, setHoveredTarget] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 450);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 450;
    };

    window.addEventListener('resize', handleResize);

    let angles = { mars: 0, lunar: 1.5, europa: 3.2, asteroid: 4.8 };

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.5;
      const cy = height * 0.5;

      // Draw Sun at Center
      const sunGrad = ctx.createRadialGradient(cx, cy, 5, cx, cy, 40);
      sunGrad.addColorStop(0, '#FFFFFF');
      sunGrad.addColorStop(0.3, '#FF8800');
      sunGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sunGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fill();

      // Sun Core
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#FFAA00';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#FF5500';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Draw Orbital Tracks & Celestial Bodies
      celestialTargets.forEach((target) => {
        angles[target.id] += target.speed;
        const currentAngle = angles[target.id];

        const x = cx + target.dist * Math.cos(currentAngle);
        const y = cy + target.dist * 0.5 * Math.sin(currentAngle); // Elliptical 3D perspective

        // Draw Elliptical Orbit Track
        ctx.beginPath();
        ctx.ellipse(cx, cy, target.dist, target.dist * 0.5, 0, 0, Math.PI * 2);
        ctx.strokeStyle = target.id === selectedTarget.id ? target.color : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = target.id === selectedTarget.id ? 1.8 : 1;
        ctx.setLineDash(target.id === selectedTarget.id ? [] : [4, 4]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Target Body Glow & Render
        ctx.beginPath();
        ctx.arc(x, y, target.radius, 0, Math.PI * 2);
        ctx.fillStyle = target.color;
        ctx.shadowBlur = target.id === selectedTarget.id ? 20 : 8;
        ctx.shadowColor = target.color;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Target reticle if selected
        if (target.id === selectedTarget.id) {
          ctx.beginPath();
          ctx.arc(x, y, target.radius + 8, 0, Math.PI * 2);
          ctx.strokeStyle = target.color;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // Crosshairs
          ctx.beginPath();
          ctx.moveTo(x - target.radius - 14, y);
          ctx.lineTo(x + target.radius + 14, y);
          ctx.moveTo(x, y - target.radius - 14);
          ctx.lineTo(x, y + target.radius + 14);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
          ctx.lineWidth = 0.8;
          ctx.stroke();

          // Label
          ctx.fillStyle = '#FFFFFF';
          ctx.font = '11px Space Mono';
          ctx.fillText(target.name.toUpperCase(), x + target.radius + 12, y + 4);
        }

        // Store positions for click detection
        target.currentX = x;
        target.currentY = y;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [selectedTarget]);

  const handleCanvasClick = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    for (let target of celestialTargets) {
      if (target.currentX && target.currentY) {
        const dx = mx - target.currentX;
        const dy = my - target.currentY;
        if (Math.sqrt(dx * dx + dy * dy) < target.radius + 15) {
          setSelectedTarget(target);
          onSelectTarget && onSelectTarget(target);
          break;
        }
      }
    }
  };

  return (
    <div className="relative w-full h-[460px] rounded-2xl overflow-hidden glass-panel border border-electric-cyan/30 shadow-2xl flex flex-col justify-between p-6">
      {/* Top Bar Header */}
      <div className="flex justify-between items-center z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-electric-blue/20 border border-electric-cyan/40">
            <Radio className="w-5 h-5 text-electric-cyan animate-pulse" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-lg text-white tracking-wide">
              DEEPSPACE-VISION ORBITAL MAPPER
            </h3>
            <p className="text-xs font-mono text-gray-400">Click orbital target body to inspect telemetry</p>
          </div>
        </div>

        {/* Quick Target Select Buttons */}
        <div className="flex gap-2">
          {celestialTargets.map((t) => (
            <button
              key={t.id}
              onClick={() => {
                setSelectedTarget(t);
                onSelectTarget && onSelectTarget(t);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all border ${
                selectedTarget.id === t.id
                  ? 'bg-electric-cyan/20 text-electric-cyan border-electric-cyan shadow-glow'
                  : 'bg-space-dark/60 text-gray-400 border-gray-700 hover:text-white'
              }`}
            >
              {t.id.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Canvas View */}
      <canvas
        ref={canvasRef}
        onClick={handleCanvasClick}
        className="absolute inset-0 w-full h-full cursor-pointer z-0"
      />

      {/* Bottom Telemetry Overlay Box */}
      <div className="z-10 grid grid-cols-1 md:grid-cols-4 gap-4 p-4 rounded-xl bg-space-dark/90 border border-gray-700/80 backdrop-blur-md">
        <div>
          <div className="text-[10px] font-mono text-gray-400 uppercase">ACTIVE TARGET SECTOR</div>
          <div className="text-sm font-heading font-bold text-white flex items-center gap-2 mt-0.5">
            <Crosshair className="w-4 h-4 text-electric-cyan" /> {selectedTarget.name}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-gray-400 uppercase">SPECTROMETRY READOUT</div>
          <div className="text-xs font-mono text-electric-cyan mt-0.5 truncate">
            {selectedTarget.spectrometry}
          </div>
        </div>

        <div>
          <div className="text-[10px] font-mono text-gray-400 uppercase">AI ANOMALY STATUS</div>
          <div className="text-xs font-mono text-stellar-flare mt-0.5 truncate">
            {selectedTarget.anomalyStatus}
          </div>
        </div>

        <div className="text-right">
          <div className="text-[10px] font-mono text-gray-400 uppercase">MODEL CONFIDENCE</div>
          <div className="text-sm font-mono font-bold text-status-emerald mt-0.5">
            {selectedTarget.aiConfidence} MATCH
          </div>
        </div>
      </div>
    </div>
  );
}
