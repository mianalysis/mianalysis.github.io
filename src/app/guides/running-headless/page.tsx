import TerminalSnippet from '@/components/TerminalSnippet';
import AnchoredHeading from '@/components/layout/AnchoredHeading';

export default function RunningHeadless() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section className="space-y-4">
        <h1>Running Headless</h1>

        <p className="opacity-70 text-2xl">Running workflows directly from terminal</p>
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Introduction</AnchoredHeading>

        <p>
          Using MIA&apos;s headless mode it&apos;s possible to run workflows without opening a
          graphical Fiji environment. This enables running workflows on terminal-only systems such
          as compute clusters. It also provides more fine-grain control for multi-folder batch
          processing and facilitates performing higher-level workflows such as parameter-sweeps.
        </p>
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Installing Fiji</AnchoredHeading>

        <p>
          Headless running of workflows can be performed using any copy of Fiji with a standard MIA
          install. If you&apos;ve already got a copy of Fiji and MIA, you can proceed to running a
          workflow. On systems lacking a graphical interface (e.g. servers), Fiji can be installed
          using the following system-specific commands. Following this, MIA is installed using the
          steps outlined in installing MIA.
        </p>

        <TerminalSnippet
          linux={`
# Downloading the latest copy of Fiji for 64-bit Linux 
wget https://downloads.imagej.net/fiji/latest/fiji-linux64.zip

# Unzipping archive
unzip fiji-linux64.zip

# Removing downloaded zip archive
rm fiji-linux64.zip

# Moving into extracted directory
cd Fiji.app/ 
          `}
          mac={`
# Downloading the latest copy of Fiji for 64-bit MacOS
curl -O https://downloads.imagej.net/fiji/latest/fiji-macosx.zip

# Unzipping archive
unzip fiji-macosx.zip -d .

# Removing downloaded zip archive
rm fiji-macosx.zip

# Moving into extracted directory
cd Fiji.app/Contents/MacOS
          `}
          windows={`
# Downloading the latest copy of Fiji for 64-bit Windows
Invoke-WebRequest https://downloads.imagej.net/fiji/latest/fiji-win64.zip -OutFile .\fiji-win64.zip

# Unzipping archive
Expand-Archive .\fiji-win64.zip

# Removing downloaded zip archive
Remove-Item .\fiji-win64.zip

# Moving into extracted directory
cd .\fiji-win64\Fiji.app
          `}
        />
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Installing MIA</AnchoredHeading>

        <p>
          With Fiji installed, we can now install MIA and any relevant dependencies. The following
          system-specific commands will perform these operations.
        </p>

        <TerminalSnippet
          linux={`
# Marking MIA and IJPB-plugins for installation
./ImageJ-linux64 --headless --update add-update-site MIA https://sites.imagej.net/ModularImageAnalysis/
./ImageJ-linux64 --headless --update add-update-site IJPB-plugins https://sites.imagej.net/IJPB-plugins

# Performing update
./ImageJ-linux64 --headless --update update
          `}
          mac={`
# Marking MIA and IJPB-plugins for installation
./ImageJ-macosx --headless --update add-update-site MIA https://sites.imagej.net/ModularImageAnalysis/
./ImageJ-macosx --headless --update add-update-site IJPB-plugins https://sites.imagej.net/IJPB-plugins

# Performing update
./ImageJ-macosx --headless --update update
          `}
          windows={`
# Marking MIA and IJPB-plugins for installation
.\ImageJ-win64 --headless --console --update add-update-site MIA https://sites.imagej.net/ModularImageAnalysis/
.\ImageJ-win64 --headless --console --update add-update-site IJPB-plugins https://sites.imagej.net/IJPB-plugins

# Performing update
.\ImageJ-win64 --headless --console --update update
          `}
        />
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Running a workflow</AnchoredHeading>

        <p>
          The following commands will run a workflow in headless mode. Examples are given for
          running both a single file and also a folder (batch mode). Headless mode can be configured
          with multiple optional parameters which are listed in optional arguments. Arguments are
          specified as a comma-separated list of names and values. If you don&apos;t have a workflow
          to hand, you can download the example workflow (from the MIA-examples repository) using
          the first few optional commands. Note: Headless running requires MIA version 1.2.0 or
          newer.
        </p>

        <TerminalSnippet
          linux={`
# (Optional) Download example workflow to user folder
wget https://github.com/mianalysis/mia-examples/archive/refs/tags/v1.0.6.zip -O ~/HeadlessExample.zip
unzip ~/HeadlessExample.zip -d ~/
rm ~/HeadlessExample.zip

# Defining workflow path as a variable
wfPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/Ex1_NucleiSegmentation.mia

# Running a workflow on a specified single file
inPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/Ex1_3DStack1.tif
./ImageJ-linux64 --headless --run "MIA (headless)" "workflowPath='$wfPath', inputPath='$inPath'"

# Running a workflow on a specified folder with verbose output
inPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/
./ImageJ-linux64 --headless --run "MIA (headless)" "workflowPath='$wfPath', inputPath='$inPath', verbose=true"
          `}
          mac={`
# (Optional) Download example workflow to user folder
curl https://codeload.github.com/mianalysis/mia-examples/zip/refs/tags/v1.0.6 -o ~/HeadlessExample.zip
unzip ~/HeadlessExample.zip -d ~/
rm ~/HeadlessExample.zip

# Defining workflow path as a variable
wfPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/Ex1_NucleiSegmentation.mia

# Running a workflow on a specified single file (execution may take a few seconds to start)
inPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/Ex1_3DStack1.tif
./ImageJ-macosx --headless --run "MIA (headless)" "workflowPath='$wfPath', inputPath='$inPath'"

# Running a workflow on a specified folder with verbose output
inPath=~/mia-examples-1.0.6/Ex1_NucleiSegmentation/
./ImageJ-macosx --headless --run "MIA (headless)" "workflowPath='$wfPath', inputPath='$inPath', verbose=true"
          `}
          windows={`
# (Optional) Download example workflow to user folder
Invoke-WebRequest https://github.com/mianalysis/mia-examples/archive/refs/tags/v1.0.6.zip -OutFile $HOME/HeadlessExample.zip
Expand-Archive $HOME\HeadlessExample.zip -DestinationPath ~\
rm $HOME\HeadlessExample.zip

# Defining workflow path as a variable
$wfPath="'$HOME\mia-examples-1.0.6\Ex1_NucleiSegmentation\Ex1_NucleiSegmentation.mia'"

# Running a workflow on a specified single file
$inPath="'$HOME\mia-examples-1.0.6\Ex1_NucleiSegmentation\Ex1_3DStack1.tif'"
.\ImageJ-win64 --console --headless --run "MIA (headless)" "workflowPath=$wfPath, inputPath=$inPath"

# Running a workflow on a specified folder with verbose output
$inPath="'$HOME\mia-examples-1.0.6\Ex1_NucleiSegmentation\'"
.\ImageJ-win64 --console --headless --run "MIA (headless)" "workflowPath=$wfPath, inputPath=$inPath, verbose=true"
          `}
        />
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Required arguments</AnchoredHeading>

        <p>
          Currently, headless running only requires a single argument specifying the path to a
          pre-configured MIA workflow. In such a case, the file to be processed is that specified in
          the workflow file&apos;s &quot;Input path&quot;. To run a different file, please use the
          &quot;inputPath&quot; optional argument.
        </p>

        <table>
          <thead>
            <tr>
              <th>Argument</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>workflowPath</td>
              <td>
                Path to .mia workflow file. This can either be relative to the current directory or
                an absolute system path.
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="space-y-4">
        <AnchoredHeading type="h2">Optional arguments</AnchoredHeading>

        <p>
          Workflow execution can be configured using additional optional arguments. Arguably the
          most important optional arguments are &quot;inputPath&quot;, which allows specific
          files/folders to be processed, and &quot;variables&quot;, through which global variables
          in a workflow can be modified. The remainder of the arguments (e.g. &quot;showMemory&quot;
          and &quot;verbose&quot;) control the text displayed in the terminal during execution.
        </p>

        <table>
          <thead>
            <tr>
              <th>Argument</th>
              <th>Description</th>
              <th>Default</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>inputPath</td>
              <td>
                If set, this will override the &quot;Input path&quot; file/folder set in the
                specified workflow. When left blank, the &quot;Input path&quot; of the workflow file
                will be used.
              </td>
              <td>
                <code>[Blank]</code>
              </td>
            </tr>
            <tr>
              <td>variables</td>
              <td>
                Global variables (i.e. those specified as name-value pairs in a &quot;Global
                Variables&quot; module) can be overridden using the form &quot;name1:value1;
                name2:value2; etc.&quot;.
              </td>
              <td>
                <code>[Blank]</code>
              </td>
            </tr>
            <tr>
              <td>showDebug</td>
              <td>
                Display any debug messages encountered during workflow execution to the terminal.
                Debug messages are displayed in blue.
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
            <tr>
              <td>showMemory</td>
              <td>
                Following execution of each module the current memory usage and elapsed time are
                displayed in the terminal. Memory messages are displayed in green.
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>

            <tr>
              <td>showMessage</td>
              <td>
                Display any general messages encountered during workflow execution to the terminal.
                Debug messages are displayed in white.
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>

            <tr>
              <td>showStatus</td>
              <td>
                Display module status updates in the terminal. Status messages are displayed in
                blue.
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>
            <tr>
              <td>showWarning</td>
              <td>
                Display any warning messages encountered during workflow execution to the terminal.
                Warning messages are displayed in orange.
              </td>
              <td>
                <code>true</code>
              </td>
            </tr>
            <tr>
              <td>verbose</td>
              <td>
                If processing multiple files/series (i.e. &quot;batch mode&quot;), verbose mode will
                display the current module status, rather than the number of jobs completed.
              </td>
              <td>
                <code>false</code>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
