export type NavigationLink = {
  text: string;
  href: string;
};

export const base = "/Valentin-Karadzhov";

export const links: NavigationLink[] = [
  {
    text: "Home",
    href: base + "/",
  },
  {
    text: "Portfolio",
    href: base + "/portfolio",
  },
  {
    text: "Tech stack",
    href: base + "/skills",
  },
  {
    text: "About me",
    href: base + "/about",
  },
  {
    text: "Contact me",
    href: base + "/contacts"
  },
];
