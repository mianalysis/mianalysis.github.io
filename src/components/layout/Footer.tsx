import Link from 'next/link';
import wbif from '@/../public/images/logos/wbif.jpg';
import Logo from './Logo';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="mx-auto flex flex-col sm:flex-row w-full max-w-4xl items-start justify-between gap-16 sm:py-32 px-4 text-gray-700">
      <div className="space-y-6">
        <div className="flex justify-between">
          <Logo />

          <a href="https://www.bristol.ac.uk/wolfson-bioimaging/">
            <Image src={wbif} alt="Wolfson Bioimaging Facility" height={32} />
          </a>
        </div>

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
        <ul className="list-none space-y-1 group">
          <li className="mb-5 font-thin uppercase drop-shadow-sm underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-500 group-hover:decoration-mia-orange">
            Explore
          </li>
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

        <ul className="list-none space-y-1 group">
          <li className="mb-5 font-thin uppercase drop-shadow-sm underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-500 group-hover:decoration-mia-blue">
            Learn
          </li>
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

        <ul className="list-none space-y-1 group">
          <li className="mb-5 font-thin uppercase drop-shadow-sm underline decoration-2 decoration-transparent underline-offset-8 transition-colors duration-500 group-hover:decoration-mia-green">
            Follow
          </li>
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
