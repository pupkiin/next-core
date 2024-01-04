"use client";
import Link from "next/link";
import styles from "./as.module.css";
import { apiPostAuthSignUp } from "@/api/api-functions";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { ROUTES } from "@/shared/constants/routes";
import { useRouter } from "next/navigation";

export default function SignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // для перенаправления пользователя
  const router = useRouter();

  // r-hook-form - для форм
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
    role: string;
  }>();
  // rQuery - мутация для отправки на сервер
  const signUpMutation = useMutation({
    mutationFn: apiPostAuthSignUp,
    onSuccess() {
      router.push(ROUTES.HOME);
    }
  })

  return (
    <main className={styles.container}>
      {children}
      <form
        className={styles.signupForm}
        action=""
        onSubmit={handleSubmit((data) => {
          let role: string;
          let query = document.location.href.split("/");
          if (query.at(-1) === "master") {
            role = "MASTER";
          } else {
            role = "CLIENT";
          }
          data.role = role;
          // вызов мутации (функции)
          signUpMutation.mutate(data);
        })}
      >
        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="email"
            placeholder="Введите вашу почту"
            {...register("email", { required: true })}
          />
        </div>

        <div className={styles.signupInputBlock}>
          <input
            className={styles.signupInput}
            type="password"
            placeholder="Пароль (минимум 8 символов)"
            {...register("password", { required: true })}
          />
        </div>

        <div className={styles.checkboxBlock}>
          <input className={styles.checkboxRules} id="check" type="checkbox" />
          <label className={styles.checkboxRulesText} htmlFor="check">
            Я согласен с{" "}
            <Link className={styles.checkboxLink} href="#">
              Правилами площадки
            </Link>{" "}
            и
            <Link className={styles.checkboxLink} href="#">
              {" "}
              Политикой Конфиденциальности
            </Link>
            .
          </label>
        </div>

        <div className={styles.signupButtonBlock}>
          <button className={styles.signupButton}>Создать аккаунт</button>
        </div>
      </form>
      <div className={styles.haveAccount}>
        <span className={styles.haveAccountText}>Уже есть аккаунт?</span>
        <Link className={styles.haveAccountLink} href={ROUTES.LOGIN}>
          Войти
        </Link>
      </div>
    </main>
  );
}
