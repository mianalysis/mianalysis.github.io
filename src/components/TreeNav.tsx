import { partition } from '@/lib/util';
import type { TreeNavNode } from '@/types';
import { useState } from 'react';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';

interface Props {
  node: TreeNavNode;
  currentPath: string;
  depth?: number;
}

export default function TreeNav({ node, currentPath, depth = 1 }: Props) {
  const [internalChildren, leafChildren] = partition(
    node.children,
    (child) => child.children.length > 0
  );

  return (
    <ul className="list-none text-gray-500 pl-0 pb-0">
      {internalChildren.map((child) => (
        <InternalNode key={child.path} node={child} currentPath={currentPath} depth={depth} />
      ))}
      {leafChildren.map((child) => (
        <LeafNode key={child.path} node={child} currentPath={currentPath} />
      ))}
    </ul>
  );
}

function InternalNode({
  node,
  currentPath,
  depth,
}: {
  node: TreeNavNode;
  currentPath: string;
  depth: number;
}) {
  const [hidden, setHidden] = useState(false);

  const toggleHidden = () => setHidden((hidden) => !hidden && currentPath.endsWith(node.path));

  const expanded = currentPath.includes(node.path) && !hidden;

  return (
    <li>
      <a
        href={node.path}
        className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950"
        onClick={toggleHidden}
      >
        {expanded && depth > 1 && (
          <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
        )}
        {node.name}
        {expanded ? <MdExpandMore /> : <MdChevronRight />}
      </a>

      {expanded && (
        <div className="ml-4 border-l border-gray-200 pl-3 delay-75 my-2">
          {TreeNav({ node, currentPath, depth: depth + 1 })}
        </div>
      )}
    </li>
  );
}

function LeafNode({ node, currentPath }: { node: TreeNavNode; currentPath: string }) {
  return (
    <li className="relative transition-colors duration-200 hover:text-gray-950">
      <a href={node.path} className="flex py-1">
        {node.name}
      </a>
      {currentPath.endsWith(node.path) && (
        <div className="absolute -left-[14px] bottom-0 top-0 w-[3px] bg-mia-blue" />
      )}
    </li>
  );
}
