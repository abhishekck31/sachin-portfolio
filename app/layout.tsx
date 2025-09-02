import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
// Example for app/layout.js or pages/_app.js
import './globals.css';
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: "Sachin - Video Editor",
  description: "Minimal. Modern. Professional video editing services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`}>
      <body className={`${inter.className} bg-white text-gray-900 antialiased`}>
        <Navigation />
        <main className="pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
