import Navbar from "../Componenets/Navbar";
import CallButton from "../Componenets/CallButton";
import WhatsAppButton from "../Componenets/WhatsAppButton";
import VHeroSection from "./VHeroSection"
import CBody from "./CBody";
import Footer from "../Componenets/Footer";


export default function ProjectsPage() {
  return (
    <main className="relative flex flex-col min-h-screen bg-[#121212]">
      {/* Sticky Top Navbar */}
      <Navbar className="absolute top-0 z-10 w-screen" />

      {/* Hero Image Section */}
      <VHeroSection />

      {/* Floating Action Buttons */}
      <CallButton />
      <WhatsAppButton />

    <div className="bg-[#f5ede5]">
      <CBody />
    </div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}
