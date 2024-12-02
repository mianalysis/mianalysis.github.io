import classNames from 'classnames';
import { useScrollY } from '@/hooks/scroll';
import { useRef } from 'react';

interface Props {
  moduleNames: string[];
}

const scrollStep = 5;

export default function ModuleCloud({ moduleNames }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollY = Math.floor(useScrollY());

  return (
    <div
      className="select-none max-sm:max-h-[60vh] sm:max-h-none overflow-hidden"
      ref={containerRef}
      aria-hidden
    >
      <p className="flex flex-wrap justify-evenly gap-x-2 gap-y-1 lowercase cursor-default drop-shadow-2xl items-center">
        {moduleNames.map((module, i) => (
          <span
            key={module}
            className={classNames(
              // constant styles
              'hover:text-black transition-all duration-500',
              // stripe the 3 colors across the modules
              i % 3 === 0 ? 'text-mia-green' : i % 3 === 1 ? 'text-mia-blue' : 'text-mia-orange',
              // adjust the size of the modules
              i % 7 === 0 ? 'text-md' : 'text-xs',
              // adjust the blur of the modules
              scrollY % scrollStep === i % scrollStep
                ? 'opacity-100'
                : 'opacity-20  hover:opacity-100'
            )}
          >
            {module}
          </span>
        ))}
      </p>
    </div>
  );
}
