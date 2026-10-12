import fs from "fs";

const posts = JSON.parse(
  fs.readFileSync(
    "C:/Users/20122/.cursor/projects/d-Eslam-projectNextjs/agent-tools/66184984-5437-4e96-818d-7d745e011a94.txt",
    "utf8",
  ),
);

function htmlToText(html) {
  return String(html || "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<\/h[1-6]>/gi, "\n\n")
    .replace(/<\/li>/gi, "\n")
    .replace(/<li[^>]*>/gi, "• ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#8217;/g, "’")
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#8220;/g, "“")
    .replace(/&#8221;/g, "”")
    .replace(/&#8230;/g, "…")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

const extracted = posts.map((p) => ({
  slug: p.slug,
  title: htmlToText(p.title?.rendered),
  date: p.date,
  excerpt: htmlToText(p.excerpt?.rendered),
  content: htmlToText(p.content?.rendered),
  featured: p.yoast_head_json?.og_image?.[0]?.url || p.jetpack_featured_media_url || "",
}));

fs.writeFileSync("scripts/posts-extracted.json", JSON.stringify(extracted, null, 2));
console.log("wrote", extracted.length, "posts");
console.log(extracted.map((p) => `${p.slug} ${p.content.length} chars feat=${Boolean(p.featured)}`).join("\n"));
