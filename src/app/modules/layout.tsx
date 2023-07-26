import TreeNav from '@/components/TreeNav';
import rootCategory from '@/assets/modules.json';
import Link from 'next/link';

export default function ModuleLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-6 gap-8 px-32">
      <div className="w-80">
        <Link href="/modules">Modules</Link>

        <TreeNav category={rootCategory} />
      </div>

      <div className="col-span-4">{children}</div>

      <div />
    </div>
  );
}
