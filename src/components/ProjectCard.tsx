import type { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-gray-200 transition-shadow hover:shadow-md">
      <div className="relative aspect-video bg-gray-100">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Preview
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="mb-3 text-xl font-semibold">
          {project.title}
        </h3>

        <p className="mb-5 leading-7 text-gray-600">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-gray-100 px-3 py-1 text-xs text-gray-600"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
        href={`/projects/${project.slug}`}
        className="text-sm font-medium hover:text-gray-500"
        >
            View Project →
        </Link>
      </div>
    </article>
  );
}
