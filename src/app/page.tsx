import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>Hello</div>
      <Link href='/tasks'>Tasks</Link>
    </main>
  )
}
