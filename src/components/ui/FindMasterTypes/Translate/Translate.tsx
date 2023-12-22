import Link from "next/link";
import styles from "./Translate.module.css"

export const TRANSLATE_LIST = [
  { topic: "Написание Статей" },
  { topic: "Наполнение Контентом" },
  { topic: "Гострайтинг" },
  { topic: "Переводы" },
  { topic: "Копия Текста" },
  { topic: "Технические Тексты" },
  { topic: "Написание Документации" },
  { topic: "Написание SEO-текстов" },
  { topic: "Набор Текста" },
  { topic: "Тексты Постов" },
  { topic: "Текст Блога" },
  { topic: "Резюме" },
  { topic: "Описание Продукта" },
  { topic: "Написание Рецептов" },
  { topic: "Научные Тексты" },
];

export default function Translate() {
  return (
    <div className={styles.translateBlock}>
      <ul className={styles.translateList}>
        {TRANSLATE_LIST.map(({ topic }) => (
          <li key={topic} className={styles.translateListItem}>
            <Link className={styles.translateItemLink} href="/find_task/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}