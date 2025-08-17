"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="hero-section"
      className="relative min-h-[92vh] bg-[#fdfcf9] text-[#1c1c1c] overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_40%,#f5f0e6_0%,#fdfcf9_60%,#fffdf7_100%)]" />

      {/* Huge background word */}
      <motion.h1
  initial={{ opacity: 0, y: 30, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="pointer-events-none select-none absolute z-0 w-full text-left font-extrabold tracking-tight
             text-[20vw] leading-none md:text-7xl pl-8 mt-50 
             bg-gradient-to-r from-[#6e4b1f] via-[#8b5e2c] to-[#c9973f] bg-clip-text text-transparent"
  aria-hidden="true"
>
  DURUL HAIR OIL
</motion.h1>


      {/* Content grid */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 pt-28 md:pt-32">
        <div className="grid grid-cols-1 md:grid-cols-12 items-center">
          {/* Left copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-5 max-w-md md:max-w-none"
          >
            <p className="uppercase text-[11px] tracking-[0.22em] text-[#5c5348] mb-5">
              We believe that hair care is not just a routine;
              it’s a journey towards confidence, vitality, and self-expression.
            </p>
          </motion.div>

          {/* Center floating product */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -8 }}
            animate={{ opacity: 1, y: 0, rotate: -12 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
            className="md:col-span-4 flex justify-center md:justify-center my-10 md:my-0"
          >
            <div className="relative">
              <div className="absolute -inset-10 blur-3xl bg-[#f5eedd]/40 rounded-full" />
              <Image
                src="/images/oil.png"
                alt="Durul Hair Oil"
                width={560}
                height={560}
                priority
                className="relative drop-shadow-[0_25px_40px_rgba(0,0,0,0.25)]"
              />
            </div>
          </motion.div>

          {/* Right CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-3 md:justify-self-end"
          >
            <div className="backdrop-blur-[2px] bg-white/80 border border-[#e6ddcf] rounded-2xl p-5 md:p-6 w-full md:w-[320px] shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-semibold leading-snug text-[#1c1c1c]">
                  Durul Hair Oil
                </h3>
                <a
                  href="#buy"
                  className="shrink-0 inline-flex items-center justify-center rounded-full border border-[#d6cbbd] px-4 py-2 text-sm font-semibold hover:bg-[#d6cbbd] hover:text-white transition"
                >
                  Buy Now
                </a>
              </div>

              <ul className="grid grid-cols-3 gap-3 text-[12px] text-[#6b6154]">
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
                  Sulfate free
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
                  Paraben free
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <span className="inline-block h-4 w-4 rounded-full border border-[#c4b7a5]" />
                  Silicone free
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom roll shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f0e9dc] to-transparent pointer-events-none" />
    </section>
  );
}
