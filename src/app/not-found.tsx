import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="justify-center flex flex-col items-center w-full gap-2">
      <h1>Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link href="/" className="link">
        Return Home
      </Link>
    </div>
  );
}
