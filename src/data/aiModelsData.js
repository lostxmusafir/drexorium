export const aiModelsData = [
  {
    id: "orbit-net",
    name: "OrbitNet-v4 Transformer",
    category: "Predictive Trajectory Engine",
    status: "PRODUCTION",
    accuracy: "99.982%",
    parameters: "1.4 Billion",
    latency: "4.2 ms",
    description: "Multi-body gravitational neural transformer that predicts satellite orbital decay, space debris collisions, and optimal burn vectors 30 days in advance.",
    useCases: ["Debris Avoidance Maneuvers", "Low-Fuel Transfer Trajectories", "Constellation Stationkeeping"],
    sampleQuery: "PREDICT_ORBIT_DECAY --sat-id DRX-SAT-99 --horizon 30d",
    sampleOutput: {
      predictedApogee: "682.4 km",
      predictedPerigee: "679.1 km",
      collisionProbability: "0.0000012%",
      recommendedBurn: "Delta-V +0.14 m/s at T+14h 22m"
    }
  },
  {
    id: "deepspace-vision",
    name: "DeepSpace-Vision Neural Mapper",
    category: "Planetary Surface & Atmospheric Spectrometry",
    status: "PRODUCTION",
    accuracy: "99.75%",
    parameters: "4.8 Billion",
    latency: "12.8 ms",
    description: "Computer vision transformer trained on hyperspectral satellite imagery to detect lunar subsurface water ice, Martian mineral compositions, and atmospheric methane leaks.",
    useCases: ["Lunar Resource Prospecting", "Martian Dust Storm Tracking", "Exoplanet Atmospheric Profiling"],
    sampleQuery: "ANALYZE_SPECTROMETRY --target Mars-Valles-Marineris --band IR-UV",
    sampleOutput: {
      detectedMinerals: ["Hematite (42%)", "Basalt (38%)", "Hydrated Silicates (14%)"],
      waterIceProbability: "87.4%",
      atmosphericDensity: "0.006 bar"
    }
  },
  {
    id: "helios-guard",
    name: "Helios-Guard AI",
    category: "Solar Flare & Radiation Early Warning",
    status: "ACTIVE MONITORING",
    accuracy: "98.91%",
    parameters: "850 Million",
    latency: "1.1 ms",
    description: "Deep recurrent neural network analyzing solar magnetograms from SDO satellites to predict Coronal Mass Ejections (CMEs) and solar proton storms up to 48 hours before Earth/Orbital impact.",
    useCases: ["Satellite Radiation Hardening Alerts", "Astronaut Mission Safety Shielding", "Power Grid Space Weather Warnings"],
    sampleQuery: "SOLAR_FLARE_RISK_ASSESSMENT --region AR-3664",
    sampleOutput: {
      flareClassProbability: "X-Class: 34%, M-Class: 88%",
      estimatedArrival: "38 Hours 15 Mins",
      recommendedAction: "Put GSLV-DRX3 Satellite payload in Safe Mode"
    }
  },
  {
    id: "asteroid-x",
    name: "Asteroid-X Sentinel",
    category: "Near-Earth Object Tracking & Anomaly Detection",
    status: "PRODUCTION",
    accuracy: "99.999%",
    parameters: "2.1 Billion",
    latency: "8.5 ms",
    description: "Autonomously scans telescope feeds and radar arrays to detect uncatalogued Near-Earth Asteroids (NEOs) and evaluate kinetic deflection requirements.",
    useCases: ["Planetary Defense", "Asteroid Mining Valuation", "Deep Space Optical Navigation"],
    sampleQuery: "SCAN_NEO_SECTOR --ra 14h29m --dec -62deg",
    sampleOutput: {
      detectedObjects: 142,
      uncataloguedNEO: "DRX-2026-AZ9 (Diameter ~240m)",
      earthMinimumDistance: "4.2 Lunar Distances (Passes July 2028)",
      deflectionEnergyNeeded: "4.8 Megatons"
    }
  }
];

export const pipelineSteps = [
  {
    step: "01",
    title: "Multi-Spectrum Data Ingestion",
    subtitle: "Raw Telemetry & Satellite Sensor Capture",
    description: "Over 1.2 Petabytes of daily raw sensor feeds are ingested from orbital ground stations, space telescopes, SAR radar, and rocket engine telemetry channels."
  },
  {
    step: "02",
    title: "Neural Transformer Processing",
    subtitle: "Real-Time Anomaly & Orbital Inference",
    description: "Drexorium's custom distributed GPU clusters parse telemetry through multi-modal Transformer models running hyper-fast FP8 matrix operations."
  },
  {
    step: "03",
    title: "Predictive Analytics & Autopilot Control",
    subtitle: "Actionable Insights & Closed-Loop Vectoring",
    description: "Autonomous guidance commands and predictive risk matrices are beamed directly to rocket avionics and satellite constellation controllers."
  }
];
