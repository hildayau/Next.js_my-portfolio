type ExperienceItemProps = {
  period: string;
  title: string;
  description: string;
  technologies: string[];
};

export default function ExperienceItem({
  period,
  title,
  description,
  technologies,
}: ExperienceItemProps) {
  return (
    <div className="relative border-l border-gray-300 pb-12 pl-8 last:pb-0">
      <div className="absolute -left-[5px] top-1 h-[9px] w-[9px] rounded-full bg-black" />

      <p className="mb-3 text-sm text-gray-500">
        {period}
      </p>

      <h3 className="mb-4 text-xl font-semibold">
        {title}
      </h3>

      <p className="mb-5 leading-8 text-gray-600">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-md bg-gray-100 px-3 py-1 text-sm text-gray-600"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
