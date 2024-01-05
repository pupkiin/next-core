"use client";
import { apiDeleteAccount } from "@/api/api-functions";
import { ROUTES } from "@/shared/constants/routes";
import authStore from "@/store/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Settings() {
  const router = useRouter();

  const signOutMutation = useMutation({
    mutationFn: apiDeleteAccount,
    onSuccess() {
      // без роутера, чтобы хедер обновился
      location.replace(ROUTES.HOME);
      // router.push(ROUTES.HOME);
    },
  });

  function handleQuit() {
    signOutMutation.mutate();
  }

  useEffect(() => {
    if (authStore.authorized === false) {
      router.push(ROUTES.HOME);
    }
  });

  if (authStore.authorized) {
    return (
      <main className="p-20 max-w-1440px mr-auto ml-auto">
        <h2 className="mb-10">Настройки</h2>
        <button
          className="px-20px py-10px text-white bg-blue hover:bg-blue-lighter transition ease-in-out duration-100 rounded-12px"
          onClick={handleQuit}
        >
          Удалить аккаунт
        </button>
      </main>
    );
  } 

  // if (authStore.authorized === false) {
  //   router.push(ROUTES.HOME);
  // }
}
