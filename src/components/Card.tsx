import Link from 'next/link';

interface Props {
  title: string;
  text: string;
  href: string;
}

export default function Card({ title, text, href }: Props) {
  return (
    <Link href={href} className="rounded-md border p-3 text-left">
      <h3>{title}</h3>
      <p>{text}</p>
    </Link>
  );
}
