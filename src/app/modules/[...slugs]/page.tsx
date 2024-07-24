import ModuleCategoryComponent from '@/components/module/ModuleCategory';
import ModuleDetails from '@/components/module/ModuleDetails';
import { findModuleOrCategory, getModulePaths } from '@/lib/modules';
// import { Module } from '@/types';

export const dynamicParams = false;

export function generateStaticParams() {
  const paths = getModulePaths();

  return paths.map((slugs) => ({ slugs }));
}

interface Props {
  params: { slugs: string[] };
}

export default function Module({ params }: Props) {
  const node = findModuleOrCategory(params.slugs);

  // TODO: Handle differently
  if (!node) {
    return <div>404</div>;
  }

  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <h1> {node.name}</h1>
      {'subCategories' in node ? (
        <ModuleCategoryComponent category={node} />
      ) : (
        <ModuleDetails module={node} />
      )}
    </div>
  );
}
