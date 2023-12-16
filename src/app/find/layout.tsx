import { Header } from "@/components";
import Footer from "@/components/ui/Footer/Footer";

export default function findLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
