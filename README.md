# Daniel Kolář — Finanční poradenství

Profesionální osobní web finančního poradce postavený na Next.js 14 a Tailwind CSS.

## Spuštění lokálně

```bash
npm install
npm run dev
```

Web poběží na [http://localhost:3000](http://localhost:3000).

## Build pro produkci

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Nahrát repozitář na GitHub.
2. Přihlásit se na [vercel.com](https://vercel.com), kliknout **New Project**.
3. Vybrat svůj GitHub repozitář a kliknout **Deploy**.
4. Vercel automaticky detekuje Next.js a vše nastaví — žádná další konfigurace.

## Struktura projektu

```
.
├── app/
│   ├── layout.jsx        # Root layout, fonty, metadata
│   ├── page.jsx          # Hlavní stránka (skládá komponenty)
│   └── globals.css       # Globální styly + Tailwind
├── components/
│   ├── Navbar.jsx        # Sticky horní navigace
│   ├── Hero.jsx          # Úvodní sekce s fotkou
│   ├── DividerExperience.jsx   # Přechodník "11 let"
│   ├── About.jsx         # Sekce "O mně" / "Co mohu udělat"
│   ├── DividerMoney.jsx  # Citátový přechodník
│   ├── Services.jsx      # Karty služeb
│   ├── Process.jsx       # 4 kroky spolupráce
│   ├── References.jsx    # Reference klientů
│   ├── CTA.jsx           # Kontakt + formulář
│   ├── Footer.jsx        # Patička
│   └── ScrollReveal.jsx  # Animace odhalení při scrollu
├── public/
│   └── daniel.jpg        # Vaše fotka (vyměňte za vlastní)
├── tailwind.config.js
├── next.config.mjs
└── package.json
```

## Úprava obsahu

- **Texty:** všechny texty jsou v komponentech v `components/`. Hledejte český text a klidně přepisujte.
- **Barvy:** primární paleta je v `tailwind.config.js` (`navy` + `gold`).
- **Fotka:** nahraďte `public/daniel.jpg` vlastní fotkou (zachovejte stejný název nebo upravte cesty v `Hero.jsx` a `About.jsx`).
- **Kontakty:** telefon a e-mail jsou v `CTA.jsx` a `Footer.jsx`. IČO případně upravte ve `Footer.jsx`.

## Napojení formuláře

Kontaktní formulář odesílá zprávy přes Next.js API route `app/api/contact/route.js` a službu Resend.

Pro lokální test vytvoř soubor `.env.local` podle `.env.example`:

```bash
RESEND_API_KEY=...
CONTACT_TO_EMAIL=d.kolar@westfair.cz
CONTACT_FROM_EMAIL="Web Daniela Koláře <onboarding@resend.dev>"
```

Stejné proměnné je potřeba nastavit ve Vercelu v **Project Settings → Environment Variables**.
Po napojení a ověření vlastní domény v Resendu změň `CONTACT_FROM_EMAIL` například na
`Kontakt Daniel Kolář <kontakt@vasedomena.cz>`.

## Licence

Šablona je vytvořená na míru pro Daniela Kolaře. Volně upravujte podle potřeby.
