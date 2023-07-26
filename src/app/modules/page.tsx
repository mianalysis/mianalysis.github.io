import rootCategory from '@/assets/modules.json';
import ModuleCategory from '@/components/module/ModuleCategory';

export default function Modules() {
  return (
    <div className="mx-auto max-w-4xl space-y-5">
      <h1>Modules</h1>

      <ModuleCategory category={rootCategory} />
    </div>
  );
}
