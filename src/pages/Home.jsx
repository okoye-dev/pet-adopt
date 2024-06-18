import AdoptionJourney from "../components/AdoptionJourney";
import AvailablePets from "../components/AvailablePets";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import OurSupporters from "../components/OurSupporters";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-16 px-10 md:px-16 lg:px-20">
      <Hero />
      <AvailablePets />
      <OurSupporters />
      <AdoptionJourney />
      <HowItWorks />
      <Reviews />
      <Footer />
    </div>
  );
}
