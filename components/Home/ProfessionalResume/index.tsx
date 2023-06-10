import React from 'react';
import styles from './styles.module.css';
import Link from 'next/link';

export const ProfessionalResume = () => {
  return (
    <div className={styles.container}>
      <h3>About</h3>
      <p>
        Alan Palhau is a Freelance, FrontEnd and FullStack Developer based in
        Brazil, with a love in solve puzzles and building/creating apps and
        websites to help solve these &quot;issues&quot;, that could be referred
        to as real-life problems converted to code that programmers and machines can easily
        understand.
      </p>
      {/* <div id="Button" className={styles.projectsBtn}>
        <Link href="/projects">Projects &gt;</Link>
      </div> */}
    </div>
  );
};
