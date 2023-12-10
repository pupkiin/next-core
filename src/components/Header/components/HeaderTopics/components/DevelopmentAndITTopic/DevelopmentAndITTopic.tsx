import React from 'react';

import styles from './DevelopmentAndITTopic.module.css';

export interface DevelopmentAndITTopicProps {
  prop?: string;
}

export function DevelopmentAndITTopic({prop = 'default value'}: DevelopmentAndITTopicProps) {
  return <div className={styles.DevelopmentAndITTopic}>DevelopmentAndITTopic {prop}</div>;
}
