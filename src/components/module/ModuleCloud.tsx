'use client';

import { getModules } from '@/lib/modules';
import sample1 from '@/../public/images/samples/sample_1.png';
import sample2 from '@/../public/images/samples/sample_2.png';
import sample3 from '@/../public/images/samples/sample_3.png';
import sample4 from '@/../public/images/samples/sample_4.png';
import contextMenu1 from '@/../public/images/screenshots/content_menu_1.png';
import contextMenu2 from '@/../public/images/screenshots/content_menu_2.png';
import contextMenu3 from '@/../public/images/screenshots/content_menu_3.png';
import contextMenu4 from '@/../public/images/screenshots/content_menu_4.png';
import contextMenu5 from '@/../public/images/screenshots/content_menu_5.png';
import contextMenu6 from '@/../public/images/screenshots/content_menu_6.png';
import contextMenu7 from '@/../public/images/screenshots/content_menu_7.png';
import Image from 'next/image';
import classNames from 'classnames';
import { useScrollY } from '@/hooks/scroll';
import { useRef } from 'react';
import { uniqueBy } from '@/lib/util';

const modules = uniqueBy(getModules(), 'slug');

const scrollStep = 5;

export default function ModuleCloud() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollY = useScrollY();

  return (
    <div className="relative" ref={containerRef}>
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
              scrollY % scrollStep === i % scrollStep ? 'blur-none' : 'blur-sm hover:blur-none'
            )}
          >
            {module.name}
          </span>
        ))}
      </p>

      <div className="absolute top-48 left-72 group">
        <Image src={sample4} alt="MIA sample" width={256} height={256} className="" />

        <Image
          src={contextMenu5}
          alt="MIA context menu"
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bottom-1/4 left-1/2 z-10"
        />
      </div>

      <div className="absolute top-0 left-0 group">
        <Image src={sample1} alt="MIA sample" width={400} height={400} />

        <Image
          src={contextMenu2}
          alt="MIA context menu"
          width={512}
          height={512}
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 top-1/4 left-3/4 z-10"
        />

        <Image
          src={contextMenu4}
          alt="MIA context menu"
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 top-3/4 left-1/4 z-10 delay-200"
        />
      </div>

      <div className="absolute top-32 right-0 group">
        <Image src={sample3} alt="MIA sample" width={400} height={400} />

        <Image
          src={contextMenu1}
          alt="MIA context menu"
          width={512}
          height={512}
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 -bottom-1/4 left-1/4"
        />

        <Image
          src={contextMenu6}
          alt="MIA context menu"
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 top-4 left-4 delay-200"
        />
      </div>

      <div className="absolute bottom-0 left-48 group">
        <Image src={sample2} alt="MIA sample" width={400} height={400} />

        <Image
          src={contextMenu3}
          alt="MIA context menu"
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 top-3/4 left-0"
        />

        <Image
          src={contextMenu7}
          alt="MIA context menu"
          className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10 top-0 left-1/2 delay-200"
        />
      </div>
    </div>
  );
}
