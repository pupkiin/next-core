import React from 'react';

import styles from './TaskCardPrice.module.css';

export interface TaskCardPriceProps {
  prop?: string;
}

export function TaskCardPrice({prop = 'default value'}: TaskCardPriceProps) {
  return (
    <div className={styles.taskCardPrice}>
      <span className={styles.taskCardPriceText}>Fixed Price</span>
      <span className={styles.taskCardPriceValue}>$ 300</span>
    </div>
  );
}
