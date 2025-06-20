import CardflowText from "../content/CardflowText.astro";
import CardflowBanner from "../assets/images/projects/banners/cardflow.jpg";
import QuizWorldBanner from "../assets/images/projects/banners/quiz-world.jpg";
import type { AstroComponent } from "./util";
import QuizWorldText from "../content/QuizWorldText.astro";

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
      "A web platform for buying, selling, and trading TCG items like Yu-Gi-Oh cards. Developed in collaboration with other developers.",
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
        text: "Design in Figma (not created by me)"
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
      "An app that allows users to play on and create quizzes. Supports single-choice, multiple-choice, and text-based questions",
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
    ],
    externalLinks: [
      {
        href: "https://github.com/RyotaMitaraiWeb/Quiz-World",
        text: "Front-end GitHub repository"
      },
      {
        href: "https://github.com/RyotaMitaraiWeb/QuizWorld",
        text: "Back-end GitHub repository"
      }
    ]
  },
];

export const cardflow = webApps.find((app) => app.id === "cardflow")!;
export const quizWorld = webApps[1];