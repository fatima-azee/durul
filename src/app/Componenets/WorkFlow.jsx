"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WorkFlow() {
  const steps = [
    { title: "Get Started", icon: "📩", direction: "left" },
    { title: "Schedule a Call", icon: "📞", direction: "left" },
    { title: "Receive Your Proposal", icon: "📃", direction: "right" },
    { title: "Partnership Begins", icon: "🤝", direction: "right" },
  ];

  const projects = [
    {
      category: "Search Engine Optimization",
      client: "Investment Firm",
      date: "May 2023 – Nov 2023",
      budget: "$195,000",
      image: "/project1.jpg",
    },
    {
      category: "Web Design & Development",
      client: "Commercial Architect Firm",
      date: "May 2023 – Nov 2023",
      budget: "$300,000",
      image: "/project2.jpg",
    },
    {
      category: "Email Marketing",
      client: "Development Company",
      date: "July 2023 – Jan 2024",
      budget: "$280,000",
      image: "/project3.jpg",
    },
    {
      category: "Content Marketing",
      client: "Engineering Firm",
      date: "June 2023 – Dec 2023",
      budget: "$180,000",
      image: "/project4.jpg",
    },
    {
      category: "Email Marketing",
      client: "Real Estate",
      date: "Feb 2023 – Aug 2023",
      budget: "$230,000",
      image: "/project5.jpg",
    },
    {
      category: "Web Design & Development",
      client: "Commercial Construction",
      date: "April 2023 – Oct 2023",
      budget: "$175,000",
      image: "/project6.jpg",
    },
  ];

  return (
    <section className="bg-[#0E001F] text-white py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* 4-Step Process */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-sm text-pink-400 uppercase font-semibold mb-2">How it works</h3>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            Unlock Astonishing Results with Just 4 Simple Steps!
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center text-center space-y-4"
                initial={{ opacity: 0, x: step.direction === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <div className="text-4xl bg-pink-500 w-14 h-14 flex items-center justify-center rounded-full">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold">{step.title}</h4>
                <p className="text-sm text-gray-300">
                  {/* Shortened text for visual focus */}
                  {index === 0
                    ? "Begin your journey by sharing your project goals."
                    : index === 1
                    ? "We’ll schedule a consultation to plan strategy."
                    : index === 2
                    ? "Receive your custom proposal with clear steps."
                    : "We launch your project and deliver results."}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold">
              Navigating Digital Horizons with Buzz Digital Agency: Your Trusted Partner.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {[
              {
                title: "Timely and Transparent Communication",
                text:
                  "Buzz Digital Agency ensures clear, timely communication, keeping you confidently informed throughout your digital journey.",
                button: true,
                bg: "bg-purple-700/80",
              },
              {
                title: "Boost Traffic & Sales",
                text:
                  "Increase your online visibility and drive more sales with Buzz Digital Agency’s expert digital marketing strategies.",
                image: "/rocket-graphic.png",
                bg: "bg-[#1B0B32]",
              },
              {
                title: "Premium Support",
                text:
                  "Experience exceptional support with Buzz Digital Agency. Contact us for expert advice and real-time assistance.",
                button: true,
                buttonClass: "bg-white text-purple-700 hover:bg-gray-100",
                bg: "bg-gradient-to-br from-purple-500 to-pink-500",
              },
              {
                title: "4.8+",
                subtitle: "Client Ratings",
                text:
                  "Our commitment to client satisfaction is reflected in our high ratings. Join Buzz Digital Agency for superior results and service.",
                bg: "bg-black/30",
              },
              {
                title: "Responsive and Scalable Solutions",
                text:
                  "Our solutions are tailored to adapt and scale with your business needs, ensuring growth and success.",
                button: true,
                bg: "bg-white text-black",
              },
              {
                image: "/analytics-phones.png",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl ${item.bg || ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                {item.image ? (
                  <img src={item.image} alt="Visual" className="rounded-xl w-full" />
                ) : (
                  <>
                    <h4 className={`text-lg font-bold mb-2 ${item.title === "4.8+" ? "text-3xl" : ""}`}>
                      {item.title}
                    </h4>
                    {item.subtitle && <p className="text-sm">{item.subtitle}</p>}
                    <p className="text-sm mt-2">{item.text}</p>
                    {item.button && (
                      <button
                        className={`mt-4 px-4 py-2 rounded-full text-sm font-semibold ${
                          item.buttonClass || "bg-pink-500 hover:bg-pink-600"
                        }`}
                      >
                        Get Started
                      </button>
                    )}
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="text-center">
            <h3 className="text-sm text-pink-400 uppercase font-semibold mb-2">Featured Project</h3>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Unleashing the Power of Innovation and Creativity.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                className="bg-[#1B0B32] rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="h-48 overflow-hidden">
                  <img src={proj.image} alt={proj.client} className="w-full h-full object-cover grayscale" />
                </div>
                <div className="p-4">
                  <h5 className="text-xs text-pink-400 uppercase font-semibold mb-1">{proj.category}</h5>
                  <h4 className="text-lg font-bold mb-2">{proj.client}</h4>
                  <div className="text-sm text-gray-300 space-y-1">
                    <p><strong>Client:</strong> {proj.client}</p>
                    <p><strong>Date:</strong> {proj.date}</p>
                    <p><strong>Budget:</strong> {proj.budget}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
