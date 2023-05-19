import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { IoLogoGithub } from 'react-icons/io5';
import { AiFillFire } from 'react-icons/ai';

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link
        href={'/'}
        style={{ fontWeight: 'bold' }}
        className={styles.linkTextIcon}
      >
        <AiFillFire style={{ marginRight: '8px' }} />
        Alan Palhau
      </Link>
      <Link href={'/projects'}>Projects</Link>
      <Link href={'/work'}>Work History</Link>
      <Link href={'https://github.com/palhau'} className={styles.linkTextIcon}>
        <IoLogoGithub style={{ marginRight: '8px' }} />
        Source
      </Link>
    </div>
  );
};

export default Header;
