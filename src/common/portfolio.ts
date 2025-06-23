import CardflowText from "../content/CardflowText.astro";
import CardflowBanner from "../assets/images/projects/banners/cardflow.jpg";
import QuizWorldBanner from "../assets/images/projects/banners/quiz-world.jpg";
import VueFlashcardsBanner from "../assets/images/projects/banners/vue-flashcards.jpg";
import ChatDotNetBanner from "../assets/images/projects/banners/chat-dotnet.jpg";
import GoldenMomentsBanner from "../assets/images/projects/banners/golden-moments.jpg";
import type { AstroComponent } from "./util";
import QuizWorldText from "../content/QuizWorldText.astro";
import VueFlashcardsText from "../content/VueFlashcardsText.astro";
import ChatDotNetText from "../content/ChatDotNetText.astro";
import GoldenMomentsText from "../content/GoldenMomentsText.astro";
import { base } from "./navigation";

export type ExternalLink = {
  href: string;
  text: string;
};

export type Project = {
  id: string;
  title: string;
  description: string;
  fullContent: AstroComponent;
  techStack: string[];
  externalLinks: ExternalLink[];
  banner: ImageMetadata;
  bannerAlt: string;
};

export const webApps: Project[] = [
  {
    id: "cardflow",
    title: "Cardflow",
    description:
      "A web platform for buying, selling, and trading TCG items like Yu-Gi-Oh cards. Developed in collaboration with other developers",
    fullContent: CardflowText,
    techStack: [
      "React",
      "TypeScript",
      "Material UI",
      "TailwindCSS",
      "Django REST Framework",
      "PostgreSQL",
    ],
    externalLinks: [
      {
        href: "https://github.com/julkascript/cardflow",
        text: "GitHub repository",
      },
      {
        href: "https://www.figma.com/design/GpsRZnN69f29pOCkiciWD4/Cardflow?node-id=0-1&p=f",
        text: "Design in Figma (not created by me)",
      },
    ],
    banner: CardflowBanner,
    bannerAlt:
      "Two users engaging in a trade, which features a chat and an offer tracker.",
  },
  {
    id: "quiz-world",
    title: "Quiz World",
    description:
      "An app that allows users to play and create quizzes. Supports single-choice, multiple-choice, and text-based questions",
    fullContent: QuizWorldText,
    banner: QuizWorldBanner,
    bannerAlt:
      "A user answering a single choice question correctly. The question features notes which give the user more context",
    techStack: [
      "Angular 20",
      "Angular Material",
      "ASP.NET 8",
      "Entity Framework Core 8",
      "MS SQL Server",
      "Redis",
      "SignalR",
    ],
    externalLinks: [
      {
        href: "https://github.com/RyotaMitaraiWeb/Quiz-World",
        text: "Front-end GitHub repository",
      },
      {
        href: "https://github.com/RyotaMitaraiWeb/QuizWorld",
        text: "Back-end GitHub repository",
      },
    ],
  },
  {
    id: "vue-flashcards",
    title: "Vue Flashcards",
    description: "A web app for studying with flashcards",
    fullContent: VueFlashcardsText,
    banner: VueFlashcardsBanner,
    bannerAlt: "A flashcard with a prompt on it",
    techStack: ["Vue", "Vuetify", "TypeScript", "NestJS", "PostgreSQL"],
    externalLinks: [
      {
        href: "https://github.com/RyotaMitaraiWeb/Flashcards",
        text: "Front-end GitHub repository",
      },
      {
        href: "https://github.com/RyotaMitaraiWeb/Flashcards-Service",
        text: "Back-end GitHub repository",
      },
    ],
  },
  {
    id: "chat-net",
    title: "Chat.NET",
    description:
      "A chat application using various technologies. Currently work in progress",
    fullContent: ChatDotNetText,
    banner: ChatDotNetBanner,
    bannerAlt: "Users interacting in a chat room.",
    techStack: [
      "Next.js",
      "TypeScript",
      "ASP.NET 8",
      "SignalR",
      "Entity Framework Core 8",
      "PostgreSQL",
      "Redis",
      "MongoDB",
    ],
    externalLinks: [
      {
        href: "https://github.com/RyotaMitaraiWeb/Chat.NET",
        text: "GitHub repository",
      },
      {
        href: "https://www.figma.com/design/m6LxfbMvDncBRA1TsealqY/Chat.NET?node-id=218-3660&p=f&t=NFw9eF9lV93cbOdV-0",
        text: "Design in Figma",
      },
    ],
  },
];

export const websites: Project[] = [
  {
    id: "golden-moments",
    title: '"Zlatni Migove" (Golden Moments)',
    description:
      "Advertising materials for a senior club (website, Facebook post, flyer)",
    fullContent: GoldenMomentsText,
    banner: GoldenMomentsBanner,
    bannerAlt: "A snapshot from the landing page, showcasing a hero banner",
    techStack: ["Astro", "TailwindCSS", "Photoshop", "Illustrator", "InDesign", "Figma"],
    externalLinks: [
      {
        href: "https://ryotamitaraiweb.github.io/zlatnimigove/",
        text: "Live version of the website (landing page only, in Bulgarian)",
      },
      {
        href: "https://www.figma.com/design/5FcN2iaSgnm7BYuefnHBMQ/Zlatni-Migove",
        text: "Design in Figma (wireframes + mockup)",
      },
      {
        href: `${base}/images/golden-moments/logo.png`,
        text: "Logo of the brand (PNG, text in Bulgarian)",
      },
      {
        href: `${base}/pdf/golden-moments/facebook-post.pdf`,
        text: "Design for an example Facebook post (PDF, in Bulgarian)",
      },
      {
        href: `${base}/pdf/golden-ages/flyer.pdf`,
        text: "Design for an example flyer (PDF, in Bulgarian)",
      },
    ],
  },
];

export const cardflow = webApps.find((app) => app.id === "cardflow")!;
export const quizWorld = webApps[1];
export const vueFlashcards = webApps[2];
