import TreeNav from '@/components/TreeNav';
import { TreeNavNode } from '@/types';
import Link from 'next/link';
import { ReactNode } from 'react';

const rootNode: TreeNavNode = {
  name: 'Guides',
  path: '/guides',
  children: [
    {
      name: 'Getting Started',
      path: '/guides/getting-started',
      children: [],
    },
    {
      name: 'Example Workflows',
      path: '/guides/example-workflows',
      children: [],
    },
    {
      name: 'Processing View',
      path: '/guides/processing-view',
      children: [],
    },
    {
      name: 'Using existing workflows',
      path: '/guides/using-existing-workflows',
      children: [],
    },
    {
      name: 'Editing view',
      path: '/guides/editing-view',
      children: [],
    },
    {
      name: 'Creating workflows',
      path: '/guides/creating-workflows',
      children: [],
    },
    {
      name: 'Results format',
      path: '/guides/results-format',
      children: [],
    },
    {
      name: 'Running headless',
      path: '/guides/running-headless',
      children: [],
    },
    {
      name: 'Troubleshooting',
      path: '/guides/troubleshooting',
      children: [],
    },
  ],
};

export default function GuideLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex justify-center gap-16 w-full">
      {/* Tree nav for large screens */}
      <div className="w-80 max-xl:hidden sticky top-32 self-start max-h-[80vh] pr-4 overflow-auto">
        <Link href="/guides">Guides</Link>

        <TreeNav node={rootNode} />
      </div>

      <div>{children}</div>

      {/* Keep children center only on large screens */}
      <div className="w-80 max-2xl:hidden" />
    </div>
  );
}
