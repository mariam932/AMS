export const siteAssets = {
  heroImage: "/images/hero-skincare.jpg",
  aboutHero: "/images/about-skincare-products.webp",
  aboutMeeting: "/images/about-devote-meeting.jpg",
  aboutTechnologies: "/images/about-devote-collage.png",
  eventCollages: [
    "/images/events-dubai-derma-collage.png",
    "/images/events-univa-expo-collage.png",
  ],
  logoGold: "/brand/logo-gold.svg",
  logoMarkGoldOnDark: "/brand/logo-mark-gold-on-dark.svg",
  brandDark: "/brand/logo-dark.svg",
  productImages: {
    univa: "/images/univa-exo-gel.webp",
    reversa: "/images/reversa-ultra.webp",
    revital: "/images/revital.webp",
    "p-r-t": "/images/prt.webp",
  } as Record<string, string>,
} as const;

export const univaItemImages = [
  "/images/univa-exo-ha.webp",
  "/images/univa-exo-lite.webp",
  "/images/univa-exo-reform.webp",
  "/images/univa-exo-vita.webp",
  "/images/univa-exo-capa.webp",
  "/images/univa-exo-gel-scars.webp",
  "/images/univa-exo-gel-bright.webp",
] as const;

export const internationalEventLogos = [
  { name: "SaudiDerm", src: "/images/conference-saudiderm.png" },
  { name: "IMCAS", src: "/images/conference-imcas.png" },
  { name: "ADAM", src: "/images/conference-adam.png" },
  { name: "Beni Suef Dermatology Conference", src: "/images/conference-bsdc.png" },
  { name: "Beni Suef Dermatology and Cosmetology Conference", src: "/images/conference-beni-suef.png" },
  { name: "EADV", src: "/images/conference-eadv.png" },
  { name: "ICCE", src: "/images/conference-icce.png" },
] as const;

export const assetCatalog = [
  { id: "hero-image", label: "Hero image", path: "/images/hero-skincare.jpg", type: "image", usage: "home hero background" },
  { id: "about-hero", label: "About page skincare products", path: "/images/about-skincare-products.webp", type: "image", usage: "About Us page banner" },
  { id: "about-meeting", label: "About Devoté meeting photo", path: "/images/about-devote-meeting.jpg", type: "image", usage: "About Devoté introduction section" },
  { id: "about-technologies", label: "Devoté event collage", path: "/images/about-devote-collage.png", type: "image", usage: "About page technologies section" },
  { id: "events-dubai-derma", label: "Devoté event collage", path: "/images/events-dubai-derma-collage.png", type: "image", usage: "Events page gallery" },
  { id: "events-univa-expo", label: "Devoté event collage", path: "/images/events-univa-expo-collage.png", type: "image", usage: "Events page gallery" },
  { id: "conference-saudiderm", label: "SaudiDerm logo", path: "/images/conference-saudiderm.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-imcas", label: "IMCAS logo", path: "/images/conference-imcas.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-adam", label: "ADAM logo", path: "/images/conference-adam.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-bsdc", label: "Beni Suef Dermatology Conference logo", path: "/images/conference-bsdc.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-beni-suef", label: "Beni Suef Dermatology and Cosmetology Conference logo", path: "/images/conference-beni-suef.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-eadv", label: "EADV logo", path: "/images/conference-eadv.png", type: "image", usage: "International Scientific Presence" },
  { id: "conference-icce", label: "ICCE logo", path: "/images/conference-icce.png", type: "image", usage: "International Scientific Presence" },
  { id: "univa-exo-ha", label: "UNIVA EXO HA", path: "/images/univa-exo-ha.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-lite", label: "UNIVA EXO LITE", path: "/images/univa-exo-lite.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-reform", label: "UNIVA EXO REFORM", path: "/images/univa-exo-reform.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-vita", label: "UNIVA EXO VITA", path: "/images/univa-exo-vita.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-capa", label: "UNIVA EXO CAPA", path: "/images/univa-exo-capa.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-gel-scars", label: "UNIVA EXO GEL Scars & Aging", path: "/images/univa-exo-gel-scars.webp", type: "product", usage: "UNIVA product collection" },
  { id: "univa-exo-gel-bright", label: "UNIVA EXO GEL BRIGHT", path: "/images/univa-exo-gel-bright.webp", type: "product", usage: "UNIVA product collection" },
  { id: "reversa-blog", label: "REVERSA skincare article image", path: "/images/reversa-blog.webp", type: "image", usage: "Power Of Reversa Skincare blog card and article" },
  { id: "logo-gold", label: "Main logo", path: "/brand/logo-gold.svg", type: "logo", usage: "header brand" },
  { id: "logo-mark", label: "Logo mark", path: "/brand/logo-mark-gold-on-dark.svg", type: "logo", usage: "brand mark / tech section" },
  { id: "logo-dark", label: "Dark logo", path: "/brand/logo-dark.svg", type: "logo", usage: "dark background branding" },
  { id: "univa", label: "UNIVA product image", path: "/images/univa-exo-gel.webp", type: "product", usage: "portfolio card" },
  { id: "reversa", label: "Reversa product image", path: "/images/reversa-ultra.webp", type: "product", usage: "portfolio card" },
  { id: "revital", label: "Revital product image", path: "/images/revital.webp", type: "product", usage: "portfolio card" },
  { id: "prt", label: "PRT product image", path: "/images/prt.webp", type: "product", usage: "portfolio card" },
] as const;

