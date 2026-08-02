import React, { useState } from 'react';
import { openJobs } from '../data/jobsData';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, Upload, FileText, Send, X, DollarSign, GraduationCap, Code } from 'lucide-react';
import { playClickSound, playHoverSound } from '../components/SoundFX';

export default function Careers() {
  const [departmentFilter, setDepartmentFilter] = useState('ALL');
  const [selectedJob, setSelectedJob] = useState(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [resumeFile, setResumeFile] = useState(null);

  const filteredJobs = openJobs.filter((job) => {
    if (departmentFilter === 'AI') return job.department.includes('AI');
    if (departmentFilter === 'BIOTECH') return job.department.includes('BioTech') || job.department.includes('Microbiology');
    if (departmentFilter === 'AEROSPACE') return job.department.includes('Aerospace');
    if (departmentFilter === 'WEB') return job.department.includes('Software');
    if (departmentFilter === 'OPS') return job.department.includes('Mission');
    if (departmentFilter === 'INTERN') return job.department.includes('Internships');
    return true;
  });

  const handleSubmitApplication = (e) => {
    e.preventDefault();
    playClickSound();
    setApplicationSubmitted(true);
  };

  return (
    <div className="space-y-16 py-8 max-w-[1280px] mx-auto px-6 md:px-12">
      {/* Page Header */}
      <div className="border-b blueprint-line pb-8">
        <div className="inline-flex items-center gap-2 border border-[#E5E7EB] px-3 py-1 bg-[#FFFFFF] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#0057FF] animate-pulse"></span>
          <span className="text-label-sm text-[#46474A] uppercase tracking-widest">JOIN DREXORIUM LABS</span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold font-heading text-[#191C1D] uppercase leading-none">
          Build The Future Of Aerospace & AI
        </h1>

        <p className="text-base font-sans text-[#46474A] max-w-2xl mt-4 leading-relaxed">
          We are looking for world-class AI researchers, space microbiologists, bio-chip hardware specialists, software architects, and ambitious student interns.
        </p>
      </div>

      {/* 1. FILTERABLE OPEN POSITIONS */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b blueprint-line pb-6">
          <div>
            <span className="text-label-sm text-[#0057FF] font-bold uppercase">ACTIVE OPENINGS ({filteredJobs.length})</span>
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-[#191C1D] uppercase mt-1">
              BIOTECH, ENGINEERING & INTERNSHIP ROLES
            </h2>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#F8F9FA] p-1.5 border blueprint-line w-full sm:w-auto">
            {[
              { id: 'ALL', label: 'All Roles' },
              { id: 'BIOTECH', label: 'BioTech & Micro' },
              { id: 'AI', label: 'AI & Data' },
              { id: 'WEB', label: 'Software' },
              { id: 'AEROSPACE', label: 'Propulsion' },
              { id: 'INTERN', label: 'Internships' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  playClickSound();
                  setDepartmentFilter(tab.id);
                }}
                className={`flex-1 sm:flex-initial px-2.5 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-label-sm font-bold transition-all border ${
                  departmentFilter === tab.id
                    ? 'bg-[#191C1D] text-[#FFFFFF] border-[#191C1D]'
                    : 'bg-[#FFFFFF] text-[#46474A] border-[#E5E7EB] hover:text-[#191C1D]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="border blueprint-line bg-[#FFFFFF] p-4 sm:p-8 flex flex-col justify-between space-y-6 hover:border-[#191C1D] transition-all"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <span className={`px-2.5 py-1 text-[10px] sm:text-label-sm font-bold uppercase ${
                    job.department === 'Internships' ? 'bg-[#00AA66] text-[#FFFFFF]' : 'bg-[#191C1D] text-[#FFFFFF]'
                  }`}>
                    {job.department}
                  </span>
                  <span className="text-xs font-mono font-semibold text-[#46474A] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {job.experience}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-heading text-[#191C1D] uppercase">{job.title}</h3>

                {/* Location & Salary in Dollars */}
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono">
                  <div className="text-[#0057FF] font-bold flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-[#FF5500]" /> {job.location}
                  </div>
                  <div className="text-[#00AA66] font-bold flex items-center gap-1 bg-[#F8F9FA] px-2.5 py-1 border blueprint-line">
                    <DollarSign className="w-3.5 h-3.5" /> {job.salary}
                  </div>
                </div>

                <p className="text-xs sm:text-sm font-sans text-[#46474A] leading-relaxed">{job.summary}</p>

                <div className="space-y-2 pt-2">
                  <div className="text-label-sm text-[#191C1D]">KEY REQUIREMENTS</div>
                  {job.requirements.slice(0, 2).map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#46474A] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#0057FF] flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t blueprint-line flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 text-xs font-mono">
                <span className="text-[#00AA66] font-bold">● {job.type}</span>
                <button
                  onClick={() => {
                    playClickSound();
                    setSelectedJob(job);
                    setApplicationSubmitted(false);
                  }}
                  onMouseEnter={playHoverSound}
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#191C1D] text-[#FFFFFF] border border-[#191C1D] hover:bg-[#FFFFFF] hover:text-[#191C1D] text-label-sm transition-all flex items-center justify-center gap-2 font-semibold uppercase tracking-widest"
                >
                  APPLY NOW <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JOB APPLICATION MODAL / DRAWER */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-2xl bg-[#FFFFFF] border-2 border-[#191C1D] p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b blueprint-line pb-4">
              <div>
                <span className="text-label-sm text-[#0057FF]">APPLICATION FOR {selectedJob.department.toUpperCase()}</span>
                <h3 className="text-2xl font-bold font-heading text-[#191C1D] uppercase mt-1">
                  {selectedJob.title}
                </h3>
                <div className="text-xs font-mono text-[#46474A] mt-1 flex items-center gap-3">
                  <span>{selectedJob.location}</span>
                  <span>//</span>
                  <span>{selectedJob.experience}</span>
                  <span>//</span>
                  <span className="text-[#00AA66] font-bold">{selectedJob.salary}</span>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-1 text-[#191C1D] hover:opacity-70"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {applicationSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#F8F9FA] border-2 border-[#00AA66] flex items-center justify-center mx-auto text-[#00AA66]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-bold font-heading text-[#191C1D] uppercase">APPLICATION RECEIVED</h4>
                <p className="text-sm font-sans text-[#46474A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{applicantName || 'Candidate'}</strong>. Your application for {selectedJob.title} ({selectedJob.salary}) has been logged in Drexorium's Talent Database. Our hiring leads will review your credentials.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 bg-[#191C1D] text-[#FFFFFF] text-label-sm font-bold uppercase tracking-widest"
                >
                  RETURN TO CAREERS
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitApplication} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-label-sm text-[#191C1D] mb-1">FULL NAME</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Dr. Eleanor Arroway"
                      className="w-full bg-[#F8F9FA] border blueprint-line px-4 py-2.5 text-xs text-[#191C1D] font-mono focus:outline-none focus:border-[#191C1D]"
                    />
                  </div>

                  <div>
                    <label className="block text-label-sm text-[#191C1D] mb-1">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="earroway@drexorium.lab"
                      className="w-full bg-[#F8F9FA] border blueprint-line px-4 py-2.5 text-xs text-[#191C1D] font-mono focus:outline-none focus:border-[#191C1D]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-label-sm text-[#191C1D] mb-1">
                    COVER LETTER / STATEMENT OF INTEREST
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe your software, web development, research, or internship experience with React, WebGL, C++, AI models, or rocket systems..."
                    className="w-full bg-[#F8F9FA] border blueprint-line p-4 text-xs text-[#191C1D] font-mono focus:outline-none focus:border-[#191C1D]"
                  />
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-label-sm text-[#191C1D] mb-1">
                    UPLOAD RESUME / CV (PDF)
                  </label>
                  <div className="p-6 bg-[#F8F9FA] border-2 border-dashed blueprint-line hover:border-[#191C1D] transition-colors text-center cursor-pointer relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setResumeFile(e.target.files[0]?.name)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <Upload className="w-6 h-6 text-[#0057FF] mx-auto mb-2" />
                    {resumeFile ? (
                      <div className="text-xs font-mono text-[#00AA66] font-bold">
                        ✓ ATTACHED: {resumeFile}
                      </div>
                    ) : (
                      <div className="text-xs font-mono text-[#46474A]">
                        Drag and drop your PDF resume here or click to browse
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 flex justify-end gap-3 border-t blueprint-line">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-5 py-2.5 border blueprint-line text-[#46474A] text-label-sm hover:text-[#191C1D]"
                  >
                    CANCEL
                  </button>

                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#191C1D] text-[#FFFFFF] border border-[#191C1D] text-label-sm font-bold uppercase tracking-widest flex items-center gap-2 hover:bg-[#FFFFFF] hover:text-[#191C1D] transition-colors"
                  >
                    <Send className="w-4 h-4" /> SUBMIT APPLICATION
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
