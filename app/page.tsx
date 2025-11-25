"use client"

import { kladskeKuce } from "@/types"
import { SiteHeader } from "@/components/site-header"
import { HeroBanner } from "@/components/hero-banner"
import { KladioniceLista } from "@/components/kladionice-lista"
import { MetodologijaOcenjivanja } from "@/components/metodologija-ocenjivanja"
import { SiteFooter } from "@/components/site-footer"
import { PonudeModal } from "@/components/ponude-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { TopKladioniceSrbija } from "@/components/top-kladionice-srbija"
import { NasIzbor } from "@/components/nas-izbor"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Background image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/serbian-football-stadium-celebration-fans-red-whit.jpg')`,
        }}
      />
      {/* Black overlay 75% opacity */}
      <div className="fixed inset-0 bg-black/75" />

      {/* Content */}
      <div className="relative z-10">
        <SiteHeader />
        <main className="max-w-[1200px] mx-auto">
          <HeroBanner />
          <KladioniceLista kuće={kladskeKuce} />
          <TopKladioniceSrbija />
          <MetodologijaOcenjivanja />
          <NasIzbor kuća={kladskeKuce[0]} />
        </main>
        <SiteFooter />
        <PonudeModal kuće={kladskeKuce} />
        <CookieBanner />
      </div>
    </div>
  )
}
