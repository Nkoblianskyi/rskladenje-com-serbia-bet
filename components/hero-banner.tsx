"use client"

import { Lock, UserCheck, AlertCircle, Calendar } from "lucide-react"
import Image from "next/image"

export function HeroBanner() {
  const currentDate = new Date()
  const formattedDate = currentDate.toLocaleDateString("sr-Latn-RS", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  return (
    <section className="relative overflow-hidden min-h-[250px] max-h-[250px] md:min-h-[350px] md:max-h-[350px] flex items-center">
      <div className="container mx-auto relative z-10 px-4 py-6 md:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 md:gap-8">
          {/* Left: Main content */}
          <div className="flex-1 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/20 border border-primary/30 mb-3 backdrop-blur-sm">
              <Calendar className="h-3 w-3 text-primary" />
              <span className="text-xs font-semibold text-primary">Ažurirano: {formattedDate}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 leading-tight">
              Vaš Vodič za <span className="text-primary">Pametno Klađenje</span>
            </h1>

            <p className="text-sm md:text-base text-white/70 leading-relaxed mb-4 md:mb-5 line-clamp-2">
              Profesionalne analize betting platformi, objektivne recenzije i ekspertski saveti.
            </p>

            {/* CTA Button */}
          </div>

          <div className="grid grid-cols-2 md:flex md:flex-col gap-2 pt-3 md:pt-0 border-t md:border-t-0 md:border-l border-white/20 md:pl-8">
            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2">
                <Image src="/flag.png" alt="Logo" width={24} height={24} />
              <span className="text-xs md:text-sm font-medium text-white">Licencirano</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2">
              <Lock className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-white">Bezbednost</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2">
              <AlertCircle className="h-3.5 w-3.5 md:h-4 md:w-4 text-accent" />
              <span className="text-xs md:text-sm font-medium text-white">18+</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1.5 md:px-3 md:py-2">
              <UserCheck className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary" />
              <span className="text-xs md:text-sm font-medium text-white">Provereno</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
