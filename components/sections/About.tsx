import React, { useRef, useState, MouseEvent } from 'react';
import { Monitor, Smartphone, Camera, Code } from 'lucide-react';
import { Service } from '../../types';

const services: Service[] = [
  {
    title: 'Web Design',
    description: 'The most modern and high-quality design made at a professional level.',
    icon: Monitor,
  },
  {
    title: 'Web Development',
    description: 'High-quality development of sites at the professional level.',
    icon: Code,
  },
  {
    title: 'Mobile Apps',
    description: 'Professional development of applications for iOS and Android.',
    icon: Smartphone,
  },
  {
    title: 'Photography',
    description: 'I make high-quality photos of any category at a professional level.',
    icon: Camera,
  },
];

const clients = [
    { id: 1, name: 'Ransom & Wilder', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Ransom' },
    { id: 2, name: 'Big Enough', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Big+Enough' },
    { id: 3, name: 'Cara Indoors', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Cara' },
    { id: 4, name: 'Authentic', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Authentic' },
    { id: 5, name: 'Vintage', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Vintage' },
    { id: 6, name: 'Golden', image: 'https://placehold.co/200x100/1e1e1f/cccccc?text=Golden' },
];

const About: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
          About Me
          <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-accent rounded-full"></span>
        </h2>
        <div className="text-gray-400 leading-relaxed space-y-4 text-base">
          <p>
            I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
          </p>
          <p>
            My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
          </p>
        </div>
      </header>

      <section className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-6">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div 
                key={index} 
                className="bg-[#222224] border border-[#383838] p-6 rounded-2xl flex gap-4 shadow-sm hover:shadow-md hover:border-accent/30 transition-all duration-300"
            >
              <div className="text-accent shrink-0">
                <service.icon size={40} strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-white font-bold text-xl mb-2">{service.title}</h4>
                <p className="text-gray-400 text-base leading-relaxed">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-white mb-6">Clients</h3>
        <div 
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto gap-8 pb-4 cursor-grab active:cursor-grabbing select-none
             [&::-webkit-scrollbar]:h-1.5
             [&::-webkit-scrollbar-track]:bg-[#2a2b2c] 
             [&::-webkit-scrollbar-track]:rounded-full
             [&::-webkit-scrollbar-thumb]:bg-[#383838]
             hover:[&::-webkit-scrollbar-thumb]:bg-accent
             [&::-webkit-scrollbar-thumb]:rounded-full
        ">
            {clients.map((client) => (
                <a key={client.id} href="#" className="shrink-0 block opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img 
                        src={client.image} 
                        alt={client.name} 
                        draggable={false}
                        className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </a>
            ))}
             {/* Duplicate items for scrolling effect */}
            {clients.map((client) => (
                <a key={`dup-${client.id}`} href="#" className="shrink-0 block opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <img 
                        src={client.image} 
                        alt={client.name} 
                        draggable={false}
                        className="h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    />
                </a>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;