// Drexorium Labs - Space Microbiology & Biotechnology Telemetry Data
// Curated under COSPAR Planetary Protection Category IV-B & ISO-14644 Class 5 Bio-Cleanroom Standards

export const bioDetectionStats = {
  totalDetections24h: 24469,
  microfluidicCassettesActive: 128,
  radiotoleranceIndex: "8.4 kGy (D. radiodurans)",
  proteinCrystalPurity: "99.98% Monocrystalline",
  pathogenClassificationLatency: "0.42 ms / cell image",
  blssOxygenYield: "94.2 Liters O2 / m³ / day"
};

export const extremophileStrains = [
  {
    id: "deinococcus-drx",
    name: "Deinococcus radiodurans (DRX-09)",
    category: "EXTREMOPHILE / RADIATION RESISTANT",
    radiationTolerance: "15,000 Gy gamma dose",
    microgravityBehavior: "Enhanced DNA double-strand break repair rate by 142%",
    habitat: "Outer Space Exposure Platform (ISS Expose-R2)",
    aiConfidence: "99.98%",
    summary: "Polyextremophilic bacterium capable of surviving lethal ionizing radiation and vacuum conditions. Used as a bio-shield chassis for deep space probe biological shielding.",
    detectedCount24h: 8412
  },
  {
    id: "aspergillus-niger",
    name: "Aspergillus niger Spore Cluster",
    category: "FUNGAL SPORE / ULTRA-VIOLET TOLERANT",
    radiationTolerance: "540 J/m² UV-C flux",
    microgravityBehavior: "Pigmentation thickening (Melanin synthesis +88%)",
    habitat: "Martian Surface Atmosphere Simulator (0.006 bar CO2)",
    aiConfidence: "99.94%",
    summary: "Melanin-rich fungal spore strain exhibiting extreme resistance to space UV radiation and solar flare particle storms. Analyzed for self-healing bio-concrete materials.",
    detectedCount24h: 6184
  },
  {
    id: "bacillus-subtilis",
    name: "Bacillus subtilis (168 Biofilm)",
    category: "SPORE-FORMING BACTERIUM / PATHOGEN BENCHMARK",
    radiationTolerance: "2.4 kGy electron beam",
    microgravityBehavior: "Altered cell envelope thickness and flagellar motility loss",
    habitat: "Microfluidic Bio-Cassette Alpha-01",
    aiConfidence: "99.97%",
    summary: "Standard model organism for studying bacterial spore survival and planetary protection protocols under simulated Martian regolith contact.",
    detectedCount24h: 5391
  },
  {
    id: "spirulina-blss",
    name: "Spirulina platensis (BLSS-Photosynthetic)",
    category: "CYANOBACTERIA / BIOREGENERATIVE LIFE SUPPORT",
    radiationTolerance: "1.2 kGy solar cosmic ray flux",
    microgravityBehavior: "High-density biomass accumulation (+34% vs 1-G Earth control)",
    habitat: "Closed-Loop Bioreactor Assembly LC-4",
    aiConfidence: "99.99%",
    summary: "Photosynthetic microalgae optimized for continuous oxygen production, carbon dioxide sequestration, and dietary protein synthesis during Mars crewed missions.",
    detectedCount24h: 4482
  }
];

export const microfluidicTestPoints = [
  {
    id: "bio-cassette",
    title: "Point 01: Automated Microfluidic Lab-on-a-Chip Cassette",
    system: "Orbital Bio-Incubator & Fluidics Matrix",
    location: "Svalbard Polar Station / LEO Orbit",
    image: "/assets/space_microbiology_lab.png",
    coordinates: "POS: 38% X // 44% Y",
    pinX: 38,
    pinY: 44,
    description: "Multi-channel automated biofluidic cassette equipped with laser-induced fluorescence (LIF) micro-scanners, automated dye injection, and thermal gradient regulation.",
    testingMethodology: "Continuous 24-hour real-time AI optical scanning capturing 24,469 high-resolution microbial image frames across 128 micro-well arrays.",
    specs: [
      { name: "Imaging Frequency", value: "24,469 captures / 24 hrs" },
      { name: "Fluidic Resolution", value: "10 Nanoliters / well" },
      { name: "Fluorescence Wavelength", value: "365 nm UV / 488 nm Cyan" },
      { name: "Thermal Stability", value: "37.0°C ± 0.05°C" }
    ]
  },
  {
    id: "extremophile-chamber",
    title: "Point 02: Extremophile Radiation Chamber & Protein Crystallizer",
    system: "Deep Space Radiation Exposure Rig",
    location: "Castle Bruce Station / Gateway Test Platform",
    image: "/assets/extremophile_microgravity_growth.png",
    coordinates: "POS: 62% X // 52% Y",
    pinX: 62,
    pinY: 52,
    description: "Zero-gravity protein crystallization chamber isolating high-purity macromolecular crystals free from gravity-driven convection currents.",
    testingMethodology: "Laser diffraction X-ray spectrometry measuring lattice perfection in microgravity-grown monoclonal antibody proteins.",
    specs: [
      { name: "Crystal Diffraction", value: "1.05 Ångström Resolution" },
      { name: "Radiation Sensors", value: "Silicon 3D Pixel Telescope" },
      { name: "Growth Rate", value: "0.04 mm³ / hour" },
      { name: "Convection Noise", value: "0.0000 m/s [Pure Diffusion]" }
    ]
  }
];

export const bioResearchWhitepapers = [
  {
    title: "Microgravity Morphometry & AI-Automated Single-Cell Tracking in LEO",
    journal: "Nature Microgravity & Astrobiology // Vol. 28",
    doi: "10.1038/s41526-026-00412-x",
    downloads: "4,821 CITATIONS",
    category: "MICROBIOLOGY",
    summary: "Empirical evaluation of 24,469 microfluidic cell captures analyzing biofilm adhesion kinetics and antibiotic resistance shifts under zero-G conditions."
  },
  {
    title: "Deinococcus radiodurans Genomic Shielding for Deep Space Payload Preservation",
    journal: "IEEE Aerospace Bio-Engineering // Paper #8910",
    doi: "10.1109/TAES.2026.3129841",
    downloads: "3,190 CITATIONS",
    category: "ASTROBIOLOGY",
    summary: "Demonstrating 99.98% bio-shield integrity using extreme radiotolerant cyanobacteria under 15 kGy gamma radiation exposure."
  }
];
