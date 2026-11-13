export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-gray-200"
    >
      <div className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm tracking-widest text-gray-500">
          05 / CONTACT
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="mailto:dustincrude@gmail.com"
            className="rounded-md bg-black px-6 py-3 text-sm text-white hover:bg-gray-800"
          >
            Send Email ↗
          </a>

          <a
            href="https://github.com/hildayau"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-gray-300 px-6 py-3 text-sm hover:bg-gray-100"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </section>
  );
}
