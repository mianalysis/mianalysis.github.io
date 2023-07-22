import modules from "@/assets/modules.json";

export default function Modules() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1>Modules</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus,
        maxime libero dicta quia tempore harum in ullam aliquam obcaecati qui at
        eos similique necessitatibus ipsa. Laudantium impedit dolore ut tempora.
      </p>

      <ol>
        {modules.modules.map((module) => (
          <li key={module.slug}>
            <a href={`/modules/${module.slug}`}>{module.name}</a>
          </li>
        ))}
      </ol>
    </div>
  );
}
