import React from 'react';
import styles from './styles.module.css';

export const Footer = () => {
  return (
    <div className={styles.container}>
      <span>
        &copy; {new Date().getFullYear()} Alan Palhau. All Rights Reserved.
      </span>
    </div>
  );
};

export default Footer;
