import React, { useState } from 'react';
import { Project } from '../../types';
import { Eye } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'Finance App', category: 'Web Development', image: 'https://picsum.photos/id/119/600/400' },
  { id: 2, title: 'Orizon', category: 'Web Design', image: 'https://picsum.photos/id/160/600/400' },
  { id: 3, title: 'Fundo', category: 'Web Design', image: 'https://picsum.photos/id/180/600/400' },
  { id: 4, title: 'Brawlhalla', category: 'Applications', image: 'https://picsum.photos/id/20/600/400' },
  { id: 5, title: 'DSM.', category: 'Web Design', image: 'https://picsum.photos/id/366/600/400' },
  { id: 6, title: 'Metaspark', category: 'Web Development', image: 'https://picsum.photos/id/445/600/400' },
  { id: 7, title: 'Summary', category: 'Web Development', image: 'https://picsum.photos/id/535/600/400' },
  { id: 8, title: 'Task Manager', category: 'Applications', image: 'https://picsum.photos/id/600/600/400' },
  { id: 9, title: 'Arrival', category: 'Web Development', image: 'https://picsum.photos/id/888/600/400' },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Web Design', 'Applications', 'Web Development'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
          Portfolio
          <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-accent rounded-full"></span>
        </h2>
      </header>

      {/* Filter Tabs */}
      <ul className="flex flex-wrap gap-4 mb-8 text-base">
        {categories.map(cat => (
          <li key={cat}>
            <button
              onClick={() => setFilter(cat)}
              className={`cursor-pointer transition-colors ${filter === cat ? 'text-accent font-semibold' : 'text-gray-400 hover:text-gray-200'}`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map(project => (
          <div key={project.id} className="group relative rounded-xl overflow-hidden cursor-pointer">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#000000]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
               <div className="w-10 h-10 bg-[#222224] rounded-lg flex items-center justify-center text-accent mb-2">
                 <Eye size={20} />
               </div>
               <h4 className="text-white font-bold text-xl">{project.title}</h4>
               <p className="text-gray-400 text-base">{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;