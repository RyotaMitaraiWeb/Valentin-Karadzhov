import AngularIcon from "../components/icons/tech-stack/AngularIcon.astro";
import AspDotNetCoreIcon from "../components/icons/tech-stack/AspDotNetCoreIcon.astro";
import AstroIcon from "../components/icons/tech-stack/AstroIcon.astro";
import CssIcon from "../components/icons/tech-stack/CssIcon.astro";
import DockerIcon from "../components/icons/tech-stack/DockerIcon.astro";
import ExpressIcon from "../components/icons/tech-stack/ExpressIcon.astro";
import FigmaIcon from "../components/icons/tech-stack/FigmaIcon.astro";
import GitHubActionsIcon from "../components/icons/tech-stack/GitHubActionsIcon.astro";
import GitIcon from "../components/icons/tech-stack/GitIcon.astro";
import HtmlIcon from "../components/icons/tech-stack/HtmlIcon.astro";
import JavaScriptIcon from "../components/icons/tech-stack/JavaScriptIcon.astro";
import MongoDbIcon from "../components/icons/tech-stack/MongoDbIcon.astro";
import MsSqlServerIcon from "../components/icons/tech-stack/MsSqlServerIcon.astro";
import NestIcon from "../components/icons/tech-stack/NestIcon.astro";
import NextIcon from "../components/icons/tech-stack/NextIcon.astro";
import PostgresSqlIcon from "../components/icons/tech-stack/PostgresSqlIcon.astro";
import ReactIcon from "../components/icons/tech-stack/ReactIcon.astro";
import SassIcon from "../components/icons/tech-stack/SassIcon.astro";
import TypeScriptIcon from "../components/icons/tech-stack/TypeScriptIcon.astro";
import VueIcon from "../components/icons/tech-stack/VueIcon.astro";
import type { AstroComponent } from "./util";

export type TechStackItem = {
  icon: AstroComponent;
  label: string;
};

export const frontEndTechStack: TechStackItem[] = [
  {
    icon: HtmlIcon,
    label: "HTML5",
  },
  {
    icon: CssIcon,
    label: "CSS3",
  },
  {
    icon: SassIcon,
    label: "SASS",
  },
  {
    icon: FigmaIcon,
    label: "Figma",
  },
  {
    icon: AstroIcon,
    label: "Astro",
  },
  {
    icon: JavaScriptIcon,
    label: "JavaScript",
  },
  {
    icon: TypeScriptIcon,
    label: "TypeScript",
  },
  {
    icon: ReactIcon,
    label: "React",
  },
  {
    icon: AngularIcon,
    label: "Angular",
  },
  {
    icon: VueIcon,
    label: "Vue",
  },
];

export const backEndTechStack: TechStackItem[] = [
  {
    icon: AspDotNetCoreIcon,
    label: "ASP.NET Core",
  },
  {
    icon: NextIcon,
    label: "Next.js",
  },
  {
    icon: NestIcon,
    label: "NestJS",
  },
  {
    icon: ExpressIcon,
    label: "Express",
  },
  {
    icon: PostgresSqlIcon,
    label: "PostgreSQL",
  },
  {
    icon: MsSqlServerIcon,
    label: "MS SQL Server",
  },
  {
    icon: MongoDbIcon,
    label: "MongoDB",
  },
];

export const otherTech: TechStackItem[] = [
  {
    icon: DockerIcon,
    label: "Docker",
  },
  {
    icon: GitIcon,
    label: "Git",
  },
  {
    icon: GitHubActionsIcon,
    label: "GitHub Actions",
  },
];
