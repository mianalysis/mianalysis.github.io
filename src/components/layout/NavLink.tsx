'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

interface Props {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children, className }: Props) {
  const pathname = usePathname();

  const active = href == pathname;

  return (
    <li
      className={classNames(
        'border-b-2 transition-colors duration-500 whitespace-nowrap',
        active ? 'border-mia-blue' : 'border-transparent hover:border-mia-orange',
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
