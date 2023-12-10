import React from 'react';

import styles from './TaskCardPostedAt.module.css';

export interface TaskCardPostedAtProps {
  prop?: string;
}

export function TaskCardPostedAt({prop = 'default value'}: TaskCardPostedAtProps) {
  return (
    <span className={styles.taskCardPostedAt}>
      Posted 3 days ago
    </span>
  );
}
