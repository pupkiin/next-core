import Link from "next/link";
import styles from './as.module.css'

export default function signLayout(
  { children }: { children: React.ReactNode }
) {
  return (
    <main className={styles.container}>
      {children}
      <form className={styles.signupForm} action="">
        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="text"
            name="text"
            placeholder="Придумайте ник"
          />
        </div>

        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="email"
            name="email"
            placeholder="Введите вашу почту"
          />
        </div>

        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="password"
            name="password"
            placeholder="Пароль (минимум 8 символов)"
          />
        </div>

        <div className={styles.checkboxBlock}>
          <input className={styles.checkboxRules} id="check" type="checkbox" />
          <label className={styles.checkboxRulesText} htmlFor="check">
            Да, я согласен с{" "}
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
          <button className={styles.signupButton}>Создать аккаунт</button>
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