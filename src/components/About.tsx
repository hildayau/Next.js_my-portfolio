export default function About() {
  return (
    <section
      id="about"
      className="border-t border-gray-200 bg-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left: Section Title */}
          <div>
            <p className="mb-4 text-sm tracking-widest text-gray-500">
              01 / ABOUT
            </p>

            <h2 className="text-4xl font-bold tracking-tight">
              About Me.
            </h2>
          </div>

          {/* Right: Introduction */}
          <div className="space-y-6 text-gray-600">
            <p className="leading-8">
              約3年間、Webアプリケーションの開発に
              携わってきました。
            </p>

            <p className="leading-8">
              Reactを使用したフロントエンド開発や、
              Javaを使用したバックエンド開発など、
              幅広い開発経験があります。
            </p>

            <p className="leading-8">
              今後はフロントエンド技術をさらに深め、
              UI/UXにも配慮した、使いやすく
              保守性の高いWebサービスの開発に
              取り組んでいきたいと考えています。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
