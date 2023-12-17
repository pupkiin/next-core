import Link from "next/link";
import styles from "./HeaderLogin.module.css";

export default function HeaderLogin() {
  return (
    <Link className={styles.headerLoginButton} href="/login">
      Вход
    </Link>
  );
}
