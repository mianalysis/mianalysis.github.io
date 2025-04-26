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
    <ul className="list-none pb-0 !pl-0 text-gray-500">
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
  const relatesToCurrentPath = currentPath.startsWith(node.path);

  const [expanded, setExpanded] = useState(relatesToCurrentPath);

  const toggleExpanded = () => setExpanded((e) => !e);

  return (
    <li>
      <div className="relative flex justify-between py-1 transition-colors duration-200 hover:text-gray-950">
        {relatesToCurrentPath && depth > 1 && (
          <div className="bg-mia-blue absolute top-0 bottom-0 -left-[14px] w-[3px]" />
        )}

        <a href={node.path}>{node.name}</a>

        <button type="button" onClick={toggleExpanded} className="p-1">
          {expanded ? <MdExpandMore /> : <MdChevronRight />}
        </button>
      </div>

      {expanded && (
        <div className="my-2 ml-4 border-l border-gray-200 pl-3 delay-75">
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
        <div className="bg-mia-blue absolute top-0 bottom-0 -left-[14px] w-[3px]" />
      )}
    </li>
  );
}
