import React from 'react';
import { BlogPost } from '../../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: 'Design Conferences in 2024',
    category: 'Design',
    date: 'Feb 23, 2024',
    excerpt: 'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.',
    image: 'https://picsum.photos/id/1/400/250'
  },
  {
    id: 2,
    title: 'Best Fonts for your portfolio',
    category: 'Design',
    date: 'Jan 15, 2024',
    excerpt: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque.',
    image: 'https://picsum.photos/id/2/400/250'
  },
  {
    id: 3,
    title: 'Design Digest #80',
    category: 'Design',
    date: 'Dec 10, 2023',
    excerpt: 'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam.',
    image: 'https://picsum.photos/id/3/400/250'
  },
  {
    id: 4,
    title: 'UI/UX Design Trends',
    category: 'Design',
    date: 'Nov 05, 2023',
    excerpt: 'Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit.',
    image: 'https://picsum.photos/id/4/400/250'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <header className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-6 relative inline-block">
          Blog
          <span className="absolute -bottom-2 left-0 w-12 h-1.5 bg-accent rounded-full"></span>
        </h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map(post => (
          <div key={post.id} className="bg-[#222224] rounded-2xl overflow-hidden border border-[#383838] group shadow-sm hover:shadow-lg transition-all duration-300">
            <div className="overflow-hidden h-48 relative">
                <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 left-3 bg-accent text-white text-sm px-3 py-1 rounded-full">{post.category}</span>
            </div>
            <div className="p-6">
              <div className="flex gap-2 text-base text-gray-400 mb-2">
                 <span>{post.date}</span>
                 <span>•</span>
                 <span>Admin</span>
              </div>
              <h3 className="text-white text-xl font-bold mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-gray-400 text-base mb-4 line-clamp-2 leading-relaxed">{post.excerpt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;