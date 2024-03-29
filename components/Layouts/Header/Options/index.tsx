import Link from 'next/link';
import styles from './styles.module.css';
import { IoLogoGithub } from 'react-icons/io5';
import { isPathMatchType } from '@/utils/types';

interface HeaderOptionsProps {
  isPathMatch: isPathMatchType;
}
export const HeaderOptions = ({ isPathMatch }: HeaderOptionsProps) => {
  return (
    <>
      <Link
        href={'/'}
        style={
          isPathMatch.home
            ? { fontWeight: 'bold', color: 'rgba(var(--color-two))' }
            : { fontWeight: 'bold' }
        }
        className={styles.navOption}
      >
        &lt; A V P / &gt;
      </Link>
      {/* <Link
        style={isPathMatch.projects ? { color: 'rgba(var(--color-two))' } : {}}
        className={styles.navOption}
        href={'/projects'}
      >
        Projects
      </Link> */}
      <Link
        style={
          isPathMatch.work
            ? { fontWeight: 'bold', color: 'rgba(var(--color-two))' }
            : { fontWeight: 'bold' }
        }
        className={styles.navOption}
        href={'/work'}
      >
        Work History
      </Link>
      <Link
        target="_blank"
        href={'https://github.com/palhau/website'}
        className={styles.navOption}
      >
        <IoLogoGithub style={{ marginRight: '8px' }} />
        Source
      </Link>
    </>
  );
};
