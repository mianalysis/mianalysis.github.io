import Link from 'next/link';

interface Props {
  title: string;
  text: string;
  href: string;
}

export default function Card({ title, text, href }: Props) {
  return (
    <Link
      href={href}
      className="space-y-2 rounded-md border p-6 pt-5 text-left transition-shadow duration-500 hover:shadow-lg"
    >
      <h3>{title}</h3>
      <p className="line-clamp-3 text-sm font-normal text-gray-900">{text}</p>
    </Link>
  );
}
