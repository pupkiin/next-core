import React from "react";

import styles from "./Footer.module.css";
import Link from "next/link";

export interface FooterProps {
  prop?: string;
}

export function Footer({ prop = "default value" }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerBlock}>
        <ul className={styles.footerList}>
          <li className={styles.footerListHeader}>Header LOgo</li>
          <li className={styles.footerListItem}>
            <div className={styles.footerMessagers}>
              <Link className={styles.footerMessagersLink} href="#">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 101 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_2_40)">
                    <path
                      d="M0.5 48C0.5 25.3726 0.5 14.0589 7.52944 7.02944C14.5589 0 25.8726 0 48.5 0H52.5C75.1274 0 86.4411 0 93.4706 7.02944C100.5 14.0589 100.5 25.3726 100.5 48V52C100.5 74.6274 100.5 85.9411 93.4706 92.9706C86.4411 100 75.1274 100 52.5 100H48.5C25.8726 100 14.5589 100 7.52944 92.9706C0.5 85.9411 0.5 74.6274 0.5 52V48Z"
                      fill="#0077FF"
                    />
                    <path
                      d="M53.7085 72.042C30.9168 72.042 17.9169 56.417 17.3752 30.417H28.7919C29.1669 49.5003 37.5834 57.5836 44.25 59.2503V30.417H55.0004V46.8752C61.5837 46.1669 68.4995 38.667 70.8329 30.417H81.5832C79.7915 40.5837 72.2915 48.0836 66.9582 51.1669C72.2915 53.6669 80.8336 60.2086 84.0836 72.042H72.2499C69.7082 64.1253 63.3754 58.0003 55.0004 57.1669V72.042H53.7085Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_2_40">
                      <rect
                        width="100"
                        height="100"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link className={styles.footerMessagersLink} href="#">
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 1000 1000"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>Artboard</title>
                  <desc>Created with Sketch.</desc>
                  <defs>
                    <linearGradient
                      x1="50%"
                      y1="0%"
                      x2="50%"
                      y2="99.2583404%"
                      id="linearGradient-1"
                    >
                      <stop stopColor="#2AABEE" offset="0%"></stop>
                      <stop stopColor="#229ED9" offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <g
                    id="Artboard"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fillRule="evenodd"
                  >
                    <circle
                      id="Oval"
                      fill="url(#linearGradient-1)"
                      cx="500"
                      cy="500"
                      r="500"
                    ></circle>
                    <path
                      d="M226.328419,494.722069 C372.088573,431.216685 469.284839,389.350049 517.917216,369.122161 C656.772535,311.36743 685.625481,301.334815 704.431427,301.003532 C708.567621,300.93067 717.815839,301.955743 723.806446,306.816707 C728.864797,310.92121 730.256552,316.46581 730.922551,320.357329 C731.588551,324.248848 732.417879,333.113828 731.758626,340.040666 C724.234007,419.102486 691.675104,610.964674 675.110982,699.515267 C668.10208,736.984342 654.301336,749.547532 640.940618,750.777006 C611.904684,753.448938 589.856115,731.588035 561.733393,713.153237 C517.726886,684.306416 492.866009,666.349181 450.150074,638.200013 C400.78442,605.66878 432.786119,587.789048 460.919462,558.568563 C468.282091,550.921423 596.21508,434.556479 598.691227,424.000355 C599.00091,422.680135 599.288312,417.758981 596.36474,415.160431 C593.441168,412.561881 589.126229,413.450484 586.012448,414.157198 C581.598758,415.158943 511.297793,461.625274 375.109553,553.556189 C355.154858,567.258623 337.080515,573.934908 320.886524,573.585046 C303.033948,573.199351 268.692754,563.490928 243.163606,555.192408 C211.851067,545.013936 186.964484,539.632504 189.131547,522.346309 C190.260287,513.342589 202.659244,504.134509 226.328419,494.722069 Z"
                      id="Path-3"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </Link>
            </div>
          </li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.footerListHeader}>О Master`s Guild</li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              О площадке
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Правила площадки
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Пользовательское соглашение
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Политика конфиденциальности
            </Link>
          </li>
        </ul>

        <ul className={styles.footerList}>
          <li className={styles.footerListHeader}>Информация</li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Служба поддержки
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Ваши вопросы
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Клиентам
            </Link>
          </li>
          <li className={styles.footerListItem}>
            <Link className={styles.footerListLink} href="#">
              Мастерам
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
