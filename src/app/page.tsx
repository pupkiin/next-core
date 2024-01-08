"use client";
import { apiGetAuthSession } from "@/api/api-functions";
import Header from "@/components/ui/Header/Header";
import Loading from "@/components/ui/loading";
import { ROUTES } from "@/shared/constants/routes";
import authStore from "@/store/auth";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: () => apiGetAuthSession(),
    retry: false,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (data) {
    authStore.setAuth();
  } else {
    authStore.remAuth();
  }

  return (
    <>
      <Header data={data} />
      <main>
        <div>Hello</div>
        <Link href="/tasks">Tasks</Link>
        <br />
        <br />
        <Link href={ROUTES.PROFILE}>Profile</Link>
        <br />
        <br />
        <Link href={ROUTES.SIGN_IN}>Sign In</Link>

        <br />
        <br />
        <Link href={ROUTES.SIGN_UP}>Sign Up</Link>

        <br />
        <br />
        <Link href={ROUTES.SETTINGS}>Settings</Link>
      </main>
      {/* <Footer /> */}
    </>
  );
}
