import type { ReactNode } from "react";
import type { site } from "../../lib/site";

type SocialName = (typeof site.social)[number]["name"];

const icons: Record<SocialName, ReactNode> = {
  Facebook: (
    <path d="M13.5 22v-8.1h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.5-1.5h1.7V4.5c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.1H10V22h3.5z" />
  ),
  X: (
    <path d="M18.9 1.2h3.7l-8.1 9.2L24 22.8h-7.4l-5.8-7.6-6.6 7.6H.5l8.6-9.8L0 1.2h7.6l5.2 6.9 6.1-6.9zm-1.3 19.5h2L6.5 3.2H4.3z" />
  ),
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  TikTok: (
    <path d="M19.6 7.2a6.2 6.2 0 0 1-3.8-1.3v8.2a6.1 6.1 0 1 1-5.3-6v3.5a2.7 2.7 0 1 0 1.9 2.6V2h3.4c.2 2 1.7 3.6 3.8 3.9v1.3z" />
  ),
  Snapchat: (
    <path d="M12 2.5c-2.7 0-4.7 2.1-4.7 5v2.9c0 1.2-.4 2.2-1.2 3-.4.4-1.3 1.1-1.9 1.5-.2.5-.7.9-1.2 1.2 1.6.4 2.7-.2 3.3-.6 1.1.7 2.4 1.1 3.7 1.1s2.6-.4 3.7-1.1c.7.4 1.8 1 3.3.6-.5-.3-1-.7-1.2-1.2.6-.4 1.5-1.1 1.9-1.5-.8-.8-1.2-1.8-1.2-3V7.5c0-2.9-2-5-4.7-5z" />
  ),
  LinkedIn: (
    <path d="M20.4 2H3.6C2.7 2 2 2.7 2 3.6v16.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V3.6c0-.9-.7-1.6-1.6-1.6ZM8 19H5V9h3zM6.5 7.7A1.7 1.7 0 1 1 6.5 4.3a1.7 1.7 0 0 1 0 3.4ZM19 19h-3v-4.9c0-1.2 0-2.7-1.7-2.7s-2 1.3-2 2.6V19h-3V9h2.8v1.4h.1c.4-.8 1.4-1.7 3-1.7 3.2 0 3.8 2.1 3.8 4.8z" />
  ),
};

export default function SocialIcon({ name }: { name: SocialName }) {
  return (
    <svg
      aria-hidden="true"
      fill={name === "Instagram" ? "none" : "currentColor"}
      focusable="false"
      stroke={name === "Instagram" ? "currentColor" : undefined}
      strokeWidth={name === "Instagram" ? 2 : undefined}
      viewBox="0 0 24 24"
    >
      {icons[name]}
    </svg>
  );
}
