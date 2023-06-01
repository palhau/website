import React from 'react';
import styles from './styles.module.css';

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>Skills</h3>
      <div className={styles.timelineItems}>
        <p>
          <span>3+ years -</span> React JS, Javascript, Typescript, NextJS, CSS
          (SASS, CSS Modules).
        </p>
        <p>
          <span>2 years -</span>Cloud AWS, NodeJS, Python.
        </p>
        <p>
          <span>1 year -</span>Postgres, MongoDB, React Native, Node JS, Redux
          Saga, NestJS, GraphQL, Python, Flask, Java, SpringBoot, Express.js,
          GCP, Retool (Low Code).
        </p>
      </div>
    </div>
  );
};
