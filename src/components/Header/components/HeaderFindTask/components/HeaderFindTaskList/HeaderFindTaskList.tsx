import React from 'react';

import styles from './HeaderFindTaskList.module.css';

export interface HeaderFindTaskListProps {
  prop?: string;
}

export function HeaderFindTaskList({prop = 'default value'}: HeaderFindTaskListProps) {
  return (
    <div className={styles.headerFindTaskList}>
      fdfdfd
    </div>
  );
}
