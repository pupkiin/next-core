import React from 'react';

import styles from './TaskCardHeader.module.css';

export interface TaskCardHeaderProps {
  prop?: string;
}

export function TaskCardHeader({prop = 'default value'}: TaskCardHeaderProps) {
  return (
    <h3 className={styles.taskCardHeader}>
      Some Title for your job
    </h3>
  );
}
