import React from 'react';

import styles from './TaskCardMasterLevel.module.css';

export interface TaskCardMasterLevelProps {
  prop?: string;
}

export function TaskCardMasterLevel({prop = 'default value'}: TaskCardMasterLevelProps) {
  return (
    <div className={styles.taskCardMasterLevel}>
      <span className={styles.taskCardMasterLevelText}>Master Level</span>
      <span className={styles.taskCardMasterLevelValue}>Expert</span>
    </div>
  );
}
