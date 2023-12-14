import React from 'react';

import styles from './HeaderLogo.module.css';
import Link from 'next/link';

export interface HeaderLogoProps {
  prop?: string;
}

export function HeaderLogo({prop = 'default value'}: HeaderLogoProps) {
  return (
    <li className={styles.headerLogo}>
      <Link className={styles.headerLogoLink} href="/">Master`s Guild</Link>
    </li>
  );
}
