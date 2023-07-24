import { Module } from '@/types';

interface Props {
  module: Module;
}

export default function ModuleParameters({ module }: Props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {module.parameters.map((parameter) => (
          <tr key={parameter.name}>
            <td>{parameter.name}</td>
            <td dangerouslySetInnerHTML={{ __html: parameter.description }} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
