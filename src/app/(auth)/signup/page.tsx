import Link from 'next/link';
import styles from './as.module.css'

export default function As() {
  return (
    <main className={styles.container}>
      <h1 className={styles.asTitle}>Зарегестрироваться как</h1>
      <div className={styles.variantsBlock}>
        <Link className={styles.asLink} href="/signup/client">
          <h2 className={styles.linkTitle}>Клиент</h2>
          <div className={styles.linkImages}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
            >
              <path d="M2 10h3a1 1 0 011 1v3a1 1 0 01-1 1H2a1 1 0 01-1-1v-3a1 1 0 011-1zm9-9h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V2a1 1 0 011-1zm0 9a1 1 0 00-1 1v3a1 1 0 001 1h3a1 1 0 001-1v-3a1 1 0 00-1-1h-3zm0-10a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2V2a2 2 0 00-2-2h-3zM2 9a2 2 0 00-2 2v3a2 2 0 002 2h3a2 2 0 002-2v-3a2 2 0 00-2-2H2zm7 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2h-3a2 2 0 01-2-2v-3zM0 2a2 2 0 012-2h3a2 2 0 012 2v3a2 2 0 01-2 2H2a2 2 0 01-2-2V2zm5.354.854a.5.5 0 10-.708-.708L3 3.793l-.646-.647a.5.5 0 10-.708.708l1 1a.5.5 0 00.708 0l2-2z" />
            </svg>
          </div>
        </Link>
        <Link className={styles.asLink} href="/signup/master">
          <h2 className={styles.linkTitle}>Мастер</h2>
          <div className={styles.linkImages}>
            <svg
              fill="currentColor"
              viewBox="0 0 16 16"
              height="2em"
              width="2em"
            >
              <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H4zm4-5.95a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
              <path d="M2 1a2 2 0 00-2 2v9.5A1.5 1.5 0 001.5 14h.653a5.373 5.373 0 011.066-2H1V3a1 1 0 011-1h12a1 1 0 011 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 001.5-1.5V3a2 2 0 00-2-2H2z" />
            </svg>
          </div>
        </Link>
      </div>

      <div className={styles.haveAccount}>
        <span className={styles.haveAccountText}>Уже есть аккаунт?</span>
        <Link className={styles.haveAccountLink} href="/login">
          Войти
        </Link>
      </div>
    </main>
  );
}