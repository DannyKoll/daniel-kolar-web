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

const siteTitle = "Daniel Kolář | Finanční poradce a finanční poradenství";
const siteDescription =
  "Osobní finanční poradenství, finanční plánování a dlouhodobá péče o finance v souvislostech. Pomáhám lidem mít ve financích jasno, správný směr a větší klid.";

export const metadata = {
  title: siteTitle,
  description: siteDescription,
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
    title: siteTitle,
    description: siteDescription,
    locale: "cs_CZ",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
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
