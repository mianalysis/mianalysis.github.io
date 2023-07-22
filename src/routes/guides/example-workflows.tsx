export default function ExampleWorkflows() {
  return (
    <div class="text-center mx-auto max-w-3xl space-y-5">
      <h1>Example workflows</h1>

      <p>
        Accessing example workflows demonstrating use of MIA, with descriptions
        for each step
      </p>

      <h2>Introduction</h2>

      <p>
        Example workflows for MIA can be found in the mia-examples repository.
        These introduce various processes of MIA such as image loading, object
        segmentation, object measurements and relationships and visualisation.
        Each example contains the necessary files to get it running: the example
        workflow, any raw images required and any example outputs that are
        generated by the workflow.
      </p>

      <p>
        Each module in these workflows includes a corresponding set of notes
        summarising the purpose of that module and its configuration. These
        notes can be viewed by enabling the "Notes" panel ("View {">"} Show
        notes panel" from the MIA menu) and selecting a module from the list of
        modules in "editing view".
      </p>

      <p>
        While these workflows correspond to a specific analysis, the principles
        covered (i.e. image loading, processing, object detection and
        measurements) are applicable to most workflows.
      </p>

      <p>
        Note: Any object outlines in the generated "overlay" images will
        typically only be visible when opened in ImageJ/Fiji.
      </p>
    </div>
  );
}
