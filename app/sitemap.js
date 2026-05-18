import { getAllProjects } from './lib/projects';

const BASE_URL = 'https://www.niklaspeterson.com';

export default function sitemap() {
  const lastModified = new Date();

  const home = {
    url: `${BASE_URL}/`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 1.0,
  };

  const projects = getAllProjects().map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified,
    changeFrequency: 'yearly',
    priority: 0.8,
  }));

  return [home, ...projects];
}
