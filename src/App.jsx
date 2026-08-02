import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TelemetryTicker from './components/TelemetryTicker';
import SearchModal from './components/SearchModal';
import SEOHead from './components/SEOHead';

import Home from './pages/Home';
import AIAnalytics from './pages/AIAnalytics';
import SpaceBioTech from './pages/SpaceBioTech';
import DroneTech from './pages/DroneTech';
import LaunchSystems from './pages/LaunchSystems';
import Missions from './pages/Missions';
import AboutUs from './pages/AboutUs';
import Careers from './pages/Careers';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home onNavigate={(page) => setActivePage(page)} />;
      case 'ai-analytics':
        return <AIAnalytics />;
      case 'space-biotech':
        return <SpaceBioTech />;
      case 'drone-tech':
        return <DroneTech />;
      case 'launch-systems':
        return <LaunchSystems />;
      case 'missions':
        return <Missions />;
      case 'about-us':
        return <AboutUs />;
      case 'careers':
        return <Careers />;
      default:
        return <Home onNavigate={(page) => setActivePage(page)} />;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#191C1D] relative flex flex-col justify-between selection:bg-[#191C1D] selection:text-[#FFFFFF]">
      {/* Enterprise Dynamic SEO Head & Entity Graph Manager */}
      <SEOHead activePage={activePage} />

      {/* Main Header Navbar */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10 pb-16">
        {renderPage()}
      </main>

      {/* Search Overlay Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onNavigate={(page) => setActivePage(page)}
      />

      {/* Real-time Ticking Telemetry Bar */}
      <TelemetryTicker />

      {/* Footer */}
      <Footer onNavigate={(page) => setActivePage(page)} />
    </div>
  );
}
