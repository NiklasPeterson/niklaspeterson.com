export function isFullWidthProjectSection(index, total, section) {
  if (typeof section?.fullWidth === "boolean") return section.fullWidth;

  if (total === 1) return true;
  if (total === 2) return false;

  return index === 0 || (total % 2 === 0 && index === total - 1);
}

export function getProjectVisualAspectRatio(visual) {
  return visual?.aspectRatio || "16 / 9";
}

export function getVisibleProjectSections(sections = []) {
  return sections.filter((section) => !section.hidden);
}

export function getProjectInsights(project) {
  if (project.insights?.length) return project.insights;

  return [
    project.problem && { label: "Problem", body: project.problem },
    project.solution && { label: "Solution", body: project.solution },
  ].filter(Boolean);
}
