'use client';

import { partition } from '@/lib/util';
import { TreeNavNode } from '@/types';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

interface Props {
  node: TreeNavNode;
  depth?: number;
}

export default function TreeNav({ node, depth = 1 }: Props) {
  const [internalChildren, leafChildren] = partition(
    node.children,
    (child) => child.children.length > 0
  );

  return (
    <ul className="list-none text-gray-500 pl-0 pb-0">
      {internalChildren.map((child) => (
        <InternalNode key={child.path} node={child} depth={depth} />
      ))}
      {leafChildren.map((child) => (
        <LeafNode key={child.path} node={child} />
      ))}
    </ul>
  );
}

function InternalNode({ node, depth }: { node: TreeNavNode; depth: number }) {
  const pathname = usePathname();

  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => setHidden((hidden) => !hidden && pathname.endsWith(node.path));

  const expanded = pathname.includes(node.path) && !hidden;

  return (
    <li>
      <Link
        href={node.path}
        className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950"
        onClick={toggleHidden}
      >
        {expanded && depth > 1 && (
          <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
        )}
        {node.name}
        {expanded ? <MdExpandMore /> : <MdChevronRight />}
      </Link>

      {expanded && (
        <div className="ml-4 border-l border-gray-200 pl-3 delay-75 my-2">
          {TreeNav({ node, depth: depth + 1 })}
        </div>
      )}
    </li>
  );
}

function LeafNode({ node }: { node: TreeNavNode }) {
  const pathname = usePathname();

  return (
    <li className="relative transition-colors duration-200 hover:text-gray-950">
      <Link href={node.path} className="flex py-1">
        {node.name}
      </Link>
      {pathname.endsWith(node.path) && (
        <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
      )}
    </li>
  );
}
