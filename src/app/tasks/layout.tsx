"use client";
import { apiGetAuthSession } from "@/api/api-functions";
import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";
import Loading from "@/components/ui/loading";
import { useQuery } from "@tanstack/react-query";

export default function TasksLayout({
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
    return <main></main>;
    // return <Loading />;
  }

  return (
    <>
      <Header data={data} />
      {children}
      <Footer />
    </>
  );
}
