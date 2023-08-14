import { Module, ModuleCategory, TreeNavNode } from '@/types';
import rootCategory from '@/assets/modules.json';

export function findModuleOrCategory(
  slugs: string[],
  category: ModuleCategory = rootCategory
): ModuleCategory | Module | undefined {
  if (slugs.length === 0) {
    return category;
  }

  const [slug, ...rest] = slugs;

  const subCategory = category.subCategories.find((subCategory) => subCategory.slug === slug);

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

    category.subCategories.forEach((subCategory) => {
      explore(subCategory, [...slugs, subCategory.slug]);
    });

    category.modules.forEach((module) => {
      paths.push([...slugs, module.slug]);
    });
  }

  explore(rootCategory, []);

  return paths;
}

export function getModules() {
  const modules: Module[] = [];

  function explore(category: ModuleCategory) {
    category.subCategories.forEach((subCategory) => {
      explore(subCategory);
    });

    category.modules.forEach((module) => {
      modules.push(module);
    });
  }

  explore(rootCategory);

  return modules;
}

export function moduleCategoryToNode(moduleCategory: ModuleCategory): TreeNavNode {
  function moduleToNode(module: Module): TreeNavNode {
    return {
      name: module.name,
      path: module.path,
      children: [],
    };
  }

  return {
    name: moduleCategory.name,
    path: moduleCategory.path,
    children: [
      ...moduleCategory.modules.map(moduleToNode),
      ...moduleCategory.subCategories.map(moduleCategoryToNode),
    ],
  };
}
