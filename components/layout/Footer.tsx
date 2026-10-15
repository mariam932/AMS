import Link from "next/link";
import { site } from "../../lib/site";
import type { Locale } from "../../lib/types";
import { localizePath } from "../../lib/paths";
import { t } from "../../lib/copy";
import { navLinks } from "../../lib/siteData";
import SocialIcon from "../ui/SocialIcon";

export default function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale);
  const navigation = navLinks
    .filter((item) => item.href !== "/")
    .map((item) => {
      const label =
        item.key === "about"
          ? copy.about
          : item.key === "portfolio"
            ? copy.portfolio
            : item.key === "events"
              ? copy.events
              : item.key === "academy"
                ? copy.academy
                : item.key === "blog"
                  ? copy.blog
                  : copy.contact;

      return [label, item.href] as const;
    });

  return (
    <footer className="site-footer">
      <div className="container-site footer-main">
        <div className="footer-brand">
          <Link href={localizePath(locale, "/")} className="footer-wordmark">
            Devoté<span> Aesthetics</span>
          </Link>
          <p>{copy.footerTagline}</p>
          <div className="social-links" aria-label={locale === "ar" ? "وسائل التواصل الاجتماعي" : "Social media"}>
            {site.social.map((social) => (
              <a
                aria-label={social.name}
                href={social.href}
                key={social.name}
                target="_blank"
                rel="noreferrer"
              >
                <SocialIcon name={social.name} />
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-links">
          <h2>{locale === "ar" ? "استكشف" : "Explore"}</h2>
          {navigation.map(([label, href]) => (
            <Link href={localizePath(locale, href)} key={href}>
              {label}
            </Link>
          ))}
        </div>
        <div className="footer-contact">
          <h2>{copy.contact}</h2>
          <a href={`tel:${site.phoneTel}`}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <a href={site.mapsUrl} target="_blank" rel="noreferrer">
            {locale === "ar" ? site.addressAr : site.addressEn}
          </a>
        </div>
      </div>
      <div className="container-site footer-bottom">
        <span>© {new Date().getFullYear()} Devoté Aesthetics</span>
        <span>{copy.footerTagline}</span>
      </div>
    </footer>
  );
}
