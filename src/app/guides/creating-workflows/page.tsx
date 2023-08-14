import MiaIcon from '@/components/MiaIcon';
import StaticVideo from '@/components/StaticVideo';
import YouTubeVideo from '@/components/YouTubeVideo';
import Link from 'next/link';

export default function CreatingWorkflows() {
  return (
    <div className="mx-auto max-w-4xl space-y-16">
      <section className="space-y-4">
        <h1>Creating Workflows</h1>

        <p className="opacity-70 text-2xl">Creating a new workflow from scratch</p>
      </section>

      <section className="space-y-4">
        <h2>Introduction</h2>

        <p>
          Workflows can be created and edited from{' '}
          <Link className="link" href="/guides/editing-view">
            editing view
          </Link>
          . Modules are assembled into a linear sequence that forms the workflow. Each module has
          its own independent set of parameters which can be configured by selecting that module
          from the workflow list. Images and objects created by modules are available to subsequent
          modules in the workflow, as are other items such as measurements, metadata and object
          relationships.
        </p>

        <p>
          In this guide we will cover adding modules, setting the input file, configuring modules,
          configuring output Excel formats and setting parameters to be visible in{' '}
          <Link className="link" href="/guides/processing-view">
            processing view
          </Link>
          .
        </p>

        <p>
          If you haven&apos;t already done so, at this point it&apos;s also worth looking at the
          <Link className="link" href="/guides/example-workflows">
            example workflows
          </Link>
          . These workflows include key modules used in the majority of analyses, each of which has
          accompanying notes, explaining its configuration.
        </p>

        <YouTubeVideo id="CfpWGBpZxEo" />
      </section>

      <section className="space-y-4">
        <h2>Accessing editing view</h2>

        <ul>
          <li>
            By default, MIA will open in{' '}
            <Link className="link" href="/guides/processing-view">
              processing view
            </Link>
            . To switch to editing view, select &quot;View {'>'} Switch to editing view&quot; from
            the MIA menu.
            <ul>
              <li>
                The layout of editing view is covered in the{' '}
                <Link className="link" href="/guides/editing-view">
                  editing view
                </Link>{' '}
                guide.
              </li>
            </ul>
          </li>
        </ul>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/new-workflow/switch_view.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Adding and arranging modules</h2>

        <ul>
          <li>
            A list of available modules can be viewed by clicking the + button in the top-left
            corner of the MIA interface.
            <ul>
              <li>Modules are grouped into general categories and sub-categories.</li>
              <li>To view a description of each module, hover the mouse over its name.</li>
              <li>
                Full documentation of each module can be found in the{' '}
                <Link className="link" href="/modules">
                  Modules
                </Link>{' '}
                pages.
              </li>
            </ul>
          </li>

          <li>
            Click a module to add it to current workflow.
            <ul>
              <li>
                If any modules in the current workflow are selected, the new module will be inserted
                immediately after them. Otherwise, it will be added to the bottom of the list.
              </li>
            </ul>
          </li>

          <li>
            Modules can also be discovered and added using the module search feature.
            <ul>
              <li>
                Access search via either the menu bar (&quot;View {'>'} Show module search&quot;) or
                by clicking &quot;Search for module&quot; in the available module list.
              </li>
              <li>
                Search will always match modules based on the module name, but can optionally be set
                to also search in the module and/or parameter descriptions using the &quot;Include
                module/parameter descriptions&quot; checkboxes.
              </li>
              <li>
                Detected modules need only match one search word; however, mandatory words can be
                specified using quotation marks.
              </li>
              <li>
                Add detected modules to the current workflow using the + button to their right.
              </li>
            </ul>
          </li>

          <li>
            Selected module(s) can be removed using the - button and moved up and down with the ?
            and ? buttons.
            <ul>
              <li>Modules can also be moved by dragging them to a new position in the workflow.</li>
            </ul>
          </li>
        </ul>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/new-workflow/add_modules.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Selecting files to process</h2>

        <ul>
          <li>
            Files or folders being processed are specified in the always-present{' '}
            <Link className="link" href="/modules/core/input-control">
              Input control
            </Link>
            module, which can be found above the current workflow.
          </li>

          <li>
            The &quot;Input path&quot; parameter specifies either a file or folder that the analysis
            will be run on.
            <ul>
              <li>
                The selected file only acts to provide a root path from which the analysis runs. The
                image at this location isn&apos;t automatically loaded into the MIA workspace,
                instead this is done by a variety of image loading modules (see{' '}
                <Link className="link" href="/modules/input-output">
                  Input/output
                </Link>{' '}
                modules).
              </li>
              <li>
                This fine-grain control over image loading allows us to load sub-sets of image
                stacks (e.g. a single channel) and gives greater control of the images stored in
                memory at any given time.
              </li>
              <li>
                A copy of the{' '}
                <Link className="link" href="/modules/input-output/load-image">
                  Load image
                </Link>{' '}
                module is automatically included with all new workflows.
              </li>
            </ul>
          </li>

          <li>
            If a folder is selected, all files contained within (and within sub-folders) can be
            processed.
            <ul>
              <li>
                In this &quot;batch&quot; mode, only files matching specified filters will be
                processed.
              </li>
            </ul>
          </li>
        </ul>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/new-workflow/file_selection.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Configuring modules</h2>

        <ul>
          <li>
            View the parameters associated with a module by clicking its name in the current
            workflow.
            <ul>
              <li>Parameters are grouped into sections, divided by blue headers.</li>
            </ul>
          </li>

          <li>
            Parameters can have many different types (e.g. text inputs, available objects or
            choices).
            <ul>
              <li>
                Generally, each parameter should only allow valid inputs. For example, object
                selectors will only show objects detected by preceding modules, but not those from
                subsequent modules.
              </li>
            </ul>
          </li>

          <li>
            Specific parameters can be added to{' '}
            <Link className="link" href="/guides/processing-view">
              processing view
            </Link>{' '}
            by toggling the visibility button to the right of the parameter.
            <ul>
              <li>
                The <MiaIcon type="eye_open_black.png" /> icons indicates a visible (editable)
                parameter and <MiaIcon type="eye_closed_black.png" /> one that will not be visible.
              </li>
            </ul>
          </li>

          <li>
            It&apos;s also possible to allow modules to be disabled from processing view by
            selecting &quot;Can be disabled&quot; from the top of the parameter window.
            <ul>
              <li>
                When selected, a power icon (<MiaIcon type="power_bright_green.png" /> or{' '}
                <MiaIcon type="power_black_strike.png" />) will be displayed next to the module name
                in processing view.
              </li>
            </ul>
          </li>

          <li>Modules and parameters can be renamed by right-clicking on their name.</li>
        </ul>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/new-workflow/update_parameters.mp4" />
      </section>

      <section className="space-y-4">
        <h2>Configuring output results format</h2>

        <StaticVideo url="https://assets.jdjfisher.dev/mia/guides/new-workflow/set_results.mp4" />

        <li>
          The generated results spreadsheet can be configured in the always-present{' '}
          <Link className="link" href="/modules/core/output-control">
            Output control
          </Link>{' '}
          module, which can be found above the current workflow.
          <ul>
            <li>
              Results spreadsheets will typically be stored in the same folder as the selected input
              file or within a selected input folder.
            </li>
          </ul>
        </li>

        <li>
          By default, all measurements will be included in the spreadsheet. These can be
          enabled/disabled individually from the &quot;Measurement selection&quot; section.
          <ul>
            <li>
              Each exported object collection will be given a separate sheet in the worksheet.
            </li>
            <li>
              Measurement names, which will be displayed at the top of each column, can be changed
              by right-clicking on the measurement name.
            </li>
          </ul>
        </li>

        <li>
          Measurements will also be summarised in a separate &quot;Summary&quot; sheet. This sheet
          can be enabled/disabled in the &quot;Summary sheet&quot; section.
          <ul>
            <li>
              A single summary is prepared for each processed image; however, this can be split down
              per timepoint.
            </li>
            <li>
              Each measurement can be summarised as the mean, minimum, maximum, standard deviation
              and sum.
            </li>
            <li>
              Individual measurement summaries can be enabled/disabled in the &quot;Measurement
              selection&quot; section.
            </li>
          </ul>
        </li>

        <li>
          More information on the results spreadsheet format can be found in the{' '}
          <Link className="link" href="/guides/results-format">
            Results format
          </Link>{' '}
          guide.
        </li>
      </section>
    </div>
  );
}
