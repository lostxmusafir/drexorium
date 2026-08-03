export const missionsData = [
  {
    id: "drx-01",
    name: "GSLV-DRX1 Lunar Reconnaissance",
    date: "March 15, 2024",
    status: "COMPLETED",
    vehicle: "GSLV-MK3 LVM3",
    payload: "Lunar Subsurface Radar Probe (LSRP-1)",
    orbit: "Trans-Lunar Injection (TLI) / 100km Lunar Orbit",
    successRate: "100%",
    patchColor: "#00F0FF",
    summary: "Successfully placed the LSRP-1 satellite into polar lunar orbit. AI surface mapping uncovered 1.4 Billion Tons of subsurface ice deposits in the Shackleton Crater region.",
    highlights: [
      "Sub-meter radar mapping of south pole craters.",
      "Demonstrated AI-assisted orbital capture without ground station delay.",
      "Collected 42 Terabytes of high-density lunar spectrometry data."
    ]
  },
  {
    id: "drx-02",
    name: "GSLV-DRX2 Solar Flare Observatory",
    date: "November 08, 2024",
    status: "COMPLETED",
    vehicle: "GSLV-MK3 LVM3",
    payload: "Helios-Sentinel Deep Space Observatory",
    orbit: "Sun-Earth Lagrange Point 1 (L1 Orbit)",
    successRate: "100%",
    patchColor: "#FF8800",
    summary: "Inserted Helios-Sentinel into L1 halo orbit 1.5 million km from Earth. Provides continuous 24/7 solar wind and radiation telemetry to the Helios-Guard AI system.",
    highlights: [
      "Zero-flaw 6-month transit to L1 halo insertion.",
      "Captured first high-resolution X-ray imagery of solar active region 3664.",
      "Reduced CME alert warning latency from 4 hours to 90 seconds."
    ]
  },
  {
    id: "drx-03",
    name: "GSLV-DRX3 Mars Atmosphere Probe",
    date: "June 20, 2025",
    status: "ACTIVE EN ROUTE",
    vehicle: "GSLV-MK3 Heavy",
    payload: "AeroMars Atmospheric Profiler & Surface Drone",
    orbit: "Trans-Mars Injection (TMI)",
    successRate: "ON TRACK",
    patchColor: "#FF5500",
    summary: "Currently in mid-course cruise to Mars. Arrival scheduled for February 2027. AeroMars probe will deploy an autonomous high-altitude glider into Martian atmosphere.",
    highlights: [
      "Completed 2 mid-course correction maneuvers using Cryogenic C25 engine.",
      "DeepSpace-Vision AI running live self-diagnostics en route.",
      "Distance from Earth: 84 Million Kilometers (Telemetry nominal)."
    ]
  },
  {
    id: "drx-04",
    name: "GSLV-DRX4 Asteroid Redirection & Tracking",
    date: "August 18, 2026",
    status: "UPCOMING LAUNCH",
    countdownTarget: "2026-08-18T10:30:00Z",
    vehicle: "GSLV-MK3 Heavy",
    payload: "Kinetic Impactor & Autonomous Tracker (DRX-SENTINEL)",
    orbit: "Near-Earth Asteroid Intercept Trajectory",
    successRate: "SCHEDULED",
    patchColor: "#00FF88",
    summary: "Upcoming flagship planetary defense mission. Will intercept Near-Earth Asteroid 2024-DRX9 and test AI kinetic deflection modeling.",
    highlights: [
      "Final stage integration complete at Sriharikota Launch Complex.",
      "S200 Solid Boosters mounted and pressure tested.",
      "Live telemetry feed will stream globally on launch day."
    ]
  },
  {
    id: "drx-05",
    name: "GSLV-DRX5 Europa Subsurface Ocean Explorer",
    date: "May 12, 2027",
    status: "SCHEDULED",
    vehicle: "GSLV-MK3 Ultra",
    payload: "Europa Ice-Penetrating Lander Concept",
    orbit: "Jovian System Insertion",
    successRate: "IN DESIGN",
    patchColor: "#A855F7",
    summary: "Deep space flagship mission to Jupiter's moon Europa. Aims to detect organic biosignatures in sub-ice oceanic plumes using AI mass spectrometry.",
    highlights: [
      "Nuclear thermal battery shielding approved.",
      "Autonomous ice-drilling payload prototype undergoing cryo testing.",
      "Partnership with international space agencies."
    ]
  },
  {
    id: "drx-06",
    name: "GSLV-DRX6 Interstellar Flagship Probe",
    date: "December 25, 2030",
    status: "UPCOMING LAUNCH",
    countdownTarget: "2030-12-25T00:00:00Z",
    vehicle: "GSLV-MK3 Interstellar Heavy",
    payload: "Deep Space AI Autonomous Sentinel Probe",
    orbit: "Heliospheric Boundary Interstellar Trajectory",
    successRate: "SCHEDULED",
    patchColor: "#FF0055",
    summary: "Flagship deep-space exploration launch scheduled for 25 Dec 2030. Designed for autonomous interstellar navigation and cosmic radiation telemetry.",
    highlights: [
      "Scheduled launch target set for 25 Dec 2030.",
      "Integrated 500 PFLOPS quantum-AI autonomous telemetry node.",
      "Deep space interstellar probe deployment."
    ]
  }
];

export const timelineEvents = [
  { year: "2025", title: "Deep Space Expansion", desc: "Launched GSLV-DRX3 Mars atmosphere probe and commissioned 100 PFLOPS orbital AI datacenter." },
  { year: "2026", title: "Planetary Defense & Beyond", desc: "Preparing for GSLV-DRX4 Kinetic Asteroid Impactor launch and next-gen reuse booster testing." },
  { year: "2030", title: "Interstellar Flagship Launch", desc: "Scheduled flagship launch on 25 Dec 2030, unifying AI telemetry with interstellar propulsion." }
];
