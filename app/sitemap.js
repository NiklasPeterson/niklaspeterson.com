import { getAllProjects } from "./lib/projects";
import { SITE_UPDATED_YEAR } from "./lib/site";

const BASE_URL = "https://www.niklaspeterson.com";
const startOfYear = (year) => new Date(Date.UTC(year, 0, 1));
const projectLastModified = (project) =>
  project.updatedAt
    ? new Date(`${project.updatedAt}T00:00:00.000Z`)
    : startOfYear(project.updatedYear);

export default function sitemap() {
  const home = {
    url: `${BASE_URL}/`,
    lastModified: startOfYear(SITE_UPDATED_YEAR),
    changeFrequency: "monthly",
    priority: 1.0,
  };

  const projects = getAllProjects().map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: projectLastModified(project),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [home, ...projects];
}
