import React from 'react';
import styles from './styles.module.css';

export const Skills = () => {
  return (
    <div className={styles.container}>
      <h3>Skills</h3>
      <div className={styles.timelineItems}>
        <p>
          <span>5+ years -</span> React JS, Javascript, Typescript, NextJS, CSS
          (SASS, CSS Modules).
        </p>
        <p>
          <span>3 years -</span>Cloud AWS, NodeJS, Python Postgres, Redux,
          TailwindCSS.
        </p>
        <p>
          <span>1+ year -</span>MongoDB, React Native, Node JS, Zustand, NestJS,
          GraphQL, Python, Flask, Java, SpringBoot, Express.js, GCP, Retool (Low
          Code), Webflow (Low Code), Bubble (Low Code), shadcn/ui, MUI Material.
        </p>
      </div>
    </div>
  );
};
