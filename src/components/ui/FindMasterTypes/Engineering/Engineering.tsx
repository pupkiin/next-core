import Link from "next/link";
import styles from "./Engineering.module.css"

export default function Engineering() {
  const ENGINEERING_LIST = [
    { topic: "3D Визуализация" },
    { topic: "Проектирование" },
    { topic: "AutoCAD Разработка" },
    { topic: "Архитектурный Дизайн" },
    { topic: "Проектирование схем" },
    { topic: "SolidWorks Дизайн" },
    { topic: "MATLAB Разработка" },
    { topic: "Специалист по Электронике" },
    { topic: "Создание Скетчей" },
  ];

  return (
    <div className={styles.engineeringBlock}>
      <ul className={styles.engineeringList}>
        {ENGINEERING_LIST.map(({ topic }) => (
          <li key={topic} className={styles.engineeringListItem}>
            <Link className={styles.engineeringItemLink} href="/tasks">
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}