import { Module } from '@/types';
import ModuleParameters from './ModuleParameters';

interface Props {
  module: Module;
}

export default function ModuleDetails({ module }: Props) {
  return (
    <div className="space-y-16">
      <p>{module.shortDescription}</p>

      <section>
        <h2>Description</h2>

        <p dangerouslySetInnerHTML={{ __html: module.fullDescription }} />
      </section>

      <section>
        <h2>Parameters</h2>

        <ModuleParameters module={module} />
      </section>
    </div>
  );
}
