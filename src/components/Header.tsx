export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="/" className="text-xl font-bold">
          Portfolio.
        </a>

        <div className="flex gap-8 text-sm">
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <a href="#skills" className="hover:text-gray-500">
            Skills
          </a>
          <a href="#experience" className="hover:text-gray-500">
            Experience
          </a>
          <a href="#projects" className="hover:text-gray-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-gray-500">
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}
