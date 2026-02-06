import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import { GlassCard } from './components/ui/GlassCard';
import { Tab } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>('about');

  const renderContent = () => {
    switch (activeTab) {
      case 'about': return <About />;
      case 'resume': return <Resume />;
      case 'portfolio': return <Portfolio />;
      case 'blog': return <Blog />;
      case 'contact': return <Contact />;
      default: return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-[#121212] flex justify-center py-10 px-4 md:px-8 font-sans selection:bg-accent selection:text-white">
      <div className="w-full max-w-[1250px] grid grid-cols-12 gap-8 relative">
        
        {/* Left Sidebar (Sticky) */}
        <Sidebar />

        {/* Main Content Area */}
        <main className="col-span-12 lg:col-span-9 h-full relative">
          <GlassCard className="min-h-[800px] pb-10">
            {/* Top Navigation Bar */}
            <div className="relative h-20">
                <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>

            {/* Dynamic Content */}
            <div className="px-8 md:px-10 py-6">
                {renderContent()}
            </div>
          </GlassCard>
        </main>
      </div>
    </div>
  );
};

export default App;