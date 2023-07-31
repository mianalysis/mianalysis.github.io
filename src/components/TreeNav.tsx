'use client';

import { Module, ModuleCategory } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

// TODO: Make generic over a "node" type rather than a ModuleCategory
interface Props {
  category: ModuleCategory;
  depth?: number;
}

export default function TreeNav({ category, depth = 1 }: Props) {
  return (
    <ul className="list-none text-gray-500">
      {category.sub_categories.map((sub_category) => (
        <InternalNode key={sub_category.slug} category={sub_category} depth={depth} />
      ))}
      {category.modules.map((module) => (
        <LeafNode key={module.slug} module={module} />
      ))}
    </ul>
  );
}

function InternalNode({ category, depth }: { category: ModuleCategory; depth: number }) {
  const pathname = usePathname();

  const expanded = pathname.startsWith(category.path);

  // TODO: Add support for collapsing the node

  return (
    <li>
      <Link
        href={category.path}
        className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950"
      >
        {expanded && depth > 1 && (
          <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
        )}
        {category.name}
        {expanded ? <MdExpandMore /> : <MdChevronRight />}
      </Link>

      {expanded && (
        <div className="my-2 ml-4 border-l border-gray-200 pl-3">
          {TreeNav({ category, depth: depth + 1 })}
        </div>
      )}
    </li>
  );
}

function LeafNode({ module }: { module: Module }) {
  const pathname = usePathname();

  return (
    <li className="relative transition-colors duration-200 hover:text-gray-950">
      <Link href={module.path} className="flex py-1">
        {module.name}
      </Link>
      {pathname === module.path && (
        <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
      )}
    </li>
  );
}
