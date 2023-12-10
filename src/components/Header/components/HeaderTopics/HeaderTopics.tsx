import React from 'react';

import styles from './HeaderTopics.module.css';

export interface HeaderTopicsProps {
  prop?: string;
}

export function HeaderTopics({prop = 'default value'}: HeaderTopicsProps) {
  return (
    <ul className={styles.headerTopics}>

    </ul>
  );
}
