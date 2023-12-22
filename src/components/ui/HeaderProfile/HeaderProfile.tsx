import Link from "next/link";
import styles from "./HeaderProfile.module.css";
import Image from "next/image";

export default function HeaderProfile() {
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
    </div>
  );
}
