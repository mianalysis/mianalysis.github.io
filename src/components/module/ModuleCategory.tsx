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

      <section className="grid grid-cols-2 gap-8">
        {category.sub_categories.map((sub_category) => (
          <Card
            key={sub_category.slug}
            className="border-2 border-dashed"
            title={sub_category.name}
            text={sub_category.description}
            href={sub_category.path}
          >
            <div className="flex items-center gap-1">
              See modules <MdChevronRight />
            </div>
          </Card>
        ))}
        {category.modules.map((module) => (
          <Card
            key={module.slug}
            className="border-gray-300"
            title={module.name}
            text={module.shortDescription}
            href={module.path}
          />
        ))}
      </section>
    </div>
  );
}
