"use client"

import { useState } from "react"
import type { KladskaKuća } from "@/types"
import { KladionicaKartica } from "./kladionica-kartica"
import { KladionicaDetalji } from "./kladionica-detalji"
import { Sparkles } from "lucide-react"

interface KladionicaListaProps {
  kuće: KladskaKuća[]
}

export function KladioniceLista({ kuće }: KladionicaListaProps) {
  const [odabranaKuća, setOdabranaKuća] = useState<KladskaKuća | null>(null)

  return (
    <section id="kladionice" className="py-4 ">
      <div className="container mx-auto max-w-[1200px]">
        {/* Section header */}

        {/* Cards */}
        <div className="space-y-4">
          {kuće.map((kuća, index) => (
            <KladionicaKartica
              key={kuća.id}
              kuća={kuća}
              pozicija={index + 1}
              onDetailsClick={() => setOdabranaKuća(kuća)}
            />
          ))}
        </div>
      </div>

      {odabranaKuća && (
        <KladionicaDetalji kuća={odabranaKuća} isOpen={!!odabranaKuća} onClose={() => setOdabranaKuća(null)} />
      )}
    </section>
  )
}
