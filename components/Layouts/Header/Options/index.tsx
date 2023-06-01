import Link from 'next/link';
import styles from './styles.module.css';
import { AiFillFire } from 'react-icons/ai';
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
        <AiFillFire style={{ marginRight: '8px' }} />
        Palhau Dev
      </Link>
      {/* <Link
        style={isPathMatch.projects ? { color: 'rgba(var(--color-two))' } : {}}
        className={styles.navOption}
        href={'/projects'}
      >
        Projects
      </Link> */}
      <Link
        style={isPathMatch.projects ? { color: 'rgba(var(--color-two))' } : {}}
        className={styles.navOption}
        href={'/work'}
      >
        Work History
      </Link>
      <Link
        target="_blank"
        href={'https://github.com/palhau'}
        className={styles.navOption}
      >
        <IoLogoGithub style={{ marginRight: '8px' }} />
        Source
      </Link>
    </>
  );
};
