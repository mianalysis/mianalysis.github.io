import Card from '@/components/Card';

export default function Guides() {
  return (
    <div className="mx-auto max-w-4xl space-y-10">
      <h1>Guides</h1>

      <p>
        Guides covering use of MIA. These include instructions to download and install MIA, use
        existing or create new workflows or simply understand the general structure of MIA.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        <Card href="/guides/getting-started">
          <span className="h3">Getting Started</span>
          <p>Downloading and installing MIA into Fiji</p>
        </Card>

        <Card href="/guides/example-workflows">
          <span className="h3">Example Workflows</span>
          <p>
            Accessing example workflows demonstrating use of MIA, with descriptions for each step
          </p>
        </Card>

        <Card href="/guides/processing-view">
          <span className="h3">Processing View</span>
          <p>The default MIA interface for running existing workflows</p>
        </Card>

        <Card href="/guides/using-existing-workflows">
          <span className="h3">Using existing workflows</span>
          <p>Opening, configuring and running pre-prepared workflows distributed as .mia files</p>
        </Card>

        <Card href="/guides/editing-view">
          <span className="h3">Editing view</span>
          <p>The interface for creating, editing and testing workflows</p>
        </Card>

        <Card href="/guides/creating-workflows">
          <span className="h3">Creating workflows</span>
          <p>Creating a new workflow from scratch</p>
        </Card>

        <Card href="/guides/results-format">
          <span className="h3">Results format</span>
          <p>Description of the default output results (.xlsx) format</p>
        </Card>
        <Card href="/guides/running-headless">
          <span className="h3">Running headless</span>
          <p>Running workflows directly from terminal</p>
        </Card>

        <Card href="/guides/troubleshooting">
          <span className="h3">Troubleshooting</span>
          <p>List of common issues and solutions</p>
        </Card>
      </div>
    </div>
  );
}
