import { Module, ModuleCategory } from '@/types';
import rootCategory from '@/assets/modules.json';

export function findModuleOrCategory(
  slugs: string[],
  category: ModuleCategory = rootCategory
): ModuleCategory | Module | undefined {
  if (slugs.length === 0) {
    return category;
  }

  const [slug, ...rest] = slugs;

  const subCategory = category.sub_categories.find((sub_category) => sub_category.slug === slug);

  if (subCategory) {
    return findModuleOrCategory(rest, subCategory);
  }

  return category.modules.find((module) => module.slug === slug);
}

export function getModulePaths() {
  const paths: string[][] = [];

  function explore(category: ModuleCategory, slugs: string[]) {
    if (slugs.length > 0) {
      paths.push(slugs);
    }

    category.sub_categories.forEach((sub_category) => {
      explore(sub_category, [...slugs, sub_category.slug]);
    });

    category.modules.forEach((module) => {
      paths.push([...slugs, module.slug]);
    });
  }

  explore(rootCategory, []);

  return paths;
}
