import Link from "next/link";
import styles from "./HeaderBalance.module.css";

export default function HeaderBalance() {
  return (
    <Link className={styles.headerBalanceLink} href="#">
      Финансы
    </Link>
  );
}
