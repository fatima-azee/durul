"use client";

import Image from "next/image";

const VPBody = () => {
  return (
    <section className="bg-white px-6 sm:px-10 md:px-16 lg:px-28 xl:px-40 py-10 sm:py-20 font-sans">
      {/* Headings */}
      <div className="mb-6">
        <h1 className="text-sm sm:text-2xl md:text-3xl font-semibold text-[#7D090F] mt-1 leading-snug">
          We are the leading experts in commercial space planning for dining, leisure and hospitality
        </h1>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col lg:flex-row gap-10 items-stretch">
        {/* Text Column */}
        <div className="w-full lg:w-1/2 space-y-4 text-sm sm:text-lg leading-6 text-black font-play">
          <p>
          We turn data driven insights into successful commercial strategies for airports, retail, hospitality and mixed-use assets.
          </p>
          <p>
          Our insights and strategies help investors, asset managers, and occupiers to enhance customer experience and commercial performance.
          </p>
          <p>
          We combine global experience with local understanding, with knowledge gained from working on projects in over 50 countries around the world.
          </p>
           <p>
          We combine global experience with local understanding, with knowledge gained from working on projects in over 50 countries around the world.
          </p>
          
        </div>

        {/* Image Column */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full h-[300px] lg:h-full min-h-[300px] rounded-lg overflow-hidden">
            <Image
              src="/images/B (8).jpg"
              alt="Interior design project"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>






    </section>
  );
};

export default VPBody;
