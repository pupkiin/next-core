import HeaderCreateTask from "../HeaderCreateTask/HeaderCreateTask";
import HeaderFindTask from "../HeaderFindTask/HeaderFindTask";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderSignup from "../HeaderSignup/HeaderSignup";
import styles from "./Header.module.css"

export default function Header() {

  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <HeaderLogo />
        <HeaderFindTask />
        <HeaderCreateTask />
        <li className={styles.headerAuthorizationButtons}>
          <HeaderLogin />
          <HeaderSignup />
        </li>
      </ul>
      <ul className={styles.specialties}>some specialities</ul>
    </header>
  );
}