import React from 'react';
import styles from './styles.module.css';

export const HistoryTimeLine = () => {
  return (
    <>
      <h2 className={styles.title}>Work History</h2>
      <div className={styles.timelineItems}>
        <p>
          <span>2022 - 2023</span>Frontend Developer at <b>Trace Finance</b>.
        </p>
        <p>
          <span>2021 - 2022</span>Frontend Developer at <b>AMARO</b>.
        </p>
        <p>
          <span>2020 - 2021</span> Software Engineer at <b>Veksti (Virtumed)</b>
          .
        </p>   
        <p>
          <span>2020 - 2020</span> Fullstack Developer at <b>Truckpad</b>.
        </p>
      </div>
    </>
  );
};