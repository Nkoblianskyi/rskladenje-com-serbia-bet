import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Shield, Target, Users, Award, CheckCircle, TrendingUp, Star, Zap, Mail } from "lucide-react"

export const metadata = {
  title: "O Nama | RSkladenje.com",
  description:
    "Saznajte više o timu RSkladenje.com - vašem pouzdanom izvoru za recenzije sportskih kladionica u Srbiji.",
}

export default function ONamaPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main className="container mx-auto px-4 py-12 md:py-16 max-w-5xl">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
              Vaš Vodič Kroz Svet Sportskog Klađenja
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              RSkladenje.com je vodeći nezavisni portal za analizu i recenzije sportskih kladionica u Srbiji.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">5+</div>
            <div className="text-sm text-muted-foreground">Godina Iskustva</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">15+</div>
            <div className="text-sm text-muted-foreground">Recenziranih Kladionica</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">50k+</div>
            <div className="text-sm text-muted-foreground">Mesečnih Čitalaca</div>
          </div>
          <div className="bg-card border border-border rounded-xl p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-1">100%</div>
            <div className="text-sm text-muted-foreground">Nezavisnost</div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            
            <h2 className="text-2xl font-bold text-foreground">Naša Misija</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                RSkladenje.com je osnovan sa jasnim ciljem - da srpskim igračima pruži objektivne, detaljne i pouzdane
                informacije o sportskim kladionicama dostupnim na domaćem tržištu.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naš tim stručnjaka kontinuirano prati i analizira sve aspekte kladionica - od bonusa i kvota, do
                korisničke podrške i brzine isplata.
              </p>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Verujemo u transparentnost i odgovorno klađenje. Svaka naša recenzija prolazi rigurozan proces provere
                kako bismo osigurali tačnost informacija.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Naš prioritet je zaštita interesa igrača i promocija sigurnog i zabavnog iskustva klađenja.
              </p>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Naše Vrednosti</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Bezbednost Prvo</h3>
            <p className="text-sm text-muted-foreground">
              Recenziramo samo licencirane kladionice koje ispunjavaju najviše standarde bezbednosti i zaštite podataka
              korisnika.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <CheckCircle className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Potpuna Objektivnost</h3>
            <p className="text-sm text-muted-foreground">
              Sve recenzije su nezavisne i bazirane na stvarnom testiranju. Nikada ne favorizujemo pojedinačne
              operatere.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Redovna Ažuriranja</h3>
            <p className="text-sm text-muted-foreground">
              Kontinuirano pratimo promene u ponudama i uslovima kladionica kako bismo održali aktuelnost informacija.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Fokus na Zajednicu</h3>
            <p className="text-sm text-muted-foreground">
              Aktivno slušamo povratne informacije naših čitalaca i kontinuirano unapređujemo kvalitet sadržaja.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Award className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Profesionalna Stručnost</h3>
            <p className="text-sm text-muted-foreground">
              Naš tim čine iskusni analitičari sa višegodišnjim iskustvom u industriji sportskog klađenja.
            </p>
          </div>

          <div className="group bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
            <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">18+ Odgovorno Klađenje</h3>
            <p className="text-sm text-muted-foreground">
              Aktivno promovišemo odgovorno klađenje i pružamo informacije o prevenciji zavisnosti od kockanja.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="bg-card border border-border rounded-2xl p-6 md:p-8 text-center">
          <Star className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3">Imate Pitanja ili Sugestije?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Slobodno nas kontaktirajte za bilo kakve informacije, sugestije ili saradnju. Vaše mišljenje nam je važno.
          </p>
          <p
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Mail className="h-5 w-5" />
            info@rskladenje.com
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
