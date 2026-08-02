import React, { useState, useEffect } from 'react';
import { bioDetectionStats, extremophileStrains, microfluidicTestPoints, bioResearchWhitepapers } from '../data/bioData';
import { Dna, ShieldCheck, Crosshair, Zap, Activity, Eye, FileText, CheckCircle2, RefreshCw, Cpu, Layers, Sparkles, AlertCircle } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

export default function SpaceBioTech() {
  const [activeStrain, setActiveStrain] = useState(extremophileStrains[0]);
  const [activeTestPoint, setActiveTestPoint] = useState(microfluidicTestPoints[0]);
  const [scanPulse, setScanPulse] = useState(0);
  const [liveCounter, setLiveCounter] = useState(24469);

  // Simulate real-time ticking AI detection counter
  useEffect(() => {
    const scanInterval = setInterval(() => {
      setScanPulse((prev) => (prev + 1.5) % 100);
    }, 100);

    const countInterval = setInterval(() => {
      setLiveCounter((prev) => prev + Math.floor(Math.random() * 3) + 1);
    }, 2500);

    return () => {
      clearInterval(scanInterval);
      clearInterval(countInterval);
    };
  }, []);

  return (
    <div className="space-y-12 sm:space-y-16 py-6 sm:py-8 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-6 sm:pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-pulse"></span>
          <span className="text-[10px] sm:text-label-sm text-[#46474A] uppercase tracking-widest">
            ASTROBIOLOGY & MICROGRAVITY BIOTECHNOLOGY
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          Space Microbiology & Bio-Systems
        </h1>

        <p className="text-xs sm:text-base font-sans text-[#46474A] max-w-3xl mt-3 sm:mt-4 leading-relaxed">
          Pioneering cellular morphogenesis under microgravity ($10^{-6} g$), radiation-hardened extremophile genomics, and autonomous optical AI pathogen detection for long-duration deep space exploration.
        </p>
      </div>

      {/* 1. KEY AI TELEMETRY BANNER (24-HOUR 24,469 AI BIO-DETECTIONS METRIC) */}
      <div className="border-2 border-[#191C1D] bg-[#1A1A1B] text-[#FFFFFF] p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[#00D2FF]">
              <Dna className="w-5 h-5 animate-pulse" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider">ORBITNET-BIO REAL-TIME AI TELEMETRY</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold font-heading uppercase text-white mt-1">
              24-HOUR MICROBIOLOGICAL AI DETECTION LOG
            </h2>
          </div>

          <div className="flex items-center gap-3 bg-[#07090E] px-4 py-2 border border-gray-800">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00AA66] animate-ping" />
            <span className="text-xs font-mono text-[#00AA66] font-bold">24-HOUR WINDOW LIVE</span>
          </div>
        </div>

        {/* Highlighted Metric Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-6 bg-[#07090E] p-6 border border-[#00D2FF]/40 space-y-2">
            <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">
              AI-DETECTED BIO & MICROBIO IMAGES (PAST 24 HOURS)
            </div>
            <div className="flex items-baseline gap-3">
              <span className="text-4xl sm:text-5xl font-mono font-bold text-[#00D2FF] tracking-tight">
                {liveCounter.toLocaleString()}
              </span>
              <span className="text-xs font-mono text-[#00AA66] font-bold">
                +14.8% INCREASE / 24H
              </span>
            </div>
            <p className="text-xs font-sans text-gray-300 pt-1 leading-relaxed">
              Automated high-throughput fluorescence microscopy cassettes capturing 24,469 single-cell morphometry frames across LEO microgravity incubators in 24 hours.
            </p>
          </div>

          <div className="md:col-span-6 grid grid-cols-2 gap-3 font-mono text-xs">
            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400 uppercase">ACTIVE BIO-CASSETTES</div>
              <div className="text-sm font-bold text-[#FFFFFF] mt-1">{bioDetectionStats.microfluidicCassettesActive} MATRIX WELLS</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400 uppercase">RADIOTOLERANCE INDEX</div>
              <div className="text-sm font-bold text-[#00AA66] mt-1">{bioDetectionStats.radiotoleranceIndex}</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400 uppercase">PROTEIN CRYSTAL PURITY</div>
              <div className="text-sm font-bold text-[#FF8800] mt-1">{bioDetectionStats.proteinCrystalPurity}</div>
            </div>

            <div className="p-3 bg-[#2E3132] border border-gray-700">
              <div className="text-[10px] text-gray-400 uppercase">AI INFERENCE LATENCY</div>
              <div className="text-sm font-bold text-[#00D2FF] mt-1">{bioDetectionStats.pathogenClassificationLatency}</div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. REAL-TIME AI COMPUTER VISION BIO-SAMPLE DETECTOR OVERLAY */}
      <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">LIVE MICROBIOLOGICAL RETICLE</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              AI COMPUTER VISION MICRO-SAMPLE DETECTION
            </h2>
          </div>

          <div className="flex items-center gap-2 bg-[#F8F9FA] px-3 py-1.5 border blueprint-line text-xs font-mono">
            <Eye className="w-4 h-4 text-[#0057FF]" />
            <span>OPTICAL SCAN: 365 nm UV-FLUORESCENCE</span>
          </div>
        </div>

        {/* Microfluidic Bio Image with Reticle Bounding Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 h-[300px] sm:h-[480px] border blueprint-line bg-[#F8F9FA] relative overflow-hidden p-2">
            <img
              src="/assets/space_microbiology_lab.png"
              alt="Space Microbiology Microfluidic Lab-on-a-Chip"
              className="w-full h-full object-cover filter contrast-110"
            />
          </div>

          {/* AI Auto-Detection Breakdown Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div>
              <span className="text-label-sm text-[#0057FF] uppercase font-bold">AUTOMATED PATHOGEN SCANNER</span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                Real-Time Cellular Image AI
              </h3>
              <p className="text-xs font-sans text-[#46474A] leading-relaxed mt-2">
                OrbitNet-Bio neural vision models classify cell wall thickness, flagellar motility loss, and genomic mutation vectors at 2,400 frames per minute inside orbital bio-incubators.
              </p>
            </div>

            <div className="space-y-2.5 border-t blueprint-line pt-4 font-mono text-xs">
              <div className="text-label-sm text-[#191C1D]">24-HOUR DETECTED SPECIES BREAKDOWN</div>
              
              {extremophileStrains.map((strain) => (
                <div key={strain.id} className="p-3 bg-[#F8F9FA] border blueprint-line space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#191C1D] truncate max-w-[70%]">{strain.name}</span>
                    <span className="text-[#0057FF] font-bold">{strain.detectedCount24h.toLocaleString()} imgs</span>
                  </div>
                  <div className="text-[10px] text-gray-500 flex justify-between">
                    <span>RADIOTOLERANCE: {strain.radiationTolerance}</span>
                    <span>ACCURACY: {strain.aiConfidence}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 3. POINTED HARDWARE & BIO-CASSETTE INSPECTOR */}
      <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">POINTED ASTROBIOLOGY INSPECTOR</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              ORBITAL INCUBATOR & CASSETTE BREAKDOWN
            </h2>
          </div>

          {/* Test Point Selector Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 border blueprint-line w-full md:w-auto">
            {microfluidicTestPoints.map((pt) => (
              <button
                key={pt.id}
                onClick={() => {
                  playClickSound();
                  setActiveTestPoint(pt);
                }}
                onMouseEnter={playHoverSound}
                className={`flex-1 md:flex-initial px-3 py-1.5 text-[10px] sm:text-label-sm font-bold transition-all border ${
                  activeTestPoint.id === pt.id
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#FFFFFF] text-[#46474A] border-[#E5E7EB] hover:text-[#191C1D]'
                }`}
              >
                {pt.id.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Pointed Image & Technical Breakdown Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Image with Target Reticle Pin */}
          <div className="lg:col-span-7 h-[280px] sm:h-[420px] border blueprint-line bg-[#F8F9FA] relative overflow-hidden p-2">
            <img
              src={activeTestPoint.image}
              alt={activeTestPoint.title}
              className="w-full h-full object-cover filter contrast-110"
            />
          </div>

          {/* Technical Info Breakdown */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-label-sm text-[#0057FF] uppercase font-bold">{activeTestPoint.location}</span>
              <h3 className="text-lg sm:text-xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                {activeTestPoint.title}
              </h3>
              <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed mt-3">
                {activeTestPoint.description}
              </p>
            </div>

            <div className="p-4 bg-[#F8F9FA] border blueprint-line space-y-2">
              <div className="text-label-sm text-[#191C1D]">TESTING METHODOLOGY</div>
              <p className="text-xs font-sans text-[#46474A] leading-relaxed">
                {activeTestPoint.testingMethodology}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-label-sm text-[#191C1D]">VERIFIED ASTROBIOLOGY PARAMETERS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {activeTestPoint.specs.map((sp, idx) => (
                  <div key={idx} className="p-3 bg-[#FFFFFF] border blueprint-line">
                    <div className="text-[10px] text-gray-500">{sp.name.toUpperCase()}</div>
                    <div className="text-xs font-bold text-[#00AA66] mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. EXTREMOPHILE STRAIN EXPLORER */}
      <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6">
        <div className="border-b blueprint-line pb-4 flex justify-between items-end">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">RADIATION-HARDENED GENOMICS</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              EXTREMOPHILE SPECIES CATALOGUE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3">
            {extremophileStrains.map((strain) => {
              const isSelected = activeStrain.id === strain.id;
              return (
                <div
                  key={strain.id}
                  onClick={() => {
                    playClickSound();
                    setActiveStrain(strain);
                  }}
                  onMouseEnter={playHoverSound}
                  className={`p-4 border cursor-pointer transition-all ${
                    isSelected
                      ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                      : 'bg-[#F8F9FA] text-[#191C1D] border-[#E5E7EB] hover:border-[#191C1D]'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-[#00D2FF]' : 'text-[#0057FF]'}`}>
                      {strain.category}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#00AA66]">
                      {strain.detectedCount24h} DETECTIONS
                    </span>
                  </div>
                  <h3 className="text-base font-bold font-heading uppercase">{strain.name}</h3>
                  <div className={`text-xs font-mono mt-1 ${isSelected ? 'text-gray-300' : 'text-[#46474A]'}`}>
                    TOLERANCE: {strain.radiationTolerance}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-7 p-6 bg-[#F8F9FA] border blueprint-line space-y-6">
            <div className="flex justify-between items-start border-b blueprint-line pb-4">
              <div>
                <span className="text-label-sm text-[#0057FF] uppercase font-bold">{activeStrain.category}</span>
                <h3 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                  {activeStrain.name}
                </h3>
              </div>
              <span className="px-3 py-1 bg-[#191C1D] text-[#00D2FF] font-mono text-xs font-bold">
                CONFIDENCE {activeStrain.aiConfidence}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed">
              {activeStrain.summary}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-mono text-xs">
              <div className="p-3 bg-[#FFFFFF] border blueprint-line">
                <div className="text-[10px] text-gray-500">RADIATION TOLERANCE</div>
                <div className="text-xs font-bold text-[#FF5500] mt-0.5">{activeStrain.radiationTolerance}</div>
              </div>

              <div className="p-3 bg-[#FFFFFF] border blueprint-line">
                <div className="text-[10px] text-gray-500">MICROGRAVITY BEHAVIOR</div>
                <div className="text-xs font-bold text-[#0057FF] mt-0.5">{activeStrain.microgravityBehavior}</div>
              </div>
            </div>

            <div className="p-4 bg-[#1A1A1B] text-[#FFFFFF] font-mono text-xs space-y-1">
              <div className="text-label-sm text-[#00D2FF]">ORBITAL HABITAT & COMPLIANCE</div>
              <div className="text-gray-300">{activeStrain.habitat}</div>
              <div className="text-[10px] text-gray-400 pt-1">COSPAR Category IV-B Planetary Protection Compliant</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
