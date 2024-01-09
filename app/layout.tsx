import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Toaster } from 'react-hot-toast';

const manrope = Manrope({ subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Kövesi Kristóf CV Page',
  description: 'asd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  )
}
