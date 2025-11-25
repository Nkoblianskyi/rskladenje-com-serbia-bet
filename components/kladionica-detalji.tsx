"use client"

import { CustomDialog } from "@/components/ui/custom-dialog"
import { Star } from "lucide-react"
import type { KladskaKuća } from "@/types"
import Image from "next/image"
import Link from "next/link"

interface KladionicaDetaljiProps {
  kuća: KladskaKuća
  isOpen: boolean
  onClose: () => void
}

export function KladionicaDetalji({ kuća, isOpen, onClose }: KladionicaDetaljiProps) {
  const renderStars = (ocena: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = ocena / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-5 w-5 fill-accent text-accent" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-5 w-5 text-muted-foreground/30" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-5 w-5">
            <Star className="absolute h-5 w-5 text-muted-foreground/30" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-5 w-5 fill-accent text-accent" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  return (
    <CustomDialog
      isOpen={isOpen}
      onClose={onClose}
      title={`${kuća.naziv} - Detalji`}
      description="Kompletne informacije o betting stranici"
    >
      <div className="space-y-5">
        <div className="bg-secondary/50 rounded-xl p-8 flex items-center justify-center">
          <div className="relative h-28 w-full max-w-[220px]">
            <Image src={kuća.logo || "/placeholder.svg"} alt={kuća.naziv} fill className="object-contain" />
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center justify-center gap-3">
          <div className="flex items-center gap-1">{renderStars(kuća.ocena)}</div>
          <span className="text-3xl font-bold text-foreground">{kuća.ocena.toFixed(1)}</span>
          <span className="text-sm text-muted-foreground">({kuća.recenzije.toLocaleString()} recenzija)</span>
        </div>

        {/* Tags */}
        {kuća.oznake.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {kuća.oznake.map((oznaka, index) => (
              <span
                key={index}
                className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full uppercase"
              >
                {oznaka}
              </span>
            ))}
          </div>
        )}

        <div className="bg-primary/10 rounded-xl p-6 border border-primary/20">
          <h4 className="font-bold text-foreground mb-3 text-center text-sm uppercase tracking-wider">
            Bonus Dobrodošlice
          </h4>
          <p className="text-2xl font-bold text-primary text-center mb-2">{kuća.bonus}</p>
          {kuća.dopBonus && <p className="text-xl font-semibold text-accent text-center">{kuća.dopBonus}</p>}
        </div>

        {/* Terms */}
        <div className="bg-secondary/50 rounded-xl p-4 border-l-4 border-primary">
          <h4 className="font-bold text-foreground mb-2 text-sm">Uslovi i Odredbe</h4>
          <p className="text-xs text-muted-foreground leading-relaxed">{kuća.uslovi}</p>
        </div>

        <Link
          href={kuća.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 transition-colors text-primary-foreground font-bold py-4 px-6 rounded-xl text-center uppercase tracking-wide"
          onClick={onClose}
        >
          Posetite {kuća.naziv}
        </Link>

        <p className="text-xs text-center text-muted-foreground">18+ | Primenjuju se uslovi | Igrajte odgovorno</p>
      </div>
    </CustomDialog>
  )
}
