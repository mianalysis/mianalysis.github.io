'use client';

import Logo from './Logo';
import NavLink from './NavLink';

export default function NavBar() {
  return (
    <nav className="flex w-full flex-col sm:flex-row max-w-4xl items-center justify-between gap-x-8 gap-y-4">
      <Logo />

      <ul className="flex list-none items-center gap-4 sm:gap-8">
        <NavLink href="/guides">Guides</NavLink>
        <NavLink href="/modules">Modules</NavLink>
        <NavLink href="/publications">Publications</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/guides/getting-started" className="hidden sm:block">
          Get started
        </NavLink>
      </ul>
    </nav>
  );
}
