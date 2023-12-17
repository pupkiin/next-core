import Link from "next/link";
import styles from "./HeaderCreateTask.module.css";

export default function HeaderCreateTask() {
  return (
    <li className={styles.headerCreateTask}>
      <Link className={styles.headerCreateTaskButton} href="/create_task">
        Предложить работу
      </Link>
    </li>
  );
}
