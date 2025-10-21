"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const cardData = [
  {
    title: "Consumer insights",
    img: "/images/B (37).jpg",
    alt: "Luxury villa interior design in Dubai",
    desc: "We deliver powerful consumer analysis across a range of global markets. Blending insights from socio-demographics, catchment analysis, geolocation data, customer segmentation, and primary research, we shape commercial strategies around a deep understanding of consumer motivations, mindsets, and needs.",
    link: "/villa-interior-design-",
  },
  {
    title: "Market trends & opportunity",
    img: "/images/B (9).jpg",
    alt: "Modern commercial space interior for urban offices",
    desc: [
      "We develop expert insight into the implications of key trends.",
      "With experience across multiple sectors and geographies, we track global development benchmarks and commercial metrics for diverse asset types to identify market opportunity.",
    ],
    link: "/apartment-interior-design-dubai",
  },
  {
    title: "Occupier performance modelling",
    img: "/images/B (41).jpg",
    alt: "Restaurant fit-out showcasing elegant dining ambiance",
    desc: [
      "We analyse occupier performance to inform future trading potential.",
      "Our understanding of occupier business models, performance drivers, risk and opportunity, enables us to develop a detailed understanding of trading potential and space demands.",
    ],
    link: "/landscape-design-dubai",
  },
];

const IdServices = () => {
  return (
    <>
      {/* WHAT WE DO */}
      <section className="bg-[#F5F5F7] text-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4">
            WHAT WE DO
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {cardData.map((card, index) => (
              <Link href={card.link} key={index}>
                <div className="group cursor-pointer text-left transition-all duration-300 hover:opacity-90">
                  <div className="overflow-hidden rounded mb-4">
                    <Image
                      src={card.img}
                      alt={card.alt}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-sm font-conthrax uppercase tracking-wide mb-2">
                    {card.title}
                  </h3>
                  {Array.isArray(card.desc) ? (
                    card.desc.map((line, i) => (
                      <p
                        key={i}
                        className="text-sm font-play leading-relaxed mb-2"
                      >
                        {line}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm font-play leading-relaxed">
                      {card.desc}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE DO IT */}
      <section className="bg-white text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p>OUR OUTPUTS</p>
          <h2 className="text-xl sm:text-2xl tracking-widest font-conthrax text-start mb-14">
            Our output helps our clients to deliver stronger asset performance
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (43).jpg"
                  alt="Strategic design thinking process"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Strategic Positioning
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Develop a clear vision for new or converted assets, ensuring the right strategy is in place to create high-performing propositions that respond and adapt to change.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (44).jpg"
                  alt="Collaborative project delivery team working"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Commercial Space Planning
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Determine the optimal quantity and composition of commercial space across different formats and categories, the suitability of commercial offers, and the commercial potential of design plans.
              </p>
            </div>
          </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (43).jpg"
                  alt="Strategic design thinking process"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Target Mix & Brands
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
              Identify the optimum tenant, concession, or brand mix of an asset, so valuable and sustainable occupiers are attracted that generate greater revenue and engagement from consumers.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (44).jpg"
                  alt="Collaborative project delivery team working"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Revenue Potential
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
              Develop high-performing business models, which fulfil trading potential, maximise market opportunity, and deliver sustainable performance for investors, operators, asset managers, and customers.
              </p>
            </div>
          </div>



        </div>
      </section>

      {/* OUR IMPACT */}
      <section className="bg-[#F5F5F7] text-black py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl tracking-widest font-conthrax text-center mb-14">
            OUR IMPACT
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (45).jpg"
                  alt="Completed interior showcasing brand success"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Measurable Business Outcomes
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                We design for performance — spaces that drive customer
                retention, improve team productivity, and increase revenue
                potential through strategic spatial planning and branding.
              </p>
            </div>

            <div>
              <div className="relative w-full h-[280px] sm:h-[320px] md:h-[380px] lg:h-[400px] rounded overflow-hidden mb-6">
                <Image
                  src="/images/B (46).jpg"
                  alt="Happy team collaborating in well-designed space"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">
                Emotional & Experiential Value
              </h3>
              <p className="text-base font-play leading-relaxed text-gray-700">
                Our designs create spaces where people feel inspired, welcome,
                and connected. We blend aesthetics with functionality to enhance
                the emotional experience of every user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IdServices;
