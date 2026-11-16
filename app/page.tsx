import { About } from "@/components/about";
import { Approach } from "@/components/approach";
import { Contact } from "@/components/contact";
import { FocusAreas } from "@/components/focus-areas";
import { Footer } from "@/components/footer";
import { GetInvolved } from "@/components/get-involved";
import { Hero } from "@/components/hero";
import { MissionVision } from "@/components/mission-vision";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <FocusAreas />
        <Approach />
        <MissionVision />
        <GetInvolved />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
