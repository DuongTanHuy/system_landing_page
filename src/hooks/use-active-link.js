'use client';

import { useEffect, useState } from 'react';

// ----------------------------------------------------------------------

export function useActiveLink(path, deep = true) {
  const [hash, setHash] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHash(window.location.hash);

      const handleHashChange = () => {
        setHash(window.location.hash);
      };

      window.addEventListener('hashchange', handleHashChange);

      return () => {
        window.removeEventListener('hashchange', handleHashChange);
      };
    }
  }, []);

  const normalActive =
    path === '/#mktlogin-home' ? !hash || path === '/' + hash : path === '/' + hash;

  const deepActive =
    path === '/#mktlogin-home' ? !hash || path === '/' + hash : path === '/' + hash;

  return deep ? deepActive : normalActive;
}
