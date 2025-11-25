import { CheckCircle2, TrendingUp, Clock, Users, Award, Zap } from "lucide-react"

export function MetodologijaOcenjivanja() {
  const kriterijumi = [
    {
      naziv: "Pouzdanost",
      opis: "Stabilnost platforme, istorija poslovanja i reputacija među igračima",
      ocena: 10,
    },
    {
      naziv: "Kvote",
      opis: "Konkurentnost koeficijenata u poređenju sa tržišnim prosekom",
      ocena: 10,
    },
    {
      naziv: "Bonusi",
      opis: "Vrednost dobrodošlice i regularnih promocija sa fer uslovima",
      ocena: 10,
    },
    {
      naziv: "Isplate",
      opis: "Brzina obrade zahteva i dostupnost metoda plaćanja",
      ocena: 10,
    },
    {
      naziv: "Podrška",
      opis: "Kvalitet i dostupnost korisničke službe na srpskom jeziku",
      ocena: 10,
    },
  ]

  const prednosti = [
    {
      icon: CheckCircle2,
      naslov: "Licencirane Platforme",
      tekst: "Samo kladionice sa validnom licencom za rad u Srbiji",
    },
    {
      icon: TrendingUp,
      naslov: "Redovno Ažuriranje",
      tekst: "Ocene se ažuriraju mesečno na osnovu novih podataka",
    },
    {
      icon: Clock,
      naslov: "Praktično Testiranje",
      tekst: "Svaka platforma testirana kroz realno korišćenje",
    },
    {
      icon: Users,
      naslov: "Povratne Informacije",
      tekst: "Uključujemo iskustva zajednice igrača",
    },
    {
      icon: Award,
      naslov: "Nepristrasnost",
      tekst: "Objektivna procena bez uticaja operatera",
    },
    {
      icon: Zap,
      naslov: "Detaljna Analiza",
      tekst: "Preko 50 parametara u procesu evaluacije",
    },
  ]

  return (
    <section className="py-12 px-4 md:py-4">
      <div className="container max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-bold text-primary uppercase tracking-widest mb-2">
            Naša Metodologija
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Kako Ocenjujemo Kladionice</h2>
          <p className="text-white/70 max-w-xl mx-auto text-sm">
            Transparentan sistem evaluacije zasnovan na 5 ključnih kriterijuma
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left: Criteria with visual bars */}
          <div className="rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-sm">5</span>
              Kriterijuma Evaluacije
            </h3>

            <div className="space-y-5">
              {kriterijumi.map((k, idx) => (
                <div key={idx}>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-white font-semibold text-sm">{k.naziv}</span>
                      <p className="text-white/50 text-xs mt-0.5">{k.opis}</p>
                    </div>
                    <span className="text-primary font-bold text-lg">{k.ocena}</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-500"
                      style={{ width: `${k.ocena * 10}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Total score example */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-white/70 text-xs uppercase tracking-wide">Ukupna Ocena</span>
                  <p className="text-white/50 text-xs">Prosek svih kriterijuma</p>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-bold text-primary">10.0</span>
                  <span className="text-white/50 text-sm ml-1">/ 10</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Process advantages */}
          <div className="rounded-2xl p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-sm text-white">
                <Award className="w-4 h-4" />
              </span>
              Zašto Nam Verovati
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prednosti.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors"
                >
                  <p.icon className="w-5 h-5 text-primary mb-2" />
                  <h4 className="text-white font-semibold text-sm mb-1">{p.naslov}</h4>
                  <p className="text-white/50 text-xs leading-relaxed">{p.tekst}</p>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-6 p-4 rounded-xl bg-primary/10 border border-primary/20">
              <p className="text-xs text-white/80 leading-relaxed">
                <strong className="text-primary">Napomena:</strong> Naše ocene su informativnog karaktera. Uvek
                proverite aktuelne uslove direktno na sajtu kladionice pre registracije.
              </p>
            </div>
          </div>
        </div>

        {/* Rating scale badges */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30">
            <span className="w-3 h-3 rounded-full bg-primary" />
            <span className="text-xs font-semibold text-white">9-10 Odlično</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30">
            <span className="w-3 h-3 rounded-full bg-accent" />
            <span className="text-xs font-semibold text-white">7-8.9 Dobro</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
            <span className="w-3 h-3 rounded-full bg-white/50" />
            <span className="text-xs font-semibold text-white">5-6.9 Prosečno</span>
          </div>
        </div>
      </div>
    </section>
  )
}
