import Footer from "@/components/ui/Footer/Footer";
import Header from "@/components/ui/Header/Header";

export default function ProfileLayout({
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
