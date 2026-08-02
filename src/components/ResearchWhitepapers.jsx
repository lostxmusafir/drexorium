import React, { useState } from 'react';
import { FileText, Download, CheckCircle2, ExternalLink, ShieldCheck } from 'lucide-react';
import { playClickSound, playHoverSound } from './SoundFX';

const whitepapers = [
  {
    id: "paper-01",
    title: "FP8 Quantized Transformer Inference for Spacecraft Edge Processors",
    authors: "Dr. Aris Thorne, Dr. Maya Sharma",
    date: "January 2025",
    journal: "IEEE Aerospace & Computational Intelligence",
    doi: "10.1109/TAES.2025.3421890",
    abstract: "Standard 32-bit floating point models introduce prohibitive memory bandwidth bottlenecks on space-hardened radiation-shielded processors. We present OrbitNet-FP8, achieving 99.82% trajectory prediction accuracy while reducing memory throughput requirements by 75% on FPGA hardware.",
    pdfSize: "10 PAGE PDF",
    pdfPath: "/whitepapers/paper-01.pdf"
  },
  {
    id: "paper-02",
    title: "Cryogenic Injector Combustion Instability Suppression in C25 Engine",
    authors: "Dr. Raj Patil, Dr. Maya Sharma",
    date: "November 2024",
    journal: "Journal of Propulsion and Power (AIAA)",
    doi: "10.2514/1.B38902",
    abstract: "Acoustic combustion instability in high-thrust LH2/LOX rocket engines remains a major failure mode during upper-stage burns. This paper documents Drexorium's coaxial acoustic resonator damping system deployed on the C25 engine stage.",
    pdfSize: "7 PAGE PDF",
    pdfPath: "/whitepapers/paper-02.pdf"
  },
  {
    id: "paper-03",
    title: "Autonomous Kinetic Deflection Modeling for Near-Earth Asteroids",
    authors: "Dr. Aris Thorne, AI Research Group",
    date: "March 2026",
    journal: "Planetary Science Journal",
    doi: "10.3847/PSJ.2026.0412",
    abstract: "Closed-loop optical target tracking for hyper-velocity kinetic impactors. Evaluated against asteroid 2024-DRX9 simulations using real-time onboard neural vision processing without ground station control delay.",
    pdfSize: "7 PAGE PDF",
    pdfPath: "/whitepapers/paper-03.pdf"
  }
];

export default function ResearchWhitepapers() {
  const [downloadedId, setDownloadedId] = useState(null);

  const handleDownload = (paper) => {
    playClickSound();
    setDownloadedId(paper.id);

    // Create real PDF file download link
    const link = document.createElement('a');
    link.href = paper.pdfPath;
    link.download = `${paper.id}_${paper.title.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadedId(null);
    }, 2500);
  };

  return (
    <div className="border blueprint-line bg-[#FFFFFF] p-8 space-y-8">
      <div className="border-b blueprint-line pb-4 flex justify-between items-end">
        <div>
          <span className="text-label-sm text-[#0057FF] font-bold uppercase">PEER-REVIEWED PUBLICATIONS</span>
          <h2 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
            OPEN SCIENTIFIC WHITEPAPERS & RESEARCH
          </h2>
        </div>
        <div className="text-label-sm text-[#46474A] hidden md:block">
          OPEN_ACCESS: CREATIVE COMMONS BY-4.0
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {whitepapers.map((paper) => (
          <div
            key={paper.id}
            className="p-6 bg-[#F8F9FA] border blueprint-line hover:border-[#191C1D] transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex justify-between items-start text-xs font-mono">
                <span className="text-[#0057FF] font-bold">{paper.date}</span>
                <span className="text-gray-500">{paper.pdfSize}</span>
              </div>

              <h3 className="text-lg font-bold font-heading text-[#191C1D] uppercase leading-snug">
                {paper.title}
              </h3>

              <div className="text-xs font-mono text-[#46474A] font-bold">{paper.authors}</div>

              <div className="text-[10px] font-mono text-[#0057FF] uppercase">{paper.journal}</div>

              <p className="text-xs font-sans text-[#46474A] leading-relaxed pt-2 border-t blueprint-line">
                {paper.abstract}
              </p>
            </div>

            <div className="pt-4 border-t blueprint-line flex justify-between items-center text-xs font-mono">
              <span className="text-gray-500 text-[10px]">DOI: {paper.doi}</span>
              <button
                onClick={() => handleDownload(paper)}
                onMouseEnter={playHoverSound}
                className="px-4 py-2 bg-[#191C1D] text-[#FFFFFF] text-label-sm uppercase font-bold flex items-center gap-1.5 hover:bg-[#0057FF] transition-colors"
              >
                {downloadedId === paper.id ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#00AA66]" /> DOWNLOADED
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" /> PDF
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
