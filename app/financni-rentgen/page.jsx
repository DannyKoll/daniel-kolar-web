export const metadata = {
  title: "Finanční rentgen | Daniel Kolář",
  description:
    "Krátká anonymní kontrola, která ukáže, která oblast vašich financí si říká o pozornost jako první.",
  alternates: {
    canonical: "/financni-rentgen",
  },
  openGraph: {
    title: "Finanční rentgen | Daniel Kolář",
    description:
      "Zjistěte za pár minut, jestli vaše finance dávají smysl jako celek - příjem, rezerva, závazky, ochrana příjmu, majetek a plán.",
    url: "https://danielkolar.cz/financni-rentgen",
    type: "website",
  },
};

export default function FinancniRentgenPage() {
  return (
    <main className="min-h-screen bg-[#f7f9fc]">
      <h1 className="sr-only">Finanční rentgen</h1>
      <iframe
        src="/financni-rentgen-app/index.html"
        title="Finanční rentgen Daniela Koláře"
        className="block h-screen min-h-[720px] w-full border-0"
      />
    </main>
  );
}
