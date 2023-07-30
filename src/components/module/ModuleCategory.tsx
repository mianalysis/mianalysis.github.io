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
        {category.sub_categories.map((sub_category) => (
          <Card key={sub_category.slug} className="border-2 border-dashed" href={sub_category.path}>
            <h3>{sub_category.name}</h3>
            <p>{sub_category.description}</p>
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
