import React, { useState, useEffect } from 'react';
import { Cpu, Eye, Radio, ShieldCheck, Crosshair, Zap, Activity, Navigation, Compass, AlertTriangle, Layers, CheckCircle2 } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

const droneModes = [
  {
    id: "auto-detect",
    name: "AI Auto-Detected Mode",
    status: "RAW FACTORY PHOTO",
    targetLock: "INDUSTRIAL HANGAR ENVIRONMENT OK",
    detectedObjects: [
      { name: "Raw Unbranded Drone Hull", confidence: "99.98%", dist: "FACTORY BAY 2", bbox: "TOP: 35% // LEFT: 28%" },
      { name: "Industrial Storage Racks", confidence: "99.95%", dist: "AMBIENT LIGHT", bbox: "TOP: 60% // LEFT: 55%" },
      { name: "Optical Camera Gimbal", confidence: "99.99%", dist: "CALIBRATED", bbox: "TOP: 22% // LEFT: 62%" },
    ]
  },
  {
    id: "autonomous-navigation",
    name: "Autonomous Guidance Autopilot",
    status: "WAYPOINT ROUTING",
    targetLock: "DEEP SPACE SPICE MATRIX OK",
    detectedObjects: [
      { name: "Wind Shear Vector", confidence: "98.70%", dist: "+12.4 m/s", bbox: "TOP: 15% // LEFT: 20%" },
      { name: "Relay Sat Link (DRX-SAT-4)", confidence: "99.99%", dist: "420 km", bbox: "TOP: 80% // LEFT: 30%" },
    ]
  }
];

export default function DroneTech() {
  const [activeMode, setActiveMode] = useState(droneModes[0]);
  const [scanPulse, setScanPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanPulse((prev) => (prev + 1.5) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-16 py-8 max-w-[1280px] mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
          <span className="text-label-sm text-[#46474A] uppercase tracking-widest">AUTONOMOUS AEROSPACE FLEET</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          AeroMars & AeroEarth Drone Tech
        </h1>

        <p className="text-base font-sans text-[#46474A] max-w-2xl mt-4 leading-relaxed">
          High-altitude autonomous scouting drones equipped with edge-AI computer vision, LIDAR surface topography scanners, and auto-detected planetary landing reticles.
        </p>
      </div>

      {/* 1. AUTHENTIC RAW FACTORY DRONE PHOTO WITH LIVE AUTO-DETECTED MODE OVERLAY */}
      <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">LIVE AUTONOMOUS DETECTOR</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              AI COMPUTER VISION AUTO-DETECTED MODE
            </h2>
          </div>

          {/* Mode Switcher */}
          <div className="flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 border blueprint-line w-full sm:w-auto">
            {droneModes.map((mode) => (
              <button
                key={mode.id}
                onClick={() => {
                  playClickSound();
                  setActiveMode(mode);
                }}
                onMouseEnter={playHoverSound}
                className={`flex-1 sm:flex-initial px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-label-sm font-bold transition-all border ${
                  activeMode.id === mode.id
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#FFFFFF] text-[#46474A] border-[#E5E7EB] hover:text-[#191C1D]'
                }`}
              >
                {mode.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Drone Authentic Raw Factory View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 h-[300px] sm:h-[480px] border blueprint-line bg-[#F8F9FA] relative overflow-hidden p-2">
            <img
              src="/assets/authentic_factory_drone_photo.png"
              alt="Authentic Realistic Factory Drone Photograph"
              className="w-full h-full object-cover filter contrast-105"
            />
          </div>

          {/* AI Auto-Detection Breakdown Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-label-sm text-[#0057FF] uppercase font-bold">AUTONOMOUS DETECTION MATRIX</span>
              <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                Real-Time AI Processing
              </h3>
              <p className="text-xs font-sans text-[#46474A] leading-relaxed mt-2">
                Running 100 FPS edge-AI computer vision for terrain mapping, landing site hazard classification, and obstacle avoidance without human ground intervention.
              </p>
            </div>

            <div className="space-y-3 border-t blueprint-line pt-4">
              <div className="text-label-sm text-[#191C1D]">ACTIVE DETECTED OBJECTS</div>
              {activeMode.detectedObjects.map((obj, idx) => (
                <div key={idx} className="p-3 bg-[#F8F9FA] border blueprint-line space-y-1 font-mono text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#191C1D]">{obj.name}</span>
                    <span className="text-[#0057FF] font-bold">{obj.confidence}</span>
                  </div>
                  <div className="text-[10px] text-[#46474A] flex justify-between">
                    <span>DISTANCE: {obj.dist}</span>
                    <span>{obj.bbox}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-[#1A1A1B] text-[#FFFFFF] border border-gray-800 font-mono text-xs space-y-2">
              <div className="text-label-sm text-[#00D2FF]">FLIGHT TELEMETRY SNAPSHOT</div>
              <div className="flex justify-between text-gray-300">
                <span>LOCATION: <strong>FACTORY BAY 2</strong></span>
                <span>STATUS: <strong>STANDBY / INSPECTION</strong></span>
              </div>
              <div className="flex justify-between text-gray-300">
                <span>LIDAR FREQ: <strong>120,000 PTS/S</strong></span>
                <span>BATTERY: <strong>100% NOMINAL</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. DRONE TECH HARDWARE & SENSOR BREAKDOWN */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#FFFFFF] border blueprint-line space-y-3">
          <div className="p-3 bg-[#F8F9FA] border blueprint-line w-fit">
            <Eye className="w-6 h-6 text-[#0057FF]" />
          </div>
          <div className="text-label-sm text-[#0057FF] font-bold">HYPERSPECTRAL CAMERAS</div>
          <h3 className="text-lg font-bold font-heading text-[#191C1D] uppercase">Multi-Band Optical Gimbal</h3>
          <p className="text-xs font-sans text-[#46474A] leading-relaxed">
            Dual-axis stabilized camera payload operating in UV, Visible, and Infrared bands to identify subsurface mineral and ice signatures.
          </p>
        </div>

        <div className="p-6 bg-[#FFFFFF] border blueprint-line space-y-3">
          <div className="p-3 bg-[#F8F9FA] border blueprint-line w-fit">
            <Navigation className="w-6 h-6 text-[#FF5500]" />
          </div>
          <div className="text-label-sm text-[#FF5500] font-bold">LIDAR TOPOGRAPHY</div>
          <h3 className="text-lg font-bold font-heading text-[#191C1D] uppercase">3D Terrain Radar</h3>
          <p className="text-xs font-sans text-[#46474A] leading-relaxed">
            Pulsed laser topography mapping capturing 120,000 points per second for real-time digital elevation models (DEM) and crater hazards.
          </p>
        </div>

        <div className="p-6 bg-[#FFFFFF] border blueprint-line space-y-3">
          <div className="p-3 bg-[#F8F9FA] border blueprint-line w-fit">
            <Zap className="w-6 h-6 text-[#00AA66]" />
          </div>
          <div className="text-label-sm text-[#00AA66] font-bold">EDGE-AI FLIGHT COMPUTER</div>
          <h3 className="text-lg font-bold font-heading text-[#191C1D] uppercase">Neural Auto-Landing</h3>
          <p className="text-xs font-sans text-[#46474A] leading-relaxed">
            Embedded Tensor processing unit running autonomous landing site target acquisition and emergency return-to-base protocols.
          </p>
        </div>
      </div>
    </div>
  );
}
