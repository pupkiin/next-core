import React from 'react';

import styles from './TaskCardSeeMoreButton.module.css';

export interface TaskCardSeeMoreButtonProps {
  prop?: string;
}

export function TaskCardSeeMoreButton({prop = 'default value'}: TaskCardSeeMoreButtonProps) {
  return (
    <button className={styles.taskCardSeeMoreButton}>
      More Details
    </button>
  );
}
