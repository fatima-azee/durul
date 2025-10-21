"use client";

import React from "react";
import Image from "next/image";

const VHeroSection = () => {
  return (
<div 
id="hero-section"
className="relative w-full h-[300px] sm:h-[300px] md:h-[3500px] lg:h-[400px] xl:h-[500px] overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/images/reception.jpg"
      alt="interior design"
      fill
      priority
      className="object-cover"
    />
  </div>
  {/* Black Overlay */}
     {/* Black transparent gradient overlay (bottom to mid) */}
      <div className="absolute inset-x-0 bottom-0 h-full bg-black/30 z-10" />

      {/* Overlay Text Content */}
      <div className="absolute inset-x-0 bottom-4 md:bottom-10 text-center px-4 text-white z-20">
        <h1 className="text-lg sm:text-xl md:text-4xl lg:text-5xl font-penrise -tracking-normal">
          CONTACT US </h1>
     
      </div>
    </div>


  );
};


export default VHeroSection;
