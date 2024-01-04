'use client'
import Link from "next/link";
import styles from "./HeaderProfile.module.css";
import Image from "next/image";
import { apiPostAuthSignOut } from "@/api/api-functions";
import { useMutation } from "@tanstack/react-query";
import { ROUTES } from "@/shared/constants/routes";

export default function HeaderProfile() {

  const signOutMutation = useMutation({
    mutationFn: apiPostAuthSignOut,
    onSuccess() {
      // без роутера, чтобы хедер обновился
      location.replace(ROUTES.HOME);
    },
  });

  function handleQuit() {
    signOutMutation.mutate();
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
            <button onClick={handleQuit}>
              Выйти
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
