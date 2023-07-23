'use client';

import { ModuleCategory } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// TODO: Make generic over a "node" type rather than a ModuleCategory
interface Props {
  category: ModuleCategory;
}

export default function TreeNav({ category }: Props) {
  const pathname = usePathname();

  return (
    <ul>
      {category.sub_categories.map(sub_category => (
        <li key={sub_category.slug}>
          <Link href={sub_category.path}>{sub_category.name}</Link>
          {pathname.startsWith(sub_category.path) && (
            <div className="border-l pl-4">{TreeNav({ category: sub_category })}</div>
          )}
        </li>
      ))}
      {category.modules.map(module => (
        <li key={module.slug}>
          <Link href={module.path}>{module.name}</Link>
        </li>
      ))}
    </ul>
  );
}
