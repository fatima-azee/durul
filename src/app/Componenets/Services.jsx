"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  FaLightbulb,            // Concept Development
  FaChartLine,            // Financial Feasibility
  FaUserCog,              // HR Support
  FaChalkboardTeacher,    // Staff Training
  FaBullhorn              // Marketing Coordination
} from "react-icons/fa";

import { 
  HiOutlineCurrencyDollar, 
  HiUserGroup 
} from "react-icons/hi";

import { 
  MdLocationSearching,   // Location Assessment
  MdOutlineArchitecture, // Interior Design
  MdMenuBook,            // Menu Engineering
  MdInventory            // OS & E Advice
} from "react-icons/md";

import { 
  GiCookingPot,          // Kitchen Design & Tender
  GiKitchenKnives, 
  GiToolbox              // OS & E Advice (Alternative)
} from "react-icons/gi";

export default function Services() {
  const services = [
 
  {
    title: "Concept Development",
    description: "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
    icon: <FaLightbulb className="text-2xl" />,
  },
  {
    title: "Financial Feasibility",
    description: "Expand your brand’s reach and boost engagement with a compelling social media presence.",
    icon: <FaChartLine className="text-2xl" />,
  },
  {
    title: "Location Assessment",
    description: "Engage, inform, and convert your audience with high-quality, relevant content.",
    icon: <MdLocationSearching className="text-2xl" />,
  },
  {
    title: "Interior Design",
    description: "From compelling logos and branding materials to eye-catching visuals that connect with your audience.",
    icon: <MdOutlineArchitecture className="text-2xl" />,
  },
  {
    title: "Kitchen Design & Tender",
    description: "Increase your brand’s visibility and drive organic traffic to your website with our cutting-edge SEO techniques.",
    icon: <GiCookingPot className="text-2xl" />,
  },
  {
    title: "Menu Engineering",
    description: "Achieve better ROI with integrated, cost-effective PPC campaigns customized to your goals.",
    icon: <MdMenuBook className="text-2xl" />,
  },
  {
    title: "HR Support",
    description: "Create a powerful online presence with a visually stunning, user-friendly website that drives conversions.",
    icon: <FaUserCog className="text-2xl" />,
  },
  {
    title: "OS & E Advice",
    description: "Expand your brand’s reach and boost engagement with a compelling social media presence.",
    icon: <MdInventory className="text-2xl" />,
  },
  {
    title: "Staff Training",
    description: "Engage, inform, and convert your audience with high-quality, relevant content.",
    icon: <FaChalkboardTeacher className="text-2xl" />,
  },
  {
    title: "Marketing Coordination",
    description: "From compelling logos and branding materials to eye-catching visuals that connect with your audience.",
    icon: <FaBullhorn className="text-2xl" />,
  },

  ];

  return (
    <section className="bg-white text-black py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            B2B Digital Marketing Solutions
            <br className="hidden md:block" /> Tailored for You
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#f5f5f7] text-black opacity-60 rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div>
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-black text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-black">{service.description}</p>
              </div>
              <button className="mt-6 bg-[#7D090F] text-white px-4 py-2 rounded-full text-sm font-semibold self-start">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
              Experience the magic of Buzz Digital Agency. Contact us to discuss your project.
            </h3>
            <p className="mb-6">
              At Dice Hospitality, we combine expert strategy with cutting-edge technology to deliver outstanding results. Our dedicated team excels in every facet of F&B.
            </p>
            <button className="bg-[#7D090F] text-white px-6 py-3 rounded-full font-semibold">
              Get Started
            </button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src="/images/team.webp"
              alt="Team discussion"
              className="rounded-xl w-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
