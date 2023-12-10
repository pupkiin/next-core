import React from 'react';

import styles from './HeaderSearchBlock.module.css';

export interface HeaderSearchBlockProps {
  prop?: string;
}

export function HeaderSearchBlock({prop = 'default value'}: HeaderSearchBlockProps) {
  return (
    <li>
      search block
    </li>
  );
}
