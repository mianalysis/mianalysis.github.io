import Link from 'next/link';

export default function About() {
  return (
    <div className="mx-auto max-w-3xl  space-y-5">
      <h1>About MIA</h1>

      <p>Image and object analysis workflow automation plugin for Fiji</p>

      <h2>Description</h2>

      <p>
        ModularImageAnalysis (MIA) is an ImageJ plugin which provides a modular framework for
        assembling image and object analysis workflows. Detected objects can be transformed,
        filtered, measured and related. Analysis workflows are batch-enabled by default, allowing
        easy processing of high-content datasets. MIA is developed in the{' '}
        <a href="https://www.bristol.ac.uk/wolfson-bioimaging/">Wolfson Bioimaging Facility</a> at
        the University of Bristol.
      </p>

      <h2>Acknowledgements</h2>

      <p>
        The plugin makes use of a combination of plugins packaged with Fiji as well as others that
        can be installed via the updater.
      </p>

      <p>
        Required plugins pre-packaged with Fiji: AnalyzeSkeleton, Auto Threshold, bUnwarpJ,
        Bio-Formats, Colour Deconvolution, Correct Bleach, MPICBG, TrackMate, Weka Trainable
        Segmentation. Required plugins that need installing via the ImageJ updater: MorphoLibJ.
        Plugins bundled with MIA: Stack Focuser.
      </p>

      <p>A list of bundled dependencies along with their respective licenses can be found here.</p>

      <p>
        Special thanks to all MIA users who have provided vital feedback over the years. In
        particular, big thanks to Dr. Dominic Alibhai for his many suggestions and ideas.
      </p>

      <h2>Citing MIA</h2>

      <p>
        We hope you find MIA useful. If you&apos;ve used MIA in your research, please cite it using
        the Zenodo DOI for that version of the plugin. Zenodo DOIs for MIA can be found here.
      </p>

      <h2>Publications</h2>

      <p>
        MIA has been used in a variety of different analyses, a few published examples of which are
        listed below. For a more complete list, please go to{' '}
        <Link href="/publications">Publications</Link>.
      </p>

      <h2>Ongoing development</h2>

      <p>
        This plugin is still in development and test coverage is currently incomplete. Please keep
        an eye on results and add an issue if any problems are encountered.
      </p>
    </div>
  );
}
