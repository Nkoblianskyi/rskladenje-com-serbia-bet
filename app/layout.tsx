import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "RSkladenje | Vodič za Sportsko Klađenje u Srbiji 2025",
  description:
    "Profesionalni sportski magazin za klađenje. Objektivne recenzije kladionica, analiza kvota i ekspertski saveti za pametno klađenje u Srbiji.",
  keywords: [
    "sportsko klađenje srbija",
    "online kladionice",
    "betting vodič 2025",
    "analiza kvota",
    "kladionice recenzije",
    "sportske oklade",
    "fudbal klađenje",
    "košarka oklade",
    "legalne kladionice srbija",
    "betting saveti",
  ],
  authors: [{ name: "RSkladenje" }],
  openGraph: {
    title: "RSkladenje | Sportski Betting Magazin",
    description:
      "Vaš pouzdani vodič kroz svet sportskog klađenja. Stručne analize, objektivne recenzije i ekspertski saveti.",
    url: "https://rskladenje.com",
    siteName: "RSkladenje",
    locale: "sr_RS",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-background text-foreground">{children}</body>
    </html>
  )
}
