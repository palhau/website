import { isPathMatchType } from '@/utils/types';
import { HeaderOptions } from '../Options';
import { useEffect, useRef } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import styles from './styles.module.css';

interface HaburguerMenuProps {
  isPathMatch: isPathMatchType;
  isOpen: boolean;
  toggleMenu: () => void;
}
export const HaburguerMenu = ({
  isPathMatch,
  isOpen,
  toggleMenu,
}: HaburguerMenuProps) => {
  return (
    <>
      {!isOpen ? (
        <div className={styles.menuBtn} onClick={toggleMenu}>
          <AiOutlineMenu color="rgba(var(--color-two))" fontSize={25} />
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.closeBtn} onClick={toggleMenu}>
            <AiOutlineClose fontSize={20} />
          </div>
          <div className={styles.optionsWrapper}>
            <HeaderOptions isPathMatch={isPathMatch} />
          </div>
        </div>
      )}
    </>
  );
};
