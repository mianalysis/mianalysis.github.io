import Card from "@/components/Card";

export default function Guides() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 text-center">
      <h1>Guides</h1>

      <p>
        Guides covering use of MIA. These include instructions to download and
        install MIA, use existing or create new workflows or simply understand
        the general structure of MIA.
      </p>

      <div className="grid grid-cols-3 gap-8">
        <Card
          title="Getting Started"
          text="Downloading and installing MIA into Fiji"
          href="/guides/getting-started"
        />
        <Card
          title="Example Workflows"
          text="Accessing example workflows demonstrating use of MIA, with descriptions for each step"
          href="/guides/example-workflows"
        />
        <Card
          title="Processing View"
          text="The default MIA interface for running existing workflows"
          href="/guides/processing-view"
        />
        <Card
          title="Using existing workflows"
          text="Opening, configuring and running pre-prepared workflows distributed as .mia files"
          href="/guides/using-existing-workflows"
        />
        <Card
          title="Editing view"
          text="The interface for creating, editing and testing workflows"
          href="/guides/editing-view"
        />
        <Card
          title="Creating workflows"
          text="Creating a new workflow from scratch"
          href="/guides/creating-workflows"
        />
        <Card
          title="Results format"
          text="Description of the default output results (.xlsx) format"
          href="/guides/results-format"
        />
        <Card
          title="Running headless"
          text="Running workflows directly from terminal"
          href="/guides/running-headless"
        />
        <Card
          title="Troubleshooting"
          text="List of common issues and solutions"
          href="/guides/troubleshooting"
        />
      </div>
    </div>
  );
}
