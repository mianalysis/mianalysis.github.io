'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname();

  const active = href == pathname;

  return (
    <li
      className={classNames(
        'border-b-2 transition-colors',
        active ? 'border-sky-600' : 'border-transparent hover:border-sky-500'
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
