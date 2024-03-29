import TreeNav from '@/components/TreeNav';
import modules from '@/assets/modules.json';
import Link from 'next/link';
import { moduleCategoryToNode } from '@/lib/modules';
import { ReactNode } from 'react';

const rootNode = moduleCategoryToNode(modules);

export default function ModuleLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center gap-16 w-full">
      {/* Tree nav for large screens */}
      <div className="w-80 max-xl:hidden sticky top-32 self-start max-h-[80vh] pr-4 overflow-auto">
        <Link href="/modules">Modules</Link>

        <TreeNav node={rootNode} />
      </div>

      <div>{children}</div>

      {/* Keep children center only on large screens */}
      <div className="w-80 max-2xl:hidden" />
    </div>
  );
}
