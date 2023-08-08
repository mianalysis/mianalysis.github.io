'use client';

import { getModules } from '@/lib/modules';
import sample1 from '@/../public/images/samples/sample_1.png';
import sample2 from '@/../public/images/samples/sample_2.png';
import sample3 from '@/../public/images/samples/sample_3.png';
import sample4 from '@/../public/images/samples/sample_4.png';
import Image from 'next/image';
import classNames from 'classnames';
import { useScrollY } from '@/hooks/scroll';
import { useRef } from 'react';
import { uniqueBy } from '@/lib/util';

const modules = uniqueBy(getModules(), 'slug');

const scrollStep = 5;

export default function ModuleCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollY = Math.floor(useScrollY());

  return (
    <div
      className="relative select-none max-sm:max-h-[60vh] sm:max-h-none overflow-hidden"
      ref={containerRef}
      aria-hidden
    >
      <p className="flex flex-wrap justify-evenly gap-x-2 gap-y-1 lowercase cursor-default drop-shadow-2xl items-center">
        {modules.map((module, i) => (
          <span
            key={module.slug}
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
            {module.name}
          </span>
        ))}
      </p>

      <div className="absolute top-48 left-72 group max-sm:max-w-[60vw]">
        <Image src={sample4} alt="MIA sample" width={256} height={256} />
      </div>

      <div className="absolute top-0 left-0 group max-sm:max-w-[60vw]">
        <Image src={sample1} alt="MIA sample" width={400} height={400} />
      </div>

      <div className="absolute top-32 right-0 group max-sm:max-w-[60vw]">
        <Image src={sample3} alt="MIA sample" width={400} height={400} />
      </div>

      <div className="absolute bottom-0 left-48 group max-sm:max-w-[60vw]">
        <Image src={sample2} alt="MIA sample" width={400} height={400} />
      </div>
    </div>
  );
}
