"use client";
import { apiGetAuthSession } from "@/api/api-functions";
import Header from "@/components/ui/Header/Header";
import Loading from "@/components/ui/loading";
import { ROUTES } from "@/shared/constants/routes";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: () => apiGetAuthSession(),
    retry: false,
  });

  if (isLoading) {
    return <main></main>;
    // return <Loading />;
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
      </main>
      {/* <Footer /> */}
    </>
  );
}
