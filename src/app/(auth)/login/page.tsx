import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <main className={styles.container}>
      <h1 className={styles.loginHeader}>Вход в профиль</h1>
      <form className={styles.loginForm} action="">
        <div className={styles.loginInputBlock}>
          <label className={styles.loginInputLabel} htmlFor="email" />
          <input
            className={styles.loginInput}
            type="email"
            name="email"
            placeholder="Введите вашу почту"
          />
        </div>
        <div className={styles.loginInputBlock}>
          <label className={styles.loginInputLabel} htmlFor="password" />
          <input
            className={styles.loginInput}
            type="password"
            name="password"
            placeholder="Введите пароль"
          />
        </div>
        <button className={styles.loginButton}>Войти</button>
        <div className={styles.forgotPasswordBlock}>
          <div className={styles.checkboxBlock}>
            <input
              className={styles.rememberMeCheckbox}
              id="check"
              type="checkbox"
            />
            <label className={styles.rememberMeText} htmlFor="check">
              Запомнить меня
            </label>
          </div>
          <Link href="#">Забыли пароль?</Link>
        </div>
      </form>
      <div className={styles.toSignupBlock}>
        <Link className={styles.toSignupText} href="/signup">
          Зарегистрироваться
        </Link>
      </div>
    </main>
  );
}
