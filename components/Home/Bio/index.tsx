import React from 'react';
import styles from './styles.module.css';

export const Bio = () => {
  return (
    <div className={styles.container}>
      <h3>Bio</h3>
      <div className={styles.timelineItems}>
        <p>
          <span>1996</span> Born in São Paulo, Brazil.
        </p>
        <p>
          <span>2013</span>Completed a Technical Course on Programming.
        </p>
        <p>
          <span>2021 to present</span>BS in Computer Science at UAM.
        </p>
      </div>
    </div>
  );
};
