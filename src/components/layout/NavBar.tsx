'use client';

import { useRef, useState } from 'react';
import Logo from './Logo';
import NavLink from './NavLink';
import { MdMenu } from 'react-icons/md';
import classNames from 'classnames';
import { useClickOutside } from '@/hooks/click';
import { delay } from '@/lib/util';
import Search from '@/components/Search';

const links = (
  <>
    <NavLink href="/guides">Guides</NavLink>
    <NavLink href="/modules">Modules</NavLink>
    <NavLink href="/publications">Publications</NavLink>
    <NavLink href="/getinvolved">Get involved</NavLink>
    <NavLink href="/about">About</NavLink>
  </>
);

export default function NavBar() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [expanded, setExpanded] = useState(false);

  useClickOutside(buttonRef, async () => {
    await delay(200);
    setExpanded(false);
  });

  const toggle = () => setExpanded(!expanded);

  return (
    <nav className="space-y-2 max-w-4xl mx-auto">
      <div className="flex justify-between gap-x-8 py-2 max-sm:px-4">
        <Logo />

        <ul className="flex max-sm:hidden list-none items-center gap-x-8">
          {links}
          <li>
            <Search />
          </li>
        </ul>

        <button type="button" onClick={toggle} className="sm:hidden" ref={buttonRef}>
          <MdMenu size={32} />
        </button>
      </div>

      <div
        className={classNames(
          'flex justify-between items-start overflow-hidden transition-all bg-gray-100 p-4 drop-shadow-lg',
          {
            'h-0 py-0': !expanded,
          }
        )}
      >
        <ul className="list-none space-y-2">{links}</ul>
        <Search />
      </div>
    </nav>
  );
}
