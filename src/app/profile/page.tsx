import Image from "next/image";
import styles from "./profile.module.css";

export default function Profile() {
  return (
    <main className={styles.container}>
      <div className={styles.profile}>
        <div className={styles.profileInfo}>
          <h1>Specialty</h1>
          <p>description</p>
        </div>
        <div className={styles.profileImgBlock}>
          <Image
            className={styles.profileImage}
            src="/Vector.svg"
            alt="Profile image"
            width={200}
            height={200}
            priority
          />
          <h2>Nickname</h2>
          <div className={styles.profileUserData}>
            <ul className={styles.profileDataList}>
              <li>a</li>
              <li>b</li>
              <li>c</li>
              <li>d</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
