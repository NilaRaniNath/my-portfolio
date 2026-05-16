import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-accent-coral selection:text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
