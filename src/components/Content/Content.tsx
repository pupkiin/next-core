import React from 'react';

import styles from './Content.module.css';
import { ContentHeading } from './components';
import { TaskCardsList } from '..';

export interface ContentProps {
  prop?: string;
}

export function Content({prop = 'default value'}: ContentProps) {
  return (
    <main className={styles.content}>
      <ContentHeading />
      <TaskCardsList />
    </main>
  );
}
