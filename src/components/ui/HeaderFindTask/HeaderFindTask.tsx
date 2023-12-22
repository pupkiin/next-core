import Link from "next/link";
import styles from "./HeaderFindTask.module.css"

export default function HeaderFindTask() {
  return (
    <li className={styles.headerFindTask}>
      <Link className={styles.headerFindTaskButton} href="/find_task">
        Найти Работу
      </Link>
    </li>
  );
}