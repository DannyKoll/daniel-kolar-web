# AGENTS.md

## Projekt

Toto je osobní web Daniela Koláře, finančního poradce v ČR.

Cíl webu:
- moderní, prémiový a důvěryhodný vzhled
- lidský a partnerský tón
- české texty
- důraz na dlouhodobou péči, servis a finance v souvislostech
- nepůsobit jako banka, pojišťovna ani generická poradenská šablona

Hlavní claim webu:
„Pomohu vám od financí získat maximum“

---

## Technologie

Před úpravami vždy zkontroluj skutečnou strukturu projektu.

Projekt drž v tomto směru:
- Next.js
- React komponenty podle aktuální struktury projektu
- Tailwind CSS
- Vercel

Nepřidávej nové knihovny bez jasného důvodu.

---

## Design

Drž existující vizuální směr webu.

Preferovaný styl:
- moderní
- čistý
- vzdušný
- prémiový
- modrá barevná paleta
- profesionální, ale ne studený

Nedělej velký redesign bez výslovného zadání.

Pokud část webu funguje, raději ji dolaďuj než přepisuj.

---

## Texty

Texty piš česky.

S uživatelem vždy komunikuj tykáním, ne vykáním.

Styl:
- profesionální
- lidský
- přirozený
- srozumitelný
- ne moc formální
- ne strojový
- ne přehnaně reklamní

Vyhýbej se prázdným frázím typu:
- „komplexní řešení na míru“
- „široké portfolio produktů“
- „individuální přístup“ bez konkrétního významu
- „profesionální služby nejvyšší kvality“

Web má působit tak, že klient jedná s normálním člověkem a dlouhodobým partnerem, ne s anonymní institucí.

---

## Pravidla práce

Dělej malé a kontrolovatelné změny.

Bez výslovného zadání:
- nepřepisuj celý web
- neměň celý designový směr
- nemaž funkční komponenty
- neměň texty, které už uživatel ladil a schválil
- nespouštěj velké refaktory

Když zadání míří na jednu věc, oprav hlavně tu jednu věc.

Před větší úpravou stručně napiš plán.

Po úpravě napiš:
- co se změnilo
- které soubory byly upraveny
- zda proběhla lokální kontrola

---

## Git, GitHub a Vercel

Pracuj nejdřív lokálně.

Nikdy bez výslovného pokynu nedělej:
- commit
- push na GitHub
- pull request
- deploy na Vercel

Pozor: push na GitHub může spustit automatický deploy na Vercel.

---

## Lokální kontrola

Před spuštěním příkazů zkontroluj `package.json`.

Používej jen relevantní kontroly:
- `npm run build`
- případně lint/test, pokud v projektu existují
- po každé vizuální nebo textové úpravě webu spusť `npm run dev` pro lokální náhled, aby si uživatel mohl změny rovnou prohlédnout

Nepouštěj zbytečné příkazy.

Když něco selže, nepokračuj naslepo. Nejdřív vysvětli chybu a navrhni nejmenší opravu.

---

## Checkpointy

Checkpointy nedělej automaticky po každé malé změně.

Checkpoint pouze navrhni:
- po větší hotové úpravě
- po změně celé sekce
- když uživatel řekne, že se mu aktuální stav líbí
- před větším experimentem

Lokální checkpoint/commit udělej jen po výslovném souhlasu.

Nikdy neposílej checkpoint na GitHub bez výslovného pokynu.

---

## Experimenty

U větších experimentů postupuj izolovaně, aby šly změny snadno zahodit.

Experiment nemíchej s běžnými opravami stabilní verze.

---

## Hlavní zásada

Chovej se jako opatrný seniorní frontend partner.

Cíl není přestavět web pokaždé znovu, ale bezpečně ho postupně zlepšovat.
