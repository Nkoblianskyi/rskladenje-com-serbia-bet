"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X, Cookie, Settings } from "lucide-react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <div className="pointer-events-auto w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary to-primary/80 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">

            <span className="font-semibold text-primary-foreground">Politika Kolačića</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            RSkladenje.com koristi kolačiće za poboljšanje vašeg iskustva, analizu poseta i prikazivanje relevantnog
            sadržaja. Možete prihvatiti sve kolačiće ili prilagoditi postavke.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Button
              onClick={handleAccept}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Prihvatam Sve
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              className="flex-1 border-border text-foreground hover:bg-muted bg-transparent"
            >
              Samo Neophodni
            </Button>
            <Link
              href="/politika-kolacica"
              className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Settings className="h-4 w-4" />
              <span>Saznaj Više</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
