import Link from 'next/link';

export default function About() {
  return (
    <div className="mx-auto max-w-4xl  space-y-5">
      <h1>About MIA</h1>

      <p>Image and object analysis workflow automation plugin for Fiji</p>

      <h2>Description</h2>

      <p>
        ModularImageAnalysis (MIA) is an ImageJ plugin which provides a modular framework for
        assembling image and object analysis workflows. Detected objects can be transformed,
        filtered, measured and related. Analysis workflows are batch-enabled by default, allowing
        easy processing of high-content datasets. MIA is developed in the{' '}
        <a className="link" href="https://www.bristol.ac.uk/wolfson-bioimaging/">
          Wolfson Bioimaging Facility
        </a>{' '}
        at the University of Bristol.
      </p>

      <h2>Acknowledgements</h2>

      <p>
        The plugin makes use of a combination of plugins packaged with Fiji as well as others that
        can be installed via the updater.
      </p>

      <p>
        Required plugins pre-packaged with Fiji:{' '}
        <a className="link" href="https://github.com/fiji/AnalyzeSkeleton">
          AnalyzeSkeleton
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/Auto_Threshold">
          Auto Threshold
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/bUnwarpJ">
          bUnwarpJ
        </a>
        ,{' '}
        <a className="link" href="https://github.com/openmicroscopy/bioformats">
          Bio-Formats
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/Colour_Deconvolution">
          Colour Deconvolution
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/CorrectBleach">
          Correct Bleach
        </a>
        ,{' '}
        <a className="link" href="https://github.com/axtimwalde/mpicbg">
          MPICBG
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/TrackMate">
          TrackMate
        </a>
        ,{' '}
        <a className="link" href="https://github.com/fiji/Trainable_Segmentation">
          Weka Trainable Segmentation
        </a>
        . Required plugins that need installing via the ImageJ updater:{' '}
        <a className="link" href="https://github.com/ijpb/MorphoLibJ">
          MorphoLibJ
        </a>
        . Plugins bundled with MIA:{' '}
        <a className="link" href="https://imagej.nih.gov/ij/plugins/stack-focuser.html">
          Stack Focuser
        </a>
        .
      </p>

      {/* <p>
        A list of bundled dependencies along with their respective licenses can be found{' '}
        <a
          className="link"
          href="https://htmlpreview.github.io/?https://github.com/mianalysis/mia/blob/master/target/site/dependencies.html"
        >
          here
        </a>
        .
      </p> */}

      <p>
        Special thanks to all MIA users who have provided vital feedback over the years. In
        particular, big thanks to Dr. Dominic Alibhai for his many suggestions and ideas.
      </p>

      <h2>Citing MIA</h2>

      <p>
        We hope you find MIA useful. If you&apos;ve used MIA in your research, please cite it using
        the Zenodo DOI for that version of the plugin. Zenodo DOIs for MIA can be found{' '}
        <a className="link" href="https://zenodo.org/record/8164907">
          here
        </a>
        .
      </p>

      <h2>Publications</h2>

      <p>
        MIA has been used in a variety of different analyses, a few published examples of which are
        listed below. For a more complete list, please go to{' '}
        <Link className="link" href="/publications">
          Publications
        </Link>
        .
      </p>

      <h2>Ongoing development</h2>

      <p>
        This plugin is still in development and test coverage is currently incomplete. Please keep
        an eye on results and add an{' '}
        <a className="link" href="https://github.com/mianalysis/mia/issues">
          issue
        </a>{' '}
        if any problems are encountered.
      </p>
    </div>
  );
}
