export default function ProcessingView() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1>Processing view</h1>

      <p>The default MIA interface for running existing workflows</p>

      <h2>Introduction</h2>

      <p>
        MIA opens up in &quot;processing view&quot;, which is the standard view to run workflows
        from. This view includes controls to load workflow files and run analyses on new images.
        Full workflow editing can be performed in editing view.
      </p>

      <p>
        Depending on how the workflow has been configured, a select subset of parameters may be
        visible to the user. It is intended that these are the only parameters that need be varied
        to get the workflow to run on new images.
      </p>

      <h2>Processing view</h2>

      <p>
        The basic processing view comprises a single main panel, showing all the available
        parameters. Certain modules can be set by the workflow creator to be optionally enabled ()
        or disabled (), while required modules have this icon greyed out (). Any parameters which
        are incorrect (e.g. paths to files that don&apos;t exist) are highlighted in red with an
        accompanying error icon (). Modules can also be grouped into sections, which can be
        independently expanded () or collapsed () by clicking anywhere on the associated header.
      </p>

      <img src="/images/screenshots/basic_view_small.png" alt="Processing view" />

      <h2>Additional panels</h2>

      <p>
        Additional panels are available via the &quot;View&quot; menu. These are present in both
        &quot;processing&quot; and &quot;editing&quot; views and can be closed using the cross
        button in the top-left corner of the panel.
      </p>

      <p>
        The &quot;About&quot; panel displays the full documentation for a selected module, while the
        &quot;Notes&quot; panel offers a location to add module-specific notes. The corresponding
        module for both of these can be selected by clicking on the module heading. Notes could be
        added by the workflow creator to provide usage information for the end user, or they could
        be added by the end user as reminders. Notes are stored with a workflow when that workflow
        is saved.
      </p>

      <p>
        The &quot;File list&quot; panel shows the current processing status of all queued analysis
        jobs. As such, it&apos;s primarily intended for batch processing files. By default, this
        view displays the job number, filename and progress; however, series name and series number
        can be added by right-clicking the top row.
      </p>

      <img src="/images/screenshots/basic_view_expanded.png" alt="Additional panels" />
    </div>
  );
}
