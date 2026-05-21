import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Právní informace | Daniel Kolář",
  description:
    "Základní právní informace k finančním službám prezentovaným na tomto webu.",
};

const sections = [
  {
    title: "Základní informace",
    paragraphs: [
      "Daniel Kolář, IČO: 03863620, působí jako vázaný zástupce pro společnost SAB servis s.r.o., IČO: 24704008, se sídlem Jungmannova 748/30, 110 00 Praha 1.",
      "Finanční služby zde propagované a nabízené jsou poskytovány v roli vázaného zástupce pro investičního nebo samostatného zprostředkovatele SAB servis s.r.o. v následujících finančních oblastech: investice podle zákona č. 256/2004 Sb., spotřebitelské úvěry podle zákona č. 257/2016 Sb., pojištění podle zákona č. 170/2018 Sb. a doplňkové penzijní spoření podle zákona č. 427/2011 Sb.",
    ],
  },
  {
    title: "Ověření oprávnění",
    paragraphs: [
      "Oprávnění je možné ověřit v Seznamu regulovaných a registrovaných subjektů finančního trhu České národní banky:",
    ],
    links: [
      {
        label: "Seznamy ČNB",
        href: "https://www.cnb.cz/cnb/jerrs",
      },
    ],
  },
  {
    title: "Další dokumentace",
    paragraphs: [
      "Detailní právní informace k nabízeným službám a produktům, včetně reklamačního řádu, možnosti podání stížnosti, řešení sporů, orgánu dohledu, informací o udržitelnosti a další dokumentace, najdete na stránkách SAB servis:",
    ],
    links: [
      {
        label: "Informace SAB servis",
        href: "https://sabservis.cz/informace",
      },
    ],
  },
];

export default function LegalInfoPage() {
  return (
    <LegalPage
      title="Právní informace"
      intro="Tato stránka obsahuje základní právní informace k finančním službám prezentovaným na tomto webu."
      sections={sections}
    />
  );
}
