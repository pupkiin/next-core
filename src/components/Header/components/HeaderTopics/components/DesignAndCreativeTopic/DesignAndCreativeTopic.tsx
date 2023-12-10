import React from 'react';

import styles from './DesignAndCreativeTopic.module.css';

export interface DesignAndCreativeTopicProps {
  prop?: string;
}

export function DesignAndCreativeTopic({prop = 'default value'}: DesignAndCreativeTopicProps) {
  return <div className={styles.DesignAndCreativeTopic}>DesignAndCreativeTopic {prop}</div>;
}
