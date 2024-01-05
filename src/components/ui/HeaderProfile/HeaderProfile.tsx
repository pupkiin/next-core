"use client";
import Link from "next/link";
import styles from "./HeaderProfile.module.css";
import Image from "next/image";
import { apiPostAuthSignOut } from "@/api/api-functions";
import { useMutation } from "@tanstack/react-query";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

export default function HeaderProfile() {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: apiPostAuthSignOut,
    onSuccess() {
      // без роутера, чтобы хедер обновился
      location.replace(ROUTES.HOME);
      // router.push(ROUTES.HOME);
    },
  });

  function handleQuit() {
    signOutMutation.mutate();
  }

  return (
    <div className={styles.headerProfileBlock}>
      <Link href={ROUTES.PROFILE}>
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
            <Link href={ROUTES.PROFILE}>Профиль</Link>
          </li>
          <li className={styles.headerProfileItem}>
            <Link href={ROUTES.SETTINGS}>Настройки</Link>
          </li>
          <li className={styles.headerProfileItem}>
            <button onClick={handleQuit}>Выйти</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
