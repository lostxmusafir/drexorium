import React, { useState } from 'react';
import { Search, Volume2, VolumeX, Menu, X, ShieldAlert } from 'lucide-react';
import { playClickSound, playHoverSound, toggleSound, isSoundEnabled } from './SoundFX';

export default function Navbar({ activePage, setActivePage, onOpenSearch }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(!isSoundEnabled());

  const navItems = [
    { id: 'about-us', label: 'About Us' },
    { id: 'ai-analytics', label: 'AI Analytics' },
    { id: 'space-biotech', label: 'Space BioTech' },
    { id: 'drone-tech', label: 'Drone Tech' },
    { id: 'launch-systems', label: 'Launch Systems' },
    { id: 'missions', label: 'Missions' },
    { id: 'careers', label: 'Careers' },
  ];

  const handleNavClick = (id) => {
    playClickSound();
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSoundToggle = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);
    toggleSound(!nextMuted);
  };

  return (
    <nav className="bg-[#FFFFFF] sticky top-0 z-50 border-b border-[#E5E7EB] transition-colors">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-12 py-3 sm:py-4 flex justify-between items-center">
        {/* Brand Name */}
        <button
          onClick={() => handleNavClick('home')}
          onMouseEnter={playHoverSound}
          className="text-lg sm:text-2xl font-bold font-heading text-[#191C1D] tracking-tight hover:opacity-80 transition-opacity flex items-center gap-1.5 sm:gap-2 text-left"
        >
          <span>Drexorium Labs</span>
          <span className="text-[9px] sm:text-[10px] font-mono font-medium px-1.5 sm:px-2 py-0.5 border border-[#191C1D] text-[#191C1D] uppercase">
            Lab_v4.2
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-6 lg:gap-8 items-center">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={playHoverSound}
                className={`text-label-sm uppercase tracking-widest transition-all py-1 px-2 ${
                  isActive
                    ? 'text-[#191C1D] font-bold border-b-2 border-[#191C1D]'
                    : 'text-[#46474A] hover:text-[#191C1D] hover:bg-[#F3F4F5]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => {
              playClickSound();
              onOpenSearch && onOpenSearch();
            }}
            onMouseEnter={playHoverSound}
            className="p-2 border border-[#E5E7EB] hover:border-[#191C1D] text-[#46474A] hover:text-[#191C1D] text-xs font-mono transition-colors"
            title="Search telemetry & records"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={playHoverSound}
            className="p-2 border border-[#E5E7EB] hover:border-[#191C1D] text-[#46474A] hover:text-[#191C1D] transition-colors"
            title={muted ? "Enable UI Audio" : "Disable UI Audio"}
          >
            {muted ? <VolumeX className="w-4 h-4 text-gray-400" /> : <Volume2 className="w-4 h-4 text-[#0057FF]" />}
          </button>

          {/* Primary Action Button */}
          <button
            onClick={() => handleNavClick('careers')}
            onMouseEnter={playHoverSound}
            className="hidden lg:flex items-center justify-center bg-[#191C1D] text-[#FFFFFF] px-6 py-2 border border-[#191C1D] hover:bg-[#FFFFFF] hover:text-[#191C1D] transition-colors text-label-sm uppercase tracking-widest font-semibold"
          >
            Contact Lab
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 border border-[#E5E7EB] text-[#191C1D]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFFFF] border-b border-[#E5E7EB] px-6 py-6 space-y-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-3 text-label-sm uppercase tracking-widest flex justify-between items-center ${
                activePage === item.id
                  ? 'bg-[#191C1D] text-[#FFFFFF]'
                  : 'text-[#46474A] hover:bg-[#F3F4F5]'
              }`}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
