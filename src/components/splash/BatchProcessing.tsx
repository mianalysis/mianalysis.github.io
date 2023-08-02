import Image from 'next/image';
import batchProcessing from '@/../public/images/screenshots/batch_processing.png';
import { randomNumber } from '@/lib/util';

const BARS = 20;

function ProgressBar() {
  const duration = randomNumber(1000, 10000);
  const delay = randomNumber(0, 200);

  return (
    <div
      className="w-0 group-hover:w-full flex-1 transition-[width]"
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      <div
        className="bg-mia-blue h-full group-hover:bg-mia-green transition-colors duration-500"
        style={{ transitionDelay: `${delay + duration}ms` }}
      />
    </div>
  );
}

export default function BatchProcessing() {
  return (
    <div className="relative">
      <Image src={batchProcessing} alt="MIA batch processing" className="shadow-xl" />

      <div className="w-full h-full absolute top-0 flex flex-col -z-10 pl-30 py-9">
        {Array.from(Array(BARS).keys()).map((i) => (
          <ProgressBar key={i} />
        ))}
      </div>
    </div>
  );
}
