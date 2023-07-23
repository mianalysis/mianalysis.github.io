export default function Troubleshooting() {
  return (
    <div className="mx-auto max-w-5xl space-y-5">
      <h1>Troubleshooting</h1>

      <p>List of common issues and solutions</p>

      <h2>Introduction</h2>

      <p>
        MIA is in ongoing development and from time-to-time, issues may arise. Below are listed some
        common problems and solutions. For any problems not covered in the table (or if you have
        concerns something isn&apos;t working correctly), please submit an issue via GitHub.
      </p>

      <table className="text-left">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>Module [name] not loaded. Dependencies not satisfied</code> displayed when
              starting MIA
            </td>
            <td>
              Certain modules require specific versions of other plugins to be installed. The
              warning message should list the required version of that plugin. You can check what
              version of a plugin is currently installed by looking in the &quot;plugins&quot;
              folder of your Fiji installation.
            </td>
          </tr>
          <tr>
            <td>
              <code>Loaded workflow created in different version of MIA.</code> displayed when
              loading a workflow
            </td>
            <td>
              On its own this warning doesn&apos;t necessarily mean anything won&apos;t work as
              expected; however, to ensure the workflow operates as intended, it&apos;s advisable to
              install the same version of MIA as that used to prepare the workflow. Subsequent lines
              of this warning should indicate the version used to create the workflow.
            </td>
          </tr>
          <tr>
            <td>
              <code>Module [name] not found (skipping)</code> displayed when loading a workflow
            </td>
            <td>
              If loading a workflow prepared in an older version of MIA, the module in question may
              have been removed. Similarly, if the workflow is from a newer version of MIA, this
              module may not yet have been added. To fix this, install the MIA version matching that
              used to create the workflow.
            </td>
          </tr>
          <tr>
            <td>
              <code>Parameter not found. Module: [name]. Parameter: [name]. Value: [name].</code>{' '}
              displayed when loading a workflow
            </td>
            <td>
              If loading a workflow prepared in an older version of MIA, the parameter in question
              may have been renamed or removed. To fix this, install the MIA version matching that
              used to create the workflow.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
