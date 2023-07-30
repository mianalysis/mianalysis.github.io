import Image from 'next/image';
import splash from '@/../public/images/screenshots/splash.png';
import batchProcessing from '@/../public/images/screenshots/batch_processing.png';
import dataExport from '@/../public/images/screenshots/data_export.png';
import imagej from '@/../public/images/logos/imagej.png';
import fiji from '@/../public/images/logos/fiji.png';
import trackmate from '@/../public/images/logos/trackmate.png';
import Link from 'next/link';
import { MdMovie, MdDescription, MdApps } from 'react-icons/md';
import ModuleCloud from '@/components/module/ModuleCloud';
import CodeSnippet from '@/components/splash/CodeSnippet';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-48">
      <section>
        <h1>Modular Image Analysis</h1>

        <p className="mb-8 opacity-70 text-3xl">
          A Fiji plugin providing a modular framework for assembling image and object analysis
          workflows
        </p>

        <Image src={splash} alt="MIA" className="shadow-lg" />
      </section>

      <section className="space-y-8">
        <h2>Extensive</h2>

        <p className="opacity-70 text-2xl">
          Near 200 modules covering a wide range of image analysis tasks, including Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Minima, magni?
        </p>

        <ModuleCloud />
      </section>

      <section className="space-y-8">
        <h2>Compatible</h2>

        <div className="grid grid-cols-3 gap-8 items-center">
          <p className="opacity-70 text-2xl col-span-2">
            Designed with out-of-the-box support for spatially-calibrated 5D images, yielding image
            and object measurements in both pixel and physical units
          </p>
          <Image src={dataExport} alt="MIA" />
        </div>

        <div className="grid grid-cols-3 gap-8 content-center items-center">
          <div className="flex gap-4">
            <Image src={imagej} alt="ImageJ" width={82} height={82} />
            <Image src={fiji} alt="Fiji" width={82} height={82} />
            <Image src={trackmate} alt="TrackMate" width={82} height={82} />
          </div>

          <p className="opacity-70 text-2xl col-span-2">
            Integrates with key ImageJ plugins such as{' '}
            <a href="https://github.com/openmicroscopy/bioformats">Bio-Formats</a>,{' '}
            <a href="https://github.com/fiji/TrackMate">TrackMate</a> and{' '}
            <a href="https://github.com/fiji/Trainable_Segmentation">Weka Trainable Segmentation</a>
          </p>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-16 items-center">
        <div className="col-span-2 space-y-8">
          <div>
            <h2>Efficient</h2>

            <p className="opacity-70 text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nesciunt aliquam
              quisquam optio!
            </p>
          </div>

          <div>
            <h3>Automated</h3>
            <p className="opacity-70 text-lg">
              Workflows can be automated from initial image loading through processing, object
              detection, measurement extraction, visualisation, and data exporting
            </p>
          </div>

          <div>
            <h3>High throughput</h3>
            <p className="opacity-70 text-lg">
              Workflows are, by default, compatible with batch processing multiple files within a
              single folder
            </p>
          </div>

          <div>
            <h3>Memory Efficient</h3>
            <p className="opacity-70 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima quos recusandae
              reprehenderit illum iusto ducimus
            </p>
          </div>
        </div>

        <div>
          <Image src={batchProcessing} alt="MIA" className="shadow-xl" />
        </div>
      </section>

      <section className="space-y-8">
        <div>
          <h2>Extensible</h2>
          <p className="opacity-70 text-2xl">
            Functionality can be extended via integration with{' '}
            <a href="https://imagej.net/scripting/">SciJava&apos;s scripting interface</a> or with
            Java classes that extend the core MIA framework
          </p>
        </div>

        <CodeSnippet />
      </section>

      <section>
        <h2>Accessible</h2>

        <p className="opacity-70 text-2xl mb-16">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium sint sequi mollitia
          quam at perspiciatis deleniti ipsa consequatur magnam tempora?
        </p>

        <div className="grid grid-cols-3 items-center justify-center gap-8">
          <a
            href="https://www.youtube.com/@mianalysis"
            className="flex flex-col content-center items-center gap-4 border p-5 transition-all duration-500 hover:opacity-80 hover:shadow-md"
          >
            <MdMovie size={128} className="text-mia-orange" />
            Video Tutorials
          </a>
          <Link
            href="/guides"
            className="flex flex-col content-center items-center gap-4 border p-5 transition-all duration-500 hover:opacity-80 hover:shadow-md"
          >
            <MdDescription size={128} className="text-mia-blue" />
            Guides
          </Link>
          <Link
            href="/modules"
            className="flex flex-col content-center items-center gap-4 border p-5 transition-all duration-500 hover:opacity-80 hover:shadow-md"
          >
            <MdApps size={128} className="text-mia-green" />
            List of modules
          </Link>
        </div>
      </section>
    </div>
  );
}
