"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Locale } from "../../lib/types";
import { localizePath, switchLocalePath } from "../../lib/paths";
import { products } from "../../lib/products";
import { t } from "../../lib/copy";
import { site } from "../../lib/site";
import { navLinks, routeGroups } from "../../lib/siteData";
import SocialIcon from "../ui/SocialIcon";

type HeaderProps = {
  locale: Locale;
  currentPath: string;
};

export default function Header({ locale, currentPath }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = t(locale);
  const normalizedCurrentPath = currentPath.replace(/^\/ar(?=\/|$)/, "").replace(/\/+$/, "") || "/";
  const currentRoute = normalizedCurrentPath.split("/").filter(Boolean)[0];
  const links = navLinks.map((item) => ({
    ...item,
    isActive:
      item.href === "/"
        ? normalizedCurrentPath === "/"
        : normalizedCurrentPath === item.href ||
          normalizedCurrentPath.startsWith(`${item.href}/`) ||
          (currentRoute !== undefined && routeGroups[item.key].includes(currentRoute)),
    label:
      item.key === "home"
        ? copy.home
        : item.key === "about"
          ? copy.about
          : item.key === "portfolio"
            ? copy.portfolio
            : item.key === "events"
              ? copy.events
              : item.key === "academy"
                ? copy.academy
                : item.key === "blog"
                  ? copy.blog
                  : copy.contact,
  }));

  return (
    <header className="site-header">
      <a className="skip-link" href="#content">
        {copy.skip}
      </a>
      <div className="header-topbar">
        <div className="container-site topbar-inner">
          <a className="topbar-location" href={site.mapsUrl} target="_blank" rel="noreferrer">
            <span aria-hidden="true">⌖</span>
            {locale === "ar" ? site.addressAr : site.addressEn}
          </a>
          <div className="topbar-social" aria-label={locale === "ar" ? "وسائل التواصل الاجتماعي" : "Social media"}>
            {site.social.map((social) => (
              <a
                aria-label={social.name}
                href={social.href}
                key={social.name}
                rel="noreferrer"
                target="_blank"
              >
                <SocialIcon name={social.name} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="header-inner container-site">
        <Link
          className="brand-link"
          href={localizePath(locale, "/")}
          aria-label={locale === "ar" ? "الصفحة الرئيسية لديڤوتيه" : "Devoté Aesthetics home"}
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/logo-gold.svg"
            alt={locale === "ar" ? "ديڤوتيه للتجميل" : "Devoté Aesthetics"}
            width={280}
            height={115}
            priority
          />
        </Link>
        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
          id="mobile-navigation"
        >
          {links.map((item) => (
            <div className="nav-item" key={item.href}>
              <Link
                href={localizePath(locale, item.href)}
                aria-current={item.isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
              {item.href === "/our-portfolio" && (
                <div className="nav-dropdown">
                  {products.map((product) => (
                    <Link
                      href={localizePath(locale, `/our-portfolio/${product.slug}`)}
                      key={product.slug}
                      onClick={() => setMenuOpen(false)}
                    >
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            className="language-link"
            href={switchLocalePath(currentPath, locale === "en" ? "ar" : "en")}
            aria-label={copy.langSwitchAria}
            onClick={() => setMenuOpen(false)}
          >
            {copy.langSwitch}
          </Link>
        </nav>
        <button
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            locale === "ar"
              ? menuOpen
                ? "إغلاق القائمة"
                : "فتح القائمة"
              : menuOpen
                ? "Close menu"
                : "Open menu"
          }
          className={`menu-toggle${menuOpen ? " active" : ""}`}
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
