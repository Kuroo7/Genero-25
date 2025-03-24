import About from "@/components/About";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PastEvents from "@/components/PastEvents";
import PastEvents1 from "@/components/PastEvents1";
import PastGenero from "@/components/PastGenero";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <PastGenero />
      <PastEvents />

      <Faq />
      <Ticket />
      <Footer />
    </div>
  );
}