export const routeGroups: Record<string, readonly string[]> = {
  about: ["about", "about-us", "من-نحن"],
  portfolio: ["our-portfolio", "portfolio", "solutions", "حلولنا"],
  events: ["events", "فعاليات"],
  academy: ["devote-academy", "academy", "أكاديمية-ديڤوتيه"],
  blog: ["blog", "المدونة"],
  contact: ["contact-us", "contact", "تواصل-معنا"],
};

export const pageCatalog = [
  { key: "home", path: "/", aliases: ["/"], kind: "home" },
  { key: "about", path: "/about-us", aliases: ["/about-us", "/about", "/من-نحن"], kind: "page" },
  { key: "portfolio", path: "/our-portfolio", aliases: ["/our-portfolio", "/portfolio", "/solutions", "/حلولنا"], kind: "collection" },
  { key: "events", path: "/events", aliases: ["/events", "/فعاليات"], kind: "page" },
  { key: "academy", path: "/devote-academy", aliases: ["/devote-academy", "/academy", "/أكاديمية-ديڤوتيه"], kind: "page" },
  { key: "blog", path: "/blog", aliases: ["/blog", "/المدونة"], kind: "blog" },
  { key: "contact", path: "/contact-us", aliases: ["/contact-us", "/contact", "/تواصل-معنا"], kind: "page" },
] as const;

export const productCatalog = [
  { slug: "univa", name: "UNIVA", image: "/images/univa-exo-gel.webp", group: "portfolio" },
  { slug: "reversa", name: "Reversa", image: "/images/reversa-ultra.webp", group: "portfolio" },
  { slug: "revital", name: "Revital", image: "/images/revital.webp", group: "portfolio" },
  { slug: "p-r-t", name: "P.R.T", image: "/images/prt.webp", group: "portfolio" },
] as const;

export const pageHeroImages = {
  home: "https://devoteaesthetic.com/wp-content/uploads/2026/02/dqw-768x1024-1.jpg",
  portfolio: "https://devoteaesthetic.com/wp-content/uploads/2026/02/bgremove_7b5a00010a_bgremoved_1764576962699-e1764577050205.png",
  events: "https://devoteaesthetic.com/wp-content/uploads/2026/04/0.jpg",
  academy: "https://devoteaesthetic.com/wp-content/uploads/2026/02/Untitled-design-2025-12-02T071311.423.png",
  blog: "https://devoteaesthetic.com/wp-content/uploads/2026/04/0.jpg",
  contact: "https://devoteaesthetic.com/wp-content/uploads/2026/02/bgremove_7b5a00010a_bgremoved_1764576962699-e1764577050205.png",
} as const;

export const navLinks = [
  { href: "/", key: "home" },
  { href: "/about-us", key: "about" },
  { href: "/our-portfolio", key: "portfolio" },
  { href: "/events", key: "events" },
  { href: "/devote-academy", key: "academy" },
  { href: "/blog", key: "blog" },
  { href: "/contact-us", key: "contact" },
] as const;
