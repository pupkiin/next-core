import React from 'react';

import styles from './HeaderLogin.module.css';

export interface HeaderLoginProps {
  prop?: string;
}

export function HeaderLogin({prop = 'default value'}: HeaderLoginProps) {
  return (
    <li className={styles.headerLogin}>
      <button className={styles.headerLoginButton}>
        Log in
      </button>
    </li>
  );
}
