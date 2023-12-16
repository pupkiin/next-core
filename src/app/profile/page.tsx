import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
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
