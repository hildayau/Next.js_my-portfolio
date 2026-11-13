import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-widest text-gray-500">
          04 / PROJECTS
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          Individual Projects.
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
