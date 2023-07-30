import TreeNav from '@/components/TreeNav';
import rootCategory from '@/assets/modules.json';
import Link from 'next/link';

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center gap-16 w-full">
      {/* Tree nav for large screens */}
      <div className="w-80 hidden xl:block">
        <Link href="/modules">Modules</Link>

        <TreeNav category={rootCategory} />
      </div>

      <div>{children}</div>

      {/* Keep children center only on large screens */}
      <div className="w-80 hidden 2xl:block" />
    </div>
  );
}
