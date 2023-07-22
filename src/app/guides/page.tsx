import Link from "next/link";

export default function Guides() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1>Guides</h1>

      <p>
        Guides covering use of MIA. These include instructions to download and
        install MIA, use existing or create new workflows or simply understand
        the general structure of MIA.
      </p>

      <ul>
        <li>
          <Link href="/guides/getting-started">Getting Started</Link>
        </li>
        <li>
          <Link href="/guides/example-workflows">Example Workflows</Link>
        </li>
        <li>
          <Link href="/guides/processing-view">Processing View</Link>
        </li>
      </ul>
    </div>
  );
}
