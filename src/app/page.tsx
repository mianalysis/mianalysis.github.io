import Image from 'next/image';
import splash from '@/../public/images/screenshots/splash.png';
import dataExport from '@/../public/images/screenshots/data_export.png';
import { MdMovie, MdDescription, MdApps } from 'react-icons/md';
import ModuleCloud from '@/components/module/ModuleCloud';
import CodeSnippet from '@/components/splash/CodeSnippet';
import Card from '@/components/Card';
import BatchProcessing from '@/components/splash/BatchProcessing';
import CompatibleIcons from '@/components/splash/CompatibleIcons';

export default function Home() {
  return (
    <div className="mx-auto max-w-4xl space-y-60">
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
          Near 200 modules covering a wide range of image and object analysis processes such as
          transform, filtering, detection, measurement and visualisation
        </p>

        {/* TODO: Improve mobile content */}
        <div className="hidden sm:block">
          <ModuleCloud />
        </div>
      </section>

      <section>
        <h2>Compatible</h2>

        <div className="grid sm:grid-cols-3 gap-8 items-center mb-8">
          <p className="opacity-70 text-2xl col-span-2">
            Designed with out-of-the-box support for spatially-calibrated 5D images, yielding image
            and object measurements in both pixel and physical units
          </p>
          <Image src={dataExport} alt="MIA" />
        </div>

        <div className="flex flex-col-reverse sm:flex-row gap-16 justify-between items-center">
          <CompatibleIcons />

          <p className="opacity-70 text-2xl">
            Integrates with key ImageJ plugins such as{' '}
            <a href="https://github.com/openmicroscopy/bioformats">Bio-Formats</a>,{' '}
            <a href="https://github.com/fiji/TrackMate">TrackMate</a> and{' '}
            <a href="https://github.com/fiji/Trainable_Segmentation">Weka Trainable Segmentation</a>
          </p>
        </div>
      </section>

      <section className="grid sm:grid-cols-3 gap-16 items-center">
        <div className="col-span-2 space-y-8">
          <div>
            <h2>Efficient</h2>

            <p className="opacity-70 text-2xl">
              MIA&apos;s modular design allows for efficient, automated, and high throughput image
              analysis
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
              Dense spatial object data can be stored in a compressed quadtree coordinate structure
              to significantly reduce memory usage
            </p>
          </div>
        </div>

        <BatchProcessing />
      </section>

      <section className="space-y-8">
        <div>
          <h2>Extensible</h2>
          <p className="opacity-70 text-2xl">
            Functionality can be extended via integration with{' '}
            <a href="https://imagej.net/scripting/">SciJava&apos;s scripting interface</a> or with
            Java modules that extend the core MIA framework
          </p>
        </div>

        <CodeSnippet />
      </section>

      <section>
        <h2>For you</h2>

        <p className="opacity-70 text-2xl mb-16">
          Documented and ready to use for all your image analysis needs
        </p>

        <div className="grid sm:grid-cols-3 items-center gap-8">
          <Card href="https://www.youtube.com/@mianalysis" className="flex flex-col items-center">
            <h3>Video Tutorials</h3>
            <MdMovie size={128} className="text-mia-orange" />
          </Card>
          <Card href="/guides" className="flex flex-col items-center">
            <h3>Guides</h3>
            <MdDescription size={128} className="text-mia-blue" />
          </Card>
          <Card href="/modules" className="flex flex-col items-center">
            <h3>Module Index</h3>
            <MdApps size={128} className="text-mia-green" />
          </Card>
        </div>
      </section>
    </div>
  );
}
