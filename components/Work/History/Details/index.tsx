import React from 'react';
import styles from './styles.module.css';

export const HistoryDetails = () => {
  return (
    <>
      <h2 className={styles.title}>More Details</h2>
      <div className={styles.itemsDetails}>
        <h3>Truckpad</h3>
        <p>
          - Worked on the backend using Python and some libraries like bottle
          and cocktail.
        </p>
        <p>- Helped the frontend sector to resolve some minor issues.</p>
      </div>

      <div className={styles.itemsDetails}>
        <h3>Veksti (VirtuMed)</h3>
        <p>
          - Building highly available health solutions applying cutting edge
          technology and tools.
        </p>
        <p>
          - Collaborated on a telehealth video conferencing app currently used
          at field hospitals in Brazil.
        </p>
      </div>

      <div className={styles.itemsDetails}>
        <h3>AMARO</h3>
        <p>- Building and making maintenance for AMARO e-commerce.</p>
        <p>
          - I was responsable to create and implement the following solutions:
          SSO, Google reCaptach, Two Factor Authentication.
        </p>
      </div>

      <div className={styles.itemsDetails}>
        <h3>Trace Finance</h3>
        <p>
          - Create and maintain the backoffice system with low code and further
          rebuild it with NextJS.
        </p>
      </div>
    </>
  );
};
