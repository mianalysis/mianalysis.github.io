'use client';

import { useState, useEffect } from 'react';

export const useScrollY = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};
