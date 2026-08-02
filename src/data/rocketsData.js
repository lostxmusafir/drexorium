export const gslvRocketData = {
  name: "GSLV-MK3 Heavy Launch Vehicle",
  designator: "GSLV-DRX-LVM3",
  status: "ACTIVE OPERATIONAL",
  height: "43.43 meters",
  diameter: "4.0 meters",
  liftoffMass: "640 Metric Tons",
  stagesCount: 3,
  capacities: {
    leo: "10,000 kg (Low Earth Orbit - 600km)",
    gto: "4,500 kg (Geostationary Transfer Orbit)",
    tli: "2,800 kg (Trans-Lunar Injection)",
    tmi: "1,900 kg (Trans-Mars Injection)",
  },
  stages: [
    {
      id: "fairing",
      number: "01",
      name: "Composite Payload Fairing",
      type: "Heat Shield & Enclosure",
      height: "10.7 m",
      diameter: "5.0 m",
      mass: "4,200 kg",
      thrust: "N/A (Structural Enclosure)",
      isp: "N/A",
      propellant: "N/A",
      burnTime: "Separation at T+218s (115 km altitude)",
      color: "#00F0FF",
      summary: "Protects sensitive AI payload, orbital satellites, and deep space probes from aerodynamic heating and acoustic vibration during hypersonic atmospheric ascent.",
      details: [
        "Constructed from Carbon-Fiber Reinforced Polymer (CFRP) honeycomb sandwich structure.",
        "Acoustic damping tiles reduce internal noise level to <138 dB during max-Q.",
        "Dual pneumatic separation system with redundant pyrotechnic bolts.",
        "Integrated thermal protection system (TPS) withstands temperatures exceeding 1,600°C."
      ]
    },
    {
      id: "upper",
      name: "C25 Cryogenic Upper Stage",
      number: "02",
      type: "Cryogenic Engine (LH2 / LOX)",
      height: "13.5 m",
      diameter: "4.0 m",
      mass: "33,000 kg (Loaded)",
      thrust: "200 kN (Vacuum)",
      isp: "443.5 seconds",
      propellant: "Liquid Hydrogen (LH2) & Liquid Oxygen (LOX)",
      burnTime: "640 seconds",
      color: "#3B82F6",
      summary: "High-efficiency cryogenic propulsion stage providing precise velocity vectoring for orbital insertion and interplanetary trajectories.",
      details: [
        "CE-20 Cryogenic Engine operating on a gas generator cycle.",
        "Multi-restart capability for complex multi-orbit satellite deployment.",
        "Active helium pressurization system with closed-loop thermal control.",
        "Advanced electro-hydraulic gimbal actuators for pitch and yaw control (±8 degrees)."
      ]
    },
    {
      id: "core",
      name: "L110 Core Liquid Stage",
      number: "03",
      type: "Twin Vikas Liquid Engines",
      height: "17.0 m",
      diameter: "4.0 m",
      mass: "125,000 kg (Loaded)",
      thrust: "1,598 kN (Sea Level) / 1,780 kN (Vacuum)",
      isp: "293 seconds",
      propellant: "UH25 (Unsymmetric Dimethylhydrazine) & N2O4 (Dinitrogen Tetroxide)",
      burnTime: "203 seconds (Ignites at T+113s)",
      color: "#FF8800",
      summary: "Core liquid propulsion unit featuring twin hypergolic engines providing sustained thrust during mid-ascent after booster separation.",
      details: [
        "Twin Vikas pump-fed engines utilizing storable hypergolic propellants.",
        "Regeneratively cooled engine nozzles fabricated from high-grade Nimonic 90 alloy.",
        "Integrated Pogo suppression system for engine vibration stabilization.",
        "Real-time thrust vector control via hydraulic actuators."
      ]
    },
    {
      id: "boosters",
      name: "S200 Solid Strap-on Boosters (x2)",
      number: "04",
      type: "Solid Rocket Motors",
      height: "25.0 m",
      diameter: "3.2 m",
      mass: "236,000 kg each (Total 472 Tons)",
      thrust: "2 x 5,150 kN = 10,300 kN Peak Thrust",
      isp: "274.5 seconds (Sea Level)",
      propellant: "HTPB (Hydroxyl-terminated polybutadiene)",
      burnTime: "130 seconds",
      color: "#FF5500",
      summary: "Massive solid rocket boosters providing initial liftoff thrust to break Earth's gravitational force and propel the GSLV assembly past Mach 4.",
      details: [
        "Third largest solid rocket booster in the world, segmented steel casing.",
        "Flex-nozzle vector control for initial pitch, roll, and yaw guidance during launch pad clearance.",
        "Acoustic suppressor ring and heat barrier skirts.",
        "Jettisoned at T+140 seconds via 8 solid separation motors per booster."
      ]
    }
  ],
  specsTable: [
    { metric: "Total Height", value: "43.43 m", comparison: "Equivalent to a 14-story building" },
    { metric: "Liftoff Thrust", value: "11,898 kN", comparison: "Generates over 2.6 million lbs of force" },
    { metric: "Payload to LEO (600 km)", value: "10,000 kg", comparison: "Heavy-class orbital capacity" },
    { metric: "Payload to GTO (36,000 km)", value: "4,500 kg", comparison: "Geostationary satellite deployment" },
    { metric: "Payload to Trans-Lunar", value: "2,800 kg", comparison: "Moon lander & orbiter delivery" },
    { metric: "Specific Impulse (Cryo Stage)", value: "443.5 s", comparison: "Top-tier vacuum propellant efficiency" },
    { metric: "Guidance System", value: "Triple-Redundant Ring Laser Gyro INS + AI Autopilot", comparison: "Sub-meter precision insertion" },
    { metric: "Reliability Rating", value: "99.4%", comparison: "16 consecutive successful orbital launches" }
  ]
};
