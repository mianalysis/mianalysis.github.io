import { useInView } from 'react-intersection-observer';
import { randomNumber } from '@/lib/util';
import classNames from 'classnames';

const BARS = 20;

function ProgressBar({ inView }: { inView: boolean }) {
  const duration = randomNumber(1000, 10000);
  const delay = randomNumber(0, 200);

  return (
    <div
      className={classNames('flex-1 transition-[width]', inView ? 'w-full' : 'w-0')}
      style={{ transitionDuration: `${duration}ms`, transitionDelay: `${delay}ms` }}
    >
      <div
        className={classNames(
          'h-full shadow-inner transition-colors duration-500',
          inView ? 'bg-mia-green' : 'bg-mia-blue'
        )}
        style={{ transitionDelay: `${delay + duration}ms` }}
      />
    </div>
  );
}

export default function BatchProcessing() {
  const { ref, inView } = useInView();

  return (
    <div className="pl-30 absolute top-0 -z-10 flex h-full w-full flex-col py-9" ref={ref}>
      {Array.from(Array(BARS).keys()).map((i) => (
        <ProgressBar key={i} inView={inView} />
      ))}
    </div>
  );
}
