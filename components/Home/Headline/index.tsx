import React from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import ProfilePic from '@public/images/profile_img.jpg';

export const Headline = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nameInfo}>
        <h1>Alan Vieira Palhau</h1>
        <span>Software Developer (Frontend / Fullstack)</span>
      </div>
      <Image
        src={ProfilePic}
        width={100}
        height={100}
        alt="Profile picture of Alan Palhau"
        className={styles.profilePic}
      />
    </div>
  );
};
