import React from 'react';

import styles from './HeaderLogo.module.css';

export interface HeaderLogoProps {
  prop?: string;
}

export function HeaderLogo({prop = 'default value'}: HeaderLogoProps) {
  return (
    <li>
      logo
    </li>
  );
}
