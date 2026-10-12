export type Locale = "en" | "ar";

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};
