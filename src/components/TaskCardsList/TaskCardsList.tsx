import React from 'react';

import styles from './TaskCardsList.module.css';
import { TaskCard } from '..';

export interface TaskCardsListProps {
  prop?: string;
}

export function TaskCardsList({prop = 'default value'}: TaskCardsListProps) {
  return (
    <ul className={styles.taskCardsList}>
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
      <TaskCard />
    </ul>
  );
}
