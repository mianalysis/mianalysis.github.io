import { For } from "solid-js";
import { useParams } from "solid-start";
import modules from "~/assets/modules.json";

export default function Module() {
  const params = useParams();

  const slug = params.slug;

  const module = modules.modules.find((module) => module.slug === slug);

  if (!module) {
    throw new Error(`Module ${slug} not found`);
  }

  return (
    <div class="text-center mx-auto max-w-3xl space-y-5">
      <h1> {module.name}</h1>

      <p>{module.shortDescription}</p>

      <hr />

      <h2>Description</h2>

      <p innerHTML={module.fullDescription} />

      <h2>Parameters</h2>

      <table class="border-b">
        <thead>
          <tr>
            <th class="p-2 bold">Parameter</th>
            <th class="p-2 bold">Description</th>
          </tr>
        </thead>
        <tbody>
          <For each={module.parameters}>
            {(parameter) => (
              <tr class="odd:bg-gray-100">
                <td class="p-2">{parameter.name}</td>
                <td class="p-2" innerHTML={parameter.description} />
              </tr>
            )}
          </For>
        </tbody>
      </table>
    </div>
  );
}
