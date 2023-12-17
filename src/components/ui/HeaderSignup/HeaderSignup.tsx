import Link from "next/link";
import styles from "./HeaderSignup.module.css"

export default function HeaderSignup() {
  return (
    <Link className={styles.headerSignUpButton} href="/signup">
      Регистрация
    </Link>
  );
}