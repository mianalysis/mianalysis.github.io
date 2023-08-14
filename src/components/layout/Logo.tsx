import logo from '@/../public/images/logos/mia.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="drop-shadow- flex items-center gap-4">
      <Image src={logo} alt="Logo" width={32} height={32} />
      <p className="max-md:hidden">ModularImageAnalysis (MIA)</p>
      <p className="md:hidden">MIA</p>
    </Link>
  );
}
