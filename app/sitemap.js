import { getProjectUrl, projects, siteUrl } from "./data/projects";

export default function sitemap() {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projects.map((project) => ({
      url: getProjectUrl(project),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    {
      url: `${siteUrl}/titls`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
    {
      url: `${siteUrl}/hydrify`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.4,
    },
  ];
}
