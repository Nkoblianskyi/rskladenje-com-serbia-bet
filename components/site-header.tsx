"use client"
import Link from "next/link"
import { SiteLogo } from "./site-logo"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="w-full max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <SiteLogo velicina="md" />

          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
              Početna
            </Link>
            <Link
              href="/o-nama"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              O Nama
            </Link>
            <Link
              href="/politika-privatnosti"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Privatnost
            </Link>
            <Link
              href="/politika-kolacica"
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Kolačići
            </Link>
          </nav>

          <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3 border-t border-border pt-4">
            <Link
              href="/"
              className="text-sm font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Početna
            </Link>
            <Link
              href="/o-nama"
              className="text-sm font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              O Nama
            </Link>
            <Link
              href="/politika-privatnosti"
              className="text-sm font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Politika Privatnosti
            </Link>
            <Link
              href="/politika-kolacica"
              className="text-sm font-medium py-2 text-muted-foreground hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Politika Kolačića
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
