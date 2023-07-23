import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto space-y-5">
      <h1>Not Found</h1>

      <p>
        Return to {''}
        <Link href="/" className="text-sky-600 hover:underline">
          Home
        </Link>
      </p>
    </div>
  );
}
