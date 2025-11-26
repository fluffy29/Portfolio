import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { ScrollToTop } from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="noise-bg" />
      
      <Navbar />
      
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
      
      <Footer />
      <ScrollToTop />
    </main>
  );
}
