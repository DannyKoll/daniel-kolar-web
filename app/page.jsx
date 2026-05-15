import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DividerExperience from "@/components/DividerExperience";
import About from "@/components/About";
import DividerMoney from "@/components/DividerMoney";
import Services from "@/components/Services";
import Process from "@/components/Process";
import References from "@/components/References";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main className="relative">
      <ScrollReveal />
      <Navbar />
      <Hero />
      <DividerExperience />
      <About />
      <DividerMoney />
      <Services />
      <Process />
      <References />
      <CTA />
      <Footer />
    </main>
  );
}
