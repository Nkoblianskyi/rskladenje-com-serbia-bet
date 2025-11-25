import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Cookie, Settings, BarChart3, Shield, Monitor, Smartphone, Globe } from "lucide-react"

export const metadata = {
  title: "Politika Kolačića | RSkladenje.com",
  description: "Saznajte kako RSkladenje.com koristi kolačiće za poboljšanje vašeg iskustva na sajtu.",
}

export default function PolitikaKolacicaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        {/* Header */}
        <div className="relative rounded-2xl overflow-hidden mb-10 bg-gradient-to-r from-primary to-primary/80 p-8 md:p-10">
          <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">Politika Kolačića</h1>
              <p className="text-white/80 text-sm">
                Poslednje ažuriranje:{" "}
                {new Date().toLocaleDateString("sr-Latn-RS", { day: "numeric", month: "long", year: "numeric" })}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          <section className="bg-card border border-border rounded-xl p-6">
            <h2 className="text-xl font-bold text-foreground mb-4">Šta su Kolačići?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kolačići (cookies) su male tekstualne datoteke koje se čuvaju na vašem uređaju kada posetite naš sajt. Oni
              nam pomažu da zapamtimo vaše postavke, analiziramo kako koristite sajt i poboljšamo vaše korisničko
              iskustvo. Kolačići su industrijski standard i koriste ih gotovo svi sajtovi na internetu.
            </p>
          </section>

          {/* Cookie Types */}
          <div className="grid md:grid-cols-2 gap-5">
            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Neophodni Kolačići</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Ovi kolačići su neophodni za funkcionisanje sajta i ne mogu se isključiti.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Pamćenje pristanka na kolačiće</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Sigurnost sesije</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Osnovne funkcionalnosti</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Analitički Kolačići</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Pomažu nam da razumemo kako koristite sajt i poboljšamo ga.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Broj poseta i izvor saobraćaja</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Najpopularnije stranice</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                  <span>Vreme provedeno na sajtu</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Browser Settings */}
          <section className="bg-card border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-xl font-bold text-foreground">Upravljanje Kolačićima</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Možete kontrolisati i brisati kolačiće u podešavanjima vašeg pregledača. Većina modernih pregledača vam
              omogućava da vidite, obrišete ili blokirate kolačiće sa pojedinih ili svih sajtova.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                <Monitor className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Desktop Pregledači</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                <Smartphone className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Mobilni Pregledači</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm text-foreground">Treće Strane</span>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
            <h2 className="text-lg font-bold text-foreground mb-3">Kontaktirajte Nas</h2>
            <p className="text-muted-foreground">
              Za sva pitanja o našoj politici kolačića, kontaktirajte nas na{" "}
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
