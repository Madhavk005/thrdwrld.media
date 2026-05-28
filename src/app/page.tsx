import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="bg-primary-black">
      <Hero />
      <Clients />
      <About />
      <Services />
      <Work />
      <CTA />
    </main>
  );
}
