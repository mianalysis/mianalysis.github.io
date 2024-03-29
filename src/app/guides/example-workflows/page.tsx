import AnchoredHeading from '@/components/layout/AnchoredHeading';
import Link from 'next/link';

export default function ExampleWorkflows() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section>
        <h1>Example workflows</h1>

        <p className="opacity-70 text-2xl">
          Accessing example workflows demonstrating use of MIA, with descriptions for each step
        </p>
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Introduction</AnchoredHeading>

        <p>
          Example workflows for MIA can be found in the{' '}
          <a className="link" href="https://github.com/mianalysis/mia-examples">
            mia-examples
          </a>{' '}
          repository. These introduce various processes of MIA such as image loading, object
          segmentation, object measurements and relationships and visualisation. Each example
          contains the necessary files to get it running: the example workflow, any raw images
          required and any example outputs that are generated by the workflow.
        </p>

        <p>
          Each module in these workflows includes a corresponding set of notes summarising the
          purpose of that module and its configuration. These notes can be viewed by enabling the
          &quot;Notes&quot; panel (&quot;View {'>'} Show notes panel&quot; from the MIA menu) and
          selecting a module from the list of modules in{' '}
          <Link className="link" href="/guides/editing-view">
            editing view
          </Link>
          .
        </p>

        <p>
          While these workflows correspond to a specific analysis, the principles covered (i.e.
          image loading, processing, object detection and measurements) are applicable to most
          workflows.
        </p>

        <p>
          Note: Any object outlines in the generated &quot;overlay&quot; images will typically only
          be visible when opened in ImageJ/Fiji.
        </p>
      </section>
    </div>
  );
}
