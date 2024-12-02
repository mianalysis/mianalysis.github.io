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
          'h-full transition-colors duration-500 shadow-inner',
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
    <div className="w-full h-full absolute top-0 flex flex-col -z-10 pl-30 py-9" ref={ref}>
      {Array.from(Array(BARS).keys()).map((i) => (
        <ProgressBar key={i} inView={inView} />
      ))}
    </div>
  );
}
