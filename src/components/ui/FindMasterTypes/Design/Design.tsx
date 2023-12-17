import Link from "next/link";
import styles from "./Design.module.css"

export default function Design() {
  const DESIGN_LIST = [
    { topic: "Web Дизайн" },
    { topic: "Презентация" },
    { topic: "2D Дизайн" },
    { topic: "3D Дизайн" },
    { topic: "Дизайн Логотипов" },
    { topic: "Видео Дизайн" },
    { topic: "Дизайн Игр" },
    { topic: "Мобильный Дизайн" },
    { topic: "Дизайн Баннеров" },
    { topic: "Дизайн Маркетплейсов" },
    { topic: "Дизайн Интерьера" },
    { topic: "Ландшафтный Дизайн" },
    { topic: "Дизайн Мебели" },
    { topic: "Монтаж Видео" },
    { topic: "Обработка Фото" },
    { topic: "Анимация" },
    { topic: "Озвучка" },
    { topic: "Интро" },
    { topic: "Обработка Звука" },
    { topic: "Создание Песен" },
    { topic: "Написание музыки" },
    { topic: "Remix" },
    { topic: "Аудио Ролик" },
    { topic: "3D Анимация" },
    { topic: "2D Анимация" },
    { topic: "Проморолики" },
    { topic: "Иллюстрации" },
    { topic: "Картины На Заказ" },
    { topic: "Портреты" },
    { topic: "NFT" },
    { topic: "Принты" },
    { topic: "Промышленный Дизайн" },
    { topic: "Создание Бренда" },
  ];

  return (
    <div className={styles.designBlock}>
      <ul className={styles.designList}>
        {DESIGN_LIST.map(({ topic }) => (
          <li key={topic} className={styles.designListItem}>
            <Link className={styles.designItemLink} href="/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}