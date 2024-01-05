"use client";
import Link from "next/link";
import styles from "./signIn.module.css";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/shared/constants/routes";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { apiPostAuthSignIn } from "@/api/api-functions";

export default function SignIn() {
  // для перенаправления пользователя
  const router = useRouter();

  // r-hook-form - для форм
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();
  // rQuery - мутация для отправки на сервер
  const loginMutation = useMutation({
    mutationFn: apiPostAuthSignIn,
    onSuccess() {
      router.push(ROUTES.HOME);
    },
  });
  
  return (
    <main className={styles.container}>
      <h1 className={styles.signInHeader}>Вход в профиль</h1>
      <form
        className={styles.signInForm}
        action=""
        onSubmit={handleSubmit((data) => {
          loginMutation.mutate(data);
        })}
      >
        <div className={styles.signInInputBlock}>
          <label className={styles.signInInputLabel} htmlFor="email" />
          <input
            className={styles.signInInput}
            type="email"
            placeholder="Введите вашу почту"
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.signInInputBlock}>
          <label className={styles.signInInputLabel} htmlFor="password" />
          <input
            className={styles.signInInput}
            type="password"
            placeholder="Введите пароль"
            {...register("password", { required: true })}
          />
        </div>
        <button className={styles.signInButton}>Войти</button>
        <div className={styles.forgotPasswordBlock}>
          <div className={styles.checkboxBlock}>
            <input
              className={styles.rememberMeCheckbox}
              id="check"
              type="checkbox"
            />
            <label className={styles.rememberMeText} htmlFor="check">
              Запомнить меня
            </label>
          </div>
          <Link href="#">Забыли пароль?</Link>
        </div>
      </form>
      <div className={styles.toSignupBlock}>
        <Link className={styles.toSignupText} href={ROUTES.SIGN_UP}>
          Зарегистрироваться
        </Link>
      </div>
    </main>
  );
}
