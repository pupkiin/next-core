import React from 'react';

import styles from './EngineeringAndArchitectureTopic.module.css';

export interface EngineeringAndArchitectureTopicProps {
  prop?: string;
}

export function EngineeringAndArchitectureTopic({prop = 'default value'}: EngineeringAndArchitectureTopicProps) {
  return <div className={styles.EngineeringAndArchitectureTopic}>EngineeringAndArchitectureTopic {prop}</div>;
}
