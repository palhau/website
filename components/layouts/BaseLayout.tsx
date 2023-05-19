import React from 'react';
import styles from './styles.module.css';

export const BaseLayout = ({ children }: any) => {
  return (
    <>
      {/* Add your header */}
      <header>{/* Header content */}</header>

      {/* Add your main content */}
      <main className={styles.main}>{children}</main>

      {/* Add your footer */}
      <footer>{/* Footer content */}</footer>
    </>
  );
};
