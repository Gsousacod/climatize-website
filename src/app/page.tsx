import { About } from "@/components/About";
import { CTA } from "@/components/CTA";
import { ContactForm } from "@/components/ContactForm";
import { Differentials } from "@/components/Differentials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MissionVisionValues } from "@/components/MissionVisionValues";
import { Objectives } from "@/components/Objectives";
import { Services } from "@/components/Services";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MissionVisionValues />
        <Objectives />
        <Services />
        <Differentials />
        <SocialProof />
        <CTA />
        <ContactForm />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
