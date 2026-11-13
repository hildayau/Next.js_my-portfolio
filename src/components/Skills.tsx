const skills = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML / CSS",
      "jQuery",
      "Thymeleaf",
    ],
  },
  {
    category: "Backend",
    items: [
      "Java",
      "Spring",
      "MyBatis",
      "C#",
      "VBScript",
      "Perl",
    ],
  },
  {
    category: "Database",
    items: [
      "PostgreSQL",
      "SQL Server",
      "Oracle",
      "DB2",
      "SQL",
    ],
  },
  {
    category: "Tools & Environment",
    items: [
      "Git",
      "SVN",
      "AWS",
      "VS Code",
      "Eclipse",
      "Backlog",
      "Miro",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-gray-200"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-widest text-gray-500">
          02 / SKILLS
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          Technical Skills.
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-lg border border-gray-200 bg-white p-8 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-6 text-lg font-semibold">
                {skill.category}
              </h3>

              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
