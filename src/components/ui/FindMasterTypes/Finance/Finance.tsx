import Link from "next/link";
import styles from "./Finance.module.css"

export const FINANCE_LIST = [
  { topic: "Юридическая Помощь" },
  { topic: "Договоры" },
  { topic: "Доверенности" },
  { topic: "Физические Лица" },
  { topic: "Юридические Лица" },
  { topic: "Консультации" },
  { topic: "ООО" },
  { topic: "ИП" },
  { topic: "Финансовая Аналитика" },
  { topic: "Бизнес Тренинг" },
  { topic: "Стартапы" },
  { topic: "Проектирование Бизнес Процессов" },
  { topic: "Бизнес-Брокер" },
  { topic: "Найм Сотрудников" },
  { topic: "Налоговый Эксперт" },
];

export default function Finance() {
  return (
    <div className={styles.financeBlock}>
      <ul className={styles.financeList}>
        {FINANCE_LIST.map(({ topic }) => (
          <li key={topic} className={styles.financeListItem}>
            <Link className={styles.financeItemLink} href="/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}