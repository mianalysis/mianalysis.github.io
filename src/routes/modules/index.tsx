import { For } from "solid-js";
import modules from "~/assets/modules.json";

export default function Modules() {
  return (
    <div class="text-center mx-auto max-w-3xl space-y-5">
      <h1>Modules</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
        maxime libero dicta quia tempore harum in ullam aliquam obcaecati qui at
        eos similique necessitatibus ipsa. Laudantium impedit dolore ut tempora.
      </p>

      <ol>
        <For each={modules.modules}>
          {(module) => (
            <li>
              <a href={`/modules/${module.slug}`}>{module.name}</a>
            </li>
          )}
        </For>
      </ol>
    </div>
  );
}
