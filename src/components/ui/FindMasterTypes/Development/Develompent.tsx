import Link from 'next/link';
import styles from './Development.module.css'

export const DEV_LIST = [
  { topic: "IOS Разработка" },
  { topic: "Android Разработка" },
  { topic: "1С Специалист" },
  { topic: "Разработка API" },
  { topic: "Разработка Ботов" },
  { topic: "Разработка Игр" },
  { topic: "C++ Разработка" },
  { topic: "CRM Специалист" },
  { topic: "Инженер Компьютерного Зрения и Искуственного Интелекта" },
  { topic: "C# Разработка" },
  { topic: "Разработка Контроллеров" },
  { topic: "Специалист по Глубокому Обучению" },
  { topic: "Django Разработка" },
  { topic: "Аналитика Данных" },
  { topic: "Figma Дизайнер" },
  { topic: "Front-End Разработка" },
  { topic: "Back-End Разработка" },
  { topic: "Верстка" },
  { topic: "Flutter Разработка" },
  { topic: "Google Разработка" },
  { topic: "Java Script Разработка" },
  { topic: "Linux Разработка" },
  { topic: "Мобильная Разработка" },
  { topic: "MS Office 365 Специалист" },
  { topic: "Excel Специалист" },
  { topic: "Разработка Баз Данных" },
  { topic: "Python Разработка" },
  { topic: "PHP Разработка" },
  { topic: "Разработка Консольных Приложений" },
  { topic: "React Разработка" },
  { topic: "React Native Разработка" },
  { topic: "SSL Специалист" },
  { topic: "Unity Разработка" },
  { topic: "Vue Разработка" },
  { topic: "Angular Разработка" },
  { topic: "WordPress Разработка" },
  { topic: "Web Дизайнер" },
  { topic: "Web Разработка" },
  { topic: "Java Разработка" },
  { topic: "Тестирование" },
  { topic: "Хостинг" },
];

export default function Development() {

  return (
    <div className={styles.developmentBlock}>
      <ul className={styles.developmentList}>
        {DEV_LIST.map(({ topic }) => (
          <li key={topic} className={styles.developmentListItem}>
            <Link
              className={styles.developmentItemLink}
              href="/find_task/tasks"
            >
              {topic}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}