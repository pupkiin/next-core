import React from 'react';

import styles from './TaskCardThemes.module.css';

export interface TaskCardThemesProps {
  prop?: string;
}

export function TaskCardThemes({prop = 'default value'}: TaskCardThemesProps) {
  return (
    <div className={styles.taskCardThemes}>
      <span className={styles.taskCardThemesTitles}>Data Science</span>
      <span className={styles.taskCardThemesTitles}>Network</span>
    </div>
  );
}
