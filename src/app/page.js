import Navbar from "./Componenets/Navbar";
import CallButton from "./Componenets/CallButton";
import WhatsAppButton from "./Componenets/WhatsAppButton";
import HeroSection from "./Componenets/HeroSection";
import AboutSection from "./Componenets/AboutSection";
import Services from "./Componenets/Services";
import Footer from "./Componenets/Footer";



export default function Home() {
  return (
    <>
    <main className="relative flex flex-col min-h-screen bg-white">
        <Navbar className="absolute top-0 z-10 w-screen" />
        <CallButton />
        <WhatsAppButton />
        <HeroSection />
        <AboutSection />
        <Services />
        
          <Footer />
         

    </main>

    </>
  );
}