'use client';

import useScroll from '@/hooks/scroll';
import NavBar from './NavBar';
import classnames from 'classnames';

export default function Header() {
  const scrolled = useScroll() > 0;

  return (
    <>
      {/* Transition height and add shadow once scrolling has started */}
      <header
        className={classnames(
          'fixed left-0 right-0 top-0 z-50 flex items-center justify-center bg-white py-6 transition-all duration-300',
          { 'border-b shadow-md': scrolled },
          scrolled ? 'h-[60px]' : 'h-[80px]'
        )}
      >
        <NavBar />
      </header>

      {/* The NavBar has position fixed so displace the content below by its height */}
      <div className="h-[80px]" />
    </>
  );
}