
import React from "react";

const Hero = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[400px] lg:h-[500px] xl:h-[600px]">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/dubai-interior-design-tv-lounge.webp')" }}
      ></div>

      <div className="px-2 absolute inset-0 bg-opacity-50 bg-black flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-2xl md:text-2xl lg:text-5xl xl:text-6xl font-bold mb-4 mt-16">
          
            HOME INTERIOR DESIGN
          </h1>
          <p className="text-sm lg:text-xl xl-text-2xl text-left">
          Elevate your Home interior Design with Best Interior Designing Company 
          in Dubai.Our company has transformed numerous residences in iconic 
          locations such as manara tower, penthouse, jumeirah beach residence, 
          and Atlantis the Royal. We specialize in creating bespoke Interior designs. 
          Ready to elevate your home into modern house design?
           Schedule a complimentary consultation with our design experts today.							
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;