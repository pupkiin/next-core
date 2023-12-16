import React from 'react';

import styles from './HeaderFindTask.module.css';
import { Dropdown } from '../../..';
import { HeaderFindTaskList } from './components';
import Link from 'next/link';

export interface HeaderFindTaskProps {
  prop?: string;
}

export function HeaderFindTask({prop = 'default value'}: HeaderFindTaskProps) {

  return (
    <li className={styles.headerFindTask}>
      <Link className={styles.headerFindTaskButton} href="/find/task">Find Task</Link>
    </li>
  );
}
