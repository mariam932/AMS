import Image from "next/image";
import Link from "next/link";
import { t } from "../../lib/copy";
import { getLocalizedPosts, type BlogPost } from "../../lib/blog";
import { homeEventCards, upcomingEvents, pastEvents } from "../../lib/events";
import { getProduct, products } from "../../lib/products";
import { site } from "../../lib/site";
import { localizePath } from "../../lib/paths";
import type { Locale } from "../../lib/types";
import ContactForm from "../ui/ContactForm";
import EventLogoSwiper from "../ui/EventLogoSwiper";
import HomeMotion from "../ui/HomeMotion";
import RotatingText from "../ui/RotatingText";
import SectionHeading from "../ui/SectionHeading";
import { pageHeroImages, routeGroups, siteAssets, univaItemImages } from "../../lib/siteData";

const heroImage = siteAssets.heroImage;
const productImages = siteAssets.productImages;

function PageHero({
  locale,
  eyebrow,
  title,
  lead,
  image = false,
  showContact = image,
  imageSrc = heroImage,
  pageKey,
}: {
  locale: Locale;
  eyebrow?: string;
  title: string;
  lead?: string;
  image?: boolean;
  showContact?: boolean;
  imageSrc?: string;
  pageKey?: keyof typeof pageHeroImages | "about";
}) {
  const isHomeHero = pageKey === "home" && image;
  const breadcrumbImageSrc = isHomeHero ? undefined : siteAssets.aboutHero;

  return (
    <section className={`page-hero${isHomeHero ? " page-hero-home" : " page-hero-page"}${pageKey ? ` page-hero--${pageKey}` : ""}`}>
      {image && isHomeHero && (
        <>
          <Image
            alt=""
            className="hero-image"
            fill
            unoptimized
            priority
            sizes="100vw"
            src={imageSrc}
          />
          <div className="hero-image-shade" />
        </>
      )}
      {breadcrumbImageSrc && (
        <>
          <div className="page-hero-backdrop">
            <Image
              alt=""
              className="page-hero-backdrop-image"
              fill
              priority
              sizes="100vw"
              src={breadcrumbImageSrc}
            />
          </div>
          <div className="page-hero-backdrop-shade" />
        </>
      )}
      <div className="container-site page-hero-content">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {!isHomeHero && (
          <nav
            aria-label={locale === "ar" ? "مسار التنقل" : "Breadcrumb"}
            className="page-breadcrumb"
          >
            <Link href={localizePath(locale, "/")}>{t(locale).home}</Link>
            <span aria-hidden="true">»</span>
            <span aria-current="page">{title}</span>
          </nav>
        )}
        {lead && <p className="hero-lead">{lead}</p>}
        {showContact && (
          <Link className="button button-primary" href={localizePath(locale, "/contact-us")}>
            {t(locale).contact}
            <span aria-hidden="true">↗</span>
          </Link>
        )}
      </div>
      <span className="hero-index" aria-hidden="true">
        D / 01
      </span>
    </section>
  );
}

