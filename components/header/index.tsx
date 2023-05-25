import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './styles.module.css';
import { AiFillFire } from 'react-icons/ai';
import { IoLogoGithub } from 'react-icons/io5';

export const Header = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  const isPathMatch = {
    home: currentPath === '/',
    projects: currentPath === '/projects',
    work: currentPath === '/work',
  };

  return (
    <div className={styles.wrapper}>
      <Link
        href={'/'}
        style={
          isPathMatch.home
            ? { fontWeight: 'bold', color: 'rgba(var(--color-four))' }
            : { fontWeight: 'bold' }
        }
        className={styles.navOption}
      >
        <AiFillFire style={{ marginRight: '8px' }} />
        Alan Palhau
      </Link>
      <Link
        style={isPathMatch.projects ? { color: 'rgba(var(--color-four))' } : {}}
        className={styles.navOption}
        href={'/projects'}
      >
        Projects
      </Link>
      <Link
        style={isPathMatch.projects ? { color: 'rgba(var(--color-four))' } : {}}
        className={styles.navOption}
        href={'/work'}
      >
        Work History
      </Link>
      <Link
        target="_blank"
        href={'https://github.com/palhau'}
        className={styles.navOption}
      >
        <IoLogoGithub style={{ marginRight: '8px' }} />
        Source
      </Link>
    </div>
  );
};

export default Header;
