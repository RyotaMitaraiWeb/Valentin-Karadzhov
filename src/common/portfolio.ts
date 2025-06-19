import CardflowText from "../content/CardflowText.astro";
import CardflowBanner from "../assets/images/projects/banners/cardflow.jpg";

import type { AstroComponent } from "./util";

export type ExternalLink = {
  href: string;
  text: string;
};

export type Project = {
  title: string;
  description: string;
  fullContent: AstroComponent;
  techStack: string[];
  externalLinks: ExternalLink[];
  banner: ImageMetadata;
  bannerAlt: string;
  pageSubRoute: string;
};

export const webApps: Project[] = [
  {
    title: "Cardflow",
    description:
      "A web platform for buying, selling, and trading TCG items like Yu-Gi-Oh cards. Developed in collaboration with other developers",
    fullContent: CardflowText,
    pageSubRoute: "cardflow",
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
    ],
    banner: CardflowBanner,
    bannerAlt: "A sample from the Cardflow project, showing two users engaging in a trade, which features a chat and an offer tracker."
  },
];
