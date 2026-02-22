import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ResultPreview from "@/components/ResultPreview";
import PersonalityTypes from "@/components/PersonalityTypes";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <Divider />
        <HowItWorks />
        <Divider />
        <ResultPreview />
        <Divider />
        <PersonalityTypes />
        <Divider />
        <CTA />
      </main>

      <Footer />
    </>
  );
}
