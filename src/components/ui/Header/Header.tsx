"use client";
import HeaderBalance from "../HeaderBalance/HeaderBalance";
import HeaderCreateTask from "../HeaderCreateTask/HeaderCreateTask";
import HeaderFindTask from "../HeaderFindTask/HeaderFindTask";
import HeaderSignIn from "../HeaderSignIn/HeaderSignIn";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import styles from "./Header.module.css";
import HeaderSignUp from "../HeaderSignUp/HeaderSignUp";

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
            <HeaderSignIn />
            <HeaderSignUp />
          </li>
        )}
      </ul>
      <ul className={styles.specialties}>some specialities</ul>
    </header>
  );
}
