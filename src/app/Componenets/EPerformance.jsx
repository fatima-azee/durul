"use client";

import React from "react";
import { motion } from "framer-motion";

export default function EPerformance() {
  return (
    <section className="relative bg-white text-black py-20 px-4 md:px-8 overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-center">
        {/* LEFT: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          {/* tiny gel bubbles */}
          <span className="pointer-events-none absolute -left-4 top-24 size-12 rounded-full border border-black/10 shadow-[0_2px_10px_rgba(0,0,0,.06)] bg-white/60 backdrop-blur-sm" />
          <span className="pointer-events-none absolute left-20 top-40 size-6 rounded-full border border-black/10 bg-white/60" />
          <span className="pointer-events-none absolute left-6 top-56 size-4 rounded-full border border-black/10 bg-white/60" />

          {/* label */}
          <p className="text-[12px] tracking-[0.22em] text-amber-600 mb-2">
            [ 01 ]
          </p>

          {/* heading */}
          <h2 className="text-4xl md:text-[44px] leading-tight font-semibold mb-6">
            Enhanced
            <br />
            Performance
          </h2>

          {/* description */}
          <p className="max-w-md text-[15px] leading-7 text-neutral-600">
            Our products deliver unparalleled performance, addressing a spectrum
            of concerns for both hair and skin types. From revitalizing damaged
            strands to rejuvenating tired complexions, we prioritize efficacy
            above all else.
          </p>
        </motion.div>

        {/* VERTICAL DIVIDER (center line like the mock) */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 inset-y-0 w-px bg-neutral-200" />

        {/* RIGHT: Image */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.05 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative"
        >
          <img
            src="/images/droplet.png"
            alt="Serum droplet above bottle"
            className="w-full h-[520px] md:h-[620px] object-cover rounded-xl md:rounded-none"
          />
          {/* soft edge fade to match the clean look */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-white/0 via-transparent to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
