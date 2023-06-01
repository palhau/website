import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.css';

export const BaseLayout = ({ children }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Palhau Dev</title>
      </Head>
      <Header />
      <main className={styles.main}>{children}</main>
      <section className={styles.footer}>
        <Footer />
      </section>
    </div>
  );
};
