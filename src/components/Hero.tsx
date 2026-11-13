export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
      }}
    >
      {/* White overlay */}
      <div className="absolute inset-0 bg-white/10" />

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-28">
        <p className="mb-6 text-sm tracking-widest text-gray-500">
          WEB DEVELOPER
        </p>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          Building simple,
          <br />
          Using Next.js and React.
        </h1>

        <p className="mt-8 max-w-2xl text-base leading-8 text-gray-600">
          Webアプリケーション開発の経験を活かし、
          ユーザーにとって使いやすく、
          保守性の高いフロントエンド開発を目指しています。
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-gray-800"
          >
            View Projects
          </a>

          <a
            href="#about"
            className="rounded-md border border-gray-300 bg-white/80 px-6 py-3 text-sm hover:bg-white"
          >
            About Me
          </a>
        </div>
      </div>
    </section>
  );
}