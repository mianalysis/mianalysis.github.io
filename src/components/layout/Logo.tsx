import logo from '@/../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="drop-shadow- flex items-center gap-4 font-mono">
      <Image src={logo} alt="Logo" width={32} height={32} />
      MIA
    </Link>
  );
}
