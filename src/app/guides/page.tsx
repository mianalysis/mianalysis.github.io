import Card from '@/components/Card';

export default function Guides() {
  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <h1>Guides</h1>

      <p>
        Guides covering use of MIA. These include instructions to download and install MIA, use
        existing or create new workflows or simply understand the general structure of MIA.
      </p>

      <div className="grid grid-cols-2 gap-8">
        <Card href="/guides/getting-started">
          <h3>Getting Started</h3>
          <p>Downloading and installing MIA into Fiji</p>
        </Card>

        <Card href="/guides/example-workflows">
          <h3>Example Workflows</h3>
          <p>
            Accessing example workflows demonstrating use of MIA, with descriptions for each step
          </p>
        </Card>

        <Card href="/guides/processing-view">
          <h3>Processing View</h3>
          <p>The default MIA interface for running existing workflows</p>
        </Card>

        <Card href="/guides/using-existing-workflows">
          <h3>Using existing workflows</h3>
          <p>Opening, configuring and running pre-prepared workflows distributed as .mia files</p>
        </Card>

        <Card href="/guides/editing-view">
          <h3>Editing view</h3>
          <p>The interface for creating, editing and testing workflows</p>
        </Card>

        <Card href="/guides/creating-workflows">
          <h3>Creating workflows</h3>
          <p>Creating a new workflow from scratch</p>
        </Card>

        <Card href="/guides/results-format">
          <h3>Results format</h3>
          <p>Description of the default output results (.xlsx) format</p>
        </Card>
        <Card href="/guides/running-headless">
          <h3>Running headless</h3>
          <p>Running workflows directly from terminal</p>
        </Card>

        <Card href="/guides/troubleshooting">
          <h3>Troubleshooting</h3>
          <p>List of common issues and solutions</p>
        </Card>
      </div>
    </div>
  );
}
