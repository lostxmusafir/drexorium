import React, { useState } from 'react';
import { aiModelsData, pipelineSteps } from '../data/aiModelsData';
import { Cpu, Terminal, Play, Sparkles, Crosshair, CheckCircle2, Server, Radio, Activity, Layers, ArrowRight } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';
import OrbitCalculator from '../components/OrbitCalculator';
import ResearchWhitepapers from '../components/ResearchWhitepapers';

const systemTestPoints = [
  {
    id: "gpu-node",
    title: "Point 01: Liquid-Cooled FP8 Matrix Accelerator",
    system: "100 PFLOPS AI Supercomputing Cluster",
    location: "Bengaluru Innovation Hub",
    image: "/assets/ai_supercomputer_cluster.png",
    coordinates: "POS: 42% X // 35% Y",
    pinX: 42,
    pinY: 35,
    description: "Multi-node liquid-cooled GPU acceleration cluster running FP8 matrix multiplication for 1.4B parameter OrbitNet trajectory transformers.",
    testingMethodology: "Simultaneous 10,000 Monte-Carlo orbital perturbation simulations under high thermal load.",
    specs: [
      { name: "Tensor Throughput", value: "100 PFLOPS FP8" },
      { name: "Interconnect Bandwidth", value: "3.2 TB/s Optical" },
      { name: "Inference Latency", value: "1.1 ms" },
      { name: "Thermal Subsystem", value: "Direct Liquid Cooling (20°C)" }
    ]
  },
  {
    id: "ground-antenna",
    title: "Point 02: Deep Space Telemetry Ingestion Receiver",
    system: "Sriharikota Orbital Ground Station",
    location: "Sriharikota, India",
    image: "/assets/orbital_ground_station.png",
    coordinates: "POS: 65% X // 48% Y",
    pinX: 65,
    pinY: 48,
    description: "Massive 32-meter parabolic radio dish and high-throughput optical laser communication receiver capturing 1.2 Petabytes of daily space telemetry.",
    testingMethodology: "Simulated deep-space radio attenuation testing with Doppler shift compensation up to 84 million km.",
    specs: [
      { name: "Frequency Band", value: "Ka-Band & Optical Laser" },
      { name: "Data Rate Ingestion", value: "12.8 Gbps Continuous" },
      { name: "Track Precision", value: "0.001 Arcseconds" },
      { name: "Range Reliability", value: "99.999%" }
    ]
  },
  {
    id: "hitl-bench",
    title: "Point 03: Hardware-in-the-Loop (HITL) Avionics Bench",
    system: "GSLV Flight Autopilot Test Rig",
    location: "Cape Canaveral Facility",
    image: "/assets/hitl_avionics_testbench.png",
    coordinates: "POS: 50% X // 60% Y",
    pinX: 50,
    pinY: 60,
    description: "Physical avionics flight computer connected directly to hardware signal generators for real-time Thrust Vector Control (TVC) and fault injection testing.",
    testingMethodology: "Closed-loop hardware signal injection simulating max-Q aerodynamic turbulence and sudden booster engine shutdown.",
    specs: [
      { name: "Bus Interfaces", value: "MIL-STD-1553 & SpaceWire" },
      { name: "Loop Rate", value: "1,000 Hz Real-Time" },
      { name: "Fault Injection", value: "24 Redundant Channels" },
      { name: "Safety Rating", value: "ISO-26262 / AS9100" }
    ]
  }
];

