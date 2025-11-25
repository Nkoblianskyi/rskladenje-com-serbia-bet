"use client"

import Image from "next/image"
import { Star, ExternalLink } from "lucide-react"
import type { KladskaKuća } from "@/types"
import Link from "next/link"

interface KladionicaKarticaProps {
  kuća: KladskaKuća
  pozicija: number
  onDetailsClick: () => void
}

export function KladionicaKartica({ kuća, pozicija, onDetailsClick }: KladionicaKarticaProps) {
  const renderStars = (ocena: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = ocena / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-accent text-accent" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 text-muted-foreground/30" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4">
            <Star className="absolute h-4 w-4 text-muted-foreground/30" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 fill-accent text-accent" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const getBadgeText = (pozicija: number) => {
    switch (pozicija) {
      case 1:
        return "Najbolja ponuda"
      case 2:
        return "Popularno"
      case 3:
        return "Trend"
      default:
        return null
    }
  }

  const badgeText = getBadgeText(pozicija)

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-card border transition-all duration-200 hover:shadow-lg ${
        pozicija === 1 ? "border-primary shadow-md ring-1 ring-primary/20" : "border-border hover:border-primary/30"
      }`}
    >
      {badgeText && (
        <div
          className={`absolute top-4 left-4 z-10 px-3 py-1.5 rounded-full text-xs font-bold ${
            pozicija === 1
              ? "bg-primary text-primary-foreground"
              : pozicija === 2
                ? "bg-accent text-accent-foreground"
                : "bg-blue-500 text-white"
          }`}
        >
          {badgeText}
        </div>
      )}

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="grid grid-cols-[240px_1fr_180px_180px] items-center gap-6 p-6">
          {/* Logo */}
          <Link
            href={kuća.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-6 h-[120px] rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
          >
            <div className="relative h-24 w-full bg-black p-4 rounded-md">
              <Image
                src={kuća.logo || "/placeholder.svg"}
                alt={`${kuća.naziv} logo`}
                fill
                className="object-contain group-hover:scale-105 transition-transform"
              />
            </div>
          </Link>

          {/* Bonus info */}
          <div className="flex flex-col items-center">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Bonus Dobrodošlice
            </p>
            <h3 className="font-bold text-foreground leading-tight text-2xl">{kuća.bonus}</h3>
            {kuća.dopBonus && <p className="font-medium text-accent mt-1 text-xl">{kuća.dopBonus}</p>}
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold text-foreground mb-1">{kuća.ocena.toFixed(1)}</div>
            <div className="flex items-center gap-0.5 mb-1">{renderStars(kuća.ocena)}</div>
            <p className="text-xs text-muted-foreground">{kuća.recenzije.toLocaleString()} recenzija</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col items-stretch gap-2">
            <Link
              href={kuća.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-5 rounded-lg text-sm uppercase tracking-wide transition-colors"
            >
              Preuzmi Bonus
              <ExternalLink className="h-4 w-4" />
            </Link>
            <button
              onClick={onDetailsClick}
              className="font-medium text-sm text-muted-foreground hover:text-primary transition-colors py-2"
            >
              Više Detalja
            </button>
          </div>
        </div>

        {/* Terms */}
        <div className="px-6 py-3 bg-secondary/30 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">{kuća.uslovi}</p>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="p-4 pt-12">
          <div className="flex gap-4 items-center">
            {/* Logo - 45% width */}
            <Link
              href={kuća.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-3 w-[45%] h-24 rounded-lg bg-secondary/50 flex-shrink-0"
            >
              <div className="relative h-16 w-full bg-black p-2 rounded-md">
                <Image
                  src={kuća.logo || "/placeholder.svg"}
                  alt={`${kuća.naziv} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            {/* Bonus text - same style as desktop */}
            <div className="flex-1 flex flex-col items-center text-center">
              <p className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider mb-1">
                Bonus Dobrodošlice
              </p>
              <h3 className="font-bold text-foreground leading-tight text-base">{kuća.bonus}</h3>
              {kuća.dopBonus && <p className="font-medium text-accent mt-0.5 text-sm">{kuća.dopBonus}</p>}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 mt-4 items-center">
            {/* Column 1: Rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-2xl font-bold text-foreground">{kuća.ocena.toFixed(1)}</div>
              <p className="text-[10px] text-muted-foreground">Ocena</p>
            </div>

            {/* Column 2: Stars & Reviews */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-0.5">{renderStars(kuća.ocena)}</div>
              <p className="text-[10px] text-muted-foreground mt-0.5">{kuća.recenzije.toLocaleString()} recenzija</p>
            </div>

            {/* Column 3: Button */}
            <div className="flex flex-col items-stretch gap-1">
              <Link
                href={kuća.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-2 px-2 rounded-lg text-[10px] uppercase tracking-wide transition-colors"
              >
                Bonus
                <ExternalLink className="h-3 w-3" />
              </Link>
              <button
                onClick={onDetailsClick}
                className="py-1 text-[10px] font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Detalji
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="px-4 py-2 bg-secondary/30 border-t border-border">
          <p className="text-[10px] text-muted-foreground text-center">{kuća.uslovi}</p>
        </div>
      </div>
    </div>
  )
}
