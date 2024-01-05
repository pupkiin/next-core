"use client";
import Image from "next/image";
import styles from "./profile.module.css";
import { useQuery } from "@tanstack/react-query";
import { apiGetAuthSession } from "@/api/api-functions";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { useEffect, useState } from "react";
import authStore from "@/store/auth";

export default function Profile() {
  const router = useRouter();

  useEffect(() => {
    if (authStore.authorized === false) {
      router.push(ROUTES.HOME);
    }
  });

  if (authStore.authorized) {
    return (
      <main className={styles.container}>
        <div className={styles.profile}>
          <div className={styles.profileImgBlock}>
            <div className={styles.profileTop}>
              <Image
                className={styles.profileImage}
                src="/Vector.svg"
                alt="Profile image"
                width={160}
                height={160}
                priority
              />
              <h2 className={styles.profileNickname}>Nickname Danila</h2>
            </div>
            <div className={styles.profileBottom}>
              <button className={styles.profileButton}>Изменить профиль</button>
            </div>
          </div>

          <div className={styles.profileInfo}>
            <h1 className={styles.profileInfoSpecialty}>Frontend Developer</h1>
            <p className={styles.profileInfoDescription}>description</p>
          </div>
        </div>
      </main>
    );
  }
}
