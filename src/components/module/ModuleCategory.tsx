import Card from '../Card';
import type { ModuleCategory as ModuleCategoryType } from '@/types';
import { MdChevronRight } from 'react-icons/md';

interface Props {
  category: ModuleCategoryType;
}

export default function ModuleCategory({ category }: Props) {
  return (
    <div className="space-y-10">
      <p>{category.description}</p>

      <section className="grid sm:grid-cols-2 gap-8">
        {category.subCategories.map((subCategory) => (
          <Card key={subCategory.slug} className="border-2 border-dashed" href={subCategory.path}>
            <h3>{subCategory.name}</h3>
            <p>{subCategory.description}</p>
            <div className="flex items-center gap-1">
              See modules <MdChevronRight />
            </div>
          </Card>
        ))}

        {category.modules.map((module) => (
          <Card key={module.slug} className="border-gray-300" href={module.path}>
            <h3>{module.name}</h3>
            <p>{module.shortDescription}</p>
          </Card>
        ))}
      </section>
    </div>
  );
}
