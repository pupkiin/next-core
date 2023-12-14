import { HeaderLogo } from '@/components/Header/components';
import styles from './HeaderForAuth.module.css'

export default function HeaderForAuth() {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <HeaderLogo />
      </ul>
    </header>
  );
}