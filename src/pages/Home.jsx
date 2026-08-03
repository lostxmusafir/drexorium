import React, { useState, useEffect } from 'react';
import { Cpu, Rocket, ShieldCheck, CheckCircle, Terminal, ArrowRight, Layers, Activity, Eye, Navigation, Crosshair, Dna, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

const HERO_SLIDES = [
  {
    id: 'slide-01',
    badge: 'GLOBAL RESEARCH INITIATIVE',
    headingLine1: 'Decoding The Cosmos.',
    headingLine2: 'Powering The Ascent.',
    description: 'Developing AI software and research concepts for aerospace applications. We synthesize empirical data to explore next-generation orbital propulsion concepts and autonomous mission analytics.',
    primaryBtnText: 'Explore Capabilities',
    primaryBtnRoute: 'ai-analytics',
    secondaryBtnText: 'Drone Technology',
    secondaryBtnRoute: 'drone-tech',
    image: '/assets/gslv_booster_ground_ai.png',
    imageAlt: 'Ground-Side Realistic Booster Control Terminal'
  },
  {
    id: 'slide-02',
    badge: 'ORBITAL PROPULSION SYSTEMS',
    headingLine1: 'Heavy Lift Engines.',
    headingLine2: 'Interplanetary Reach.',
    description: 'Developing high-thrust cryogenic engines and solid booster assemblies engineered for interplanetary payload delivery and deep-space mission execution.',
    primaryBtnText: 'Launch Architecture',
    primaryBtnRoute: 'launch-systems',
    secondaryBtnText: 'View Missions',
    secondaryBtnRoute: 'missions',
    image: '/assets/gslv_rocket_launch.png',
    imageAlt: 'Heavy-Lift Launch Rocket'
  },
  {
    id: 'slide-03',
    badge: 'AUTONOMOUS SCOUTING FLEET',
    headingLine1: '100 FPS Edge Vision.',
    headingLine2: 'Hazard Detection.',
    description: 'Real-time edge computer vision and collision avoidance systems for precision planetary surface scouting, aerial mapping, and hangar automation.',
    primaryBtnText: 'Drone Tech Specs',
    primaryBtnRoute: 'drone-tech',
    secondaryBtnText: 'Explore AI Analytics',
    secondaryBtnRoute: 'ai-analytics',
    image: '/assets/authentic_factory_drone_photo.png',
    imageAlt: 'Autonomous Aerospace Scout Drone'
  },
  {
    id: 'slide-04',
    badge: 'SPACE BIOTECHNOLOGY & MICROBIOLOGY',
    headingLine1: 'Microgravity Bio-Lab.',
    headingLine2: 'Extremophile Research.',
    description: 'Simulating extreme solar radiation and microgravity biological responses inside microfluidic lab-on-a-chip orbital cassettes.',
    primaryBtnText: 'Explore BioTech',
    primaryBtnRoute: 'space-biotech',
    secondaryBtnText: 'Research Papers',
    secondaryBtnRoute: 'space-biotech',
    image: '/assets/space_microbiology_lab.png',
    imageAlt: 'Orbital Microfluidic Bio-Cassette Incubator'
  }
];

export default function Home({ onNavigate }) {
  const [terminalLogs, setTerminalLogs] = useState([
    "> INITIATING SEQUENCE...",
    "> CONNECTING TO ORBITAL SERVER...",
    "> AUTHENTICATING...",
    "> ACCESS GRANTED.",
    "> LOAD DATA_STREAM_ALPHA",
    "> PARSING TELEMETRY...",
    "> VELOCITY: 24,000 M/S [NOMINAL]",
    "> ALTITUDE: 400 KM [STABLE]",
    "> THRUST: 98% [OPTIMAL]",
  ]);

  const [scanPulse, setScanPulse] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const sampleLogs = [
        `> ORBITNET_LOSS: 0.00${Math.floor(10 + Math.random() * 8)} [FP8 MATRIX OK]`,
        `> GSLV_TELEMETRY: S200 BOOSTERS PRESSURE ${Math.floor(58 + Math.random() * 4)} BAR`,
        `> CE20_CRYO_TEMP: 20.4 KELVIN [NOMINAL]`,
        `> GROUND_STATION_RSSI: -64 dBm [LOCK OK]`
      ];
      const randomLog = sampleLogs[Math.floor(Math.random() * sampleLogs.length)];
      setTerminalLogs((prev) => [...prev.slice(-8), randomLog]);

      setScanPulse((prev) => (prev + 1.5) % 100);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // 15-Second Automatic Rotation for Hero Info Section
  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setActiveSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 15000);

    return () => clearInterval(rotationTimer);
  }, []);

  const activeSlide = HERO_SLIDES[activeSlideIndex];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION WITH 15-SECOND ROTATING INFO SLIDES */}
      <section className="relative w-full border-b blueprint-line bg-[#FFFFFF] overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 items-center min-h-[520px]">
          {/* Info Text Content */}
          <div className="md:col-span-6 z-10 flex flex-col items-start gap-5">
            {/* Top Badge & Slide Counter */}
            <div className="flex items-center justify-between w-full">
              <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#F8F9FA]">
                <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
                <span className="text-label-sm text-[#46474A] uppercase tracking-widest font-mono text-[11px]">
                  {activeSlide.badge}
                </span>
              </div>
              <span className="text-xs font-mono font-bold text-[#191C1D] border-b-2 border-[#0057FF] pb-0.5">
                0{activeSlideIndex + 1} / 0{HERO_SLIDES.length}
              </span>
            </div>

            {/* Heading & Paragraph with Key for Smooth Transition */}
            <div key={activeSlide.id} className="space-y-4 animate-fadeIn transition-opacity duration-500">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none tracking-tight">
                {activeSlide.headingLine1}<br />
                {activeSlide.headingLine2}
              </h1>

              <p className="text-sm sm:text-base text-[#46474A] max-w-lg leading-relaxed font-sans">
                {activeSlide.description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <button
                  onClick={() => {
                    playClickSound();
                    onNavigate(activeSlide.primaryBtnRoute);
                  }}
                  onMouseEnter={playHoverSound}
                  className="bg-[#191C1D] text-[#FFFFFF] px-8 py-3 text-label-sm uppercase tracking-widest border border-[#191C1D] hover:bg-[#FFFFFF] hover:text-[#191C1D] transition-colors font-semibold shadow-sm"
                >
                  {activeSlide.primaryBtnText}
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    onNavigate(activeSlide.secondaryBtnRoute);
                  }}
                  onMouseEnter={playHoverSound}
                  className="bg-[#FFFFFF] text-[#191C1D] px-8 py-3 text-label-sm uppercase tracking-widest border border-[#E5E7EB] hover:border-[#191C1D] transition-colors font-semibold"
                >
                  {activeSlide.secondaryBtnText}
                </button>
              </div>
            </div>
          </div>

          {/* Hero Section Image Display (Rotates with active slide) */}
          <div className="md:col-span-6 relative h-[300px] sm:h-[420px] md:h-[480px] border blueprint-line bg-[#F8F9FA] p-2 overflow-hidden shadow-sm">
            <img
              key={activeSlide.id}
              src={activeSlide.image}
              alt={activeSlide.imageAlt}
              className="w-full h-full object-cover filter contrast-110 transition-opacity duration-500 animate-fadeIn"
            />
            {/* Decorative Corner Blueprint Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#191C1D] -ml-1 -mt-1 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#191C1D] -mr-1 -mb-1 pointer-events-none"></div>
          </div>
        </div>

        {/* 15-Second Progress Timer Bar */}
        <div className="w-full h-1 bg-[#F1F3F5] relative overflow-hidden">
          <div
            key={`progress-${activeSlideIndex}`}
            className="h-full bg-[#0057FF]"
            style={{
              animation: 'heroTimer 15s linear infinite'
            }}
          />
        </div>
      </section>

      {/* 2. LANDING PAGE FEATURE: AUTHENTIC FACTORY INSIDE DRONE AUTO-DETECTED MODE */}
      <section className="py-12 sm:py-20 bg-[#FFFFFF] border-b blueprint-line">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 space-y-8">
          <div className="border-b blueprint-line pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-label-sm text-[#0057FF] font-bold uppercase">AUTONOMOUS SCOUTING FLEET</span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                AEROMARS SCOUT DRONE // FACTORY HANGAR PHOTO
              </h2>
            </div>

            <button
              onClick={() => {
                playClickSound();
                onNavigate('drone-tech');
              }}
              onMouseEnter={playHoverSound}
              className="w-full sm:w-auto justify-center bg-[#191C1D] text-[#FFFFFF] px-6 py-2.5 text-label-sm uppercase tracking-widest border border-[#191C1D] hover:bg-[#FFFFFF] hover:text-[#191C1D] transition-colors flex items-center gap-2"
            >
              FULL DRONE TECH SPECS <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Authentic Raw Factory Drone Photograph with Target Reticle Overlay */}
            <div className="lg:col-span-8 h-[300px] sm:h-[440px] border blueprint-line bg-[#F8F9FA] relative overflow-hidden p-2">
              <img
                src="/assets/authentic_factory_drone_photo.png"
                alt="Authentic Realistic Factory Drone Photograph"
                className="w-full h-full object-cover filter contrast-105"
              />
            </div>

            {/* Drone Quick Technical Specs */}
            <div className="lg:col-span-4 space-y-6">
              <div>
                <span className="text-label-sm text-[#0057FF] uppercase font-bold">AUTONOMOUS FLIGHT ENGINE</span>
                <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                  Edge-AI Computer Vision
                </h3>
                <p className="text-xs font-sans text-[#46474A] leading-relaxed mt-2">
                  Drexorium's scouting drone uses onboard neural vision transformers to map surface topography, locate ice reserves, and auto-detect optimal landing zones without ground station control delay.
                </p>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                  <div className="text-[10px] text-gray-500">LIDAR POINT CLOUD RATE</div>
                  <div className="text-sm font-bold text-[#191C1D] mt-0.5">120,000 PTS / SEC</div>
                </div>

                <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                  <div className="text-[10px] text-gray-500">AUTONOMOUS RANGE</div>
                  <div className="text-sm font-bold text-[#0057FF] mt-0.5">450 KM FLIGHT RADIUS</div>
                </div>

                <div className="p-3 bg-[#F8F9FA] border blueprint-line">
                  <div className="text-[10px] text-gray-500">AUTO-LANDING PRECISION</div>
                  <div className="text-sm font-bold text-[#00AA66] mt-0.5">SUB-5 CM ACCURACY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 SPACE MICROBIOLOGY & BIOTECHNOLOGY FEATURE (24-HOUR 24,469 AI BIO-DETECTIONS) */}
      <section className="py-16 sm:py-20 bg-[#1A1A1B] text-[#FFFFFF] border-b border-gray-800 relative overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 space-y-8">
          <div className="border-b border-gray-800 pb-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-label-sm text-[#00D2FF] font-bold uppercase flex items-center gap-2">
                <Dna className="w-4 h-4 text-[#00D2FF] animate-pulse" /> ASTROBIOLOGY & MICROGRAVITY BIOTECHNOLOGY
              </span>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-heading text-white uppercase mt-1">
                24-HOUR AI BIO-IMAGE DETECTION MATRIX
              </h2>
            </div>

            <button
              onClick={() => {
                playClickSound();
                onNavigate('space-biotech');
              }}
              onMouseEnter={playHoverSound}
              className="w-full sm:w-auto bg-[#0057FF] text-[#FFFFFF] px-6 py-2.5 text-label-sm uppercase tracking-widest border border-[#0057FF] hover:bg-[#FFFFFF] hover:text-[#191C1D] transition-colors flex items-center justify-center gap-2 font-semibold"
            >
              EXPLORE SPACE BIOTECH <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Highlighted 24,469 Bio Detection Metric Card */}
            <div className="lg:col-span-5 space-y-6 bg-[#07090E] p-6 sm:p-8 border border-[#00D2FF]/40">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2E3132] text-[#00AA66] text-xs font-mono font-bold">
                <span className="w-2 h-2 rounded-full bg-[#00AA66] animate-ping" />
                24-HOUR REAL-TIME AUDIT
              </div>

              <div>
                <div className="text-4xl sm:text-5xl font-mono font-bold text-[#00D2FF] tracking-tight">
                  24,469
                </div>
                <div className="text-sm font-heading font-bold text-white uppercase mt-1">
                  MICROBIOLOGICAL & BIOLOGICAL AI DETECTIONS (24H)
                </div>
              </div>

              <p className="text-xs font-sans text-gray-300 leading-relaxed">
                Our onboard OrbitNet-Bio optical neural vision systems automatically capture and analyze 24,469 microbial and biological microfluidic images every 24 hours under microgravity ($10^{-6} g$) and galactic cosmic radiation.
              </p>

              <div className="grid grid-cols-2 gap-3 font-mono text-xs pt-2 border-t border-gray-800">
                <div className="p-3 bg-[#1A1A1B] border border-gray-800">
                  <div className="text-[10px] text-gray-400">CLASSIFICATION SPEED</div>
                  <div className="text-xs font-bold text-[#00AA66] mt-0.5">0.42 MS / IMAGE</div>
                </div>

                <div className="p-3 bg-[#1A1A1B] border border-gray-800">
                  <div className="text-[10px] text-gray-400">PROTEIN CRYSTAL PURITY</div>
                  <div className="text-xs font-bold text-[#FF8800] mt-0.5">99.98% MONOCRYSTAL</div>
                </div>
              </div>
            </div>

            {/* Space Bio-Microbiology Microfluidic Image View */}
            <div className="lg:col-span-7 h-[300px] sm:h-[420px] border border-gray-800 bg-[#07090E] relative overflow-hidden p-2">
              <img
                src="/assets/space_microbiology_lab.png"
                alt="Space Microbiology Lab on a Chip"
                className="w-full h-full object-cover filter contrast-110"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE DIVISIONS BENTO GRID WITH TECHNICAL IMAGES */}
      <section className="py-20 bg-[#F8F9FA] border-b blueprint-line bg-grid">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="mb-12 border-b blueprint-line pb-4 flex justify-between items-end">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase">Core Divisions</h2>
              <p className="text-label-sm text-[#46474A] uppercase tracking-widest mt-1">Operational Parameters: Nominal</p>
            </div>
            <div className="text-label-sm text-[#0057FF] hidden md:block">
              SYSTEM_ID: DRX_DIV_CORE
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* AI Research & Analytics */}
            <div
              onClick={() => {
                playClickSound();
                onNavigate('ai-analytics');
              }}
              onMouseEnter={playHoverSound}
              className="md:col-span-8 border blueprint-line bg-[#FFFFFF] p-8 flex flex-col justify-between group hover:bg-[#F8F9FA] transition-all cursor-pointer min-h-[260px] relative overflow-hidden"
            >
              <div className="flex justify-between items-start z-10">
                <Cpu className="w-8 h-8 text-[#191C1D]" />
                <span className="text-label-sm text-[#46474A] uppercase border border-[#E5E7EB] px-2.5 py-1 bg-[#F8F9FA]">Div_01</span>
              </div>
              <div className="mt-6 z-10">
                <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mb-2 group-hover:text-[#0057FF] transition-colors">
                  AI Research & Analytics
                </h3>
                <p className="text-sm font-sans text-[#46474A] leading-relaxed max-w-lg">
                  Synthesizing massive telemetry datasets into actionable trajectory optimizations using deep neural transformers.
                </p>
              </div>
            </div>

            {/* AI Hyperspectral Image Feature */}
            <div className="md:col-span-4 border blueprint-line bg-[#FFFFFF] relative overflow-hidden min-h-[260px]">
              <img
                src="/assets/ai_planetary_mapping.png"
                alt="AI Planetary Spectrometry"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Space Microbiology & Biotechnology (Div_04) */}
            <div
              onClick={() => {
                playClickSound();
                onNavigate('space-biotech');
              }}
              onMouseEnter={playHoverSound}
              className="md:col-span-7 border blueprint-line bg-[#FFFFFF] p-8 flex flex-col justify-between group hover:bg-[#F8F9FA] transition-all cursor-pointer min-h-[260px]"
            >
              <div className="flex justify-between items-start">
                <Dna className="w-8 h-8 text-[#00AA66]" />
                <span className="text-label-sm text-[#46474A] uppercase border border-[#E5E7EB] px-2.5 py-1 bg-[#F8F9FA]">Div_04</span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mb-2 group-hover:text-[#00AA66] transition-colors">
                  Space Microbiology & BioTech
                </h3>
                <p className="text-sm font-sans text-[#46474A] leading-relaxed">
                  Analyzing 24,469 single-cell bio images daily across microgravity bio-cassettes, extremophile radiotolerance, and protein monocrystal growth.
                </p>
              </div>
            </div>

            {/* Precision Missions */}
            <div
              onClick={() => {
                playClickSound();
                onNavigate('missions');
              }}
              onMouseEnter={playHoverSound}
              className="md:col-span-5 border blueprint-line bg-[#FFFFFF] p-8 flex flex-col justify-between group hover:bg-[#F8F9FA] transition-all cursor-pointer min-h-[260px]"
            >
              <div className="flex justify-between items-start">
                <ShieldCheck className="w-8 h-8 text-[#191C1D]" />
                <span className="text-label-sm text-[#46474A] uppercase border border-[#E5E7EB] px-2.5 py-1 bg-[#F8F9FA]">Div_02</span>
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mb-2 group-hover:text-[#0057FF] transition-colors">
                  Precision Missions
                </h3>
                <p className="text-sm font-sans text-[#46474A] leading-relaxed">
                  Flawless execution of micro-gravity experimental payloads and autonomous space probe maneuvers.
                </p>
              </div>
            </div>

            {/* Orbital Propulsion Engine Image Feature */}
            <div
              onClick={() => {
                playClickSound();
                onNavigate('launch-systems');
              }}
              onMouseEnter={playHoverSound}
              className="md:col-span-12 border blueprint-line bg-[#FFFFFF] flex flex-col md:flex-row group hover:bg-[#F8F9FA] transition-all cursor-pointer min-h-[260px] overflow-hidden"
            >
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <Rocket className="w-8 h-8 text-[#191C1D]" />
                  <span className="text-label-sm text-[#46474A] uppercase border border-[#E5E7EB] px-2.5 py-1 bg-[#F8F9FA]">Div_03</span>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-bold font-heading text-[#191C1D] uppercase mb-2 group-hover:text-[#0057FF] transition-colors">
                    Orbital Propulsion Systems
                  </h3>
                  <p className="text-sm font-sans text-[#46474A] leading-relaxed">
                    Developing highly efficient, low-mass thrust mechanisms and cryogenic C25 engines for deep space traversal.
                  </p>
                </div>
              </div>
              <div className="w-full md:w-1/2 relative h-48 md:h-auto border-t md:border-t-0 md:border-l blueprint-line">
                <img
                  src="/assets/cryo_engine_testing.png"
                  alt="Cryogenic Engine Hot-Fire Testing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER & LEADERSHIP GEO CITATION BLOCK */}
      <section className="py-16 bg-[#F8F9FA] border-b blueprint-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 aspect-[4/5] max-w-xs border blueprint-line overflow-hidden relative shadow-sm">
            <img
              src="/assets/raj_patil_founder.jpg"
              alt="Raj Patil - Founder & CEO of Drexorium Labs"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute bottom-3 left-3 bg-[#191C1D] text-[#FFFFFF] px-3 py-1 text-label-sm font-mono font-bold">
              FOUNDER &amp; CEO
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF]">
              <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
              <span className="text-label-sm text-[#46474A] uppercase tracking-widest font-mono text-[11px]">
                FOUNDER STATEMENT
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase">
              "Deep artificial intelligence and rocket propulsion must not exist in silos."
            </h2>

            <p className="text-sm font-sans text-[#46474A] leading-relaxed">
              Founded by <strong>Raj Patil</strong>, Drexorium Labs was established to unify physical aerospace hardware with autonomous neural telemetry systems. From heavy-lift GSLV rockets to microfluidic space bio-cassettes, our mission is to build the empirical foundation for humanity's multi-planetary future.
            </p>

            <div className="pt-2">
              <span className="font-mono text-xs font-bold text-[#191C1D] block">RAJ PATIL</span>
              <span className="text-xs text-gray-500 font-mono">Founder &amp; Chief Executive Officer, Drexorium Labs</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EMPIRICAL TRANSPARENCY SECTION */}
      <section className="py-20 bg-[#FFFFFF] border-b blueprint-line">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase mb-6 leading-none">
              Empirical<br />Transparency
            </h2>
            <p className="text-base font-sans text-[#46474A] mb-8 max-w-md leading-relaxed">
              We adhere to a strict protocol of open data validation. All experimental telemetry is published for peer-review via our secure terminal network.
            </p>

            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 border-b blueprint-line pb-3">
                <CheckCircle className="w-4 h-4 text-[#191C1D]" />
                <span className="text-label-sm uppercase tracking-widest text-[#191C1D]">Verified Telemetry Streams</span>
              </li>
              <li className="flex items-center gap-3 border-b blueprint-line pb-3">
                <CheckCircle className="w-4 h-4 text-[#191C1D]" />
                <span className="text-label-sm uppercase tracking-widest text-[#191C1D]">Open-Source Trajectory Models</span>
              </li>
              <li className="flex items-center gap-3 border-b blueprint-line pb-3">
                <CheckCircle className="w-4 h-4 text-[#191C1D]" />
                <span className="text-label-sm uppercase tracking-widest text-[#191C1D]">Auditable Safety Protocols</span>
              </li>
            </ul>
          </div>

          {/* Terminal Output Emulator */}
          <div className="border blueprint-line bg-[#1A1A1B] text-[#FFFFFF] p-6 font-mono text-xs h-[380px] flex flex-col justify-between">
            <div className="flex justify-between items-center border-b border-gray-800 pb-4 text-gray-400">
              <span className="text-label-sm">TERMINAL_ACCESS_09</span>
              <span className="text-[#00AA66] font-bold animate-pulse">_LIVE</span>
            </div>

            <div className="space-y-2 py-4 text-gray-300 font-mono text-xs overflow-y-auto">
              {terminalLogs.map((log, idx) => (
                <div key={idx} className={log.includes('VELOCITY') ? 'text-[#00D2FF] font-bold' : log.includes('GSLV') ? 'text-[#FF8800] font-bold' : ''}>
                  {log}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-800 text-gray-400 flex items-center gap-2">
              <span className="text-[#00AA66] font-bold">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
