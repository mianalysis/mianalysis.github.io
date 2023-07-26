import Video from '@/components/Video';
import Link from 'next/link';

export default function GettingStarted() {
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <h1>Getting Started</h1>

      <p>Downloading and installing MIA into Fiji</p>

      <h2>Introduction</h2>

      <Video id="UNgro7_wEIU" />

      <p>
        MIA can either be installed into Fiji via the ImageJ Updater (Option 1) or manually using
        the latest releases on GitHub (Option 2). For day-to-day use, installing from Fiji is
        recommended, whereas the GitHub route allows specific versions of MIA to be used. If
        problems are encountered, please see the{' '}
        <Link className="link" href="/guides/troubleshooting">
          troubleshooting
        </Link>{' '}
        page. For any issues not covered on the troubleshooting page, you can{' '}
        <a className="link" href="https://github.com/mianalysis/mia/issues">
          submit an issue
        </a>{' '}
        via GitHub.
      </p>

      <h2>Option 1: Installing directly from Fiji</h2>

      <p>The latest version of MIA can be installed directly into Fiji via an update site.</p>

      <ol className="text-left">
        <li>
          {' '}
          Launch the ImageJ{' '}
          <a className="link" href="https://imagej.net/Updater">
            Updater
          </a>{' '}
          from Help {'>'} Update...
        </li>
        <li>
          Click &quot;Manage update sites&quot; and in the window that opens ensure the following
          two sites are ticked
          <ul>
            <li>IJPB-plugins</li>
            <li>ModularImageAnalysis (MIA)</li>
          </ul>
        </li>
        <li>
          Close the &quot;Manage update sites&quot; window, then click &quot;Apply changes&quot;.
        </li>
      </ol>

      <h2>Option 2: Installing manually from GitHub</h2>

      <p>
        Specific versions of MIA can be downloaded from GitHub and installed into Fiji manually.
        Note: If installing MIA manually, the ModularImageAnalysis update site should be disabled
        from the ImageJ Updater.
      </p>

      <ol className="text-left">
        <li>
          Download the desired version of MIA from the{' '}
          <a href="https://github.com/mianalysis/mia/releases">Releases</a> page.
        </li>
        <li>Place this .jar file into the /plugins directory of the your Fiji installation.</li>
        <li>
          Install{' '}
          <a className="link" href="http://imagej.net/plugins/morpholibj">
            MorphoLibJ
          </a>{' '}
          using the instructions{' '}
          <a className="link" href="http://imagej.net/plugins/morpholibj#installation">
            here
          </a>
          .
        </li>
      </ol>

      <h2>Next steps</h2>

      <p>
        You&apos;re now ready to start using MIA. You can learn about the two interfaces in the{' '}
        <Link className="link" href="/guides/processing-view">
          Processing view
        </Link>{' '}
        and{' '}
        <Link className="link" href="/guides/editing-view">
          Editing view
        </Link>{' '}
        guides. For instructions on running pre-prepared workflows (distributed as .mia files)
        please see the{' '}
        <Link className="link" href="/guides/using-existing-workflows">
          Using existing workflows
        </Link>{' '}
        guide. Alternatively, you can find instructions on developing new workflows in the{' '}
        <Link className="link" href="/guides/creating-workflows">
          Creating workflows
        </Link>{' '}
        guide.
      </p>
    </div>
  );
}
