export interface KladskaKuća {
  id: number
  naziv: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  ocena: number
  zvezde: number
  recenzije: number
  oznake: string[]
  uslovi: string
  isNajboljaOcena?: boolean
  isPrvaPozicija?: boolean
  isPopularan?: boolean
  isTrenduje?: boolean
}

export const kladskeKuce: KladskaKuća[] = [
  {
    id: 1,
    naziv: "VivatBet",
    logo: "/vivabet.svg",
    bonus: "Osvoji do 25% Keš-Beka!",
    url: "https://vivatbet.rs/sp",
    ocena: 9.8,
    zvezde: 5,
    recenzije: 1574,
    oznake: ["U TRENDU"],
    uslovi: "18+. Klađenje podleže uslovima. Igrajte odgovorno.",

    isNajboljaOcena: true,
    isPrvaPozicija: true,
  },
  {
    id: 2,
    naziv: "Balkan Bet",
    logo: "/balkan.avif",
    bonus: "Startu Dobijaš 1000 RSD za Sportsko Klađenje",
    dopBonus: "i 100 Besplatnih Spinova",
    url: "https://www.balkanbet.rs/",
    ocena: 9.5,
    zvezde: 5,
    recenzije: 1352,
    oznake: ["POPULARAN IZBOR"],
    uslovi: "18+. Klađenje podleže uslovima. Igrajte odgovorno.",
    isPopularan: true,
    isTrenduje: true,
  },
  {
    id: 3,
    naziv: "Maxbet",
    logo: "/maxbet.jpg",
    bonus: "Prvi Poen na Utakmici",
    dopBonus: "i Prolaz je Zagarantovan!",
    url: "https://www.maxbet.rs/",
    ocena: 9.4,
    zvezde: 5,
    recenzije: 1947,
    oznake: ["NAJBOLJA OPCIJA"],
    uslovi: "18+. Klađenje podleže uslovima. Igrajte odgovorno.",
    isTrenduje: true,
  },
  {
    id: 4,
    naziv: "Superbet",
    logo: "/superbet.png",
    bonus: "Do 21.000 RSD",
    dopBonus: "",
    url: "https://superbet.rs/",
    ocena: 9.2,
    zvezde: 4,
    recenzije: 1586,
    oznake: ["PROVEREN"],
    uslovi: "18+. Klađenje podleže uslovima. Igrajte odgovorno.",
    isPopularan: true,
  },
]
