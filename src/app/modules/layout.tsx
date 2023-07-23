import TreeNav from '@/components/TreeNav';
import rootCategory from '@/assets/modules.json';
import Link from 'next/link';

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 gap-16">
      <div>
        <Link href="/modules">Modules</Link>

        <TreeNav category={rootCategory} />
      </div>

      <div className="col-span-3">{children}</div>
    </div>
  );
}
