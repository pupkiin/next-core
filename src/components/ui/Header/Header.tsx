'use client'
import authStore from "@/store/auth";
import HeaderBalance from "../HeaderBalance/HeaderBalance";
import HeaderCreateTask from "../HeaderCreateTask/HeaderCreateTask";
import HeaderFindTask from "../HeaderFindTask/HeaderFindTask";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderProfile from "../HeaderProfile/HeaderProfile";
import HeaderSignup from "../HeaderSignup/HeaderSignup";
import styles from "./Header.module.css"
import { observer } from "mobx-react-lite";
import axios from "axios";
import { useEffect } from "react";


const Header = observer(() => {
  useEffect(() => {
    axios.get("/auth/session").then((res) => {
      // console.log(res);
      if (res.status === 200) {
        authStore.setAuth();
      } else {
        authStore.remAuth();
      }
    }).catch((err) => {
      console.log(err);
    });
  }, []);

  // проверяем авторизацию в сторе, так как cookie нам не доступны
  return (
    <header className={styles.header}>
      <ul className={styles.headerList}>
        <HeaderLogo />
        <HeaderFindTask />
        <HeaderCreateTask />
        {authStore.authorized ? (
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
})

export default Header;