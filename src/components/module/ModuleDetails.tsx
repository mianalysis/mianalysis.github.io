import { Module } from '@/types';

interface Props {
  module: Module;
}

export default function ModuleDetails({ module }: Props) {
  return (
    <div className="space-y-5">
      <p>{module.shortDescription}</p>

      <h2>Description</h2>

      <p>{module.fullDescription}</p>

      <h2>Parameters</h2>

      <table className="border-b">
        <thead>
          <tr>
            <th className="bold p-2">Parameter</th>
            <th className="bold p-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {module.parameters.map(parameter => (
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
