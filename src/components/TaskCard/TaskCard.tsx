import React from 'react';

import styles from './TaskCard.module.css';
import { TaskCardDescription, TaskCardHeader, TaskCardMasterLevel, TaskCardPostedAt, TaskCardPrice, TaskCardSeeMoreButton, TaskCardThemes } from './components';

export interface TaskCardProps {
  prop?: string;
}

export function TaskCard({prop = 'default value'}: TaskCardProps) {
  return (
    <li className={styles.taskCard}>
      <div className={styles.taskCardTop}>
        <TaskCardHeader />
        <div className={styles.taskCardCostAndLevel}>
          <TaskCardPrice />
          <TaskCardMasterLevel />
        </div>
      </div>
      <div className={styles.taskCardBottom}>
        <TaskCardDescription />
        <TaskCardThemes />
        <div className={styles.taskCardButtonAndDate}>
          <TaskCardSeeMoreButton />
          <TaskCardPostedAt />
        </div>
      </div>
    </li>
  );
}
