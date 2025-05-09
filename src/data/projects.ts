export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'web' | 'mobile' | 'backend';
  liveUrl?: string;
  githubUrl?: string;
}

export const projectsData: Project[] = [
  {
    title: 'StockSmart (Pantry Tracker)',
    description: 'A pantry tracker app with item inventory, recipe creation, sharing, and full CRUD functionality.',
    image: 'https://i.postimg.cc/13qHj6jV/download.png',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS'],
    category: 'web',
    liveUrl: 'https://stocksmart-app.vercel.app',
    githubUrl: 'https://github.com/SalmanAhmad-code/StockSmart-Pantry-Tracker-App'
  },
  {
    title: 'Crayo AI (Customer Support Bot)',
    description: 'An AI-powered customer support site using Gemini API, with Firebase authentication and a clean UI.',
    image: 'https://i.postimg.cc/9X6WyHZP/Crayo-AI-2.png',
    technologies: ['Next.js', 'Firebase', 'Gemini API', 'Tailwind CSS'],
    category: 'web',
    liveUrl: '',
    githubUrl: 'https://github.com/SalmanAhmad-code/Crayo-AI-V2'
  },
  {
    title: 'GameFlip (Gaming Flashcard SaaS)',
    description: 'A SaaS platform for gaming-related flashcards with AI flashcard generation, user auth, Stripe subscriptions, and leaderboard.',
    image: 'https://i.postimg.cc/5t9Zdsdk/download.png',
    technologies: ['Next.js', 'OpenAI API', 'Clerk', 'Firebase', 'Stripe'],
    category: 'web',
    liveUrl: 'https://game-flip.vercel.app/',
    githubUrl: 'https://github.com/SalmanAhmad-code/GameFlip'
  },
  {
    title: 'Comsats Hub',
    description: 'A community portal for COMSATS students featuring event updates, student resources, and announcements with responsive design and a clean UI.',
    image: 'https://i.postimg.cc/kGnVxV2H/download.png',
    technologies: ['Typescript', 'Vite', 'Tailwind CSS', 'Supabase'],
    category: 'web',
    liveUrl: 'https://comsatshub.vercel.app/',
    githubUrl: 'https://github.com/SalmanAhmad-code/ComsatsHub'
  },  
  {
    title: 'KWC Construction Website',
    description: 'A real-world company website featuring project info and AI-powered quotation generation using Gemini API.',
    image: 'https://i.postimg.cc/jd8DVd1H/download.png',
    technologies: ['Next.js', 'Tailwind CSS', 'Gemini API'],
    category: 'web',
    liveUrl: 'https://kwcconstruction.net',
    githubUrl: ''
  },
  {
    title: 'Tunify (Spotify Clone)',
    description: 'A frontend clone of Spotify with music playback, responsive UI, and styled using HTML, CSS, and JavaScript.',
    image: 'https://i.postimg.cc/rpMGmHfM/download.png',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    liveUrl: '',
    githubUrl: 'https://github.com/SalmanAhmad-code/Spotify-Clone----Tunify'
  },
];