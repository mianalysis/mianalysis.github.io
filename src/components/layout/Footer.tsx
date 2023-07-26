import Link from 'next/link';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="mx-auto flex w-full max-w-4xl items-start justify-between gap-16 py-48  text-gray-700">
      <div className="space-y-6">
        <Logo />

        <p className="max-w-sm font-thin">
          Developed in the{' '}
          <a
            className="font-normal hover:text-black"
            href="https://www.bristol.ac.uk/wolfson-bioimaging/"
          >
            Wolfson Bioimaging Facility
          </a>{' '}
          at the University of Bristol.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        <ul className="space-y-1">
          <li className="mb-5 font-thin uppercase drop-shadow-sm">Explore</li>
          <li className="hover:text-black">
            <a href="https://github.com/mianalysis">GitHub</a>
          </li>
          <li className="hover:text-black">
            <Link href="/publications">Publications</Link>
          </li>
          <li className="hover:text-black">
            <a href="https://imagej.net/plugins/modularimageanalysis/index">ImageJ</a>
          </li>
        </ul>

        <ul className="space-y-1">
          <li className="mb-5 font-thin uppercase drop-shadow-sm">Learn</li>
          <li className="hover:text-black">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-black">
            <Link href="/guides">Guides</Link>
          </li>
          <li className="hover:text-black">
            <a href="https://www.youtube.com/@mianalysis">YouTube</a>
          </li>
          <li className="hover:text-black">
            <a href="https://github.com/mianalysis/mia-examples">Examples</a>
          </li>
        </ul>

        <ul className="space-y-1">
          <li className="mb-5 font-thin uppercase drop-shadow-sm">Follow</li>
          <li className="hover:text-black">
            <a href="https://twitter.com/_mianalysis/">Twitter</a>
          </li>
          <li className="hover:text-black">
            <a href="https://github.com/mianalysis/mia/releases">Releases</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
