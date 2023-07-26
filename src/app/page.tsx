import Image from 'next/image';
import splash from '@/../public/images/splash.png';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Image src={splash} alt="MIA" />

      <section className="grid grid-cols-3 items-center justify-center gap-8">
        <a href="https://www.youtube.com/@mianalysis" className="border p-5">
          Video Tutorials
        </a>
        <Link href="/guides" className="border p-5">
          Guides
        </Link>
        <Link href="/modules" className="border p-5">
          List of modules
        </Link>
      </section>

      <p>
        ModularImageAnalysis (MIA) is an ImageJ plugin which provides a modular framework for
        assembling image and object analysis workflows. Detected objects can be transformed,
        filtered, measured and related. Analysis workflows are batch-enabled by default, allowing
        easy processing of high-content datasets.
      </p>
    </div>
  );
}
