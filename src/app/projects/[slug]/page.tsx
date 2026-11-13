import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import Image from "next/image";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-black">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/#projects"
          className="text-sm text-gray-500 hover:text-black"
        >
          ← Back to Projects
        </Link>

        <div className="mt-16">
          <p className="mb-4 text-sm tracking-widest text-gray-500">
            PROJECT DETAIL
          </p>

          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            {project.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-600"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mt-12 aspect-video overflow-hidden rounded-lg border border-gray-200 bg-gray-100">
          {project.image && (
            <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain"
            />
          )}
        </div>

        <section className="mt-20 border-t border-gray-200 pt-12">
          <h2 className="mb-6 text-2xl font-semibold">
            Overview
          </h2>

          <p className="leading-8 text-gray-600">
            {project.overview}
          </p>
        </section>

        <section className="mt-16 border-t border-gray-200 pt-12">
          <h2 className="mb-6 text-2xl font-semibold">
            Key Features
          </h2>

          <ul className="list-disc space-y-4 pl-5 text-gray-600">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </section>

        {project.githubUrl && (
          <div className="mt-16 border-t border-gray-200 pt-12">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-gray-800"
            >
              View on GitHub ↗
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
