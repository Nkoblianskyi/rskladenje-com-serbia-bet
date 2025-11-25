import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Lock, Database, Eye, UserCheck, Mail, FileText, ShieldCheck, AlertCircle } from "lucide-react"

export const metadata = {
  title: "Politika Privatnosti | RSkladenje.com",
  description: "Saznajte kako RSkladenje.com štiti vaše lične podatke i poštuje vašu privatnost.",
}

export default function PolitikaPrivatnostiPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Header */}
        <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-primary to-primary/80 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Politika Privatnosti</h1>
              <p className="text-white/80 text-sm">
                Poslednje ažuriranje:{" "}
                {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-8 flex items-start gap-4">
          <ShieldCheck className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-semibold text-foreground mb-1">Vaša Privatnost Je Naš Prioritet</h3>
            <p className="text-sm text-muted-foreground">
              RSkladenje.com je posvećen zaštiti vaših ličnih podataka u skladu sa važećim zakonima o zaštiti podataka.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Uvod</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ova politika privatnosti objašnjava kako RSkladenje.com prikuplja, koristi, čuva i štiti vaše lične
              podatke kada posetite naš sajt. Molimo vas da pažljivo pročitate ovaj dokument kako biste razumeli naše
              prakse u vezi sa vašim podacima.
            </p>
          </section>

          {/* Data Collection */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Database className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Podaci Koje Prikupljamo</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-foreground mb-2">Automatski Prikupljeni</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• IP adresa</li>
                  <li>• Tip pregledača i uređaja</li>
                  <li>• Posećene stranice</li>
                  <li>• Vreme i trajanje posete</li>
                </ul>
              </div>
              <div className="p-4 rounded-lg bg-secondary/30">
                <h4 className="font-medium text-foreground mb-2">Dobrovoljno Dostavljeni</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  <li>• Email adresa (ako nas kontaktirate)</li>
                  <li>• Ime (opciono)</li>
                  <li>• Sadržaj poruke</li>
                  <li>• Ostale informacije koje podelite</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Data Usage */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Eye className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Kako Koristimo Podatke</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Poboljšanje funkcionalnosti sajta</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Analiza poseta i ponašanja</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Odgovaranje na vaše upite</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30">
                <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Sprečavanje zloupotrebe</span>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UserCheck className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Vaša Prava</h2>
            </div>
            <p className="text-muted-foreground mb-4">U skladu sa važećim zakonima, imate pravo da:</p>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Zatražite pristup vašim ličnim podacima</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Zatražite ispravku netačnih podataka</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Zatražite brisanje vaših podataka</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-lg bg-secondary/30">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></span>
                <span className="text-sm text-muted-foreground">Povučete pristanak za obradu</span>
              </div>
            </div>
          </section>

          {/* Third Parties */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <FileText className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Treće Strane</h2>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/20 mb-4">
              <AlertCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Ne prodajemo, ne trgujemo i ne prenosimo vaše lične podatke trećim stranama bez vašeg izričitog
                pristanka.
              </p>
            </div>
            <p className="text-muted-foreground text-sm">
              Linkovi ka eksternim sajtovima, uključujući kladionice koje recenziramo, podležu politikama privatnosti
              tih sajtova. Preporučujemo da pregledate njihove politike pre korišćenja.
            </p>
          </section>

          {/* Security */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lock className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Bezbednost Podataka</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Primenjujemo odgovarajuće tehničke i organizacione mere za zaštitu vaših ličnih podataka od neovlašćenog
              pristupa, izmene, otkrivanja ili uništenja. Koristimo SSL enkripciju i redovno ažuriramo naše sigurnosne
              protokole.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Mail className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-bold text-foreground">Kontakt za Pitanja o Privatnosti</h2>
            </div>
            <p className="text-muted-foreground">
              Za sva pitanja o zaštiti vaših podataka i privatnosti, kontaktirajte nas na{" "}
              <a href="mailto:info@rskladenje.com" className="text-primary hover:underline font-medium">
                info@rskladenje.com
              </a>
            </p>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
