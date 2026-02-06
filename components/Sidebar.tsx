import React, { useState } from 'react';
import { Mail, Phone, Calendar, MapPin, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react';
import { GlassCard } from './ui/GlassCard';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="col-span-12 lg:col-span-3 lg:sticky lg:top-8 h-fit z-30">
      <GlassCard className="relative">
        
        {/* Mobile Toggle Button - Positioned at the very edge */}
        <button 
            onClick={() => setIsOpen(!isOpen)}
            className={`absolute top-0 right-0 w-11 h-11 bg-[#2a2b2c] rounded-bl-2xl rounded-tr-3xl border-b border-l flex items-center justify-center text-accent lg:hidden transition-colors duration-300 z-20 focus:outline-none
                ${isOpen ? 'border-accent' : 'border-[#383838] hover:border-accent'}
            `}
            aria-label="Toggle Sidebar Info"
        >
            <ChevronDown size={20} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {/* Content Wrapper with Padding */}
        <div className="p-6 md:p-8">
            
            {/* Header Section - Adaptive Layout */}
            <div className="flex flex-row items-center gap-5 lg:flex-col lg:items-center lg:gap-0 pr-12 lg:pr-0">
                
                {/* Avatar */}
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-3xl bg-[#2a2b2c] overflow-hidden shadow-lg shrink-0">
                    <img 
                    src="https://picsum.photos/id/64/400/400" 
                    alt="Avatar" 
                    className="w-full h-full object-cover opacity-90 hover:scale-110 transition-transform duration-500"
                    />
                </div>

                {/* Name & Role */}
                <div className="flex flex-col items-start lg:items-center lg:mt-6 z-10">
                    <h1 className="text-xl lg:text-2xl font-bold text-white mb-2 tracking-wide">Richard Hanrick</h1>
                    <div className="bg-[#2a2b2c] px-4 py-1.5 rounded-lg text-sm lg:text-base font-medium text-gray-300">
                        Web Developer
                    </div>
                </div>
            </div>

            {/* Expandable Content */}
            <div className={`
                overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? 'max-h-[800px] opacity-100 mt-8' : 'max-h-0 opacity-0 mt-0 lg:max-h-[1000px] lg:opacity-100 lg:mt-8'}
            `}>
                
                <div className="w-full h-[1px] bg-[#383838] mb-8"></div>

                {/* Contact Info List */}
                <div className="w-full space-y-6 text-left">
                
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031] shrink-0">
                        <Mail size={18} />
                        </div>
                        <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 uppercase font-medium">Email</p>
                        <p className="text-base text-white truncate" title="richard@example.com">richard@example.com</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031] shrink-0">
                        <Phone size={18} />
                        </div>
                        <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 uppercase font-medium">Phone</p>
                        <p className="text-base text-white truncate">+1 (213) 352-2795</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031] shrink-0">
                        <Calendar size={18} />
                        </div>
                        <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 uppercase font-medium">Birthday</p>
                        <p className="text-base text-white truncate">June 23, 1982</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031] shrink-0">
                        <MapPin size={18} />
                        </div>
                        <div className="overflow-hidden">
                        <p className="text-xs text-gray-400 uppercase font-medium">Location</p>
                        <p className="text-base text-white truncate">Sacramento, USA</p>
                        </div>
                    </div>
                
                </div>

                <div className="w-full h-[1px] bg-[#383838] my-8"></div>

                {/* Socials */}
                <div className="flex gap-4 justify-center">
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Facebook size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Twitter size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Instagram size={20} /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors"><Linkedin size={20} /></a>
                </div>

            </div>
        </div>

      </GlassCard>
    </aside>
  );
};

export default Sidebar;