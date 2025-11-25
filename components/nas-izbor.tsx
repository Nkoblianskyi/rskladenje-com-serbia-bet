"use client"

import { useState } from "react"
import type { KladskaKuća } from "@/types"
import { KladionicaKartica } from "./kladionica-kartica"
import { KladionicaDetalji } from "./kladionica-detalji"
import { Award, CheckCircle, Trophy } from "lucide-react"

interface NasIzborProps {
  kuća: KladskaKuća
}

export function NasIzbor({ kuća }: NasIzborProps) {
  const [showDetalji, setShowDetalji] = useState(false)

  return (
    <section className="py-8">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {/* Title with icon */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Naš Izbor</h2>
                <p className="text-white/60 text-sm">Preporuka redakcije RSkladenje</p>
              </div>
            </div>

            {/* Description */}
            <div className="flex-1 md:border-l md:border-white/10 md:pl-6">
              <p className="text-white/80 leading-relaxed">
                Nakon detaljne analize svih kladionica u Srbiji, naš tim stručnjaka je izabrao
                <span className="text-primary font-semibold"> {kuća.naziv} </span>
                kao najbolju opciju za igrače. Ova kladionica se ističe najboljim kvotama, pouzdanim isplatama i
                vrhunskim bonusima.
              </p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-white/10">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/20 rounded-full">
              <CheckCircle className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-white">Verifikovano od Stručnjaka</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/20 rounded-full">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-xs font-medium text-white">Najviša Ocena 2025</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 rounded-full">
              <Trophy className="w-4 h-4 text-blue-400" />
              <span className="text-xs font-medium text-white">Preporučeno</span>
            </div>
          </div>
        </div>

        {/* Featured card */}
        <KladionicaKartica kuća={kuća} pozicija={1} onDetailsClick={() => setShowDetalji(true)} />

        {showDetalji && <KladionicaDetalji kuća={kuća} isOpen={showDetalji} onClose={() => setShowDetalji(false)} />}
      </div>
    </section>
  )
}
