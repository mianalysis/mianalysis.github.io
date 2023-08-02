import imagej from '@/../public/images/logos/imagej.png';
import fiji from '@/../public/images/logos/fiji.png';
import trackmate from '@/../public/images/logos/trackmate.png';
import bioformats from '@/../public/images/logos/bio_formats.png';
import Image from 'next/image';

export default function CompatibleIcons() {
  return (
    <div className="flex gap-4 items-center drop-shadow-2xl">
      <a href="https://github.com/imagej">
        <Image src={imagej} alt="ImageJ" width={200} height={200} />
      </a>

      <a href="https://github.com/fiji">
        <Image src={fiji} alt="Fiji" width={200} height={200} />
      </a>

      <a href="https://github.com/fiji/TrackMate">
        <Image src={trackmate} alt="TrackMate" width={200} height={200} />
      </a>

      <a href="https://github.com/openmicroscopy/bioformats">
        <Image src={bioformats} alt="Bio-Formats" width={200} height={200} />
      </a>
    </div>
  );
}
