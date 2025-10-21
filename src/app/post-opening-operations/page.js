import React from "react";
import Navbar from "../Componenets/Navbar"; // Fixed "Componenets" typo
import WhatsAppButton from "../Componenets/WhatsAppButton";
import CallButton from "../Componenets/CallButton";
import Hero from "./Components/Hero";
import ResidentialProjects from "./Components/ResidentialProjects";
import Footer from "../Componenets/Footer";

export default function Home() { // Capitalized "home" → "Home"
  return (
    <>

      <div className="relative flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <WhatsAppButton />
        <CallButton />
        <Hero />
        <ResidentialProjects />
        <Footer />
      </div>
    </>
  );
}
