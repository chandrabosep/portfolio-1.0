import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'; // Import the Head component

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Chandra Bose',
  description: 'Chandra Bose Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
