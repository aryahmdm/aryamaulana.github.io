import React from 'react';
import { Tab } from '../types';

interface NavbarProps {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const tabs: Tab[] = ['about', 'resume', 'portfolio', 'blog', 'contact'];

  return (
    <nav className="absolute top-0 right-0 w-full md:w-auto bg-[#2b2b2c] border-b border-l border-[#383838] rounded-tr-3xl rounded-bl-3xl md:rounded-bl-3xl md:rounded-tr-none px-8 py-4 z-20 flex justify-center md:justify-end gap-6 md:gap-8 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`text-base font-semibold capitalize transition-all duration-300 hover:text-accent/80
            ${activeTab === tab ? 'text-accent' : 'text-gray-300'}
          `}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;