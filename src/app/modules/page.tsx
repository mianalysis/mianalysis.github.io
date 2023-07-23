import rootCategory from '@/assets/modules.json';
import ModuleCategory from '@/components/module/ModuleCategory';

export default function Modules() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 text-center">
      <h1>Modules</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus, maxime libero dicta quia tempore harum in
        ullam aliquam obcaecati qui at eos similique necessitatibus ipsa. Laudantium impedit dolore ut tempora.
      </p>

      <ModuleCategory category={rootCategory} />
    </div>
  );
}
