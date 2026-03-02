import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import About from "@/components/About";
import EmploymentHistory from "@/components/EmploymentHistory";
import TechSkills from "@/components/TechSkills";
import DetailedSkills from "@/components/DetailedSkills";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <TechSkills />
      <DetailedSkills />
      <EmploymentHistory />
      {/* <WorkGrid /> */}
      {/* <Footer /> */}
    </main>
  );
}
