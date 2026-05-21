import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Zpracování osobních údajů | Daniel Kolář",
  description:
    "Informace o zpracování osobních údajů návštěvníků webu a osob, které odešlou kontaktní formulář.",
};

const sections = [
  {
    title: "Správce osobních údajů",
    details: [
      "Daniel Kolář",
      "IČO: 03863620",
      "E-mail: d.kolar@westfair.cz",
    ],
  },
  {
    title: "Jaké osobní údaje zpracovávám",
    paragraphs: [
      "Pokud mě kontaktujete prostřednictvím formuláře na tomto webu, mohou být zpracovávány zejména tyto údaje:",
    ],
    items: [
      "jméno a příjmení,",
      "e-mailová adresa,",
      "telefonní číslo,",
      "obsah vaší zprávy.",
    ],
  },
  {
    title: "Za jakým účelem údaje zpracovávám",
    paragraphs: [
      "Osobní údaje zpracovávám za účelem vyřízení vašeho dotazu, zpětného kontaktování a případné domluvy další komunikace nebo schůzky.",
      "Osobní údaje neposkytuji za účelem rozesílání newsletteru ani hromadných marketingových sdělení, pokud k tomu nedáte samostatný souhlas.",
    ],
  },
  {
    title: "Právní základ zpracování",
    paragraphs: [
      "Právním základem zpracování je zejména vyřízení dotazu, který jste mi sami zaslali, provedení opatření před případným navázáním spolupráce a oprávněný zájem na odpovědi na vaši zprávu.",
    ],
  },
  {
    title: "Doba uchování",
    paragraphs: [
      "Osobní údaje uchovávám pouze po dobu nezbytnou k vyřízení vašeho dotazu a navazující komunikace.",
      "Pokud dojde k navázání spolupráce, mohou být údaje dále zpracovávány v rozsahu nezbytném pro poskytování finančních služeb a plnění zákonných povinností.",
    ],
  },
  {
    title: "Předávání osobních údajů",
    paragraphs: [
      "V případě navázání spolupráce mohou být osobní údaje zpracovávány také v souvislosti s činností společnosti SAB servis s.r.o., IČO: 24704008, se sídlem Jungmannova 748/30, 110 00 Praha 1, případně dalšími subjekty, pokud je to nezbytné pro poskytování finančních služeb nebo splnění zákonných povinností.",
    ],
  },
  {
    title: "Vaše práva",
    paragraphs: [
      "Máte právo požadovat přístup ke svým osobním údajům, jejich opravu, výmaz, omezení zpracování, vznést námitku proti zpracování a v případech stanovených právními předpisy také právo na přenositelnost údajů.",
      "Pokud se domníváte, že je s vašimi osobními údaji nakládáno v rozporu s právními předpisy, můžete se obrátit na Úřad pro ochranu osobních údajů.",
    ],
  },
  {
    title: "Kontakt",
    paragraphs: [
      "V případě dotazů ke zpracování osobních údajů mě můžete kontaktovat na e-mailu: d.kolar@westfair.cz.",
    ],
  },
];

export default function PersonalDataPage() {
  return (
    <LegalPage
      title="Zpracování osobních údajů"
      intro="Tato stránka obsahuje základní informace o tom, jak jsou zpracovávány osobní údaje návštěvníků tohoto webu a osob, které prostřednictvím kontaktního formuláře odešlou svůj dotaz."
      sections={sections}
    />
  );
}