function ProductCards({ locale, featured = false }: { locale: Locale; featured?: boolean }) {
  const visible = featured ? products.slice(0, 4) : products;
  return (
    <div className="product-grid">
      {visible.map((product, index) => (
        <Link
          className={`product-card product-card-${index % 4}`}
          href={localizePath(locale, `/our-portfolio/${product.slug}`)}
          key={product.slug}
        >
          {productImages[product.slug] && (
            <span className="product-card-image">
              <Image
                alt=""
                fill
                sizes="(max-width: 760px) 70vw, 30vw"
                src={productImages[product.slug]}
              />
            </span>
          )}
          <span className="product-card-index">0{index + 1}</span>
          <span className="product-card-orbit" aria-hidden="true" />
          <div className="product-card-content">
            <p className="eyebrow">{locale === "ar" ? product.kickerAr : product.kickerEn}</p>
            <h3>{product.name}</h3>
            <p>{locale === "ar" ? product.cardAr : product.cardEn}</p>
            <span className="text-link">
              {t(locale).viewMore} <span aria-hidden="true">↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

function HomePage({ locale }: { locale: Locale }) {
  const content = t(locale);
  const stats = [
    { title: content.statDoctors, body: content.statDoctorsBody },
    { title: content.statClinics, body: content.statClinicsBody },
    { title: content.statConferences, body: content.statConferencesBody },
  ];
  const clientsHeading = locale === "en" ? "Our Clients" : content.clientsKicker.trim();
  return (
    <>
      <HomeMotion />
      <PageHero
        locale={locale}
        eyebrow={content.heroKicker}
        title={content.heroTitle}
        lead={content.heroSubtitle}
        image
        pageKey="home"
        imageSrc={pageHeroImages.home}
      />
      <section className="section section-about">
        <div className="container-site about-intro-grid">
          <div>
            <p className="eyebrow">{content.aboutKicker}</p>
            <h2><RotatingText text={content.aboutTitle} /></h2>
          </div>
          <div className="prose-copy">
            <p>{content.aboutBody}</p>
            <Link className="text-link" href={localizePath(locale, "/about-us")}>
              {content.about} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="stats-section">
        <div className="container-site stats-wrap">
          <div className="stats-heading">
            <h2 className="clients-rotating-heading">
              <RotatingText text={clientsHeading} />
            </h2>
            <h2><RotatingText text={content.clientsTitle} /></h2>
            <p>{content.clientsLead}</p>
          </div>
          <div className="stats-grid">
            {stats.map((item) => (
              <article className="stat-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className="container-site why-grid">
          <SectionHeading title={content.whyTitle} lead={content.whyLead} />
          <div className="why-list">
            {content.whyItems.map((item, index) => (
              <div className="why-item" key={item}>
                <span>0{index + 1}</span>
                <h3>{item}</h3>
                <span aria-hidden="true">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section technology-section">
        <div className="container-site technology-grid">
          <div className="technology-mark" aria-hidden="true">
            <Image src="/brand/logo-mark-gold-on-dark.svg" alt="" width={180} height={180} />
          </div>
          <div>
            <SectionHeading kicker={content.techKicker} title={content.techTitle} lead={content.techBody} />
            <Link className="text-link" href={localizePath(locale, "/about-us")}>
              {content.viewMore} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section portfolio-section">
        <div className="container-site">
          <SectionHeading
            kicker={content.portfolio}
            title={locale === "ar" ? "تقنيات تجديدية متقدمة" : "A considered portfolio"}
            lead={content.solutionsLead}
          />
          <ProductCards locale={locale} featured />
          <div className="section-action">
            <Link className="button button-outline" href={localizePath(locale, "/our-portfolio")}>
              {content.ctaPortfolio} <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <section className="section events-section">
        <div className="container-site events-home-grid">
          <div>
            <SectionHeading
              kicker={content.events}
              title={content.eventsHero}
              lead={content.eventsLead}
            />
            <Link className="text-link" href={localizePath(locale, "/events")}>
              {content.viewMore} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="event-preview-list">
            {homeEventCards.map((event) => (
              <article className="event-preview" key={event.name}>
                <span className="event-date">{event.year}</span>
                <h3>{locale === "ar" ? event.nameAr : event.name}</h3>
                <p>{locale === "ar" ? event.locationAr : event.locationEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section academy-home">
        <div className="container-site academy-home-inner">
          <p className="eyebrow">{content.academyKicker}</p>
          <h2><RotatingText text={content.academyTitle} /></h2>
          <p>{content.academyBody}</p>
          <Link className="button button-primary" href={localizePath(locale, "/devote-academy")}>
            {content.viewMore} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
      <ContactSection locale={locale} compact />
    </>
  );
}

function AboutPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.whoWeAre}
        title={content.about}
        lead={content.whoLead}
        showContact
        pageKey="about"
      />
      <section className="section">
        <div className="container-site about-intro-grid about-intro-grid--page">
          <div className="about-intro-copy">
            <p className="eyebrow">{content.aboutKicker}</p>
            <h2><RotatingText text={content.aboutTitle} /></h2>
            <p className="prose-copy">{content.aboutPageBody}</p>
          </div>
          <div className="about-intro-image">
            <Image
              alt={locale === "ar" ? "اجتماع فريق ديفوتيه" : "Devoté team meeting"}
              fill
              sizes="(max-width: 760px) 80vw, 36vw"
              src={siteAssets.aboutMeeting}
            />
          </div>
        </div>
      </section>
      <section className="section mission-section">
        <div className="container-site">
          <SectionHeading kicker={content.drivesTitle} title={content.drivesTitle} lead={content.drivesLead} />
          <div className="mission-grid">
            {[
              [content.mission, content.missionBody],
              [content.vision, content.visionBody],
            ].map(([title, body], index) => (
              <article className="mission-card" key={title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-site about-tech-grid">
          <SectionHeading kicker={content.aboutTechTitle} title={content.aboutTechTitle} lead={content.aboutTechLead} />
          <div className="about-tech-image">
            <Image
              alt={locale === "ar" ? "صور من فعاليات ديفوتيه" : "Devoté event highlights"}
              fill
              sizes="(max-width: 760px) 100vw, 55vw"
              src={siteAssets.aboutTechnologies}
            />
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className="container-site">
          <SectionHeading title={content.whyTitle} lead={content.whyPageLead} />
          <div className="reason-grid">
            {content.whyCards.map((item, index) => (
              <article className="reason-card" key={item.title}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function PortfolioPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.portfolio}
        title={content.portfolio}
        lead={content.solutionsLead}
        image
        pageKey="portfolio"
        imageSrc={pageHeroImages.portfolio}
      />
      <section className="section">
        <div className="container-site">
          <ProductCards locale={locale} />
        </div>
      </section>
    </>
  );
}

function ProductPage({ locale, slug }: { locale: Locale; slug: string }) {
  const content = t(locale);
  const product = getProduct(slug);
  if (!product) return null;
  const name = product.name;
  const intro = locale === "ar" ? product.introAr : product.introEn;
  const items = product.items ?? [];
  const kicker = locale === "ar" ? product.kickerAr : product.kickerEn;
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={kicker}
        title={name}
        lead={locale === "ar" ? product.cardAr : product.cardEn}
        image
        pageKey="portfolio"
        imageSrc={productImages[product.slug] ?? pageHeroImages.portfolio}
      />
      <section className="section product-intro">
        <div className="container-site product-intro-grid">
          <p className="eyebrow">{locale === "ar" ? "عن التقنية" : "The technology"}</p>
          <div>
            <h2><RotatingText text={name} /></h2>
            <p className="prose-copy">{intro}</p>
          </div>
        </div>
      </section>
      {items.length > 0 && (
        <section className="section product-detail-section">
          <div className="container-site">
            <SectionHeading
              kicker={locale === "ar" ? "مجموعة المنتجات" : "The collection"}
              title={locale === "ar" ? "حلول موجهة" : "Targeted solutions"}
            />
            <div className="item-grid">
              {items.map((item, index) => (
                <article className="product-item" key={item.name}>
                  {product.slug === "univa" && univaItemImages[index] && (
                    <div className="product-item-image">
                      <Image
                        alt={item.name}
                        fill
                        sizes="(max-width: 760px) 100vw, 40vw"
                        src={univaItemImages[index]}
                      />
                    </div>
                  )}
                  <div className="product-item-content">
                    <span className="eyebrow">0{index + 1}</span>
                    <h3>{item.name}</h3>
                    <p>{locale === "ar" ? item.bodyAr : item.bodyEn}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      {"extraEn" in product && product.extraEn && (
        <section className="section">
          <div className="container-site extra-product-section">
            <h2><RotatingText text={locale === "ar" ? product.extraAr?.title ?? product.extraEn.title : product.extraEn.title} /></h2>
            <div className="reason-grid">
              {(locale === "ar" ? product.extraAr?.points : product.extraEn.points)?.map((point, index) => (
                <article className="reason-card" key={point}>
                  <span className="eyebrow">0{index + 1}</span>
                  <p>{point}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="section product-cta">
        <div className="container-site product-cta-inner">
          <div>
            <p className="eyebrow">{content.contact}</p>
            <h2><RotatingText text={content.contactHero} /></h2>
          </div>
          <Link className="button button-primary" href={localizePath(locale, "/contact-us")}>
            {content.contact} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}

function EventsPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.events}
        title={content.eventsHero}
        lead={content.eventsHeroLead}
        image
        pageKey="events"
        imageSrc={pageHeroImages.events}
      />
      <section className="section">
        <div className="container-site">
          <p className="prose-copy event-intro">{content.eventsHeroBody}</p>
          <div className="event-gallery">
            {siteAssets.eventCollages.map((src, index) => (
              <figure className="event-gallery-item" key={src}>
                <Image
                  alt={
                    locale === "ar"
                      ? `لقطات من فعاليات ديفوتيه ${index + 1}`
                      : `Devoté event highlights ${index + 1}`
                  }
                  fill
                  sizes="(max-width: 760px) 100vw, 50vw"
                  src={src}
                />
              </figure>
            ))}
          </div>
          <SectionHeading kicker={content.upcoming} title={content.upcoming} lead={content.upcomingLead} />
          <div className="event-grid">
            {upcomingEvents.map((event) => (
              <article className="event-card" key={event.name}>
                <p className="eyebrow">{locale === "ar" ? event.dateAr : event.dateEn}</p>
                <h3>{event.name}</h3>
                <p className="event-location">{locale === "ar" ? event.locationAr : event.locationEn}</p>
                <p>{locale === "ar" ? event.bodyAr : event.bodyEn}</p>
              </article>
            ))}
          </div>
          <section className="event-presence">
            <SectionHeading
              kicker={locale === "ar" ? "مشاركاتنا العلمية" : "Our global participation"}
              title={locale === "ar" ? "حضور علمي دولي" : "International Scientific Presence"}
            />
            <EventLogoSwiper locale={locale} />
          </section>
        </div>
      </section>
      <section className="section past-events">
        <div className="container-site">
          <SectionHeading kicker={content.past} title={content.past} lead={content.pastLead} />
          <div className="event-grid">
            {pastEvents.map((event) => (
              <article className="event-card" key={event.name}>
                <p className="eyebrow">{locale === "ar" ? event.dateAr : event.dateEn}</p>
                <h3>{event.name}</h3>
                <p className="event-location">{locale === "ar" ? event.locationAr : event.locationEn}</p>
                <p>{locale === "ar" ? event.bodyAr : event.bodyEn}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AcademyPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.academy}
        title={content.academyHero}
        lead={content.academyPageBody}
        image
        pageKey="academy"
        imageSrc={pageHeroImages.academy}
      />
      <section className="section">
        <div className="container-site">
          <SectionHeading kicker={content.eduTitle} title={content.eduTitle} lead={content.eduLead} />
          <div className="academy-activities">
            {content.eduItems.map((item, index) => (
              <article className="academy-activity" key={item}>
                <span className="eyebrow">0{index + 1}</span>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section academy-experts">
        <div className="container-site academy-experts-grid">
          <div className="academy-experts-content">
            <SectionHeading kicker={content.expertsTitle} title={content.expertsTitle} lead={content.expertsLead} />
            <p className="prose-copy">{content.expertsBody}</p>
            <Link className="button button-primary" href={localizePath(locale, "/contact-us")}>
              {content.contact} <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <Image
            alt={locale === "ar" ? "خريطة انتشار Devoté حول العالم" : "Devoté's global reach map"}
            className="academy-global-map"
            height={763}
            src="/images/academy-global-reach.webp"
            width={1176}
          />
        </div>
      </section>
    </>
  );
}

function BlogPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  const posts = getLocalizedPosts(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.blog}
        title={content.blog}
        lead={content.blogIntro}
        image
        pageKey="blog"
        imageSrc={pageHeroImages.blog}
      />
      <section className="section">
        <div className="container-site blog-grid">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} locale={locale} post={post} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}

function BlogCard({ locale, post, index }: { locale: Locale; post: BlogPost; index: number }) {
  const date = new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(post.date));
  return (
    <article className="blog-card">
      <span className="blog-card-index">0{index + 1}</span>
      {post.image && (
        <Link
          aria-label={post.title}
          className="blog-card-image"
          href={localizePath(locale, `/blog/${post.slug}`)}
        >
          <Image
            alt={post.title}
            fill
            sizes="(max-width: 760px) 100vw, 33vw"
            src={post.image}
          />
        </Link>
      )}
      <p className="eyebrow">{date}</p>
      <h2>
        <Link href={localizePath(locale, `/blog/${post.slug}`)}>
      <RotatingText text={post.title} />
        </Link>
      </h2>
      <p>{post.excerpt}</p>
      <Link className="text-link" href={localizePath(locale, `/blog/${post.slug}`)}>
        {t(locale).readMore} <span aria-hidden="true">↗</span>
      </Link>
    </article>
  );
}

function getArticleContactAction(paragraph: string): "whatsapp" | "contact" | undefined {
  const label = paragraph.replace(/\s+/g, " ").trim().toLocaleLowerCase();
  if (label === "whatsapp" || label === "واتساب") return "whatsapp";
  if (["contact us", "contact", "اتصل بنا", "تواصل معنا"].includes(label)) return "contact";
  return undefined;
}

function ArticleContactActions({ locale, actions }: { locale: Locale; actions: ("whatsapp" | "contact")[] }) {
  return (
    <div className="article-contact-actions">
      {actions.includes("whatsapp") && (
        <a className="button button-primary" href={`https://wa.me/${site.whatsapp}`} rel="noreferrer" target="_blank">
          <svg aria-hidden="true" fill="none" viewBox="0 0 24 24">
            <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L3 20l1.2-4.9a8.2 8.2 0 1 1 16-3.4Z" stroke="currentColor" strokeLinejoin="round" strokeWidth="1.8" />
            <path d="M8.3 8.1c.3-.6.6-.6 1-.6h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.6.7c-.2.2-.2.4 0 .6.5.9 1.2 1.5 2.1 2 .2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.6.8c.2.1.4.2.4.4 0 .3-.2 1.2-.8 1.6-.5.4-1.2.6-2 .4-1.1-.3-2.5-.9-3.9-2.2-1.2-1.1-2-2.5-2.2-3.5-.2-.9.1-1.5.4-1.9Z" fill="currentColor" />
          </svg>
          {t(locale).whatsapp}
        </a>
      )}
      {actions.includes("contact") && (
        <Link className="button button-primary" href={localizePath(locale, "/contact-us")}>
          <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.6 2.8 9.4 2c.7-.2 1.4.2 1.6.9l1.2 3.5c.2.6 0 1.2-.5 1.6l-1.8 1.4a14.8 14.8 0 0 0 4.7 4.7l1.4-1.8c.4-.5 1-.7 1.6-.5l3.5 1.2c.7.2 1.1.9.9 1.6l-.8 2.8c-.2.7-.8 1.1-1.5 1.1C10.1 18.5 5.5 13.9 5.5 8.3c0-.7.4-1.3 1.1-1.5Z" />
          </svg>
          {t(locale).contact}
        </Link>
      )}
    </div>
  );
}

function BlogDetailPage({ locale, slug }: { locale: Locale; slug: string }) {
  const post = getLocalizedPosts(locale).find((item) => item.slug === slug);
  if (!post) return null;
  const paragraphs = post.content
    .split(/\n\s*\n+/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
  const articleBlocks: ({ type: "paragraph"; content: string } | { type: "contact"; actions: ("whatsapp" | "contact")[] })[] = [];
  for (let index = 0; index < paragraphs.length; index += 1) {
    const action = getArticleContactAction(paragraphs[index]);
    if (!action) {
      articleBlocks.push({ type: "paragraph", content: paragraphs[index] });
      continue;
    }
    const actions: ("whatsapp" | "contact")[] = [action];
    while (index + 1 < paragraphs.length) {
      const nextAction = getArticleContactAction(paragraphs[index + 1]);
      if (!nextAction) break;
      actions.push(nextAction);
      index += 1;
    }
    articleBlocks.push({ type: "contact", actions });
  }
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={t(locale).blog}
        title={post.title}
        lead={post.excerpt}
        image
        pageKey="blog"
        imageSrc={pageHeroImages.blog}
      />
      <article className="section">
        <div className="container-site blog-article">
          <p className="eyebrow">
            {new Intl.DateTimeFormat(locale === "ar" ? "ar" : "en", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(new Date(post.date))}
          </p>
          {post.image && (
            <Image
              alt={post.title}
              className="blog-article-image"
              height={600}
              sizes="(max-width: 760px) 100vw, 900px"
              src={post.image}
              width={619}
            />
          )}
          <div className="article-content">
            {articleBlocks.map((block, index) =>
              block.type === "contact" ? (
                <ArticleContactActions actions={block.actions} key={`contact-${index}`} locale={locale} />
              ) : (
                <p key={`${index}-${block.content.slice(0, 24)}`}>{block.content}</p>
              ),
            )}
          </div>
        </div>
      </article>
    </>
  );
}

function ContactSection({
  locale,
  compact = false,
  showIntro = true,
}: {
  locale: Locale;
  compact?: boolean;
  showIntro?: boolean;
}) {
  const content = t(locale);
  return (
    <section className={`section contact-section${compact ? " contact-section-compact" : ""}`}>
      <div className="container-site contact-grid">
        <div className={`contact-intro${showIntro ? "" : " contact-info-only"}`}>
          {showIntro && (
            <>
              <p className="eyebrow">{content.contactPageTitle}</p>
              <h2><RotatingText text={content.contactPageTitle} /></h2>
              {compact && <p className="contact-lead">{content.contactHero}</p>}
            </>
          )}
          <div className="contact-details">
            <a href={`tel:${site.phoneTel}`}>
              <span>{content.phone}</span>
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`}>
              <span>{content.email}</span>
              {site.email}
            </a>
            <a href={site.mapsUrl} target="_blank" rel="noreferrer">
              <span>{content.location}</span>
              {locale === "ar" ? site.addressDetailAr : site.addressDetailEn}
            </a>
            <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer">
              <span>{content.whatsapp}</span>
              {locale === "ar" ? "ابدأ محادثة" : "Start a conversation"}
            </a>
          </div>
        </div>
        <ContactForm locale={locale} />
      </div>
    </section>
  );
}

function ContactPage({ locale }: { locale: Locale }) {
  const content = t(locale);
  return (
    <>
      <PageHero
        locale={locale}
        eyebrow={content.contactPageTitle}
        title={content.contactPageTitle}
        lead={content.contactHero}
        image
        pageKey="contact"
        imageSrc={pageHeroImages.contact}
      />
      <ContactSection locale={locale} showIntro={false} />
    </>
  );
}

export function SitePage({
  locale,
  segments,
}: {
  locale: Locale;
  segments: string[];
}) {
  if (segments.length === 0) return <HomePage locale={locale} />;
  const [first, second] = segments;
  if (routeGroups.about.includes(first)) return <AboutPage locale={locale} />;
  if (routeGroups.portfolio.includes(first)) {
    if (!second) return <PortfolioPage locale={locale} />;
    const productPage = <ProductPage locale={locale} slug={second} />;
    return getProduct(second) ? productPage : null;
  }
  if (routeGroups.events.includes(first)) return <EventsPage locale={locale} />;
  if (routeGroups.academy.includes(first)) {
    return <AcademyPage locale={locale} />;
  }
  if (routeGroups.blog.includes(first)) {
    if (!second) return <BlogPage locale={locale} />;
    const article = <BlogDetailPage locale={locale} slug={second} />;
    return getLocalizedPosts(locale).some((post) => post.slug === second)
      ? article
      : null;
  }
  if (routeGroups.contact.includes(first)) return <ContactPage locale={locale} />;
  return null;
}

export function pageTitle(locale: Locale, segments: string[]) {
  const content = t(locale);
  if (segments.length === 0) return content.metaHomeTitle;
  const [first, second] = segments;
  if (routeGroups.about.includes(first)) return content.about;
  if (routeGroups.portfolio.includes(first)) {
    return second ? getProduct(second)?.name ?? content.portfolio : content.portfolio;
  }
  if (routeGroups.events.includes(first)) return content.events;
  if (routeGroups.academy.includes(first)) return content.academy;
  if (routeGroups.blog.includes(first)) {
    return second ? getLocalizedPosts(locale).find((post) => post.slug === second)?.title ?? content.blog : content.blog;
  }
  if (routeGroups.contact.includes(first)) return content.contact;
  return content.metaHomeTitle;
}

export function pageExists(locale: Locale, segments: string[]) {
  if (segments.length === 0) return true;
  const [first, second] = segments;
  if (routeGroups.about.includes(first)) return segments.length === 1;
  if (routeGroups.portfolio.includes(first)) {
    return segments.length === 1 || (segments.length === 2 && Boolean(getProduct(second)));
  }
  if ([...routeGroups.events, ...routeGroups.academy, ...routeGroups.contact].includes(first)) {
    return segments.length === 1;
  }
  if (routeGroups.blog.includes(first)) {
    return segments.length === 1 || (
      segments.length === 2 &&
      getLocalizedPosts(locale).some((post) => post.slug === second)
    );
  }
  return false;
}
