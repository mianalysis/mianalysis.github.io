import StaticVideo from '@/components/StaticVideo';
import YouTubeVideo from '@/components/YouTubeVideo';
import Link from 'next/link';

export default function UsingExistingWorkflows() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section className="space-y-4">
        <h1>Using Existing Workflows</h1>

        <p className="opacity-70 text-2xl">
          Opening, configuring and running pre-prepared workflows distributed as <code>.mia</code>{' '}
          files
        </p>
      </section>

      <section className="space-y-4">
        <h2>Introduction</h2>

        <p>
          MIA workflows are distributed as .mia files. These allow the same workflow to be stored
          and easily shared between different computers. They can be configured to present a small
          number of key parameters (e.g. input file paths or filter thresholds) to the end user in
          MIA&apos;s
          <Link className="link" href="/guides/processing-view">
            processing view
          </Link>{' '}
          while keeping the majority of parameters (those which should remain fixed) accessible only
          via{' '}
          <Link className="link" href="/guides/editing-view">
            editing view
          </Link>
          .
        </p>

        <p>
          In this guide we will cover loading a pre-prepared workflow file into MIA, setting the
          accessible parameters, running the workflow and finding the output results.
        </p>

        <YouTubeVideo id="Eiko7nlbZsM" />
      </section>

      <section className="space-y-4">
        <h2>Loading the workflow</h2>

        <ol>
          <li>
            If not already started, launch MIA from the plugins menu at Plugins {'>'}{' '}
            ModularImageAnalysis (MIA){' '}
          </li>

          <li>
            By default, MIA will load into{' '}
            <Link className="link" href="/guides/processing-view">
              processing view
            </Link>
            .
            <ul>
              <li>
                To make significant edits to a workflow (i.e. changes not possible using the
                parameters available in &quot;processing view&quot;) you can switch to &quot;editing
                view&quot; by going to View {'>'} Switch to editing view.
              </li>
            </ul>
          </li>

          <li>
            Click &quot;Load&quot; and select the .mia workflow file
            <ul>
              <li>Depending on workflow configuration, a number of controls may be visible.</li>
              <li>
                Since the visible parameters are determined by the workflow author, please contact
                them for specific information.
              </li>
            </ul>
          </li>
        </ol>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/use-workflow/load.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Configuring and running</h2>

        <ol>
          <li>
            Typically, although not necessarily, workflows will contain a parameter to set the input
            file path. To do this, click the box to the right of &quot;Input path&quot; and select
            either a single file or a folder.
            <ul>
              <li>
                Selecting a folder will automatically put MIA into &quot;batch&quot; mode. Here, MIA
                will iterate over all folders, sequentially processing.
              </li>
              <li>
                If multi-series files (e.g. Leica .lif) are likely to be processed, the workflow
                author may also have made controls to select input series available.
              </li>
            </ul>
          </li>

          <li>
            When ready, click &quot;Run&quot; to start the analysis
            <ul>
              <li>
                While processing, the status panel will display the number of files completed (batch
                mode) or a summary of the ongoing task (single file mode).
              </li>
            </ul>
          </li>

          <li>
            Once finished, &quot;Complete&quot; will be displayed in the status panel and all
            results files will have been saved to their respective locations.{' '}
            <ul>
              <li>
                Output .xlsx files will be saved in the input directory with the same name as the
                selected input file/folder.
              </li>
            </ul>
          </li>
        </ol>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/use-workflow/run.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Saving changes</h2>

        <ol>
          <li>
            If changes have been made to the workflow that you&apos;d like to retain for future
            runs, click &quot;Save&quot; to overwrite the loaded .mia file
            <ul>
              <li>Alternatively, a new file can be saved by going to File {'>'} Save as.</li>
            </ul>
          </li>
        </ol>
      </section>
    </div>
  );
}
