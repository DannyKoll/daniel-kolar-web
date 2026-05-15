import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Daniel Kolář | Finanční poradenství na míru",
  description:
    "Finanční poradce Daniel Kolář — více než 11 let zkušeností s optimalizací a ochranou vašich financí. Investice, pojištění, hypotéky a penzijní plánování.",
  keywords: [
    "finanční poradce",
    "Daniel Kolář",
    "investice",
    "hypotéka",
    "pojištění",
    "penze",
    "finance",
  ],
  openGraph: {
    title: "Daniel Kolář | Finanční poradenství",
    description:
      "Pomohu vám od financí získat maximum. Více než 11 let zkušeností.",
    locale: "cs_CZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#07172b",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
