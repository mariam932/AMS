import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import { pageExists, pageTitle, SitePage } from "../../components/sections/SitePages";
import { t } from "../../lib/copy";
import type { Locale } from "../../lib/types";

type PageProps = {
  params: Promise<{ segments?: string[] }>;
};

function resolveSegments(rawSegments: string[] = []) {
  const segments = rawSegments;
  const locale: Locale = segments[0] === "ar" ? "ar" : "en";
  const localizedSegments = locale === "ar" ? segments.slice(1) : segments;
  return { locale, segments: localizedSegments };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { segments: rawSegments } = await params;
  const { locale, segments } = resolveSegments(rawSegments);
  return {
    title:
      segments.length === 0
        ? { absolute: pageTitle(locale, segments) }
        : pageTitle(locale, segments),
    description: t(locale).metaHomeDesc,
    alternates: {
      languages: {
        en: `/${segments.join("/")}`,
        ar: `/ar/${segments.join("/")}`,
      },
    },
  };
}

export default async function RoutePage({ params }: PageProps) {
  const { segments: rawSegments } = await params;
  const { locale, segments } = resolveSegments(rawSegments);
  if (!pageExists(locale, segments)) notFound();

  const currentPath = `${locale === "ar" ? "/ar" : ""}${segments.length ? `/${segments.join("/")}` : ""}` || "/";
  return (
    <div lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <Header currentPath={currentPath} locale={locale} />
      <main id="content">
        <SitePage locale={locale} segments={segments} />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
