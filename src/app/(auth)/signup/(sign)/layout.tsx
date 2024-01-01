"use client";
import Link from "next/link";
import styles from "./as.module.css";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import authStore from "@/store/auth";

export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  function handleForm(event: FormEvent) {
    event.preventDefault();

    // сделать преход по КНОПКЕ
    let role: string;
    let query = document.location.href.split("/");
    if (query.at(-1) === "master") {
      role = "MASTER";
    } else {
      role = "CLIENT";
    }
    axios
      .post("/auth/sign-up", {
        email: email,
        password: password,
        role: role,
      })
      .then((res) => {
        authStore.setAuth();
        console.log(authStore.authorized);
      })
      .catch((err) => {
        console.log(err);
      });
    // authStore.setAuth();
    // console.log(authStore.authorized);
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(event: ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
  }

  function handlePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <main className={styles.container}>
      {children}
      <form className={styles.signupForm} action="" onSubmit={handleForm}>
        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="email"
            name="email"
            placeholder="Введите вашу почту"
            onChange={handleEmail}
          />
        </div>

        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="password"
            name="password"
            placeholder="Пароль (минимум 8 символов)"
            onChange={handlePassword}
          />
        </div>

        <div className={styles.checkboxBlock}>
          <input className={styles.checkboxRules} id="check" type="checkbox" />
          <label className={styles.checkboxRulesText} htmlFor="check">
            Я согласен с{" "}
            <Link className={styles.checkboxLink} href="#">
              Правилами площадки
            </Link>{" "}
            и
            <Link className={styles.checkboxLink} href="#">
              {" "}
              Политикой Конфиденциальности
            </Link>
            .
          </label>
        </div>

        <div className={styles.signupButtonBlock}>
          <button className={styles.signupButton}>
            Создать аккаунт
          </button>
        </div>
      </form>
      <div className={styles.haveAccount}>
        <span className={styles.haveAccountText}>Уже есть аккаунт?</span>
        <Link className={styles.haveAccountLink} href="/login">
          Войти
        </Link>
      </div>
    </main>
  );
}
