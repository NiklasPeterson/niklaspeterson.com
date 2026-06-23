import projectsData from "../../public/projects.json";

export function slugify(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
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

// Neighbors for prev/next navigation. Wraps around at the ends.
export function getAdjacentProjects(slug) {
  const all = getAllProjects();
  const i = all.findIndex((project) => project.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: all[(i - 1 + all.length) % all.length],
    next: all[(i + 1) % all.length],
  };
}
