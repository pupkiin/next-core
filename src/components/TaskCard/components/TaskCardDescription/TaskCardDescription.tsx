import React from 'react';

import styles from './TaskCardDescription.module.css';

export interface TaskCardDescriptionProps {
  prop?: string;
}

export function TaskCardDescription({prop = 'default value'}: TaskCardDescriptionProps) {
  return (
    <p className={styles.taskCardDescription}>
      {prop} and some other txt description @danila
      and some other txt description @danila and some other txt description @danila
    </p>
  );
}
