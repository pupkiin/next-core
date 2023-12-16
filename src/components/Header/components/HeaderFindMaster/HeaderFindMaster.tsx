import React from 'react';

import styles from './HeaderFindMaster.module.css';
import Link from 'next/link';

export interface HeaderFindMasterProps {
  prop?: string;
}

export function HeaderFindMaster({prop = 'default value'}: HeaderFindMasterProps) {
  return (
    <li className={styles.headerFindMaster}>
      <Link className={styles.headerFindMaterButton} href="/find/master">
        Find Master
      </Link>
    </li>
  );
}
