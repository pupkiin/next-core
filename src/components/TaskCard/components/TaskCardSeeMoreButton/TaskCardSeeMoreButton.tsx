import React from 'react';

import styles from './TaskCardSeeMoreButton.module.css';
import Link from 'next/link';

export interface TaskCardSeeMoreButtonProps {
  prop?: string;
}

export function TaskCardSeeMoreButton({prop = 'default value'}: TaskCardSeeMoreButtonProps) {
  return (
    <Link className={styles.taskCardSeeMoreButton} href="/find_task/tasks/task">
      More Details
    </Link>
  );
}
