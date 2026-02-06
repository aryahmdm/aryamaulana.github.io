import React from 'react';
import { BookOpen, Briefcase } from 'lucide-react';

const Resume: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
          Resume
          <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-accent rounded-full"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education Column */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031]">
              <BookOpen size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Education</h3>
          </div>

          <div className="space-y-6 pl-5 border-l border-[#383838] ml-5">
            <div className="relative pl-8">
              <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">University School of the Arts</h4>
              <p className="text-accent text-base mb-2">2007 — 2008</p>
              <p className="text-gray-400 text-base leading-relaxed">New York Academy of Art</p>
            </div>
            
            <div className="relative pl-8">
               <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">Design School</h4>
              <p className="text-accent text-base mb-2">2005 — 2007</p>
              <p className="text-gray-400 text-base leading-relaxed">Parsons School of Design</p>
            </div>

            <div className="relative pl-8">
               <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">Web Design Course</h4>
              <p className="text-accent text-base mb-2">2004 — 2005</p>
              <p className="text-gray-400 text-base leading-relaxed">London Web Design Institute</p>
            </div>
          </div>
        </div>

        {/* Experience Column */}
        <div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#202022] flex items-center justify-center text-accent shadow-inner border border-[#303031]">
              <Briefcase size={20} />
            </div>
            <h3 className="text-2xl font-bold text-white">Experience</h3>
          </div>

          <div className="space-y-6 pl-5 border-l border-[#383838] ml-5">
            <div className="relative pl-8">
               <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">Creative Director</h4>
              <p className="text-accent text-base mb-2">2018 — Present</p>
              <p className="text-gray-400 text-base leading-relaxed">Led creative teams in delivering high-impact web and mobile projects for Fortune 500 clients.</p>
            </div>
            
            <div className="relative pl-8">
               <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">Senior UI/UX Designer</h4>
              <p className="text-accent text-base mb-2">2015 — 2018</p>
              <p className="text-gray-400 text-base leading-relaxed">Designed user-centric interfaces for fintech applications, improving user retention by 40%.</p>
            </div>

            <div className="relative pl-8">
               <span className="absolute -left-[25px] top-1 w-3 h-3 bg-accent rounded-full shadow-[0_0_0_4px_#1e1e1f]"></span>
              <h4 className="text-white font-bold text-xl">Junior Web Developer</h4>
              <p className="text-accent text-base mb-2">2013 — 2015</p>
              <p className="text-gray-400 text-base leading-relaxed">Developed responsive websites using HTML, CSS, and JavaScript for various e-commerce startups.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Bar */}
      <div className="mt-12">
         <h3 className="text-2xl font-bold text-white mb-6">My Skills</h3>
         <div className="bg-[#222224] p-6 rounded-2xl border border-[#383838]">
            <div className="space-y-6">
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-white font-medium text-lg">Web Design</span>
                        <span className="text-gray-400 text-base">95%</span>
                    </div>
                    <div className="w-full h-2 bg-[#383838] rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[95%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-white font-medium text-lg">Mobile Development</span>
                        <span className="text-gray-400 text-base">80%</span>
                    </div>
                    <div className="w-full h-2 bg-[#383838] rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[80%]"></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <span className="text-white font-medium text-lg">Branding</span>
                        <span className="text-gray-400 text-base">90%</span>
                    </div>
                    <div className="w-full h-2 bg-[#383838] rounded-full overflow-hidden">
                        <div className="h-full bg-accent w-[90%]"></div>
                    </div>
                </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Resume;