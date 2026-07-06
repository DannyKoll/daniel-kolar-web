const baseUrl = "https://danielkolar.cz";

const routes = [
  "/",
  "/financni-rentgen",
  "/finance-jako-celek",
  "/investice",
  "/pravni-informace",
  "/zpracovani-osobnich-udaju",
  "/cookies",
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
