import React from 'react';
import styles from './styles.module.css';
import Header from '../header';
import Head from 'next/head';

export const BaseLayout = ({ children }: any) => {
  return (
    <>
      <Head>
        <title>Alan Palhau</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <footer>{/* Footer content */}</footer>
    </>
  );
};
