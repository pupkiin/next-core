"use client";
import { apiGetAuthSession } from "@/api/api-functions";
import Header from "@/components/ui/Header/Header";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["session"],
    queryFn: () => apiGetAuthSession(),
    retry: false,
  });

  // useEffect(() => {
  //   location.reload();
  // }, [data]);

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
        <Link href="/profile">Profile</Link>
        <br />
        <br />
        <Link href="/login">Login</Link>

        <br />
        <br />
        <Link href="/signup">Sign Up</Link>
      </main>
      {/* <Footer /> */}
    </>
  );
}
