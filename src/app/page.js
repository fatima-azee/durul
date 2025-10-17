import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import HeroSection from "./Componenets/HeroSection";
import SignatureSection from "./Componenets/SignatureSection";
import CleanEthicalSection from "./Componenets/CleanEthicalSection";
import VersatileCareSection from "./Componenets/VersatileCareSection";
import BenefitsColumns from "./Componenets/BenefitsColumns";
import FAQSection from "./Componenets/FAQSection";
import CTAFeatureBanner from "./Componenets/CTAFeatureBanner";
import Footer from "./Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-white">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <CallButton />
        <WhatsAppButton />
        <HeroSection />
        <SignatureSection />
        <CleanEthicalSection />
        <VersatileCareSection />
        <BenefitsColumns />
        < FAQSection />
        <CTAFeatureBanner />
          <Footer />
         

    </main>

    </>
  );
}