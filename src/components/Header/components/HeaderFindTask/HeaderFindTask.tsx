import React from 'react';

import styles from './HeaderFindTask.module.css';
import { Dropdown } from '../../..';
import { HeaderFindTaskList } from './components';

export interface HeaderFindTaskProps {
  prop?: string;
}

export function HeaderFindTask({prop = 'default value'}: HeaderFindTaskProps) {

  return (
    <li className={styles.headerFindTask}>
      <Dropdown
        button={
          <button className={styles.headerFindTaskButton}>Find Task</button>
        }
      >
        <div className={styles.headerFindTaskDropdown}>
          <HeaderFindTaskList />
        </div>
      </Dropdown>
    </li>
  );
}
