import React from 'react';

export type Tab = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

export interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
}