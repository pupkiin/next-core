import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import './normalize.css'
import { Footer, Header } from '@/components';

const font = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
        <Footer />  
      </body>
    </html>
  )
}
