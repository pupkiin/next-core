import React from 'react';

import styles from './WritingAndTranslationTopic.module.css';

export interface WritingAndTranslationTopicProps {
  prop?: string;
}

export function WritingAndTranslationTopic({prop = 'default value'}: WritingAndTranslationTopicProps) {
  return <div className={styles.WritingAndTranslationTopic}>WritingAndTranslationTopic {prop}</div>;
}
