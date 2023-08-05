'use client';

import { useRef, useState } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import { MdMenu } from 'react-icons/md';
import classNames from 'classnames';
import { useClickOutside } from '@/hooks/click';
import { delay } from '@/lib/util';

const links = (
  <>
    <NavLink href="/guides">Guides</NavLink>
    <NavLink href="/modules">Modules</NavLink>
    <NavLink href="/publications">Publications</NavLink>
    <NavLink href="/about">About</NavLink>
    <NavLink href="/guides/getting-started">Get started</NavLink>
  </>
);

export default function NavBar() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [expanded, setExpanded] = useState(false);

  useClickOutside(buttonRef, async () => {
    await delay(100);
    setExpanded(false);
  });

  const toggle = () => setExpanded(!expanded);

  return (
    <nav className="space-y-2 max-w-4xl mx-auto">
      <div className="flex justify-between gap-x-8 py-2 max-sm:px-4">
        <Logo />

        <ul className="flex max-sm:hidden list-none items-center gap-x-8">{links}</ul>

        <button type="button" onClick={toggle} className="sm:hidden" ref={buttonRef}>
          <MdMenu size={32} />
        </button>
      </div>

      <ul
        className={classNames(
          'list-none drop space-y-2 overflow-hidden transition-all bg-gray-100 p-4 drop-shadow-lg',
          { 'h-0 py-0': !expanded }
        )}
      >
        {links}
      </ul>
    </nav>
  );
}
