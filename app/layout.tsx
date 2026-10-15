import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = localFont({
  src: [
    { path: "./fonts/Montserrat-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Montserrat-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Montserrat-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Montserrat-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Montserrat-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Montserrat-ExtraBold.ttf", weight: "800", style: "normal" },
  ],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Devoté Aesthetics | Regenerative Aesthetic Solutions",
    template: "%s | Devoté Aesthetics",
  },
  description:
    "Advanced regenerative technologies for dermatologists and aesthetic physicians. Devoté Aesthetics, Riyadh, Saudi Arabia.",
  icons: {
    icon: "/brand/logo-mark-gold-on-dark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>{children}</body>
    </html>
  );
}
