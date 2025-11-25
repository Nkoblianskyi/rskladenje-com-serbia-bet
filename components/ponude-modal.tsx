"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star, X } from "lucide-react"
import type { KladskaKuća } from "@/types"

interface PonudeModalProps {
  kuće: KladskaKuća[]
}

export function PonudeModal({ kuće }: PonudeModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const renderStars = (zvezde: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < zvezde) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-accent text-accent" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-muted-foreground/30" />)
      }
    }

    return starElements
  }

  const topKuća = kuće[0]

  if (!topKuća || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/20 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
        >
          <X className="h-4 w-4 text-white" />
        </button>

        <div className="p-8 text-center bg-gradient-to-br from-primary via-primary to-primary/80">
          <span className="text-xl font-bold uppercase tracking-wider text-white">Top Ponuda Dana</span>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex justify-center mb-5">
            <div className="relative h-24 w-52 p-4 bg-secondary/50 rounded-xl">
              <Image src={topKuća.logo || "/placeholder.svg"} alt={topKuća.naziv} fill className="object-contain" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="flex gap-0.5">{renderStars(topKuća.zvezde)}</div>
            <span className="font-bold text-foreground">{topKuća.ocena.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">({topKuća.recenzije} recenzija)</span>
          </div>

          <div className="text-center p-5 bg-primary/10 rounded-xl border border-primary/30 mb-5">
            <div className="text-xs uppercase font-bold text-primary tracking-wider mb-3">Ekskluzivan Bonus</div>
            <p className="font-bold text-2xl text-foreground mb-2">{topKuća.bonus}</p>
            {topKuća.dopBonus && <p className="font-semibold text-lg text-accent">{topKuća.dopBonus}</p>}
          </div>

          <a
            href={topKuća.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3.5 px-6 rounded-lg transition-colors uppercase tracking-wide"
            onClick={() => setIsOpen(false)}
          >
            Preuzmi Bonus
          </a>

          <p className="text-xs text-muted-foreground text-center mt-4">
            18+ | Primenjuju se Uslovi | Igrajte Odgovorno
          </p>
        </div>
      </div>
    </div>
  )
}
