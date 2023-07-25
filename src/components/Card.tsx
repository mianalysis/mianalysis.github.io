import classNames from 'classnames';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  title: string;
  text: string;
  href: string;
  className?: string;
  children?: ReactNode;
}

export default function Card({ title, text, href, className, children }: Props) {
  return (
    <Link
      href={href}
      className={classNames(
        'group space-y-2 rounded-md border p-6 pt-5 text-left text-sm text-gray-900 transition-shadow duration-500 hover:shadow-lg',
        className
      )}
    >
      <h3>{title}</h3>
      <p>{text}</p>
      {children}
    </Link>
  );
}
