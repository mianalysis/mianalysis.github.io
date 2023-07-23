"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const active = (path: string) =>
    path == pathname
      ? "border-sky-600"
      : "border-transparent hover:border-sky-600";

  return (
    <nav className="sticky top-0 flex items-center justify-between gap-8 bg-[#f8f9fa] px-8 py-4 drop-shadow-lg">
      <Link href="/" className="flex items-center gap-4">
        <img src="/images/logo.png" alt="Logo" className="max-h-6" />
        ModularImageAnalysis (MIA)
      </Link>

      <ul className="flex items-center gap-8">
        <li className={`border-b-2 ${active("/")}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`border-b-2 ${active("/guides")}`}>
          <Link href="/guides">Guides</Link>
        </li>
        <li className={`border-b-2 ${active("/modules")}`}>
          <Link href="/modules">Modules</Link>
        </li>
        <li className={`border-b-2 ${active("/publications")}`}>
          <Link href="/publications">Publications</Link>
        </li>
        <li className={`border-b-2 ${active("/about")}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`border-b-2 ${active("/guides/getting-started")}`}>
          <Link href="/guides/getting-started">Get started</Link>
        </li>
      </ul>
    </nav>
  );
}
