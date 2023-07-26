'use client';

import { ModuleCategory } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

// TODO: Make generic over a "node" type rather than a ModuleCategory
interface Props {
  category: ModuleCategory;
  depth?: number;
}

export default function TreeNav({ category, depth = 1 }: Props) {
  const pathname = usePathname();

  return (
    <ul className="text-gray-500">
      {category.sub_categories.map((sub_category) => (
        <li key={sub_category.slug}>
          <Link
            href={sub_category.path}
            className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950"
          >
            {pathname.startsWith(sub_category.path) && depth > 1 && (
              <div className="absolute -left-[13px] bottom-0 top-0 w-[1px] bg-blue-600" />
            )}
            {sub_category.name}
            {pathname.startsWith(sub_category.path) ? <MdExpandMore /> : <MdChevronRight />}
          </Link>

          {pathname.startsWith(sub_category.path) && (
            <div className="my-2 ml-4 border-l border-gray-200 pl-3">
              {TreeNav({ category: sub_category, depth: depth + 1 })}
            </div>
          )}
        </li>
      ))}
      {category.modules.map((module) => (
        <li
          key={module.slug}
          className="relative transition-colors duration-200 hover:text-gray-950"
        >
          <Link href={module.path} className="flex py-1">
            {module.name}
          </Link>
          {pathname === module.path && (
            <div className="absolute -left-[13px] bottom-0 top-0 w-[1px] bg-blue-600" />
          )}
        </li>
      ))}
    </ul>
  );
}
