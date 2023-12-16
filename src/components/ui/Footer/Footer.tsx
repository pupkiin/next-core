import Link from 'next/link';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>
            <Link className={styles.footerItemLink} href="/">
              Logo
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerItemLink} href="/">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M8 1a5 5 0 00-5 5v1h1a1 1 0 011 1v3a1 1 0 01-1 1H3a1 1 0 01-1-1V6a6 6 0 1112 0v6a2.5 2.5 0 01-2.5 2.5H9.366a1 1 0 01-.866.5h-1a1 1 0 110-2h1a1 1 0 01.866.5H11.5A1.5 1.5 0 0013 12h-1a1 1 0 01-1-1V8a1 1 0 011-1h1V6a5 5 0 00-5-5z" />
              </svg>
              <span className={styles.footerItemLinkText}>Поддержка</span>
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerItemLink} href="/">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M2.5 8a5.5 5.5 0 018.25-4.764.5.5 0 00.5-.866A6.5 6.5 0 1014.5 8a.5.5 0 00-1 0 5.5 5.5 0 11-11 0z" />
                <path d="M15.354 3.354a.5.5 0 00-.708-.708L8 9.293 5.354 6.646a.5.5 0 10-.708.708l3 3a.5.5 0 00.708 0l7-7z" />
              </svg>
              <span className={styles.footerItemLinkText}>Политика</span>
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerItemLink} href="/">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M5.5 5a.5.5 0 000 1h5a.5.5 0 000-1h-5zm0 2a.5.5 0 000 1h3a.5.5 0 000-1h-3z" />
                <path d="M8 2a2 2 0 002-2h2.5A1.5 1.5 0 0114 1.5v13a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 012 14.5v-13A1.5 1.5 0 013.5 0H6a2 2 0 002 2zm0 1a3.001 3.001 0 01-2.83-2H3.5a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-13a.5.5 0 00-.5-.5h-1.67A3.001 3.001 0 018 3z" />
              </svg>
              <span className={styles.footerItemLinkText}>Правила</span>
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerItemLink} href="/">
              <svg
                fill="currentColor"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 006 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z" />
                <path d="M10.273 2.513l-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 012.924 2.924l-.01.89.636.622a2.89 2.89 0 010 4.134l-.637.622.011.89a2.89 2.89 0 01-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 01-4.134 0l-.622-.637-.89.011a2.89 2.89 0 01-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 010-4.134l.637-.622-.011-.89a2.89 2.89 0 012.924-2.924l.89.01.622-.636a2.89 2.89 0 014.134 0l-.715.698a1.89 1.89 0 00-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 00-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 000 2.704l.944.92-.016 1.32a1.89 1.89 0 001.912 1.911l1.318-.016.921.944a1.89 1.89 0 002.704 0l.92-.944 1.32.016a1.89 1.89 0 001.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 000-2.704l-.944-.92.016-1.32a1.89 1.89 0 00-1.912-1.911l-1.318.016z" />
                <path d="M7.001 11a1 1 0 112 0 1 1 0 01-2 0z" />
              </svg>
              <span className={styles.footerItemLinkText}>Вопросы</span>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}