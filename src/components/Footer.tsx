export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-6 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="ml-auto text-right text-sm text-gray-500">
        © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
