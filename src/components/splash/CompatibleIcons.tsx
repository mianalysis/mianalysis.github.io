'use client';

import imagej from '@/../public/images/logos/imagej.png';
import fiji from '@/../public/images/logos/fiji.png';
import trackmate from '@/../public/images/logos/trackmate.png';
import bioformats from '@/../public/images/logos/bio_formats.png';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames';

export default function CompatibleIcons() {
  const { ref, inView } = useInView({ delay: 500, triggerOnce: true, threshold: 1 });

  const commonClasses = [
    'transition-all duration-500',
    inView ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0',
  ];

  return (
    <div className="flex gap-4 items-center drop-shadow-2xl" ref={ref}>
      <a href="https://github.com/imagej" className={classNames(commonClasses, 'delay-0')}>
        <Image src={imagej} alt="ImageJ" width={200} height={200} />
      </a>

      <a href="https://github.com/fiji" className={classNames(commonClasses, 'delay-200')}>
        <Image src={fiji} alt="Fiji" width={200} height={200} />
      </a>

      <a
        href="https://github.com/openmicroscopy/bioformats"
        className={classNames(commonClasses, 'delay-[400ms]')}
      >
        <Image src={bioformats} alt="Bio-Formats" width={200} height={200} />
      </a>

      <a
        href="https://github.com/fiji/TrackMate"
        className={classNames(commonClasses, 'delay-[600ms]')}
      >
        <Image src={trackmate} alt="TrackMate" width={200} height={200} />
      </a>
    </div>
  );
}
