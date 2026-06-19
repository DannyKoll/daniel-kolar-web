import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Cookies | Daniel Kolář",
  description:
    "Informace o používání cookies na webu Daniela Koláře.",
  alternates: {
    canonical: "/cookies",
  },
};

const sections = [
  {
    title: "Nezbytné cookies",
    paragraphs: [
      "Nezbytné cookies jsou potřebné pro základní technické fungování webu. Bez nich by některé části webu nemusely správně fungovat.",
    ],
  },
  {
    title: "Analytické a marketingové cookies",
    paragraphs: [
      "Pokud budou na webu v budoucnu používány analytické nebo marketingové nástroje, například pro měření návštěvnosti nebo vyhodnocování reklamních kampaní, budou používány pouze v souladu s právními předpisy a na základě odpovídajícího nastavení souhlasu.",
    ],
  },
  {
    title: "Nastavení cookies",
    paragraphs: [
      "Používání cookies můžete omezit nebo zakázat ve svém internetovém prohlížeči. Upozorňuji však, že omezení některých cookies může ovlivnit správné fungování webu.",
    ],
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookies"
      intro="Tento web může používat soubory cookies, tedy malé textové soubory ukládané ve vašem prohlížeči, které pomáhají zajistit správné fungování webu."
      sections={sections}
    />
  );
}
