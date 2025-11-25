import Link from "next/link"
import Image from "next/image"
import { SiteLogo } from "./site-logo"
import { Shield, AlertTriangle, Mail, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="py-12 md:py-16 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12">
          {/* Column 1: Brand & Description */}
          <div className="sm:col-span-2 lg:col-span-1">
            <SiteLogo className="mb-4" velicina="lg" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nezavisni portal za analizu i poređenje betting platformi u Srbiji.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Brzi Linkovi</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link href="/o-nama" className="text-muted-foreground hover:text-primary transition-colors">
                  O Nama
                </Link>
              </li>
              <li>
                <Link href="/metodologija" className="text-muted-foreground hover:text-primary transition-colors">
                  Metodologija
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wide">Pravne Informacije</h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/politika-privatnosti"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Politika Privatnosti
                </Link>
              </li>
              <li>
                <Link href="/politika-kolacica" className="text-muted-foreground hover:text-primary transition-colors">
                  Politika Kolačića
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Uslovi Korišćenja
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-accent" />
            <p className="text-xs text-muted-foreground">
              Klađenje nosi rizik finansijskog gubitka. Učestvujte isključivo sredstvima koja možete priuštiti da
              izgubite. Samo za punoletne (18+).
            </p>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
            <Shield className="w-5 h-5 flex-shrink-0 text-primary" />
            <p className="text-xs text-muted-foreground">
              Sve prikazane betting stranice poseduju odgovarajuće licence za pružanje usluga igara na sreću u Republici
              Srbiji.
            </p>
          </div>
        </div>

        {/* Responsible gambling */}
        <div className="mb-10 rounded-xl p-6 md:p-8 bg-secondary/50 border border-border">
          <h3 className="text-base font-bold text-foreground mb-3 text-center">Odgovorno Klađenje</h3>
          <p className="text-xs text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Zalažemo se za odgovoran pristup klađenju. Ukoliko vi ili neko u vašem okruženju ima poteškoća sa kontrolom
            kockanja, obratite se specijalizovanim organizacijama za pomoć.
          </p>

          <div className="grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
            <div className="p-3 rounded-lg bg-card border border-border flex items-center justify-center">
              <Link href="https://www.gamcare.org.uk/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[28px]">
                  <Image
                    src="/gamecare-new.svg"
                    alt="GamCare"
                    fill
                    className="object-contain  hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border flex items-center justify-center">
              <Link href="https://www.gambleaware.org/" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[28px]">
                  <Image
                    src="/gamble-aware.webp"
                    alt="GambleAware"
                    fill
                    className="object-contain  hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </div>
            <div className="p-3 rounded-lg bg-card border border-border flex items-center justify-center">
              <Link href="https://www.uis.gov.rs/rsc" target="_blank" rel="noopener noreferrer">
                <div className="relative w-[60px] h-[24px] md:w-[80px] md:h-[28px]">
                  <Image
                    src="/logoS.svg"
                    alt="UIS"
                    fill
                    className="object-contain  hover:opacity-100 transition-opacity"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} rskladenje.com. Sva prava zadržana.
            </p>
            <p className="text-xs text-muted-foreground">Prikazane informacije služe isključivo u edukativne svrhe.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
