import allProjects from "@/data/projects.json";

export type Project = (typeof allProjects.projects)[number];
export type VisibleProject = Omit<Project, "image"> & { image: string };

function hasUsableImage(image: string | null): image is string {
  return Boolean(image && image.startsWith("/assets/"));
}

export function getProjects(category?: string): VisibleProject[] {
  return allProjects.projects.filter((project): project is VisibleProject => {
    if (!hasUsableImage(project.image)) return false;
    if (category && !project.categories.includes(category)) return false;
    return true;
  });
}
