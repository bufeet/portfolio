/**
 * Shared types, interfaces, and enums for the Portfolio application.
 */

export enum Page {
  Home = 'home',
  Portfolio = 'portfolio',
  Blog = 'blog'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  role: string;
  challenge: string;
  solution: string;
  metrics: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  category: string;
}
