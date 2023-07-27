import MiaIcon from '@/components/MiaIcon';
import Link from 'next/link';

export default function EditingView() {
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <h1>Editing View</h1>

      <p>The interface for creating, editing and testing workflows</p>

      <h2>Introduction</h2>

      <p>
        Workflows can be constructed and tested in &quot;editing view&quot;. Modules are assembled
        into a sequential list, with parameters for each displayed when the corresponding module
        name is clicked. It&apos;s also possible to control which parameters are visible to end
        users via{' '}
        <Link className="link" href="/guides/processing-view">
          processing view
        </Link>
        . In editing view, workflows can be manually run one module at a time or initiated for a
        full run in the same way as in processing view.
      </p>

      <p>
        Details on constructing and editing workflows can be found in the{' '}
        <Link className="link" href="/guides/creating-workflows">
          creating workflows
        </Link>{' '}
        guide.{' '}
      </p>

      <div className="aspect-video bg-black" />

      <h2>Workflow controls</h2>

      <p>
        The left-most section of editing view is split into two sections. The top half deals with
        adding, removing and sorting modules in the current workflow, while the bottom half offers
        shortcuts for workflow handling (e.g. loading and saving).
      </p>

      <p>
        The + button will open a menu listing all available modules sorted by category. Selecting a
        module will insert it into the current workflow (see &quot;Modules in workflow&quot; below).
        If any module is currently selected in the workflow, the new module will be inserted
        immediately after it, otherwise, it will be added to the bottom of the list. Similarly, the
        - button will remove any selected modules (note: multiple modules can be selected from the
        current workflow). The ? and ? buttons can be used to move modules around in the workflow. A
        full list of modules and descriptions can be found in the{' '}
        <Link className="link" href="/modules">
          module documentation
        </Link>
        .
      </p>

      <p>
        Existing workflows can be loaded from .mia files using the &quot;Load&quot; button and saved
        with &quot;Save&quot;. If the workflow has been loaded from a .mia file or has been saved
        previously, the &quot;Save&quot; button will overwrite the existing file. To save to a new
        file, please use &quot;File {'>'} Save as...&quot;. A full analysis run can be started using
        the &quot;Run&quot; button. This will run the workflow on the file specified in &quot;Input
        control&quot; and is equivalent to starting an analysis from &quot;processing view&quot;.
        The &quot;Stop&quot; button will terminate any active analysis runs.
      </p>

      <div className="aspect-video bg-black" />

      <h2>Modules in workflow</h2>

      <p>
        Modules forming the current workflow are assembled into a sequential list, with the first to
        be evaluated at the top. A pair of fixed modules, &quot;Input control&quot; and &quot;Output
        control&quot;, are always present at the top and bottom of the module list. These are
        concerned with selecting the file(s) to process and exporting results, respectively.
      </p>

      <p>
        Each module can be enabled and disabled using the associated{' '}
        <MiaIcon type="power_bright_green.png" /> and <MiaIcon type="power_black_strike.png" />{' '}
        buttons, where a strike-through indicates the module is currently disabled. Most modules are
        also able to display an immediate visual output when they have been evaluated, this
        visualisation can be toggled using the <MiaIcon type="eye_open_black.png" /> (visualisation
        enabled) and <MiaIcon type="eye_closed_black.png" /> (visualisation disabled) buttons.
      </p>

      <p>
        Module parameters can be edited by selecting the associated module name (see &quot;Module
        parameters&quot; below). Modules can be moved within the workflow by selecting their name
        and dragging them to a new position. Multiple modules can be moved by holding down the Ctrl
        or Shift keyboard buttons or dragging the mouse over multiple module names. Modules can be
        assigned nicknames by right-clicking the name and selecting &quot;Rename&quot;.
      </p>

      <p>
        Primarily for the purpose of testing, workflows can be run manually, one module at a time
        using the evaluation buttons. The <MiaIcon type="arrow_open_black.png" /> button indicates a
        module not yet run, <MiaIcon type="dual_ring.gif" /> a module currently being evaluated and{' '}
        <MiaIcon type="arrow_closed_green.png" />a module previously run. Editing a module will
        cause any previously-evaluated modules downstream to reset to the &quot;not yet run&quot;
        state.
      </p>

      <p>
        Separators can be used to break modules down into groups. Groups can be collapsed and
        expanded using the <MiaIcon type="down_arrow_dark_blue.png" /> and{' '}
        <MiaIcon type="right_arrow_dark_blue.png" /> buttons on the associated separator row. All
        modules of a group can also be simultaneously enabled or disabled using the associated
        separator <MiaIcon type="power_dark_blue.png" /> button.
      </p>

      <p>
        Any modules identified as containing errors (e.g. missing input images or objects) will be
        shown in red with the <MiaIcon type="warning_red.png" /> icon. It is also possible to have
        optional modules which are disabled under specific conditions (see{' '}
        <Link className="link" href="/modules/workflow">
          workflow modules
        </Link>
        ). Skipped modules are highlighted in orange and given the{' '}
        <MiaIcon type="skip_arrow_orange.png" /> icon.
      </p>

      <div className="aspect-video bg-black" />

      <h2>Module parameters</h2>

      <p>
        Each module has a set of associated parameters, which can be accessed by clicking the
        relevant module name in the module list (see &quot;Modules in workflow&quot;). These
        parameters are broken down into sections based on their common actions. The parameter
        control will depend on its type (e.g. input objects list objects available in the
        workspace).
      </p>

      <p>
        By default, no modules are visible to the end user in{' '}
        <Link className="link" href="/guides/processing-view">
          processing view
        </Link>
        . Modules can be made editable in processing view by toggling the associated visibility
        button, with <MiaIcon type="eye_open_black.png" /> indicating a visible (editable) parameter
        and <MiaIcon type="eye_closed_black.png" /> one that will not be visible. Modules with
        visible parameters will also have their name displayed in processing view, unless &quot;Show
        basic title&quot; is unticked.
      </p>

      <p>
        Similarly, entire modules can be made optional by selecting &quot;Can be disabled&quot;.
        When selected, the module title will be displayed in processing view along with an{' '}
        <MiaIcon type="power_bright_green.png" /> or <MiaIcon type="power_black_strike.png" /> icon
        (depending on state of the module).
      </p>

      <p>
        Any modules with identified errors will be highlighted in red along with the{' '}
        <MiaIcon type="warning_red.png" /> icon.
      </p>

      <div className="aspect-video bg-black" />

      <h2>Module search</h2>

      <p>
        An optional search panel can be enabled by either selecting &quot;Search for module&quot;
        from the &quot;Add new module&quot; (+) menu or by going to &quot;View {'>'} Show module
        search&quot;. Here, modules can be searched based on words that may appear in the module
        name, module description or associated parameter descriptions. The module search will always
        look at module names, but module descriptions and associated parameter descriptions can be
        optionally included using the tick boxes.
      </p>

      <p>
        Multiple search terms can be provided (e.g. &quot;overlay outline&quot;), with identified
        modules only needing to match one of the terms. Mandatory search terms can be included using
        quotation marks - all identified modules must include at least one instance of such terms.
      </p>

      <p>
        Found modules are listed below the search controls, with the best matches (those including
        most search terms) at the top. Each identified module can be directly added to the current
        workflow using the associated + button.
      </p>

      <div className="aspect-video bg-black" />
    </div>
  );
}
