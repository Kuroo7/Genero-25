<<<<<<< Updated upstream
import About from "@/components/About";
import Faq from "@/components/Faq/Faq";
=======
import About from "@/components/About/About";
import Faq from "@/components/Faq";
>>>>>>> Stashed changes
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PastEvents from "@/components/PastEvents";
import PastGenero from "@/components/PastGenero";
import Ticket from "@/components/Ticket";

export default function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <PastGenero/>
      <PastEvents/>
      <Faq/>
      <Ticket/>
      <Footer/>
    </div>
  );
}
