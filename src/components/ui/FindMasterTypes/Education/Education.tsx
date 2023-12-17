import Link from "next/link";
import styles from "./Education.module.css"

export default function Education() {
  const EDUCATION_LIST = [
    { topic: "Курсовые Работы" },
    { topic: "Научные Статьи" },
    { topic: "Лабораторные Работы" },
    { topic: "Рефераты" },
    { topic: "Дипломный Прект" },
    { topic: "Научно-Исследовательская Работа" },
    { topic: "Производственная Практика" },
  ];

  return (
    <div className={styles.educationBlock}>
      <ul className={styles.educationList}>
        {EDUCATION_LIST.map(({ topic }) => (
          <li key={topic} className={styles.educationListItem}>
            <Link className={styles.educationItemLink} href="/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}