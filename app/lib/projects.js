import projectsData from '../../public/projects.json';

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

export function getAllProjects() {
  return projectsData.map((project) => ({
    ...project,
    slug: project.slug ?? slugify(project.title),
  }));
}

export function getProjectBySlug(slug) {
  return getAllProjects().find((project) => project.slug === slug) ?? null;
}
