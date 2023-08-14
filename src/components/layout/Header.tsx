'use client';

import { useScrollY } from '@/hooks/scroll';
import NavBar from './NavBar';
import classnames from 'classnames';

export default function Header() {
  const scrolled = useScrollY() > 0;

  return (
    <>
      {/* Transition height and add shadow once scrolling has started */}
      <header
        className={classnames(
          'fixed left-0 right-0 top-0 bg-white z-50 transition-all duration-300',
          { 'border-b shadow-md': scrolled },
          scrolled ? 'pt-2' : 'pt-4'
        )}
      >
        <NavBar />
      </header>

      {/* The NavBar has position fixed so displace the content below by roughly its height */}
      <div className="h-16" />
    </>
  );
}
