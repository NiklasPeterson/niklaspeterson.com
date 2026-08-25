import { getAllProjects } from "./lib/projects";
import { SITE_UPDATED_YEAR, SITE_URL } from "./lib/site";

const startOfYear = (year) => new Date(Date.UTC(year, 0, 1));
const projectLastModified = (project) =>
  project.updatedAt
    ? new Date(`${project.updatedAt}T00:00:00.000Z`)
    : startOfYear(project.updatedYear);

export default function sitemap() {
  const home = {
    url: `${SITE_URL}/`,
    lastModified: startOfYear(SITE_UPDATED_YEAR),
    changeFrequency: "monthly",
    priority: 1.0,
  };

  const projects = getAllProjects().map((project) => ({
    url: `${SITE_URL}/projects/${project.slug}`,
    lastModified: projectLastModified(project),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [home, ...projects];
}
