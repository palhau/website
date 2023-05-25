import React from 'react';
import styles from './styles.module.css';
import Header from '../header';
import Head from 'next/head';
import Footer from '../footer';

export const BaseLayout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alan Palhau</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};
