import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Rocket, ShieldCheck, Zap, Crosshair, Radio } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

export default function SplitHeroCanvas({ onSelectMode }) {
  const canvasRef = useRef(null);
  const [splitRatio, setSplitRatio] = useState(0.5);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight || 560);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight || 560;
    };

    window.addEventListener('resize', handleResize);

    let angle = 0;
    const particles = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * (width * 0.45),
        y: height * 0.8 + Math.random() * 60,
        vy: -(Math.random() * 2.5 + 1),
        vx: (Math.random() - 0.5) * 1.8,
        radius: Math.random() * 3 + 1,
        life: 1
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      angle += 0.006;
      const splitX = width * splitRatio;

      // 1. GRID SYSTEM (CHROMATIC ORBITAL SILENCE)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // --- LEFT SIDE: AI NEURAL PLANET & TELEMETRY HUD (CYAN) ---
      ctx.save();
      ctx.beginPath();
      ctx.rect(0, 0, splitX, height);
      ctx.clip();

      const cxLeft = width * 0.25;
      const cy = height * 0.5;
      const radius = Math.min(width, height) * 0.28;

      // Radial Cyan Glow
      const bgGradLeft = ctx.createRadialGradient(cxLeft, cy, 10, cxLeft, cy, radius * 1.8);
      bgGradLeft.addColorStop(0, 'rgba(0, 240, 255, 0.18)');
      bgGradLeft.addColorStop(0.6, 'rgba(0, 119, 255, 0.04)');
      bgGradLeft.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGradLeft;
      ctx.fillRect(0, 0, splitX, height);

      // Rotating Wireframe Latitude Rings
      ctx.strokeStyle = '#00F0FF';
      ctx.lineWidth = 1.2;
      ctx.shadowBlur = 14;
      ctx.shadowColor = '#00F0FF';

      for (let i = -4; i <= 4; i++) {
        ctx.beginPath();
        const rLat = radius * Math.cos((i * Math.PI) / 10);
        const yLat = cy + radius * Math.sin((i * Math.PI) / 10);
        ctx.ellipse(cxLeft, yLat, rLat, rLat * 0.38 * Math.sin(angle), 0, 0, Math.PI * 2);
        ctx.globalAlpha = 0.35 + 0.2 * Math.cos(angle + i);
        ctx.stroke();
      }

      // Rotating Neural Nodes & Synaptic Vectors
      const nodeCount = 14;
      const nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const phi = (i * Math.PI * 2) / nodeCount + angle;
        const nx = cxLeft + radius * Math.cos(phi);
        const ny = cy + radius * 0.65 * Math.sin(phi);
        nodes.push({ x: nx, y: ny });

        ctx.beginPath();
        ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
        ctx.fillStyle = '#00F0FF';
        ctx.globalAlpha = 0.9;
        ctx.fill();
      }

      ctx.strokeStyle = 'rgba(0, 240, 255, 0.25)';
      ctx.lineWidth = 0.8;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          if (Math.abs(i - j) <= 2 || Math.abs(i - j) === nodeCount - 1) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Precision Core Reticle
      ctx.beginPath();
      ctx.arc(cxLeft, cy, 14 + Math.sin(angle * 3) * 3, 0, Math.PI * 2);
      ctx.fillStyle = '#00F0FF';
      ctx.globalAlpha = 0.8;
      ctx.fill();

      // Clinical Telemetry Coordinates Callout Overlay
      ctx.fillStyle = 'rgba(0, 240, 255, 0.7)';
      ctx.font = '10px Space Mono';
      ctx.fillText(`RA: 14h29m // DEC: -62°40'`, cxLeft - 70, cy + radius + 35);
      ctx.fillText(`TRANSFORMER PARAMETERS: 4.8B FP8`, cxLeft - 95, cy + radius + 52);

      ctx.restore();

      // --- RIGHT SIDE: GSLV HEAVY LAUNCHPAD & ENGINE PLASMA (ORANGE) ---
      ctx.save();
      ctx.beginPath();
      ctx.rect(splitX, 0, width - splitX, height);
      ctx.clip();

      const cxRight = width * 0.75;

      // Radial Orange Glow
      const bgGradRight = ctx.createRadialGradient(cxRight, cy, 10, cxRight, cy, radius * 1.8);
      bgGradRight.addColorStop(0, 'rgba(255, 85, 0, 0.22)');
      bgGradRight.addColorStop(0.6, 'rgba(255, 136, 0, 0.04)');
      bgGradRight.addColorStop(1, 'transparent');
      ctx.fillStyle = bgGradRight;
      ctx.fillRect(splitX, 0, width - splitX, height);

      // Rocket Fuselage & Gantry Structural Lines
      const rw = 30;
      const rh = 300;
      const rx = cxRight - rw / 2;
      const ry = cy - rh / 2 + 20;

      // Launch Tower Truss Structure
      ctx.strokeStyle = 'rgba(255, 136, 0, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#FF5500';

      ctx.strokeRect(cxRight - 75, ry - 20, 30, rh + 40);
      for (let y = ry - 20; y < ry + rh + 20; y += 25) {
        ctx.beginPath();
        ctx.moveTo(cxRight - 75, y);
        ctx.lineTo(cxRight - 45, y + 25);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(cxRight - 45, y);
        ctx.lineTo(cxRight - 75, y + 25);
        ctx.stroke();
      }

      // Payload Fairing Nose Cone
      ctx.fillStyle = '#121826';
      ctx.strokeStyle = '#FF8800';
      ctx.lineWidth = 2;

      ctx.beginPath();
      ctx.moveTo(cxRight, ry);
      ctx.lineTo(rx + rw + 2, ry + 45);
      ctx.lineTo(rx - 2, ry + 45);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Main Liquid Stage Fuselage
      ctx.fillRect(rx, ry + 45, rw, rh - 65);
      ctx.strokeRect(rx, ry + 45, rw, rh - 65);

      // Solid Boosters (S200 x2)
      ctx.fillStyle = '#0B0F19';
      ctx.fillRect(rx - 18, ry + 100, 16, 160);
      ctx.strokeRect(rx - 18, ry + 100, 16, 160);

      ctx.fillRect(rx + rw + 2, ry + 100, 16, 160);
      ctx.strokeRect(rx + rw + 2, ry + 100, 16, 160);

      // Rocket Engine Plasma Fire Particles
      const exhaustY = ry + rh - 20;
      for (let p of particles) {
        p.y += p.vy;
        p.x += p.vx;
        p.life -= 0.02;

        if (p.life <= 0 || p.y < exhaustY) {
          p.x = cxRight + (Math.random() - 0.5) * 32;
          p.y = exhaustY + Math.random() * 10;
          p.vy = Math.random() * 3.5 + 2;
          p.life = 1;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * p.life, 0, Math.PI * 2);
        ctx.fillStyle = p.life > 0.5 ? '#FF5500' : '#FF8800';
        ctx.globalAlpha = p.life;
        ctx.shadowBlur = 16;
        ctx.shadowColor = '#FF5500';
        ctx.fill();
      }

      // Telemetry Callout Overlay
      ctx.fillStyle = 'rgba(255, 136, 0, 0.7)';
      ctx.font = '10px Space Mono';
      ctx.fillText(`LIFTOFF THRUST: 11,898 kN`, cxRight - 70, ry + rh + 25);
      ctx.fillText(`STAGE 01: S200 BOOSTERS (HTPB)`, cxRight - 85, ry + rh + 42);

      ctx.restore();

      // --- SPLIT DIVIDER LINE & CONTROL HANDLE ---
      ctx.save();
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.shadowBlur = 16;
      ctx.shadowColor = splitRatio < 0.5 ? '#00F0FF' : '#FF5500';
      ctx.beginPath();
      ctx.moveTo(splitX, 0);
      ctx.lineTo(splitX, height);
      ctx.stroke();

      // Handle Reticle
      ctx.beginPath();
      ctx.arc(splitX, height * 0.5, 18, 0, Math.PI * 2);
      ctx.fillStyle = '#07090E';
      ctx.strokeStyle = splitRatio < 0.5 ? '#00F0FF' : '#FF5500';
      ctx.lineWidth = 3;
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [splitRatio]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const ratio = Math.max(0.15, Math.min(0.85, x / rect.width));
    setSplitRatio(ratio);
  };

  const handleTouchMove = (e) => {
    if (e.touches && e.touches[0]) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.touches[0].clientX - rect.left;
      const ratio = Math.max(0.15, Math.min(0.85, x / rect.width));
      setSplitRatio(ratio);
    }
  };

  return (
    <div className="relative w-full h-[380px] sm:h-[560px] rounded-2xl overflow-hidden border border-space-border glass-panel group shadow-2xl touch-none">
      <canvas
        ref={canvasRef}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onMouseLeave={() => setSplitRatio(0.5)}
        className="w-full h-full cursor-col-resize block"
      />

      {/* Top Labels */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 pointer-events-none flex items-center gap-2 sm:gap-3 bg-space-dark/90 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-electric-cyan/40 backdrop-blur-md max-w-[45%] truncate">
        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-electric-cyan animate-pulse flex-shrink-0" />
        <div className="truncate">
          <div className="text-[10px] sm:text-xs font-mono text-electric-cyan font-bold tracking-wider truncate">AI NEURAL MATRIX</div>
          <div className="text-[8px] sm:text-[10px] text-gray-400 hidden sm:block">Planetary & Orbital Mapping</div>
        </div>
      </div>

      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 pointer-events-none flex items-center gap-2 sm:gap-3 bg-space-dark/90 px-2.5 py-1 sm:px-4 sm:py-2 rounded-full border border-stellar-orange/40 backdrop-blur-md text-right max-w-[45%] truncate">
        <div className="truncate">
          <div className="text-[10px] sm:text-xs font-mono text-stellar-orange font-bold tracking-wider truncate">GSLV LAUNCH</div>
          <div className="text-[8px] sm:text-[10px] text-gray-400 hidden sm:block">Heavy-Lift Orbital Propulsion</div>
        </div>
        <Rocket className="w-4 h-4 sm:w-5 sm:h-5 text-stellar-orange animate-pulse flex-shrink-0" />
      </div>

      {/* Action Selector Buttons */}
      <div className="absolute bottom-3 inset-x-3 sm:bottom-6 sm:inset-x-6 flex flex-col sm:flex-row gap-2 justify-between items-center pointer-events-auto">
        <button
          onClick={() => {
            playClickSound();
            setSplitRatio(0.85);
            onSelectMode && onSelectMode('ai');
          }}
          onMouseEnter={playHoverSound}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-electric-blue/20 hover:bg-electric-blue/30 border border-electric-cyan/50 text-electric-cyan font-mono text-[11px] sm:text-xs transition-all"
        >
          <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Focus AI Engine
        </button>

        <div className="text-xs font-mono text-gray-400 bg-space-bg/90 px-4 py-2 rounded-xl border border-gray-800 hidden md:block">
          ↔ Drag cursor/touch across canvas to balance view
        </div>

        <button
          onClick={() => {
            playClickSound();
            setSplitRatio(0.15);
            onSelectMode && onSelectMode('rocket');
          }}
          onMouseEnter={playHoverSound}
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-stellar-orange/20 hover:bg-stellar-orange/30 border border-stellar-orange/50 text-stellar-orange font-mono text-[11px] sm:text-xs transition-all"
        >
          Focus GSLV Propulsion <Rocket className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
        </button>
      </div>
    </div>
  );
}
