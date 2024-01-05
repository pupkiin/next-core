import Link from "next/link";
import styles from "./HeaderSignIn.module.css";
import { ROUTES } from "@/shared/constants/routes";

export default function HeaderSignIn() {
  return (
    <Link className={styles.headerSignInButton} href={ROUTES.SIGN_IN}>
      Вход
    </Link>
  );
}