export default function AIAnalytics() {
  const [selectedModel, setSelectedModel] = useState(aiModelsData[0]);
  const [queryInput, setQueryInput] = useState(aiModelsData[0].sampleQuery);
  const [isRunningQuery, setIsRunningQuery] = useState(false);
  const [queryResult, setQueryResult] = useState(aiModelsData[0].sampleOutput);

  // System Testing Point State
  const [activeTestPoint, setActiveTestPoint] = useState(systemTestPoints[0]);

  const handleRunQuery = () => {
    playClickSound();
    setIsRunningQuery(true);
    setTimeout(() => {
      setIsRunningQuery(false);
      setQueryResult(selectedModel.sampleOutput);
    }, 600);
  };

  const handleSelectModel = (model) => {
    playClickSound();
    setSelectedModel(model);
    setQueryInput(model.sampleQuery);
    setQueryResult(model.sampleOutput);
  };

  return (
    <div className="space-y-16 py-8 max-w-[1280px] mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
          <span className="text-label-sm text-[#46474A] uppercase tracking-widest">COMPUTATIONAL ASTROPHYSICS & TESTING</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          AI Analytics & System Testing
        </h1>

        <p className="text-base font-sans text-[#46474A] max-w-2xl mt-4 leading-relaxed">
          Combining petabyte-scale space telemetry ingestion with Hardware-in-the-Loop (HITL) system testing to validate autonomous neural flight models before orbital launch.
        </p>
      </div>

      {/* 1. PLANETARY MAPPER HYPERSPECTRAL IMAGE FEATURE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border blueprint-line bg-[#FFFFFF] p-4 sm:p-6">
        <div className="lg:col-span-7 h-[260px] sm:h-[380px] border blueprint-line overflow-hidden relative">
          <img
            src="/assets/ai_planetary_mapping.png"
            alt="AI Planetary Spectrometry"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-5 space-y-4">
          <span className="text-label-sm text-[#0057FF] font-bold uppercase">DISCIPLINE 01 // NEURAL INFERENCE</span>
          <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase">
            DeepSpace-Vision Neural Mapper
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed">
            Multi-modal vision transformers processing hyperspectral satellite imagery to detect subsurface water ice deposits, Martian mineral compositions, and atmospheric methane leaks in real time.
          </p>

          <div className="space-y-2 pt-2 border-t blueprint-line">
            <div className="text-xs font-mono text-[#191C1D] font-bold">KEY DETECTED PARAMETERS:</div>
            <div className="flex flex-wrap gap-2 text-xs font-mono text-[#46474A]">
              <span className="px-2.5 py-1 bg-[#F8F9FA] border blueprint-line">Hematite (42%)</span>
              <span className="px-2.5 py-1 bg-[#F8F9FA] border blueprint-line">Hydrated Silicates (14%)</span>
              <span className="px-2.5 py-1 bg-[#F8F9FA] border blueprint-line">Water Ice (87.4%)</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE ORBITNET TRAJECTORY & DELTA-V SIMULATOR */}
      <OrbitCalculator />

      {/* 3. SYSTEM TESTING & POINTED COMPONENT EXPLORER */}
      <div className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 space-y-6 sm:space-y-8">
        <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">SYSTEM TESTING ARCHITECTURE</span>
            <h2 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              POINTED HARDWARE & COMPONENT INSPECTOR
            </h2>
          </div>

          {/* Test Point Selector Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 border blueprint-line w-full md:w-auto">
            {systemTestPoints.map((pt) => (
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
          {/* Image with Pointed Target Reticle Pin */}
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
              <div className="text-label-sm text-[#191C1D]">VERIFIED BENCHMARK PARAMETERS</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
                {activeTestPoint.specs.map((sp, idx) => (
                  <div key={idx} className="p-3 bg-[#FFFFFF] border blueprint-line">
                    <div className="text-[10px] text-gray-500">{sp.name.toUpperCase()}</div>
                    <div className="text-xs font-bold text-[#0057FF] mt-0.5">{sp.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PEER-REVIEWED RESEARCH WHITEPAPERS LIBRARY */}
      <ResearchWhitepapers />

      {/* 5. SCROLLYTELLING DATA PIPELINE */}
      <div className="border blueprint-line bg-[#FFFFFF] p-8 space-y-8">
        <div className="border-b blueprint-line pb-4">
          <span className="text-label-sm text-[#0057FF] uppercase font-bold">PIPELINE ARCHITECTURE</span>
          <h2 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
            DATA INGESTION TO PREDICTIVE INSIGHT
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pipelineSteps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#F8F9FA] border blueprint-line hover:border-[#0057FF] transition-colors"
            >
              <div className="text-2xl font-mono font-bold text-[#0057FF] mb-2">{step.step}</div>
              <h3 className="text-lg font-bold font-heading text-[#191C1D] mb-1 uppercase">{step.title}</h3>
              <div className="text-xs font-mono text-[#46474A] mb-3">{step.subtitle}</div>
              <p className="text-xs font-sans text-[#46474A] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 6. AI MODEL CAPABILITIES & TERMINAL QUERY PLAYGROUND */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Deployed Transformer Selector */}
        <div className="lg:col-span-5 space-y-4">
          <div className="text-label-sm text-[#191C1D] uppercase font-bold">DEPLOYED TRANSFORMERS</div>

          {aiModelsData.map((model) => {
            const isSelected = selectedModel.id === model.id;
            return (
              <div
                key={model.id}
                onClick={() => handleSelectModel(model)}
                onMouseEnter={playHoverSound}
                className={`p-5 border cursor-pointer transition-all ${
                  isSelected
                    ? 'bg-[#1A1A1B] text-[#FFFFFF] border-[#1A1A1B]'
                    : 'bg-[#FFFFFF] text-[#191C1D] border-[#E5E7EB] hover:border-[#191C1D]'
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={`text-label-sm font-bold ${isSelected ? 'text-[#00D2FF]' : 'text-[#0057FF]'}`}>
                    {model.category}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 border border-current">
                    {model.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading uppercase mb-2">{model.name}</h3>
                <p className={`text-xs font-sans line-clamp-2 mb-4 leading-relaxed ${isSelected ? 'text-gray-300' : 'text-[#46474A]'}`}>
                  {model.description}
                </p>

                <div className="flex justify-between text-xs font-mono pt-3 border-t border-current/20">
                  <span>ACCURACY: <strong>{model.accuracy}</strong></span>
                  <span>LATENCY: <strong>{model.latency}</strong></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Terminal Inference Playground */}
        <div className="lg:col-span-7 border blueprint-line bg-[#1A1A1B] text-[#FFFFFF] p-6 flex flex-col justify-between h-full">
          <div>
            <div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Terminal className="w-5 h-5 text-[#00D2FF]" />
                <span className="font-heading font-bold text-base uppercase">ORBITAL AI QUERY TERMINAL</span>
              </div>
              <span className="text-label-sm text-[#00D2FF] bg-[#2E3132] px-2.5 py-1">
                MODEL: {selectedModel.id.toUpperCase()}
              </span>
            </div>

            <p className="text-xs font-sans text-gray-300 mb-4">
              Execute live inference calls against Drexorium's deployed {selectedModel.name} ({selectedModel.parameters}).
            </p>

            {/* Input Bar */}
            <div className="mb-6">
              <label className="block text-[10px] font-mono text-gray-400 mb-1.5 uppercase">
                INFERENCE QUERY STRING
              </label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  className="flex-1 bg-[#2E3132] border border-gray-700 px-4 py-2 text-xs text-[#00D2FF] font-mono focus:outline-none"
                />
                <button
                  onClick={handleRunQuery}
                  disabled={isRunningQuery}
                  className="px-5 py-2.5 bg-[#0057FF] hover:bg-[#0042C7] text-[#FFFFFF] font-mono font-bold text-xs uppercase flex items-center justify-center gap-2"
                >
                  {isRunningQuery ? 'COMPUTING...' : 'RUN INFERENCE'}
                </button>
              </div>
            </div>

            {/* Output Display */}
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-gray-400 uppercase flex justify-between">
                <span>INFERENCE OUTPUT JSON</span>
                <span className="text-[#00AA66] font-bold">LATENCY {selectedModel.latency}</span>
              </div>

              <div className="p-4 bg-[#07090E] border border-gray-800 font-mono text-xs text-[#00D2FF] min-h-[160px] relative">
                {isRunningQuery ? (
                  <div className="absolute inset-0 flex items-center justify-center bg-[#07090E]/90">
                    <div className="text-center text-xs font-mono text-[#00D2FF] animate-pulse">
                      EXECUTING FP8 TENSOR MULTIPLICATION...
                    </div>
                  </div>
                ) : (
                  <pre className="overflow-x-auto">
                    {JSON.stringify(queryResult, null, 2)}
                  </pre>
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 mt-6 flex flex-wrap gap-2 text-xs font-mono text-gray-400">
            {selectedModel.useCases.map((uc, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-[#2E3132] text-gray-300">
                ✓ {uc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
