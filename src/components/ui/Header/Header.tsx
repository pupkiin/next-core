"use client";
import HeaderBalance from "../HeaderBalance/HeaderBalance";
import HeaderCreateTask from "../HeaderCreateTask/HeaderCreateTask";
import HeaderFindTask from "../HeaderFindTask/HeaderFindTask";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import HeaderSignup from "../HeaderSignup/HeaderSignup";
import styles from "./Header.module.css";

export interface IResponse<T = any> {
  data: T;
}

export default function Header({ data }: IResponse) {
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <HeaderLogo />
        <HeaderFindTask />
        <HeaderCreateTask />
        {data ? (
          <li className={styles.headerProfileButtons}>
            <HeaderBalance />
            <HeaderProfile />
          </li>
        ) : (
          <li className={styles.headerAuthorizationButtons}>
            <HeaderLogin />
            <HeaderSignup />
          </li>
        )}
      </ul>
      <ul className={styles.specialties}>some specialities</ul>
    </header>
  );
}
