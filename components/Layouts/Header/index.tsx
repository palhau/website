import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { HeaderOptions } from './Options';
import { HaburguerMenu } from './HamburguerMenu';

export const Header = () => {
  const router = useRouter();
  const [innerWidth, setInnerWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = router.pathname;
  const isPathMatch = {
    home: currentPath === '/',
    projects: currentPath === '/projects',
    work: currentPath === '/work',
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const checkIfClickedOutside = ({ target }: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setInnerWidth(window.innerWidth);
    }
  }, []);

  return (
    <div ref={ref} className={styles.wrapper}>
      {innerWidth > 700 ? (
        <HeaderOptions isPathMatch={isPathMatch} />
      ) : (
        <HaburguerMenu
          isOpen={isOpen}
          toggleMenu={toggleMenu}
          isPathMatch={isPathMatch}
        />
      )}
    </div>
  );
};

export default Header;
