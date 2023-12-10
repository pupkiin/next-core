import React from 'react';

import styles from './ContentHeading.module.css';

export interface ContentHeadingProps {
  prop?: string;
}

export function ContentHeading({prop = 'default value'}: ContentHeadingProps) {
  return (
    <h2 className={styles.contentHeading}>
      Some Heading without props!
    </h2>
  );
}
