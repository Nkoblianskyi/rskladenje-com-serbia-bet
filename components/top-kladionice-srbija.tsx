import { Target, Users, FileCheck, Clock, Zap, Award } from "lucide-react"

export function TopKladioniceSrbija() {
  const prednosti = [
    {
      icon: Target,
      naslov: "Precizna Analiza",
      opis: "Svaka kladionica prolazi kroz 50+ parametara provere pre nego što uđe na našu listu.",
      broj: "50+",
      label: "Parametara",
    },
    {
      icon: Users,
      naslov: "Iskusni Tim",
      opis: "Naši recenzenti imaju višegodišnje iskustvo u betting industriji i poznaju svaki detalj.",
      broj: "15+",
      label: "Godina iskustva",
    },
    {
      icon: FileCheck,
      naslov: "Transparentnost",
      opis: "Objavljujemo kompletnu metodologiju i kriterijume po kojima ocenjujemo svaku platformu.",
      broj: "100%",
      label: "Transparentno",
    },
    {
      icon: Clock,
      naslov: "Redovna Ažuriranja",
      opis: "Pratimo promene na tržištu i ažuriramo ocene čim dođe do bitnih promena u ponudi.",
      broj: "24h",
      label: "Monitoring",
    },
    {
      icon: Zap,
      naslov: "Brza Reakcija",
      opis: "Reagujemo na sve prijave korisnika i proveravamo validnost informacija u najkraćem roku.",
      broj: "48h",
      label: "Odziv",
    },
    {
      icon: Award,
      naslov: "Nepristrasnost",
      opis: "Naše ocene su zasnovane isključivo na kvalitetu usluge, bez favorizovanja partnera.",
      broj: "0",
      label: "Pristrasnosti",
    },
  ]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Zašto RSkladenje</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-balance">
            Vaš Pouzdani Partner za Informisano Klađenje
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
            Posvećeni smo pružanju tačnih, nepristrasnih i ažurnih informacija o betting industriji u Srbiji.
          </p>
        </div>

        {/* Grid sa prednostima */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {prednosti.map((item, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300"
            >
              {/* Broj u pozadini */}
              <div className="absolute top-3 right-3 text-3xl font-black group-hover:text-primary/10 transition-colors text-white">
                {item.broj}
              </div>

              {/* Ikona */}
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/30 transition-colors">
                <item.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Sadržaj */}
              <h3 className="text-base font-bold text-white mb-2">{item.naslov}</h3>
              <p className="text-xs text-white/60 leading-relaxed mb-3">{item.opis}</p>

              {/* Statistika */}
              <div className="flex items-center gap-2 pt-3 border-t border-white/10">
                <span className="text-lg font-bold text-primary">{item.broj}</span>
                <span className="text-xs text-white/50">{item.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-8 p-5 md:p-6 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-1">Imate pitanja o nekoj kladionici?</h3>
              <p className="text-sm text-white/70">Naš tim stručnjaka je tu da vam pomogne sa svim nedoumicama.</p>
            </div>
            <a
              href="mailto:info@rskladenje.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm transition-colors whitespace-nowrap"
            >
              Kontaktirajte Nas
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
