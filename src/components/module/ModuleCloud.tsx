import { getModules } from '@/lib/modules';
import sample1 from '@/../public/images/samples/sample_1.png';
import sample2 from '@/../public/images/samples/sample_2.png';
import sample3 from '@/../public/images/samples/sample_3.png';
import sample4 from '@/../public/images/samples/sample_4.png';
import Image from 'next/image';
import classNames from 'classnames';

const modules = getModules();

export default function ModuleCloud() {
  return (
    <div className="relative">
      <p className="text-xs flex flex-wrap justify-evenly gap-x-2 gap-y-1 lowercase cursor-default drop-shadow-2xl">
        {modules.map((module, i) => (
          <span
            key={module.slug}
            className={classNames(
              'hover:opacity-100 transition-all duration-500 opacity-60',
              // apply the 3 colors to the modules
              i % 3 === 0 ? 'text-mia-green' : i % 3 === 1 ? 'text-mia-blue' : 'text-mia-orange',
              // adjust the size of the modules
              i % 3 === 0 ? 'scale-90' : i % 3 === 1 ? 'scale-120' : 'scale-100'
            )}
          >
            {module.name}
          </span>
        ))}
      </p>

      <Image
        src={sample4}
        alt="MIA sample"
        width={256}
        height={256}
        className="absolute top-48 left-72"
      />
      <Image
        src={sample1}
        alt="MIA sample"
        width={400}
        height={400}
        className="absolute top-0 left-0"
      />
      <Image
        src={sample3}
        alt="MIA sample"
        width={400}
        height={400}
        className="absolute top-32 right-0"
      />
      <Image
        src={sample2}
        alt="MIA sample"
        width={400}
        height={400}
        className="absolute bottom-0 left-48"
      />
    </div>
  );
}
