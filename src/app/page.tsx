import Header from "@/components/ui/Header/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
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
    </>
  );
}
