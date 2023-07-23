import { Module } from '@/types';

interface Props {
  module: Module;
}

export default function ModuleParameters({ module }: Props) {
  return (
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
            <td className="p-2" dangerouslySetInnerHTML={{ __html: parameter.description }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
