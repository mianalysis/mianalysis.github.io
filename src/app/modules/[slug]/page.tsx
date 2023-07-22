import modules from "@/assets/modules.json";

export const dynamicParams = false;

export async function generateStaticParams() {
  return modules.modules.map((module) => ({
    slug: module.slug,
  }));
}

export default function Module({ params }: { params: { slug: string } }) {
  const slug = params.slug;

  const mod = modules.modules.find((module) => module.slug === slug);

  if (!mod) {
    throw new Error(`Module ${slug} not found`);
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1> {mod.name}</h1>

      <p>{mod.shortDescription}</p>

      <hr />

      <h2>Description</h2>

      <p>{mod.fullDescription}</p>

      <h2>Parameters</h2>

      <table className="border-b">
        <thead>
          <tr>
            <th className="bold p-2">Parameter</th>
            <th className="bold p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {mod.parameters.map((parameter) => (
            <tr className="odd:bg-gray-100" key={parameter.name}>
              <td className="p-2">{parameter.name}</td>
              <td className="p-2">{parameter.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
