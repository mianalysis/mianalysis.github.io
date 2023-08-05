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

  const active = pathname.endsWith(href);

  return (
    <li
      className={classNames(
        'underline decoration-2 underline-offset-4  transition-colors duration-500 whitespace-nowrap',
        active ? 'decoration-mia-blue' : 'decoration-transparent hover:decoration-mia-orange',
        className
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
}
