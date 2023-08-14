import Image from 'next/image';

interface Props {
  type:
    | 'arrow_closed_green.png'
    | 'arrow_open_black.png'
    | 'dual_ring.gif'
    | 'down_arrow_dark_blue.png'
    | 'eye_closed_black.png'
    | 'eye_open_black.png'
    | 'power_black_strike.png'
    | 'power_bright_green.png'
    | 'power_dark_blue.png'
    | 'power_grey.png'
    | 'right_arrow_dark_blue.png'
    | 'skip_arrow_orange.png'
    | 'warning_red.png';
}

export default function MiaIcon({ type }: Props) {
  return (
    <Image
      className="inline"
      src={`/images/icons/${type}`}
      alt={`Icon from MIA GUI`}
      width={12}
      height={12}
    />
  );
}
