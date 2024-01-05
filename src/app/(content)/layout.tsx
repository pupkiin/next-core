"use client";
import { apiGetAuthSession } from "@/api/api-functions";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import Loading from "@/components/ui/loading";
import authStore from "@/store/auth";
import { useQuery } from "@tanstack/react-query";

export default function CreateTaskLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: () => apiGetAuthSession(),
    retry: false,
  });

  if (isLoading) {
    // return <main></main>;
    return <Loading />
  }

  // в сторе устанавливаем авторизован или нет, для проверок доступа
  if (data) {
    authStore.setAuth();
  } else {
    authStore.remAuth();
  }

  return (
    <>
      <Header data={data} />
      {children}
      <Footer />
    </>
  );
}
