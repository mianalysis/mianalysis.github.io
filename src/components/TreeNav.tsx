'use client';

import { Module, ModuleCategory } from '@/types';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

// TODO: Make generic over a "node" type rather than a ModuleCategory
interface Props {
  category: ModuleCategory;
  depth?: number;
}

export default function TreeNav({ category, depth = 1 }: Props) {
  return (
    <ul className="list-none text-gray-500">
      {category.subCategories.map((subCategory) => (
        <InternalNode key={subCategory.slug} category={subCategory} depth={depth} />
      ))}
      {category.modules.map((module) => (
        <LeafNode key={module.slug} module={module} />
      ))}
    </ul>
  );
}

function InternalNode({ category, depth }: { category: ModuleCategory; depth: number }) {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => setHidden((hidden) => !hidden && pathname === category.path);

  const expanded = pathname.startsWith(category.path) && !hidden;

  return (
    <li>
      <Link
        href={category.path}
        className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950"
        onClick={toggleHidden}
      >
        {expanded && depth > 1 && (
          <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
        )}
        {category.name}
        {expanded ? <MdExpandMore /> : <MdChevronRight />}
      </Link>

      <div
        className={classNames(
          'ml-4 border-l border-gray-200 pl-3 opacity-0 max-h-0 delay-75 transition-all',
          { 'opacity-100 max-h-screen my-2': expanded }
        )}
      >
        {TreeNav({ category, depth: depth + 1 })}
      </div>
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
