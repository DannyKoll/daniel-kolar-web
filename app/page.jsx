import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import FinanceTogether from "@/components/FinanceTogether";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <FinanceTogether />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}
