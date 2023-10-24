import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Footer from "@/components/Footer"
import NavBar from "@/components/NavBar"

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700", "200"] })

export const metadata: Metadata = {
  title: "Guriel AMP | Site",
  description: "Guriel's site",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
