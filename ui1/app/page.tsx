import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import BookingCTA from "@/components/BookingCTA";
import HowItWorks from "@/components/HowItWorks";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <BookingCTA />
        <HowItWorks />
        <WhyChooseUs />
        <Reviews />
        <ServiceAreas />
      </main>
      <Footer />
    </>
  );
}
