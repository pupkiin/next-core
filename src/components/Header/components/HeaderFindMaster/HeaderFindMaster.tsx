import React from 'react';

import styles from './HeaderFindMaster.module.css';

export interface HeaderFindMasterProps {
  prop?: string;
}

export function HeaderFindMaster({prop = 'default value'}: HeaderFindMasterProps) {
  return (
    <li className={styles.headerFindMaster}>
      <button className={styles.headerFindMaterButton}>
        Find Master
      </button>
    </li>
  );
}
