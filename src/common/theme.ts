export type theme = "light" | "dark" | "high-contrast" | "system";

export type ThemeMetadata = {
  label: string;
  value: theme;
  description?: string;
};

export const themes: Record<theme, ThemeMetadata> = {
  light: {
    label: "Light mode",
    value: "light",
  },
  dark: {
    label: "Dark mode",
    value: "dark",
  },
  "high-contrast": {
    label: "High contrast mode",
    value: "high-contrast",
  },
  system: {
    label: "System",
    value: "system",
    description:
      "Select either light or dark mode based on your operating system settings",
  },
};
