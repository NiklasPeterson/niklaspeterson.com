import { getProjectSlugs } from "./data/projects";

const SITE_URL = "https://niklaspeterson.com";

export default function sitemap() {
  const lastModified = new Date();

  const staticEntries = [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
  ];

  const workEntries = getProjectSlugs().map((slug) => ({
    url: `${SITE_URL}/work/${slug}`,
    lastModified,
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticEntries, ...workEntries];
}
