'use client'

import "@/app/ui/global.css"
import Navbar from "@/app/ui/navbar"
import Footer from "@/app/ui/footer"
import { lato, notoSans } from "@/app/ui/fonts"
import { useViewport } from "@/app/hooks/useViewport"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { isMobile } = useViewport();

  return (
    <html lang="en">
      <body className={`${lato.variable} ${notoSans.variable}`}>
        <Navbar isMobile={isMobile} />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
