import Link from "next/link";
import styles from "./HeaderSignUp.module.css"
import { ROUTES } from "@/shared/constants/routes";

export default function HeaderSignUp() {
  return (
    <Link className={styles.headerSignUpButton} href={ROUTES.SIGN_UP}>
      Регистрация
    </Link>
  );
}