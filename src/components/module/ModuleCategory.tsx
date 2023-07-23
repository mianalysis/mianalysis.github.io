import Card from '../Card';
import type { ModuleCategory as ModuleCategoryType } from '@/types';

interface Props {
  category: ModuleCategoryType;
}

export default function ModuleCategory({ category }: Props) {
  return (
    <div className="space-y-10">
      <p>{category.description}</p>

      <section className="grid grid-cols-2 gap-8">
        {category.sub_categories.map(sub_category => (
          <Card
            key={sub_category.slug}
            title={sub_category.name}
            text={sub_category.description}
            href={sub_category.path}
          />
        ))}
        {category.modules.map(module => (
          <Card key={module.slug} title={module.name} text={module.shortDescription} href={module.path} />
        ))}
      </section>
    </div>
  );
}
