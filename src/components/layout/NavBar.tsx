'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';

export default function NavBar() {
  const pathname = usePathname();

  const active = (path: string) =>
    path == pathname ? 'border-sky-600' : 'border-transparent hover:border-sky-500';

  return (
    <nav className="flex w-full max-w-4xl items-center justify-between gap-8">
      <Logo />

      <ul className="flex items-center gap-8">
        <li className={`border-b-2 transition-colors ${active('/')}`}>
          <Link href="/">Home</Link>
        </li>
        <li className={`border-b-2 transition-colors ${active('/guides')}`}>
          <Link href="/guides">Guides</Link>
        </li>
        <li className={`border-b-2 transition-colors ${active('/modules')}`}>
          <Link href="/modules">Modules</Link>
        </li>
        <li className={`border-b-2 transition-colors ${active('/publications')}`}>
          <Link href="/publications">Publications</Link>
        </li>
        <li className={`border-b-2 transition-colors ${active('/about')}`}>
          <Link href="/about">About</Link>
        </li>
        <li className={`border-b-2 transition-colors ${active('/guides/getting-started')}`}>
          <Link href="/guides/getting-started">Get started</Link>
        </li>
      </ul>
    </nav>
  );
}
