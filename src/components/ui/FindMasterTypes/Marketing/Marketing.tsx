import Link from "next/link";
import styles from "./Marketing.module.css"

export const MARKETING_LIST = [
  { topic: "SEO Оптимизация" },
  { topic: "Продажа Аккаунтов" },
  { topic: "Продажа Сайтов" },
  { topic: "Продвижение Аккаунтов" },
  { topic: "Продвижение Сайтов" },
  { topic: "Реклама" },
  { topic: "Отзывы" },
  { topic: "Email" },
  { topic: "Instagram" },
  { topic: "VK" },
  { topic: "Youtube" },
  { topic: "Telegram" },
  { topic: "Yandex Дзен" },
  { topic: "TikTok" },
  { topic: "Twitter" },
  { topic: "Wildberries" },
  { topic: "Ozon" },
  { topic: "Yandex" },
];

export default function Marketing() {
  return (
    <div className={styles.marketingBlock}>
      <ul className={styles.marketingList}>
        {MARKETING_LIST.map(({ topic }) => (
          <li key={topic} className={styles.marketingListItem}>
            <Link className={styles.marketingItemLink} href="/find_task/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}