import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
