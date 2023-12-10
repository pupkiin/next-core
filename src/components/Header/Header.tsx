import React from 'react';

import styles from './Header.module.css';
import { HeaderFindMaster, HeaderFindTask, HeaderLogin, HeaderLogo, HeaderSearchBlock, HeaderSignUp } from './components';

export interface HeaderProps {
  prop?: string;
}

export function Header({prop = 'default value'}: HeaderProps) {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <HeaderLogo />
        <HeaderFindMaster />
        <HeaderFindTask />
        <HeaderSearchBlock />
        <HeaderLogin />
        <HeaderSignUp />
      </ul>
      <ul className={styles.specialties}>
        some specialities
      </ul>
    </header>
  );
}
