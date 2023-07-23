import { Module } from '@/types';
import ModuleParameters from './ModuleParameters';

interface Props {
  module: Module;
}

export default function ModuleDetails({ module }: Props) {
  return (
    <div className="space-y-5">
      <p>{module.shortDescription}</p>

      <h2>Description</h2>

      <p dangerouslySetInnerHTML={{ __html: module.fullDescription }} />

      <h2>Parameters</h2>

      <ModuleParameters module={module} />
    </div>
  );
}
