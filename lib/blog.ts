import type { Locale } from "./types";
import posts from "./blog-posts.json";
import translatedContent from "./blog-ar-content.json";

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
};

const arMeta: Record<string, { title: string; excerpt: string }> = {
  "p-r-t-vs-traditional-prp": {
    title: "P.R.T مقابل PRP التقليدي",
    excerpt:
      "غيّر الطب التجديدي الطريقة التي يتعامل بها الأطباء مع علاجات التجميل واستعادة الشعر. فبدلا من التركيز فقط على إخفاء علامات",
  },
  "pdens-growth-factors-and-peptides": {
    title: "تقنية PDENs وعوامل النمو والببتيدات",
    excerpt:
      "واصل مجال الطب التجميلي على مدار سنوات استكشاف تقنيات مهنية يمكنها دعم بروتوكولات تجديدية أكثر تنظيما.",
  },
  "pdens-technology-aesthetic-medicine": {
    title: "تقنية PDENs في الطب التجميلي",
    excerpt:
      "يقوم الطب التجميلي التجديدي على فهم منظم لطريقة استجابة البشرة وبصيلات الشعر والأنسجة الضامة للتحفيز الطبي.",
  },
  "pdens-aesthetic-medicine": {
    title: "تقنية pdens للتجميل الطبي داخل العيادات المتخصصة",
    excerpt:
      "تشير تقنية PDENs للتجميل الطبي إلى الاستخدام المهني للتقنيات القائمة على PDENs ضمن بروتوكولات التجميل داخل العيادات.",
  },
  "pdens-for-dark-circles-under-eyes": {
    title: "علاج الهالات السوداء تحت العين",
    excerpt:
      "يمثل علاج الهالات السوداء تحت العين بتقنية PDENs خيارا مهنيا يدرسه الطبيب عندما يكون التصبغ مكونا رئيسيا للحالة.",
  },
  "the-best-hair-treatment-for-frizzy-hair": {
    title: "أفضل علاج للشعر الهايش",
    excerpt:
      "عندما يسأل المرضى عن أفضل علاج للشعر الهايش، ينبغي لأطباء التجميل النظر إلى ما هو أبعد من مشكلة ملمس الشعر.",
  },
  "scientific-aesthetic-workshops": {
    title: "دورات الطب التجميلي العلمية للأطباء والعيادات",
    excerpt:
      "دورات الطب التجميلي العلمية تمنح الأطباء وفرق العيادات إطارا منظما لمناقشة المعرفة السريرية والتقنيات المهنية.",
  },
  "pdens-treatment-for-active-acne": {
    title: "علاج حب الشباب بتقنية PDENs",
    excerpt:
      "علاج حب الشباب بتقنية PDENs هو استخدام مهني لتركيبة UNIVA EXO REFORM المخصصة للحبوب النشطة.",
  },
  "heart-lifting-threads-face": {
    title: "خيوط شد الوجه رينبو هارت",
    excerpt:
      "خيوط شد الوجه رينبو هارت منتج مهني مخصص لشد ملامح الوجه وإعادة تموضع الأنسجة وتحسين تحديدها.",
  },
  "aesthetic-medical-distributor-in-saudi-arabia": {
    title: "موزع منتجات الطب التجميلي في السعودية",
    excerpt:
      "يعد اختيار موزع منتجات الطب التجميلي في السعودية خطوة أساسية لنجاح عيادات الجلدية والتجميل الحديثة.",
  },
  "hair-loss-treatment-in-saudi-arabia": {
    title: "علاج تساقط الشعر في السعودية",
    excerpt:
      "يتطلب تقديم علاج تساقط الشعر في السعودية اتباع نهج طبي داخل العيادات وتحت إشراف أطباء مؤهلين.",
  },
  "aesthetic-medical-distributor-in-mena-region": {
    title: "موزع منتجات الطب التجميلي في الشرق الأوسط",
    excerpt:
      "يعد اختيار موزع منتجات الطب التجميلي في الشرق الأوسط وشمال أفريقيا خطوة أساسية للأطباء وأصحاب العيادات.",
  },
  "hair-regrowth-oil-in-saudi-arabia": {
    title: "زيت نمو الشعر في السعودية",
    excerpt:
      "البحث عن زيت نمو الشعر في السعودية يعبر عن اهتمام بمنتجات العناية التجميلية، لكن اختيار بروتوكول سريري يتطلب تقييما طبيا.",
  },
  "nonapeptide-1-skin-tone": {
    title: "توحيد لون البشرة باستخدام Nonapeptide-1",
    excerpt:
      "يرتبط توحيد لون البشرة باستخدام Nonapeptide-1 بتقييم وجود هذا الببتيد ضمن تركيبات UNIVA المهنية.",
  },
  "post-procedure-recovery-gel": {
    title: "العناية بالبشرة بعد الديرما بن",
    excerpt:
      "يدعم جل التعافي العناية بالبشرة بعد الديرما بن ضمن بروتوكول يختاره طبيب مؤهل بحسب الإجراء والحالة.",
  },
  "platelet-regeneration-tissue-aesthetics": {
    title: "تجديد الأنسجة بالصفائح الدموية في الطب التجميلي",
    excerpt:
      "يمثل تطور تجديد الأنسجة بالصفائح الدموية في الطب التجميلي أهمية لأطباء الجلدية وطب التجميل.",
  },
  "pla-collagen-stimulator": {
    title: "تقنيات متقدمة لتحفيز الكولاجين بتقنية PLA للعيادات المتخصصة",
    excerpt:
      "يتطلب دمج محفز الكولاجين بتقنية PLA الاحترافي في ممارسات التجميل الطبي معرفة دقيقة بالمنتج.",
  },
  "pcla-lifting-threads-hybrid": {
    title: "خيوط شد هجينة بتقنية PCLA",
    excerpt:
      "توزع ديڤوتيه تقنيات تجميلية احترافية للأطباء المؤهلين. وينتمي Rainbow PCLA Thread إلى عائلة خيوط الشد المهنية.",
  },
  "p-r-t-regenerative-platform": {
    title: "منصة P.R.T للطب التجديدي",
    excerpt:
      "أصبحت العلاجات المعتمدة على البلازما، بما فيها الأنظمة المتقدمة مثل منصة P.R.T للطب التجديدي، من الركائز المهمة في الطب التجديدي.",
  },
  "reversa-ultra-collagen-biostimulator": {
    title: "ريڤيرسا ألترا المحفز الحيوي الهجين للكولاجين",
    excerpt: "بعد بداية الثلاثينيات، قد تطرأ تغيرات تدريجية على البشرة.",
  },
  "hybrid-collagen-biostimulators": {
    title: "محفزات الكولاجين الحيوية الهجينة",
    excerpt:
      "يتجه قطاع الطب التجميلي بصورة متزايدة من تصحيح المشكلات الظاهرة إلى العلاجات التجديدية التي تدعم تحفيز الكولاجين.",
  },
  "power-of-reversa-skincare": {
    title: "قوة ريڤيرسا للعناية بالبشرة",
    excerpt: "تقدم ديڤوتيه ريڤيرسا كمحفز كولاجين هجين أمريكي مخصص للتطبيقات السريرية المتقدمة.",
  },
  "the-ultimate-revital-experience": {
    title: "تجربة ريڤيتال المتكاملة",
    excerpt: "يمثل ريڤيتال من بِيلا داما نقلة في جودة البشرة والإصلاح داخل الطب التجميلي المهني.",
  },
  "the-ultimate-guide-to-univa": {
    title: "الدليل الشامل ليونيڤا",
    excerpt: "تقدم ديڤوتيه يونيڤا كحل تجديدي مهني يعتمد على الجسيمات النانوية الشبيهة بالإكسوزومات النباتية.",
  },
};

export function getPosts(): BlogPost[] {
  return posts as BlogPost[];
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function localizePost(post: BlogPost, locale: Locale): BlogPost {
  if (locale !== "ar") return post;
  const meta = arMeta[post.slug];
  const content = (translatedContent as Record<string, string>)[post.slug];
  if (!meta || !content) {
    throw new Error(`Arabic blog translation is missing for "${post.slug}".`);
  }
  return {
    ...post,
    title: meta.title,
    excerpt: meta.excerpt,
    content,
  };
}

export function getLocalizedPosts(locale: Locale) {
  return getPosts().map((post) => localizePost(post, locale));
}
