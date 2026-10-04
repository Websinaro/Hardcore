import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PickupCTA from "@/components/PickupCTA";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import ServiceAreas from "@/components/ServiceAreas";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <PickupCTA />
        <HowItWorks />
        <WhyChooseUs />
        <Contact />
        <Reviews />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
