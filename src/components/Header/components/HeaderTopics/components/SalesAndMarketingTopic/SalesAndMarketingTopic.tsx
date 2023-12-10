import React from 'react';

import styles from './SalesAndMarketingTopic.module.css';

export interface SalesAndMarketingTopicProps {
  prop?: string;
}

export function SalesAndMarketingTopic({prop = 'default value'}: SalesAndMarketingTopicProps) {
  return <div className={styles.SalesAndMarketingTopic}>SalesAndMarketingTopic {prop}</div>;
}
