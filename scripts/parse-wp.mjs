import fs from "fs";

const pages = JSON.parse(
  fs.readFileSync(
    "C:/Users/20122/.cursor/projects/d-Eslam-projectNextjs/agent-tools/c7c7dfe1-19cf-4d5c-b8ba-3220c9ef4aa3.txt",
    "utf8",
  ),
);
const posts = JSON.parse(
  fs.readFileSync(
    "C:/Users/20122/.cursor/projects/d-Eslam-projectNextjs/agent-tools/66184984-5437-4e96-818d-7d745e011a94.txt",
    "utf8",
  ),
);

function strip(html) {
  return String(html || "").replace(/<[^>]+>/g, "");
}

console.log("PAGES", pages.length);
for (const p of pages) {
  console.log(
    [p.id, p.slug, p.link, strip(p.title?.rendered)].join(" | "),
  );
}
console.log("\nPOSTS", posts.length);
for (const p of posts) {
  console.log(
    [
      p.id,
      p.slug,
      p.link,
      strip(p.title?.rendered),
      p.date,
      p.excerpt?.rendered ? strip(p.excerpt.rendered).slice(0, 180) : "",
    ].join(" | "),
  );
}
