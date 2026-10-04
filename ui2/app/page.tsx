import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import QuickBooking from "@/components/QuickBooking";
import HowItWorks from "@/components/HowItWorks";
import WhyHardCore from "@/components/WhyHardCore";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import Footer from "@/components/Footer";
import MobileBar from "@/components/MobileBar";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <QuickBooking />
        <HowItWorks />
        <WhyHardCore />
        <Reviews />
        <ServiceAreas />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
