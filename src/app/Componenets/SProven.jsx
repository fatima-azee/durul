"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SProven() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[80vh] overflow-hidden">
      {/* BG: soft bluish gradient (swap with your image if you want) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#9aa7b5] via-[#8e9aaa] to-[#7d8a9a]" />
      <div className="absolute inset-0 bg-white/5" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10 items-center text-white">
        {/* LEFT: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Scientifically Proven
            <br /> Ingredients
          </h2>
          <p className="mt-4 max-w-md text-white/80">
            Unlock the potential of our formulations with scientifically proven ingredients
          </p>

          <a
            href="#shop"
            className="inline-flex items-center justify-center mt-6 h-10 px-6 rounded-full border border-white/60 text-white/90 hover:bg-white hover:text-[#2b2f36] transition"
          >
            Shop
          </a>

          {/* Pagination dots like the mock */}
          <div className="mt-10 flex items-center gap-4 text-sm text-white/70">
            <span>01</span>
            <div className="flex items-center gap-2">
              <span className="h-px w-6 bg-white/40" />
              <span className="h-px w-6 bg-white/40" />
              <span className="h-px w-6 bg-white/40" />
              <span className="h-px w-6 bg-white/40" />
            </div>
            <span>04</span>
          </div>
        </motion.div>

        {/* CENTER: floating droplet accent (optional) */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="hidden md:flex md:col-span-1 justify-center"
        >
          <img
            src="/images/droplet.png"
            alt="Water droplet"
            className="w-20 h-20 object-contain opacity-90"
          />
        </motion.div>

        {/* RIGHT: Glass spec card with stacked borders */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="md:col-span-5 relative"
        >
          {/* stacked outline frame */}
          <div className="absolute -inset-3 rounded-lg border border-white/20 opacity-70" />
          <div className="absolute -inset-6 rounded-lg border border-white/10 opacity-70" />

          <div className="relative rounded-lg bg-white/10 backdrop-blur-sm border border-white/30 p-6 md:p-7">
            <p className="text-[11px] tracking-[0.22em] text-white/90 mb-4">
              [ HYALURONIC ACID ]
            </p>

            {/* simple schematic placeholder */}
            <svg
              className="w-full h-36 mb-6 text-white/85"
              viewBox="0 0 520 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 80 H80 L110 40 L150 120 L190 60 L240 100 L280 50 L330 110 L380 70 L430 100 L510 80" />
              <circle cx="80" cy="80" r="5" />
              <circle cx="110" cy="40" r="5" />
              <circle cx="150" cy="120" r="5" />
              <circle cx="190" cy="60" r="5" />
              <circle cx="240" cy="100" r="5" />
              <circle cx="280" cy="50" r="5" />
              <circle cx="330" cy="110" r="5" />
              <circle cx="380" cy="70" r="5" />
              <circle cx="430" cy="100" r="5" />
            </svg>

            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold leading-none">40%</span>
              <span className="text-sm text-white/80">
                Increase in skin hydration levels
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Subtle horizon sheen */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/20 to-transparent" />
    </section>
  );
}
