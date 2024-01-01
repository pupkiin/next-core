'use client'
import Link from "next/link";
import styles from "./HeaderProfile.module.css";
import Image from "next/image";
import axios from "axios";
import authStore from "@/store/auth";

export default function HeaderProfile() {
  // удалить куки и в стор записать false
  function handleQuit() {
    axios.post("/auth/sign-out").then((res) => {
      authStore.remAuth();
      console.log(authStore.authorized);
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <div className={styles.headerProfileBlock}>
      <Link href="/profile">
        <Image
          className={styles.headerProfileImage}
          src="/Vector.svg"
          alt="Profile image"
          width={50}
          height={50}
          priority
        />
      </Link>

      <div className={styles.headerProfileDropdown}>
        <ul className={styles.headerProfileList}>
          <li className={styles.headerProfileItem}>
            <Link href="/profile">Профиль</Link>
          </li>
          <li className={styles.headerProfileItem}>
            <Link href="#">Настройки</Link>
          </li>
          <li className={styles.headerProfileItem}>
            <Link href="/" onClick={handleQuit}>
              Выйти
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
