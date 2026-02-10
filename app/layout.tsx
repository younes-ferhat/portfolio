import React from "react"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const _inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Younes Ferhat | Developer & Data Analyst',
  description:
    'Portfolio of Younes Ferhat — bridging Software Development and Data Analytics.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased min-h-screen bg-[#0f172a]">
        {children}
      </body>
    </html>
  )
}
