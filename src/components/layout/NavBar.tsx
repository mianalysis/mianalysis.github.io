'use client';

import Logo from './Logo';
import NavLink from './NavLink';

export default function NavBar() {
  return (
    <nav className="flex w-full max-w-4xl items-center justify-between gap-8">
      <Logo />

      <ul className="flex list-none items-center gap-8">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/guides">Guides</NavLink>
        <NavLink href="/modules">Modules</NavLink>
        <NavLink href="/publications">Publications</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/guides/getting-started">Get started</NavLink>
      </ul>
    </nav>
  );
}
