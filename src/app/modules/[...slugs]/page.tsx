import rootCategory from '@/assets/modules.json';
import ModuleCategoryComponent from '@/components/module/ModuleCategory';
import ModuleDetails from '@/components/module/ModuleDetails';
import { ModuleCategory, Module } from '@/types';

export const dynamicParams = false;

// export async function generateStaticParams() {
//   return modules.map(module => ({
//     slug: module.slug,
//   }));
// }

interface Props {
  params: { slugs: string[] };
}

function findModuleOrCategoryNode(
  category: ModuleCategory,
  slugs: string[]
): ModuleCategory | Module | undefined {
  if (slugs.length === 0) {
    return category;
  }

  const slug = slugs.shift();

  const subCategory = category.sub_categories.find((sub_category) => sub_category.slug === slug);

  if (subCategory) {
    return findModuleOrCategoryNode(subCategory, slugs);
  }

  return category.modules.find((module) => module.slug === slug);
}

export default function Module({ params }: Props) {
  const node = findModuleOrCategoryNode(rootCategory, params.slugs);

  // TODO: Handle differently
  if (!node) {
    return <div>404</div>;
  }

  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1> {node.name}</h1>
      {'sub_categories' in node ? (
        <ModuleCategoryComponent category={node} />
      ) : (
        <ModuleDetails module={node} />
      )}
    </div>
  );
}
