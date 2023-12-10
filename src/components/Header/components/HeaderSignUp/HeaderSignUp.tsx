import React from 'react';

import styles from './HeaderSignUp.module.css';

export interface HeaderSignUpProps {
  prop?: string;
}

export function HeaderSignUp({prop = 'default value'}: HeaderSignUpProps) {
  return (
    <button className={styles.headerSignUpButton}>
      Sign up
    </button>
  );
}
