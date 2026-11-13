import ExperienceItem from "./ExperienceItem";

const experiences = [
  {
    id: 1,
    period: "2023.09 – 2026.11",
    title: "パーソルクロステクノロジー株式会社",
    description:
      "社内営業向けWebアプリケーションの開発、金融機関向けシステムの保守・運用、ECシステムの改修を担当。React・TypeScriptを使用したスクラム開発では、顧客要望の確認、工数調査、設計、実装、テスト、リリース対応まで幅広く経験しました。",
    technologies: [
      "React",
      "TypeScript",
      "Java",
      "Spring",
      "PostgreSQL",
      "AWS",
    ],
  },
  {
    id: 2,
    period: "2022.10 – 2023.05",
    title: "株式会社Mamol",
    description:
      "業務システムの画面開発や計算ロジックの改修を担当。Java・JavaScriptを使用した実装、不具合修正、帳票修正、単体テストの設計・実施を経験しました。",
    technologies: [
      "Java",
      "JavaScript",
      "HTML/CSS",
      "Spring",
      "jQuery",
      "SQL",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-gray-200 bg-gray-50"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-widest text-gray-500">
          03 / EXPERIENCE
        </p>

        <h2 className="mb-12 text-4xl font-bold tracking-tight">
          Work Experience.
        </h2>

        <div className="max-w-3xl">
          {experiences.map((experience) => (
            <ExperienceItem
              key={experience.id}
              period={experience.period}
              title={experience.title}
              description={experience.description}
              technologies={experience.technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
