"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative bg-[#fffdf7] text-[#1c1c1c] py-24 overflow-hidden">
      {/* subtle background circles */}
      <div className="pointer-events-none absolute -top-24 -left-40 h-[520px] w-[520px] rounded-full opacity-[0.08] bg-[radial-gradient(closest-side,rgba(0,0,0,0.35),transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 -right-40 h-[520px] w-[520px] rounded-full opacity-[0.06] bg-[radial-gradient(closest-side,rgba(0,0,0,0.35),transparent_70%)]" />

      {/* center vertical hairline */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center"
        >
          {/* bracketed label */}
          <p className="text-[11px] tracking-[0.22em] text-amber-600 mb-3">
            [ WHO WE ARE? ]
          </p>

          {/* main paragraph */}
          <h2 className="mx-auto max-w-3xl text-[22px] md:text-[28px] leading-[1.65] font-medium text-neutral-900">
            We are a team of skincare enthusiasts dedicated to crafting products
            that redefine beauty standards. Committed to innovation and quality,
            we blend science with nature to create skincare solutions that
            nourish and transform.
          </h2>

          {/* tiny caption */}
          <p className="mt-6 text-[10px] tracking-[0.22em] text-neutral-400 uppercase">
            Welcome to our skincare journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
