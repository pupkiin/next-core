import React from 'react';

import styles from './Footer.module.css';

export interface FooterProps {
  prop?: string;
}

export function Footer({prop = 'default value'}: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        footer text...
      </div>
    </footer>
  );
}
