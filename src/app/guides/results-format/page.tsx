export default function ResultsFormat() {
  return (
    <div className="mx-auto max-w-3xl space-y-5">
      <h1>Results Format</h1>

      <p>Description of the default output results (.xlsx) format</p>

      <h2>Introduction</h2>

      <p>
        Numeric results generated by MIA workflows are exported to Excel spreadsheets. By default,
        each time a workflow is run, the results for all images processed will be collected into a
        single spreadsheet, however, this behaviour can be changed such that each input file
        generates its own spreadsheet.
      </p>

      <p>
        Output results files can contain multiple, highly configurable sheets. Typically, a results
        file will include a summary sheet with one row per input image, individual object sheets
        with one row per detected object and a couple of record-keeping sheets.{' '}
      </p>

      <p>The output file format is configured in the &quot;Output control&quot; module. </p>

      <h2>Summary sheet</h2>

      <ul>
        <li>
          The summary sheet is intended to provide a quick overview of the measurements contained
          within the individual object sheets. Information is broken down into four classes of
          column.{' '}
          <ul>
            <li>
              By default, each row of the summary sheet will summarise the results from a single
              input image.
            </li>
            <li>
              By changing the &quot;Summary mode&quot; parameter of the &quot;Output control&quot;
              module to &quot;Per timepoint per input file&quot;, a new row can be generated for
              each timepoint in the image, allowing for quick analysis of time-dependent processes.
            </li>
            <li>
              Alternatively, by setting this to &quot;Group by metadata&quot;, results can be
              grouped by a specific metadata item, with one row per unique metadata value.
            </li>
          </ul>
        </li>

        <li>
          Metadata values:
          <ul>
            <li>Record input file-specified properties, such as filenames and series numbers.</li>
            <li>
              These are important for result filtering and sorting, since results from multiple
              files may be included in a single results file.
            </li>
            <li>Column headings simply state the name of the metadata item.</li>
            <li>
              Metadata columns can be enabled/disabled using the &quot;Ind&quot; controls in the
              &quot;Output control&quot; module.
            </li>
          </ul>
        </li>

        <li>
          Image measurements:
          <li>These columns record the individual measurements assigned to each object.</li>
          <li>Columns headings are in the form: [Image name]_(IM) // [Measurement name]</li>
          <li>
            For example, an image called &quot;Binary&quot; with the measurement &quot;THRESHOLD //
            GLOBAL Huang&quot; would be called &quot;Binary_(IM) // THRESHOLD // GLOBAL Huang&quot;.
          </li>
          <li>
            Image measurements columns can be enabled/disabled using the &quot;Ind&quot; controls in
            the &quot;Output control&quot; module.
          </li>
        </li>

        <li>
          Object counts:
          <ul>
            <li>These simply state the number of objects of the specified class.</li>
            <li>These have headers in the form: [Objects name]_(OBJ) // NUMBER</li>
            <li>
              For example, for the count of detected &quot;Nuclei&quot; objects, this would be
              &quot;Nuclei_(OBJ) // NUMBER&quot;.
            </li>
            <li>
              Object count columns can be enabled/disabled using the &quot;Show object counts&quot;
              control in the &quot;Output control&quot; module. Object counts are either on or off
              for all objects.
            </li>
          </ul>
        </li>

        <li>
          Object measurement statistics:
          <li>
            Since multiple objects may be detected for an input file, each with their own
            measurements, these columns provide a single summary measurement statistic.
          </li>
          <li>
            Headers for these values are in the form: [Objects name]_(OBJ_[Statistic]) //
            [Measurement name]
          </li>
          <li>
            For example, the header corresponding to the mean of the &quot;SHAPE // N_VOXELS&quot;
            measurement for &quot;Nuclei&quot; objects would be &quot;Nuclei_(OBJ_MEAN) // SHAPE //
            N_VOXELS&quot;.
          </li>
          <li>
            Supported statistics are the mean (&quot;MEAN&quot;), minimum (&quot;MIN&quot;), maximum
            (&quot;MAX&quot;), standard deviation (&quot;STD&quot;) and sum (&quot;SUM&quot;).
          </li>
          <li>
            Object measurement statistic columns can be enabled/disabled using the &quot;Mean&quot;,
            &quot;Min&quot;, &quot;Max&quot;, &quot;Sum&quot; and &quot;Std&quot; controls in the
            &quot;Output control&quot; module. The &quot;Ind&quot; control determines if the
            measurement appears in the object-specific results sheet.
          </li>
        </li>
      </ul>

      <h2>Object sheets</h2>

      <ul>
        <li>
          The individual object sheets include the individual measurements for each detected object.
          Each row of an object results sheet corresponds to a single detected object.
        </li>

        <li>
          The first column is always (&quot;OBJECT_ID&quot;), which is the unique ID number for that
          object in that analysis run.
          <ul>
            <li>
              Note: IDs are only unique to that analysis run, so if multiple input files were
              processed, the same ID numbers will likely appear.
            </li>
          </ul>
        </li>

        <li>
          As with the summary sheet, each row has columns for file-specific metadata items as well
          as a column for each exported measurement.
        </li>

        <li>
          Metadata and measurement columns can be disabled with the &quot;Ind&quot; controls in the
          &quot;Output control&quot; module.
        </li>
      </ul>

      <h2>Record-keeping sheets</h2>

      <ul>
        <li>
          The final two sheets are always record-keeping sheets. These are useful for retaining
          knowledge of how a workflow was run (e.g. plugin version) as well as seeing if any errors
          occurred during execution.
        </li>

        <li>
          The &quot;Configuration&quot; sheet includes some device-specific information such as the
          computer operating system, plugin version and date/time of execution. It also includes a
          full copy of the .mia workflow file used. In the event of the workflow file being lost,
          these rows can be copied into a text file and saved with the .mia extension.
        </li>

        <li>
          The &quot;Log&quot; sheet contains a list of any error messages encountered during the
          analysis run. All being well, this sheet should be empty.
        </li>
      </ul>
    </div>
  );
}
