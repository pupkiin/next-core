import Link from "next/link";
import styles from "./HeaderLogo.module.css"

export default function HeaderLogo() {
  return (
    <li className={styles.headerLogo}>
      <Link className={styles.headerLogoLink} href="/">
        Master`s Guild
      </Link>
    </li>
  );
}