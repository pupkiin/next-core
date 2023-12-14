import type { Metadata } from 'next'
// import "./normalize.css";
import './globals.css'
import "./normalize.css";

// const font = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   subsets: ['latin'],
// });

export const metadata: Metadata = {
  title: "Master`s Guild",
  description: "freelance for masters",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
