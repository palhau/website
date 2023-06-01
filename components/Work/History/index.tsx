import React from 'react';
import styles from './styles.module.css';
import { HistoryTimeLine } from './Timeline';
import { HistoryDetails } from './Details';

export const History = () => {
  return (
    <div className={styles.container}>
      <HistoryTimeLine />
      <HistoryDetails />
    </div>
  );
};
