import { A } from "@solidjs/router";

export default function Guides() {
  return (
    <div class="text-center mx-auto max-w-3xl space-y-5">
      <h1>Guides</h1>

      <p>
        Guides covering use of MIA. These include instructions to download and
        install MIA, use existing or create new workflows or simply understand
        the general structure of MIA.
      </p>

      <ul>
        <li>
          <A href="/guides/getting-started">Getting Started</A>
        </li>
        <li>
          <A href="/guides/example-workflows">Example Workflows</A>
        </li>
        <li>
          <A href="/guides/processing-view">Processing View</A>
        </li>
      </ul>
    </div>
  );
}
