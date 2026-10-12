export interface SelectedProject {
  id: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  stack: string[];
  url: string;
  context: string;
  implementation: string;
  focus: string;
}

export const selectedWork: SelectedProject[] = [
  {
    id: "comsatshub",
    name: "ComsatsHub",
    category: "STUDENT PLATFORM",
    headline: "One place for campus life.",
    description:
      "A community portal bringing COMSATS student resources and information together in one responsive web application.",
    image: "/images/comsatshub.webp",
    imageAlt: "ComsatsHub student portal interface",
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    url: "https://comsatshub.vercel.app/",
    context:
      "Built for the COMSATS student community, with a central place to explore campus resources.",
    implementation:
      "Developed the web interface and integrated Supabase for authentication and application data.",
    focus:
      "Connecting a responsive interface with persistent data and account flows.",
  },
  {
    id: "kwc",
    name: "KWC Construction",
    category: "CLIENT WEBSITE",
    headline: "A digital home for a construction business.",
    description:
      "A company website presenting construction projects, with an AI-powered quotation feature using Gemini.",
    image: "/images/kwc.webp",
    imageAlt: "KWC Construction website interface",
    stack: ["Next.js", "Tailwind CSS", "Gemini API"],
    url: "https://kwcconstruction.net",
    context:
      "A website built for a construction company to introduce its work and services.",
    implementation:
      "Built the website interface and integrated Gemini into the quotation experience.",
    focus:
      "Combining business information with a practical AI-assisted feature.",
  },
  {
    id: "gameflip",
    name: "GameFlip",
    category: "AI APPLICATION",
    headline: "Turn gaming knowledge into flashcards.",
    description:
      "An AI flashcard application combining generation, user accounts, subscriptions, and a leaderboard.",
    image: "/images/gameflip.webp",
    imageAlt: "GameFlip gaming flashcard application interface",
    stack: ["Next.js", "OpenAI API", "Clerk", "Firebase", "Stripe"],
    url: "https://game-flip.vercel.app/",
    context:
      "A project exploring AI-generated learning material for gaming topics.",
    implementation:
      "Worked on the application interface and integrations for AI generation, authentication, and subscriptions.",
    focus: "Bringing multiple services together in a coherent user experience.",
  },
];
