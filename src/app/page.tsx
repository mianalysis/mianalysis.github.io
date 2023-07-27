import Image from 'next/image';
import splash1 from '@/../public/images/screenshots/splash_1.png';
import splash2 from '@/../public/images/screenshots/splash_2.png';
import splash3 from '@/../public/images/screenshots/splash_3.png';
import splash4 from '@/../public/images/screenshots/splash_4.png';
import splash5 from '@/../public/images/screenshots/splash_5.png';
import splash6 from '@/../public/images/screenshots/splash_6.png';
import Link from 'next/link';
import { MdMovie, MdDescription, MdApps } from 'react-icons/md';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section>
        <h1>Modular Image Analysis</h1>
        <p className="mb-6 text-2xl opacity-70 sm:text-3xl">
          A Fiji plugin providing a modular framework for assembling image and object analysis
          workflows
        </p>
        <Image src={splash1} alt="MIA" className="shadow-lg" />
      </section>

      <section>
        <h2>Automated</h2>
        <p>
          Workflows can be automated from initial image loading through processing, object
          detection, measurement extraction, visualisation, and data exporting
        </p>
        <Image src={splash2} alt="MIA" className="shadow-lg" />
      </section>

      <section>
        <h2>Modular</h2>
        <p>
          Near 200 modules integrated with key ImageJ plugins such as{' '}
          <a href="https://github.com/openmicroscopy/bioformats">Bio-Formats</a>,{' '}
          <a href="https://github.com/fiji/TrackMate">TrackMate</a> and{' '}
          <a href="https://github.com/fiji/Trainable_Segmentation">Weka Trainable Segmentation</a>
        </p>
        <Image src={splash3} alt="MIA" className="shadow-lg" />
      </section>

      <section>
        <h2>High throughput</h2>
        <p>
          Workflows are, by default, compatible with batch processing multiple files within a single
          folder
        </p>
        <Image src={splash4} alt="MIA" className="shadow-lg" />
      </section>

      <section>
        <h2>Compatible</h2>
        <p>
          Designed for compatibility with spatially-calibrated 5D images, yielding image and object
          measurements in both pixel and physical units
        </p>
        <Image src={splash5} alt="MIA" className="shadow-lg" />
      </section>

      <section>
        <h2>Extensible</h2>
        <p>
          Functionality can be extended via integration with{' '}
          <a href="https://imagej.net/scripting/">SciJava&apos;s scripting interface</a> or with
          Java classes that extend the core MIA framework
        </p>
        <Image src={splash6} alt="MIA" className="shadow-lg" />
      </section>

      <section className="grid grid-cols-3 items-center justify-center gap-8">
        <a
          href="https://www.youtube.com/@mianalysis"
          className="flex flex-col content-center items-center gap-4 border p-5 text-gray-600 transition-all duration-500 hover:text-black hover:shadow-md"
        >
          <MdMovie size={128} />
          Video Tutorials
        </a>
        <Link
          href="/guides"
          className="flex flex-col content-center items-center gap-4 border p-5 text-gray-600 transition-all duration-500 hover:text-black hover:shadow-md"
        >
          <MdDescription size={128} />
          Guides
        </Link>
        <Link
          href="/modules"
          className="flex flex-col content-center items-center gap-4 border p-5 text-gray-600 transition-all duration-500 hover:text-black hover:shadow-md"
        >
          <MdApps size={128} />
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
