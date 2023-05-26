import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const SocialMediaLinks = () => {
  return (
    <div className={styles.container}>
      <h3>Links</h3>

      <Link
        className={styles.link}
        href="https://www.github.com/palhau"
        target="_blank"
      >
        <AiFillGithub style={{ marginRight: '8px' }} />
        Github
      </Link>
      <Link
        className={styles.link}
        href="https://www.linkedin.com/in/alanvieirapalhau/"
        target="_blank"
      >
        <AiFillLinkedin style={{ marginRight: '8px' }} />
        Linkedin
      </Link>
    </div>
  );
};
