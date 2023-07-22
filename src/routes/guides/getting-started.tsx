import Video from "~/components/Video";

export default function GettingStarted() {
  return (
    <div class="text-center mx-auto max-w-3xl space-y-5">
      <h1>Getting Started</h1>

      <p>Downloading and installing MIA into Fiji</p>

      <h2>Introduction</h2>

      <Video id="UNgro7_wEIU" />

      <p>
        MIA can either be installed into Fiji via the ImageJ Updater (Option 1)
        or manually using the latest releases on GitHub (Option 2). For
        day-to-day use, installing from Fiji is recommended, whereas the GitHub
        route allows specific versions of MIA to be used. If problems are
        encountered, please see the troubleshooting page. For any issues not
        covered on the troubleshooting page, you can submit an issue via GitHub.
      </p>

      <h2>Option 1: Installing directly from Fiji</h2>

      <p>
        The latest version of MIA can be installed directly into Fiji via an
        update site.
      </p>

      <ol class="text-left">
        <li> Launch the ImageJ Updater from Help {">"} Update...</li>
        <li>
          Click "Manage update sites" and in the window that opens ensure the
          following two sites are ticked
          <ul>
            <li>IJPB-plugins</li>
            <li>ModularImageAnalysis (MIA)</li>
          </ul>
        </li>
        <li>
          Close the "Manage update sites" window, then click "Apply changes".
        </li>
      </ol>

      <h2>Option 2: Installing manually from GitHub</h2>

      <p>
        Specific versions of MIA can be downloaded from GitHub and installed
        into Fiji manually. Note: If installing MIA manually, the
        ModularImageAnalysis update site should be disabled from the ImageJ
        Updater.
      </p>

      <ol class="text-left">
        <li>Download the desired version of MIA from the Releases page.</li>
        <li>
          Place this .jar file into the /plugins directory of the your Fiji
          installation.
        </li>
        <li>Install MorphoLibJ using the instructions here.</li>
      </ol>

      <h2>What next?!</h2>

      <p>
        You're now ready to start using MIA. You can learn about the two
        interfaces in the Processing view and Editing view guides. For
        instructions on running pre-prepared workflows (distributed as .mia
        files) please see the Using existing workflows guide. Alternatively, you
        can find instructions on developing new workflows in the Creating
        workflows guide.
      </p>
    </div>
  );
}
