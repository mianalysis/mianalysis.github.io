import { Module } from '@/types';
import ModuleParameters from './ModuleParameters';
import AnchoredHeading from '../layout/AnchoredHeading';

interface Props {
  module: Module;
}

export default function ModuleDetails({ module }: Props) {
  return (
    <div className="space-y-16">
      <p className="text-2xl">{module.shortDescription}</p>

      <section>
        <AnchoredHeading type="h2">Description</AnchoredHeading>

        <p dangerouslySetInnerHTML={{ __html: module.fullDescription }} />
      </section>

      <section>
        <AnchoredHeading type="h2">Parameters</AnchoredHeading>

        <ModuleParameters module={module} />
      </section>
    </div>
  );
}
